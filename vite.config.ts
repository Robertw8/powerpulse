import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/fitness-app-frontend/',
  plugins: [react()],
});
