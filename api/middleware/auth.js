import jwt from 'jsonwebtoken';
import { secretKey } from '../constants/constant.js';



export function userAuthentication(req,res,next){
    try{
        let token=req.headers['usertoken'];
        if(token){
            jwt.verify(token,secretKey,(err,decoded)=>{
                if(err){
                    res.json({status:'failed','message':'user not authenticate'})
                }else{ 
                    req.userId=decoded.userId;
                      next()
                }
            })
        }else{
            res.json({'status':'failed','message':"usernot finded"})
        }

    }catch(error){
        console.log(error.message);
    }
}