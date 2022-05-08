import { execSync } from 'child_process'
import chokidar from 'chokidar'
import { r, log, isProduction } from './utils'

function run() {
  execSync('npx esno ./build/manifest.ts', { stdio: 'inherit' })
}

function main() {
  run()
  if (!isProduction) {
    chokidar.watch([r('./manifest.ts'), r('../package.json')]).on('change', () => {
      log('REFRESH', '重新生成 manifest.json')
      run()
    })
  }
}

main()
