import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const config = {
    base: '/',
    plugins: [
      react(),
      tsconfigPaths()
    ],
    resolve: {
      alias: [{ find: '@', replacement: '/src' }],
    },
  };

  if (mode !== 'development') {
    config.base = '/portfolio/';
  }


  return config;
});
