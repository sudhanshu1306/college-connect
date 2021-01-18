import express from "express";
import User from "../models/signup.js";

export const getSearch=(req,res)=>{
  User.find({},(err,users)=>{
    res.json({
      success:true,
      message:"Welcome to search section",
      users:users
    });
  });
}

export const postSearch=(req,res)=>{
  User.findById(req.body.id,(err,foundUser)=>{
    res.json({
      success:true,
      message:"successfully searched the user",
      user:foundUser
    });
  });
}
