import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  // resolve: { conditions: ['module', 'jsnext:main', 'jsnext', 'require'] },
  plugins: [vue()],
  build: {
    outDir: 'docs',
    sourcemap: false
  },
  server: {
    port: 8080
  }
}
)
