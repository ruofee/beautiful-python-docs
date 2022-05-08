import { defineConfig } from 'windicss/helpers'
import { r } from './utils'

export default defineConfig({
  attributify: {
    prefix: 'w'
  },
  extract: {
    include: [r('../src/**/*.{vue,html}')]
  }
})
