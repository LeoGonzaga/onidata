import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@components', replacement: '/src/components' },
      { find: '@screens', replacement: '/src/screens' },
      { find: '@store', replacement: '/src/store' },
      { find: '@services', replacement: '/src/services' },
      { find: '@hooks', replacement: '/src/hooks' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@customTypes', replacement: '/src/customTypes' },
    ],
  },
});
