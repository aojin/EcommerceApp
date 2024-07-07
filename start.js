/* eslint-disable @typescript-eslint/no-var-requires */
const { loadEnvConfig } = require('@expo/webpack-config/env');
const { resolve } = require('path');

loadEnvConfig(resolve(__dirname, '..'));
/* eslint-enable @typescript-eslint/no-var-requires */
