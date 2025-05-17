
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default async () => {
  const { componentTagger } = await import('lovable-tagger')

  return defineConfig({
    plugins: [react()],
    server: {
      port: 8080
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
    esbuild: {
      supported: {
        // Support modern JavaScript features
        'import-meta': true
      }
    }
  })
}
