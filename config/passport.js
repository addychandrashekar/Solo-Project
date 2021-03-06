require('dotenv').config();
GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose');
const User = require('../server/models/userModelGoogle')

function googleAuth(passport) {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/api/auth/google/callback',
    }, 
    async(accessToken, refreshToken, profile, done) => {
        const newUser = {
            googleId: profile.id,
    
            displayName: profile.displayName,
        
            image: profile.photos[0].value,
        }

        try {
            let user = await User.findOne({googleId: profile.id})

            if (user) {
                done(null, user)
            } else {
                user = await User.create(newUser)
                done(null, user)
            }
        } catch(err) {
            console.log(err);
        }
    }))
    
    passport.serializeUser((user, done) => {
        done(null, user.id);
    })

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => done(err, user))
    })
}

module.exports = googleAuth;