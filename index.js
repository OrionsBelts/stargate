'use strict';

require('dotenv').config();

const express = require('express');
const pino = require('express-pino-logger');

const logger = require('pino')({
  level: process.env.LOG_LEVEL || 'info',
});

const app = express();

app.use(pino);

const { APP_PORT, } = process.env;

if (!APP_PORT) {
  logger.error('missing.environment:app_port');
}

app.listen(APP_PORT, () => {
  logger.info(`Stargate Listening on port: ${APP_PORT}`);
});
