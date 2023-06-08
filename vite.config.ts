import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        about: resolve(root, 'about', 'index.html'),
        "product-list": resolve(root, 'product-list','index.html'),
        "product-details": resolve(root, 'product-detail', 'index.html'),
        "sign-in": resolve(root, 'sign-in', 'index.html'),
        "sign-up": resolve(root, 'sign-up', 'index.html'),
        "shopping-card":resolve(root, 'shopping-card', 'index.html')
      }
    }
  }
})