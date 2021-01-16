import express from "express";
import User from "../models/signup.js";

var user=[];
export const getNotification=(req,res)=>{
  User.findOne({email:req.session.passport.user},(err,foundUser)=>{
    user=foundUser;
    res.json({
      success:true,
      message:"Notification section",
      notification:user.notification
    });
  });

}

export const getActivity=(req,res)=>{
  res.json({
    success:true,
    message:"Activity section",
    activity:user.activity
  });
}
