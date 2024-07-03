const express  = require('express');
const {signIn , signUp, signOut, google,sendOtp,verifyOtp} = require('../controllers/auth.controllers.js');
const {profileController, ngoProfileController, userProfile, ngoProfile} = require('../controllers/profile.controller.js')
const router = express.Router();

router.post('/sign-up',signUp);
router.get('/signout',signOut);
router.post('/sign-in',signIn);
router.post('/google',google);
router.post('/send-otp',sendOtp);
router.post('/verify-otp',verifyOtp)
router.post('/profile',profileController);
router.post('/profile/ngo',ngoProfileController);
router.get('/profile/ngo/:id',ngoProfile);
router.get('/profile/:id',userProfile);
module.exports = router;
