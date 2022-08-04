// import User from "../database/userModel.js"
import express from "express";
import mongoose  from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from "../models/chatModel.js";

const register=async(req,res)=>{

    const{fname,lname,email,password}=req.body
    try{
        let user =await User.findOne({email});
      if(user){
          return res.status(400).json({error : 'User already Exist'});
      }
      const hashed_pass=await bcrypt.hash(password, 10);
    user=new User({
        fname:fname,
        lname:lname,

        email:email,

        password:hashed_pass

    })
  
   await user.save()
   return res.status(201).json({ message : "User Created"})

}
catch(err){
    console.log(err.message);
}
}
const login =async(req,res)=>{
    const {email, password}=req.body
    try{
        let user=await User.findOne({email});
        if(!user){
           return res.status(400).json({error : 'User not Exist'});
        }
        const isMatch= await bcrypt.compare(password, user.password)
        if(!isMatch){
        return res.status(400).json({error : 'Wrong Password'});}
        const token=jwt.sign({_id: user._id}, process.env.JWT_SECRET,{expiresIn:"30d"});

        return res.send({user,token});
    }catch(err){
        console.log(err.message);
    }
};

export default {register,login}