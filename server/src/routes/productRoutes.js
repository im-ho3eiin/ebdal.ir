import express from 'express';
import { getProducts, getProductBySlug } from '../controllers/productController.js';

const router = express.Router();

// دریافت لیست تمام محصولات
router.get('/', getProducts);

// دریافت جزئیات یک محصول با اسلاگ
router.get('/:slug', getProductBySlug);

export default router;
