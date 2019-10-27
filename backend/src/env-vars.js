const { cleanEnv, num } = require('envalid');
const logger = require('./logger');

const env = cleanEnv(process.env, {
  PORT: num({ default: 4040 }),
});

logger.info('Required environment variables are present');

module.exports = env;
