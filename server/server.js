const path = require('path');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config( {path: './config/config.env'})

const signupRouter = require('./routes/signup');
const apiRouter = require('./routes/api');
const loginRouter = require('./routes/login')
const authRouter = require('./routes/auth');

const { default: mongoose } = require('mongoose');
const passport = require('passport');
const expressSession = require('express-session');

const app = express();
const PORT = 3000;

const mongoURI = 'mongodb+srv://addy_c03:866030AC@healthbook.it9t1cd.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoURI);

app.use(express.json());

//Express Sessions

app.use(expressSession({
  secret: "google auth",
  resave: false,
  saveUninitialized: false,
  })
)

//Passport Config
require('../config/passport')(passport)

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/auth', authRouter);

app.use('/api/signup/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/signup/style.css'));
})

app.get('/api/signup/signup.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/signup/signup.js'));
})

app.get('/api/signup', (req, res) => {
  // app.use(express.static(path.join(__dirname, '../client/signup')))
  res.sendFile(path.join(__dirname, '../client/signup/signup.html'));
});

app.use('/api/signup', signupRouter)
app.use('/api/login', loginRouter)

app.use('/api', apiRouter)


app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../index.html'));
})

app.use('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../style.css'));
})


app.use(((req, res) => res.status(410).send("Error")));

app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

app.listen(PORT, () => {
    console.log('Connected to port: ', PORT);
});

module.exports = app;