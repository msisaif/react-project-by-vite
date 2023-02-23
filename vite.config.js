import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "react",
  plugins: [react()],
  build: {
    emptyOutDir: true,
    outDir: '../../frontend-build-apps/react-frontend-build-app/public',
  },
})
