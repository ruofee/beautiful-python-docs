import { createApp as createVueApp, App } from 'vue'
import Component from './index.vue'
import 'github-markdown-css'

const appId = 'beautiful-doc'
let app: App<Element>

function createApp() {
  const app = document.createElement('div')
  app.id = appId
  return app
}

function createLink() {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'https://at.alicdn.com/t/font_3385054_oooydkog3nt.css'
  return link
}

function startApp() {
  if (typeof app !== 'undefined') {
    return
  }
  app = createVueApp(Component)
  app.mount(`#${appId}`)
}

function insertToPage(element: HTMLElement) {
  document.body.appendChild(element)
}

function main() {
  insertToPage(createLink())
  insertToPage(createApp())
  startApp()
}

main()
