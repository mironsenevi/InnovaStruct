import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
<<<<<<< Updated upstream:frontend/vite-project/vite.config.js
  plugins: [
    react(),
    tailwindcss(),
  ],
})
=======
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
>>>>>>> Stashed changes:frontend/vite-project2/vite.config.js
