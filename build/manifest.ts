import { writeJSON } from 'fs-extra'
import p from '../package.json'
import { log, r } from './utils'

export default async function writeManifest() {
  const manifest = {
    name: p.name,
    description: p.description,
    version: p.version,
    manifest_version: 3,
    action: {
      default_popup: 'dist/popup/index.html'
    },
    options_page: 'dist/options/index.html',
    background: {
      service_worker: 'dist/background/index.js'
    },
    content_scripts: [
      {
        matches: ['https://*.python.org/*'],
        js: ['dist/content/index.js'],
        css: ['dist/content/style.css']
      }
    ],
    permissions: [],
    icons: {
      '16': 'assets/logo.png',
      '32': 'assets/logo.png',
      '48': 'assets/logo.png',
      '128': 'assets/logo.png'
    }
  }
  await writeJSON(r('../extension/manifest.json'), manifest, { spaces: 2 })
  log('PRE', '生成 manifest.json')
}

writeManifest()
