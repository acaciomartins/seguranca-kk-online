
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import react from '@vitejs/plugin-react'

export default async () => {
  const { componentTagger } = await import('lovable-tagger')

  return defineConfig({
    plugins: [react()],
    server: {
      port: 8080
    }
  })
}
