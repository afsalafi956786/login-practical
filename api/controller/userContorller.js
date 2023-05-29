import userModel from "../model/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { secretKey } from "../constants/constant.js";

export async function userSignup(req,res){
    try{
      const obj=req.body;
      if(obj.name && obj.email && obj.password){
        let existEmail=await userModel.findOne({email:obj.email});
        if(existEmail){
            res.json({status:'failed','message':'This email is Already taken!!'})
        }else{
            obj.password=await bcrypt.hash(obj.password,10);
            await userModel.create({
                name:obj.name,
                email:obj.email,
                password:obj.password
            })

            let userInfo=await userModel.findOne({email:obj.email})
            let userId=userInfo._id;
          let token= jwt.sign({userId},secretKey,{expiresIn:'2h'}) 
          res.json({status:'success','message':'signup success',token})
        }

      }else{
        res.json({status:'failed',message:'All fields are required!!'})
      }


    }catch(error){
        console.log(error.message);
    }
}
