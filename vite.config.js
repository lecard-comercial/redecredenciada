import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/redecredenciada/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 30000,
  },
})
