import { defineConfig } from 'vite';
import sassPlugin from 'vite-plugin-sass';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
   
    sassPlugin(),
    react(),
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
