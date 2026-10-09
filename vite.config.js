import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match the GitHub Pages repo name: shivamjisorya.github.io/Portfolio/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
})
