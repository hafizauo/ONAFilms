import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ONA-Films/',  // ✅ Fixes missing assets issue by using relative paths
  build: {
    outDir: 'ONA-Films',  // Ensure correct build directory
  },
})
