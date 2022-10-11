import {config} from 'dotenv';
import replace from '@rollup/plugin-replace';

const production = !process.env.ROLLUP_WATCH;

export default {
  plugins: [
    replace({
      // stringify the object       
      CURSED_ENV: JSON.stringify({
        env: {
          production: production,
          ...config().parsed // attached the .env config
        }
      }),
    }),
  ],
};