import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import config from "../config/config.js";
import userService from "../services/user.service.js";



passport.use(new Strategy({
    clientID: config.GOOGLE_CLIENT_ID,
    clientSecret: config.GOOGLE_CLIENT_SECRET,
    callbackURL: config.GOOGLE_REDIRECT_URI,
}, (accessToken, refreshToken, profile, done) => {
    
userService.createUser()

}))