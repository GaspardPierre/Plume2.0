import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import sassPlugin from 'vite-plugin-sass';

export default defineConfig({
  plugins: [
    reactRefresh(),
    sassPlugin(),
  ],
  resolve: {
    alias: {
      $node: './node_modules',
    },
  },
});
