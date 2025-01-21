const User = require('../models/user.js');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');

async function handleSignup(req, res) {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }

    const {id, name, email, password } = req.body;
    const user =await User.findOne({ email });

    if (user) {
        return res.status(400).json({ error: "User already exists" })
    }

    const salt = await bcrypt.genSalt(10);

    const secpass = await bcrypt.hash(password, salt);

    try {
        const NewUser = await User.create({
            id:id,
            name: name,
            email: email,
            password: secpass

        })

        res.status(200).json({message:"User created successfully"});
    }

    catch(error)
    {
        res.status(400).json({error});
    }


}

module.exports = { handleSignup }