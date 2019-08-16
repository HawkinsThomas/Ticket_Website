const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mysql = require('mysql');
const mariadb = require('mariadb');
const path = require('path');
const crypto = require('crypto');
require('dotenv').config();

const app = express();


const { getHomePage } = require('./routes/home');
const { getAllUsers } = require('./routes/allUsers');
const { authenticate } = require('./middleware/authentication');
const { login } = require('./routes/login');
const { register } = require('./routes/register');

const dist = path.resolve('dist');

// create connection to database
// the mysql.createConnection function takes in a configuration
// object which contains host, user, password and the database name.


if (process.env.MARIADB === 'TRUE') {
  const mdb = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  };
  console.log(mdb);
  mariadb.createConnection(mdb)
    .then((db) => {
      console.log('Connected to database');
      global.db = db;
    })
    .catch((err) => {
      console.log(err);
    });
} else {
  const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });

  // connect to database
  db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('Connected to database');
  });
  global.db = db;
}

// configure middleware
app.set('port', process.env.HTTP_PORT); // set express to use this port
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie:
  {
    secure: false,
    maxAge: 7200000,
    httpOnly: true,
  },
}));

app.use(express.static(dist));
app.use(authenticate);

// routes for the app

app.get('/', getHomePage);
app.get('/allUsers', getAllUsers);
app.post('/login', login);
app.post('/register', register);

// set the app to listen on the port
app.listen(process.env.HTTP_PORT, () => {
  console.log(`Server running on port: ${process.env.HTTP_PORT}`);
});
