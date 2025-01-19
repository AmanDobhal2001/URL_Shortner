import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy root path requests to the backend server
      '/api': {
        target: 'http://localhost:5000',  // Backend server URL
        changeOrigin: true,               // Ensures correct header handling
        rewrite: (path) => path.replace(/^\/api/, ''),  // Optional path rewrite
      },
    },
  },
})