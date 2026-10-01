import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    define: {
      'process.env.APP_SECURE_ENDPOINT': JSON.stringify(env.APP_SECURE_ENDPOINT)
    },
    build: {
      minify: 'esbuild',
      chunkSizeWarningLimit: 600
    }
  };
});