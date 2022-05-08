import { resolve } from 'path'

export function r(...paths: string[]) {
  return resolve(__dirname, ...paths)
}

export function log(msg: string): void
export function log(name: string, msg: string): void
export function log(name: string, msg?: string): void {
  console.log(msg ? `[${name}] ${msg}` : name)
}

export const port = 3000

export const isProduction = process.env.NODE_ENV === 'production'
