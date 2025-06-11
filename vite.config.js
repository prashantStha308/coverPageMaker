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
    allowedHosts: ['dc25-2400-1a00-bd11-c90f-bf-3bca-2a0e-e7f3.ngrok-free.app']
  }
})
