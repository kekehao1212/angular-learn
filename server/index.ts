import { join } from 'path';
import { readFileSync } from 'fs';

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as jsonServer from 'json-server';
import { verify, sign } from 'jsonwebtoken';

const server = jsonServer.create();
const SECRET_KEY = '123456';
const EXPRIES = '1h';

server.use(jsonServer.defaults());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const PORT = process.env.PORT || 4201;
const DB = JSON.parse(readFileSync(join(__dirname, 'db.json'), 'UTF-8'));

const AUTH_ROUTER = express.Router();
const API_ROUTER = express.Router();
const JSON_SERVER_ROUTER = jsonServer.router(DB);

AUTH_ROUTER.post('/login', (req, res) => {
  const { username, password } = req.body;
  const expiresIn = req.query.expiresIn;

  if (!isAuthenticated({ username, password })) {
    const status = 401;
    res.status(status).json({ status, message: 'Incorrect emain or password'});
    return;
  }
  const accessToken = sign({ username, password }, SECRET_KEY, { expriesIn: expiresIn || EXPIRES_IN });
  res.status(200).json({ accessToken });
});

server.use('/auth', AUTH_ROUTER);
server.use('/api', API_ROUTER);

server.listen(PORT, () => {
  console.log(`REST API running on localhost:${PORT}...`);
});

function isAuthenticated({ username, password }) {
  return DB.users.findIndex(user => user.username === username && user.password === password);
}
