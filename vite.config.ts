import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import EnvironmentPlugin from 'vite-plugin-environment';
import { babel } from '@rollup/plugin-babel';
import svgr from '@svgr/rollup';
import * as path from 'path';

const pathEnv = path.join(path.dirname(__filename), './.env');

// https://vitejs.dev/config/
export default defineConfig({
  // envPrefix: 'EASY_',
  envDir: pathEnv,
  plugins: [
    react(),
    svgr(),
    EnvironmentPlugin('all', { prefix: 'EASY_' }),
    babel({
      babelHelpers: 'bundled'
    }),
    legacy({
      targets: ['defaults', 'ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ]
});
