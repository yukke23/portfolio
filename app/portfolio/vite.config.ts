import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  
  // ホストからアクセスできるように設定する
  // WSL2上の開発環境でホットリロードが効くようにする
  server: {
    host: true,
    watch: {
      usePolling: true
    }
  },

  plugins: [vue()],
})
