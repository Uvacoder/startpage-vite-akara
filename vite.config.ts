import {defineConfig} from 'vite';
import preact from '@preact/preset-vite';
import {resolve as resolveFn} from 'path';

const resolve = (path: string = '') => {
  return resolveFn(__dirname, 'src', path);
};

export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: {
      '@': resolve(),
      component: resolve('component'),
      assets: resolve('assets'),
    },
  },
});
