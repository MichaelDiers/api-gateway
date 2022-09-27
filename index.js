const express = require('express');
require('dotenv').config();
const addProxis = require('./proxies/index');

const app = express();

addProxis.forEach((addProxy) => addProxy({ app }));

app.listen(process.env.PORT);
