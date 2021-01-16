import express from "express";
import User from "../models/signup.js";
import Post from "../models/post.js";

export const getProfile=(req,res)=>{
  User.findOne({email:req.session.passport.user},(err,foundUser)=>{
    if(err)
    console.log(err);
    else{
      Post.find({
        '_id':{$in:foundUser.post}
      },
      function(err,posts){
        if(err)
        console.log(err);
        else{
        // console.log(posts);
        // res.render("profile",{user:foundUser,posts:posts});
        posts.sort((a,b)=>{
          var keyA=new Date(a.time);
          var keyB=new Date(b.time);
          if(keyA<keyB) return +1;
          if(keyA>keyB) return -1;
          return 0;
        });
        res.json({
          success:true,
          message:"Welcome to profile section",
          user:foundUser,
          posts:posts
        });
      }
      });
    }
  });
}
