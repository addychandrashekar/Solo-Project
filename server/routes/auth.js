const express = require('express');
const router = express.Router();

const passport = require('passport')

//Auth with google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

//Get callback

router.get('/google/callback', passport.authenticate('google', { failureDirect: '/'}), (req, res) => {
    res.status(200).send("AUTH WORKED OMGMMGGGGG");
})

module.exports = router;