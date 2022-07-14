const express = require('express');

const router = express.Router();

const signupRouter = require('./signup')
const userController = require('../controllers/userController')

router.use('/signup', signupRouter)


router.post('/', userController.verifyUser, (req, res) => {
    res.status(200).send("HI");
});


module.exports = router;