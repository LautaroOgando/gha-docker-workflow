require('dotenv').config();
const express = require('express');


const app = express();
const port = 3001;

const VALID_USERNAME = process.env.BASIC_AUTH_USERNAME;
const VALID_PASSWORD = process.env.BASIC_AUTH_PASSWORD;
const SECRET_MESSAGE = process.env.BASIC_SECRET_MESSAGE;

const basicAuth = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {

        res.set('WWW-Authenticate', 'Basic realm="Área Protegida"');
        return res.status(401).send('Access denied. No credentials provided.');
    }

    const auth = Buffer.from(authHeader.split(' ')[1], 'base64').toString();
    console.log(auth);
    const [username, password] = auth.split(':');
    console.log(`Username: ${username}, Password: ${password}`); 

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        next();
    } else {
        res.set('WWW-Authenticate', 'Basic realm="Área Protegida"');
        return res.status(401).send('Access denied. Invalid credentials.');
    }
};

app.get('/', (req, res) => {
  res.send('Hello from Express.js!');
});

app.get('/secret', basicAuth, (req, res) => {
  res.send(SECRET_MESSAGE);
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});