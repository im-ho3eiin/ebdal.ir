import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';

dotenv.config();

// تنظیم Pool بهینه برای کاهش فشار رم سرور
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'ebdal_db',
  password: process.env.DB_PASSWORD || 'your_postgres_password',
  port: process.env.DB_PORT || 5432,
  max: 10, // حداکثر اتصالات همزمان برای بهینه‌سازی منابع
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

pool.on('error', (err) => {
  console.error('خطای غیرمنتظره در استخر PostgreSQL:', err);
});

export default pool;
