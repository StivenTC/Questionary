import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      scenes: path.resolve(__dirname, './src/scenes'),
      utils: path.resolve(__dirname, './src/utils'),
      assets: path.resolve(__dirname, './src/assets'),
      sass: path.resolve(__dirname, './src/sass'),
      hooks: path.resolve(__dirname, './src/hooks'),
      logo: path.resolve(__dirname, './src/logo.svg'), // Specific alias for logo if imported absolutely
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
