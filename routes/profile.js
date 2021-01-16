import express from "express";
import {isAuthenticated} from "../controllers/registration.js";
import {getProfile} from "../controllers/profile.js";

const router=express.Router();

router.get("/",isAuthenticated,getProfile);

export default router;
