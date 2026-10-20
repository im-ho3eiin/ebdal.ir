import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import dotenv from 'dotenv';
import pool from './src/config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// میدل‌ورهای بهینه‌سازی و امنیت
app.use(helmet());
app.use(compression()); // فشرده‌سازی خودکار پاسخ‌ها جهت کاهش پهنای باند هاست
app.use(cors({ origin: 'http://localhost:5173' })); // پورت پیش‌فرض Vite
app.use(express.json());

// روت تست و سلامت سیستم و دیتابیس
app.get('/api/health', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({
      status: 'success',
      message: 'بک‌اند تأسیسات ابدال فعال است',
      db_time: result.rows[0].now,
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'خطا در برقراری ارتباط با دیتابیس', details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 سرور تأسیسات ابدال روی پورت ${PORT} با موفقیت روشن شد.`);
});
