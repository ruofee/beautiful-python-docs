import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import windicss from 'vite-plugin-windicss'
import { r } from './utils'

export default defineConfig(() => {
  return {
    root: r('../src'),
    base: '/dist/',
    build: {
      watch: {},
      emptyOutDir: false,
      outDir: r('../extension/dist'),
      rollupOptions: {
        input: {
          background: r('../src/background/index.ts'),
          popup: r('../src/popup/index.html'),
          options: r('../src/options/index.html')
        },
        output: {
          entryFileNames: '[name]/index.js'
        }
      }
    },
    plugins: [vue(), windicss({ configFiles: [r('./windi.config.ts')] })]
  }
})
