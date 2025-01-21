const User = require('../models/user')

async function handleAdminUrls(req, res, next) {

        try {

            const role = 'Admin';
            const id = req.params.id;
            const user = await User.findOne({ id });

            if (!user) {
                return res.status(401).send("UnAuthorized Access");
            }

            if (role !== user.roles) {
                return res.status(401).send("UnAuthorized Access");
            }

            next();


        }

        catch(error)
        {
            res.status(500).json({error:"Internal server error"});
        }
}

module.exports={handleAdminUrls}