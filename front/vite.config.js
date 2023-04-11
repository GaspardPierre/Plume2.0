import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import viteSass from 'vite-plugin-sass';

export default defineConfig({
  plugins: [reactRefresh(), viteSass()],
});
