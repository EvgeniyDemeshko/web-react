import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./src"),
    },
  },
  server:{
    proxy:{
      '/echo': {
        target: 'https://postman-echo.com',
        changeOrigin: true,
        secure: true,
        rewrite: (p) => p.replace(/^\/echo/, '')
      }
    }
  }
})
