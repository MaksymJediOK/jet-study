import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components',
      UI: '/src/UI',
      types: '/src/types',
      features: '/src/features',
      hooks: '/src/hooks',
      services: '/src/services',
      store: '/src/store',
      utils: '/src/utils',
    },
  },
})
