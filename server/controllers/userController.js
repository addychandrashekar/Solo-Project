const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const userController = {};

userController.createUser = async (req, res, next) => {
    console.log(req.body);

    const {username, password} = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    User.create({username: username, password: hashedPassword})
    .then(data => {
        console.log(data)
        res.locals.newUser = data;
        return next();
    })
    .catch(err => {
       return next({
            log: 'Express error handler caught error in UserController.createUser: ' + err,
            status: 400,
            message: { err: 'An error occurred in the userController.createUser, check logs for details' }
        })
    })
}

userController.verifyUser = async (req, res, next) => {
    console.log(req.body)

    const {username, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10)

    console.log(password, hashedPassword)

    User.find({username: username, password: hashedPassword}, (err, users) => {
        if (err) {
            return next({
                log: 'Express error handler caught error in UserController.verifyUser: ' + err,
                status: 400,
                message: { err: 'You do not have an account, please create one.' }
            })
        }
        
        return next();
    })
}

module.exports = userController;