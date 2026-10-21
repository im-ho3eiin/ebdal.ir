import axios from 'axios';

// سرویس متمرکز برای ارتباط با بک‌اند ابدال
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 10000, // ۱۰ ثانیه حداکثر زمان انتظار
});

// تابع دریافت لیست محصولات
export const getProducts = async () => {
  const response = await api.get('/products');
  return response.data.data; // آرایه محصولات
};

// تابع دریافت یک محصول بر اساس slug
export const getProductBySlug = async (slug) => {
  try {
    const response = await api.get(`/products/${slug}`);
    return response.data.data; // آبجکت مشخصات محصول
  } catch (error) {
    console.error(`خطا در دریافت اطلاعات محصول با اسلاگ ${slug}:`, error);
    throw error;
  }
};

// تابع دریافت دسته‌بندی‌ها
export const getCategories = async () => {
  try {
    const response = await api.get('/products/categories');
    return response.data.data;
  } catch (error) {
    console.error('خطا در دریافت لیست دسته‌بندی‌ها:', error);
    throw error;
  }
};

// تابع دریافت وضعیت سلامت بک‌اند
export const getHealth = async () => {
  const response = await api.get('/health');
  return response.data;
};

export default api;
