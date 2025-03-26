import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: 'src', // Set 'src' as the project root
  build: {
    outDir: '../dist', // Output files in 'dist' at the project root
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
        
      }
    }
  },
  publicDir: '../public', // Ensure static assets from 'public' are included in build
});
