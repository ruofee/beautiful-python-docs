import { exec } from 'child_process'
import { log, r } from './utils'

log('PACK', '开始压缩插件')
exec(`zip -r extension.zip ${r(__dirname, '../extension')}`, (err) => {
  if (err) {
    log('PACK', '压缩失败')
    return
  }
  log('PACK', '压缩完成')
})
