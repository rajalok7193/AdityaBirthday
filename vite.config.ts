import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// base './' works on Cloudflare Pages root domains and subpaths.
export default defineConfig({ base: './', plugins: [react()] })
