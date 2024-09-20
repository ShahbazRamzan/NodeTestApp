const express=require('express');
const {isAuthenticatedAdmin} = require('../middleware/auth');
const { registeraboutUs, updateaboutUsStore, updateaboutUsUser, getSingleaboutUsStoreDetail, getSingleaboutUsUserDetail } = require('../controllers/aboutUsController');

const router=express.Router();

router.post('/register',isAuthenticatedAdmin,registeraboutUs);


router.post('/update/store',isAuthenticatedAdmin,updateaboutUsStore)
router.post('/update/user',isAuthenticatedAdmin,updateaboutUsUser)

router.get('/store',isAuthenticatedAdmin,getSingleaboutUsStoreDetail)
router.get('/user',isAuthenticatedAdmin,getSingleaboutUsUserDetail)


module.exports=router;