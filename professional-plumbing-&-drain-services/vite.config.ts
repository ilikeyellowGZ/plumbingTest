import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const devPort = Number(env.VITE_DEV_PORT || env.PORT || 5179);
    const previewPort = Number(env.VITE_PREVIEW_PORT || 4279);

    return {
      server: {
        port: devPort,
        strictPort: true,
        host: '0.0.0.0',
      },
      preview: {
        port: previewPort,
        strictPort: true,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
