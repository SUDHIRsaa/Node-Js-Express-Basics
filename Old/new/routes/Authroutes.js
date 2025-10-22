const express=require('express');
const router=express.Router();
const {login}=require('../controller/LoginController');
const signupcontroller=require('../controller/SignupController');
const {getAllUsers}=require('../controller/Allusers');

router.get('/all',getAllUsers);



router.post('/login',login);
router.post('/signup',signupcontroller.signup);
module.exports=router;