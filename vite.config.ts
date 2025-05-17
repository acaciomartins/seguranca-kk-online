
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  server: {
    host: "::",
    port: 8080
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  esbuild: {
    supported: {
      'import-meta': true
    }
  }
}));

async function componentTagger() {
  const { componentTagger } = await import('lovable-tagger');
  return componentTagger();
}
