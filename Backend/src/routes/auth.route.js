import { Router } from "express";
import axios from 'axios';
import config from '../config/config.js';
import querystring from 'querystring';
import userModel from "../models/user.model.js";
const router = Router();


router.get('/google/callback', async (req, res) => {
    const { code } = req.query;

    if (!code) {
        return res.status(400).json({ error: 'Authorization code is missing' });
    }

    try {
        // Exchange the authorization code for tokens - using proper URL and form-encoded data
        const tokenEndpoint = 'https://oauth2.googleapis.com/token';
        const tokenRequestData = {
            code,
            client_id: config.GOOGLE_CLIENT_ID,
            client_secret: config.GOOGLE_CLIENT_SECRET,
            redirect_uri: "postmessage",
            grant_type: 'authorization_code'
        };

        console.log('Making token request to Google with redirect_uri:', config.GOOGLE_REDIRECT_URI);

        const tokenResponse = await axios.post(
            tokenEndpoint,
            querystring.stringify(tokenRequestData),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        );

        const { access_token, refresh_token, id_token } = tokenResponse.data;

        // Rest of your code remains the same
        const profileResponse = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
            headers: { Authorization: `Bearer ${access_token}` }
        });

        const userProfile = profileResponse.data;

     const isUserExists = await userModel.findOne({email :userProfile.email})
   
     if(isUserExists){
        isUserExists.refreshToken = refresh_token || isUserExists.refreshToken;
        await isUserExists.save();
        return res.status(200).json({
           message:'Authorization is successfull', profile:userProfile
        })
     }

      const newUser = await userModel.create({name:userProfile.name, email:userProfile.email , refreshToken:refresh_token})
        res.status(200).json({
            message: 'Authentication successful',
            tokens: { access_token, refresh_token },
            profile: userProfile
        });
    } catch (error) {
        console.error('OAuth error details:', error.response?.data || error.message);
        if (error.response?.config) {
            console.error('Request URL:', error.response.config.url);
            console.error('Request method:', error.response.config.method);
            // Don't log the full headers/data as they may contain sensitive info
        }
        res.status(500).json({ error: 'Authentication failed' });
    }
});

export default router;