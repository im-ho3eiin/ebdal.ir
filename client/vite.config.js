import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/shop/', // تنظیم مسیر برای لود شدن روی ebdal.ir/shop
  build: {
    // بهینه‌سازی حجم خروجی بیلد
    chunkSizeWarningLimit: 600,
    cssCodeSplit: true,
  }
})
