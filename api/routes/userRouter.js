import express from 'express';
const router=express.Router();
import {userSignup} from '../controller/userContorller.js'



router.post('/signup',userSignup)

export default router;