const express=require('express');
const router=express.Router();
const { body, validationResult } = require('express-validator');
const {handleCreateShortID,handleRedirectURL, handleShowClicks}=require('../controllers/url.js');
const {handleLogin}=require('../controllers/login.js');
const {handleSignup}=require('../controllers/signup.js')

router.route('/login').post([
    body('email', "Enter a valid email").isEmail(),
    body('password', "Password must be at least 5 characters long").isLength({ min: 5 })
    ],handleLogin);

router.route('/signup').post([body('name', "Name must be 4 letters long").isLength({ min: 4 }),
    body('email', "Enter a valid email").isEmail(),
    body('password', "Password must be at least 5 characters long").isLength({ min: 5 })
    ],handleSignup)

router.route('/').post(handleCreateShortID);

router.route('/:shortId').get(handleRedirectURL);

router.route('/showClicks/:shortId').get(handleShowClicks);

module.exports=router;