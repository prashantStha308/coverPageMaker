import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server:{
    allowedHosts: ['031f-2400-1a00-bd11-c467-fab5-5c0-b2c5-61e1.ngrok-free.app']
  }
})
