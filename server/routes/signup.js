const express = require('express');
const path = require('path');
const router = express.Router();
const app = express();

const userController = require('../controllers/userController')

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

router.post('/', userController.createUser, (req, res) => {
    res.send('/');
});

module.exports = router;