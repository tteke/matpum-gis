import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import apiRoutes from "vite-plugin-api-routes"
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), apiRoutes({}), tailwindcss()],
})
