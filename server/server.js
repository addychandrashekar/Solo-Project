const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
})

app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../style.css'));
})

app.listen(PORT, () => {
    console.log('Connected to port: ', PORT);
});