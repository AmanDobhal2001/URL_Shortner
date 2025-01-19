const express=require('express');
const router=express.Router();
const {handleCreateShortID,handleRedirectURL, handleShowClicks}=require('../controllers/url.js');

router.route('/').post(handleCreateShortID);

router.route('/:shortId').get(handleRedirectURL);

router.route('/showClicks/:shortId').get(handleShowClicks);

module.exports=router;