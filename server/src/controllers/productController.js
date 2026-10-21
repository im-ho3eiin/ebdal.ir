import pool from '../config/db.js';

// دریافت تمام محصولات همراه با نام دسته‌بندی
export const getProducts = async (req, res) => {
  try {
    const queryText = `
      SELECT 
        p.id, 
        p.title, 
        p.slug, 
        p.brand, 
        p.size_spec, 
        p.price, 
        p.stock_status, 
        p.image_url, 
        c.name AS category_name
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.id
      ORDER BY p.id DESC
    `;
    const { rows } = await pool.query(queryText);
    res.json({ status: 'success', count: rows.length, data: rows });
  } catch (error) {
    res.status(500).json({ 
      status: 'error', 
      message: 'خطا در دریافت لیست محصولات', 
      details: error.message 
    });
  }
};

// دریافت تمام دسته‌بندی‌ها
export const getCategories = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM categories ORDER BY id ASC');
    res.json({ status: 'success', data: rows });
  } catch (error) {
    res.status(500).json({ 
      status: 'error', 
      message: 'خطا در دریافت دسته‌بندی‌ها', 
      details: error.message 
    });
  }
};

// دریافت یک محصول بر اساس slug همراه با نام دسته‌بندی و فیلد توضیحات
export const getProductBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const queryText = `
      SELECT 
        p.id, 
        p.title, 
        p.slug, 
        p.brand, 
        p.size_spec, 
        p.price, 
        p.stock_status, 
        p.image_url, 
        p.description, 
        c.name AS category_name
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.id
      WHERE p.slug = $1
    `;
    const { rows } = await pool.query(queryText, [slug]);

    if (rows.length === 0) {
      return res.status(404).json({ status: 'fail', message: 'محصول مورد نظر یافت نشد' });
    }

    res.json({ status: 'success', data: rows[0] });
  } catch (error) {
    res.status(500).json({ 
      status: 'error', 
      message: 'خطای سرور در دریافت اطلاعات محصول', 
      details: error.message 
    });
  }
};
