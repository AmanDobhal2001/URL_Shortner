const shortid=require('shortid');
const URL=require('../models/url.js');

async function handleShowAllUsers(req,res){

    try{
        const user=await URL.find({});
        
        if(user.length==0)
        {
            return res.status(400).json({error:"No data found!"});
        }

        return res.status(200).json({user});
    }

    catch(error)
    {
        return res.status(500).json({error:"Internal server error"});
    }


}

async function handleCreateShortID(req,res){

    try{
        const body=req.body;
        if(!body.url)
        {
            return res.status(404).json({error:"URL is required"})
        }

        const shortId=shortid();
        console.log(shortId);

        await URL.create({
            shortId:shortId,
            redirectURL:body.url,
            visitHistory:[]
        })

        res.status(201).json({shortId});
    }

    catch(error)
    {
        console.log(error);
        res.status(500).json({error:"Internal server error"});
    }
}

async function handleRedirectURL(req,res){

    try{
        const shortId=req.params.shortId;
    
        const data=await URL.findOneAndUpdate({shortId},{$push:{visitHistory:{timestamp:Date.now()}}});

        if(!data)
        {
           return res.status(400).json({error:"No data found!"});
        }

        res.redirect(data.redirectURL);
    }

    catch(error)
    {
        res.status(500).json({error:"Internal server error"});   
    }
}

async function handleShowClicks(req,res){

    try{
        const shortId=req.params.shortId;

        const data=await URL.findOne({shortId});

        if(!data)
        {
            return res.status(400).json({error:"No data found!"});
        }

        res.status(200).json({"Number of clicks":data.visitHistory.length});
    }

    catch(error)
    {
        res.status(500).json({error:"Internal server error"});   
    }
}

module.exports={handleCreateShortID,handleRedirectURL,handleShowClicks,handleShowAllUsers}