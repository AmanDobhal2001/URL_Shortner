const User = require('../models/user.js');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "AmanDobhal";

async function handleLogin(req, res) {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }

    const {email, password } = req.body;
    const user =await User.findOne({ email });

    if (!user) {
        return res.status(401).json({ error: "Invalid credentials" })
    }

    try {
        const compare=await bcrypt.compare(password,user.password);
        if(!compare)
        {
            return res.status(401).json({error:"Invalid credentials"});
        }

        const id=user.id;
        const token=jwt.sign(id,JWT_SECRET);

        res.status(200).json({token});
    }

    catch(error)
    {
        console.log(error);
        res.status(500).json({error:"Internal server error"});
    }


}

module.exports = { handleLogin }