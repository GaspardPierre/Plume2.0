import { defineConfig } from 'vite';
import sassPlugin from 'vite-plugin-sass';
import vitePluginReact from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
   
    sassPlugin(),
    vitePluginReact(),
  ],
  resolve: {
    alias: {
      $node: './node_modules',
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  server: {
    port: 5173,
  },
});
