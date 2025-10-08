// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: '0.0.0.0',
//   },
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Put all node_modules into a separate vendor chunk
          if (id.includes('node_modules')) {
            // Example: split each big lib into its own file
            if (id.includes('react')) return 'vendor-react'
            if (id.includes('lodash')) return 'vendor-lodash'
            if (id.includes('chart.js')) return 'vendor-chartjs'
            return 'vendor' // default vendor chunk
          }
        },
      },
    },
    // Optional: raise the warning limit so minor oversize doesn't show
    chunkSizeWarningLimit: 1000, // in KB
  },
})
