import { Router } from "express";
import passport from "passport";

const router =Router();
router.get('/google/callback' ,(req,res , next)=>{console.log(req) ; next()}, passport.authenticate('goggle' ,{
    session :false
}))


export default router;