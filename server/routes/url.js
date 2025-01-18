const express=require('express');
const router=express.Router();
const {handleCerateShortID,handleRedirectURL, handleShowClicks}=require('../controllers/url.js');

router.route('/').post(handleCerateShortID);

router.route('/:shortId').get(handleRedirectURL);

router.route('/showClicks/:shortId').get(handleShowClicks);

module.exports=router;