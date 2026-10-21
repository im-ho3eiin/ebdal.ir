import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import productRoutes from './src/routes/productRoutes.js';
import pool from './src/config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware‌های پایه و بهینه‌سازی
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.json());

// ۱. روت تست سلامت سرور (باید اول باشد)
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Ebdal API is healthy and running' });
});

// ۲. روت‌های محصولات
app.use('/api/products', productRoutes);

// هندلر خطای ۴۰۴ کلی سرور
app.use((req, res) => {
  res.status(404).json({ status: 'fail', message: 'مسیر مورد نظر یافت نشد' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
