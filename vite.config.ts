import {defineConfig} from 'vite';
import preact from '@preact/preset-vite';
import {VitePWA} from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [preact(), VitePWA()],
});
