/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
    "@": path.resolve(__dirname, "./src"),
    "@components": path.resolve(__dirname, "./src/components"),
    "@pages": path.resolve(__dirname, "./src/pages"),
    "@features": path.resolve(__dirname, "./src/features"),
    "@assets": path.resolve(__dirname, "./src/assets"),
    "@services": path.resolve(__dirname, "./src/services"),
    "@utils": path.resolve(__dirname, "./src/utils"),
  },
},
  server:{
    port:3000
  }

})
