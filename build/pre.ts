import { execSync } from 'child_process'
import chokidar from 'chokidar'
import { r, log } from './utils'

function main() {
  execSync('npx esno ./build/manifest.ts', { stdio: 'inherit' })
  chokidar.watch([r('./manifest.ts'), r('../package.json')]).on('change', () => {
    log('REFRESH', '重新生成 manifest.json')
    execSync('npx esno ./build/manifest.ts', { stdio: 'inherit' })
  })
}

main()
