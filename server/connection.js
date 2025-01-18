const mongoose=require('mongoose');

async function handleConnection(url){

    try{
        await mongoose.connect(url);
        console.log("Connected to mongoDB");
    }

    catch(error){
        console.log("Not connected to mongoDB");
    }
}

module.exports={handleConnection}