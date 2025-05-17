import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default async () => {
  const { componentTagger } = await import('lovable-tagger')

  return defineConfig({
    plugins: [vue(), componentTagger()],
  })
}

