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
      lib: {
        entry: r('../src/content/index.ts'),
        name: 'iife'
      },
      rollupOptions: {
        output: {
          dir: r('../extension/dist/content'),
          entryFileNames: '[name].js'
        }
      }
    },
    resolve: {
      // alias: {
      //   vue: 'vue/dist/vue.esm-bundler.js'
      // }
    },
    plugins: [vue(), windicss({ configFiles: [r('./windi.config.ts')] })]
  }
})
