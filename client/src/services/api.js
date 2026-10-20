import axios from 'axios';

// سرویس متمرکز برای ارتباط با بک‌اند ابدال
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 10000, // ۱۰ ثانیه حداکثر زمان انتظار
});

// تابع دریافت لیست محصولات
export const getProducts = async () => {
  const response = await api.get('/products');
  return response.data.data; // بخش data خروجی API
};

// تابع دریافت وضعیت سلامت بک‌اند
export const getHealth = async () => {
  const response = await api.get('/health');
  return response.data;
};

export default api;
