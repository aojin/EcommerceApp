import 'dotenv/config';
import { execSync } from 'child_process';

// Set the environment variable for Webpack config
process.env.EXPO_WEBPACK_CONFIG = 'webpack.config.js';

// Start the Expo server
const expoCommand = 'npx @expo/cli start --web --clear';
execSync(expoCommand, { stdio: 'inherit' });
