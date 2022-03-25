import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import eslintPlugin from "@nabla/vite-plugin-eslint";
import { babel } from '@rollup/plugin-babel';
import svgr from '@svgr/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin(),
    svgr(),
    babel({
      babelHelpers: 'bundled'
    }),
    legacy({
      targets: ['defaults', 'ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ]
});
