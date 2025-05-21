import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ONA-Films/',  // ✅ Tells Vite where your app is hosted
  // ❌ Don't override outDir to 'ONA-Films'
})

