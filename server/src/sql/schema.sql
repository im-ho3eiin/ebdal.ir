-- جدول دسته‌بندی محصولات
CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- جدول محصولات با مشخصات تخصصی تأسیساتی
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    category_id INT REFERENCES categories(id) ON DELETE SET NULL,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    brand VARCHAR(100),
    size_spec VARCHAR(50),
    price NUMERIC(12, 0) DEFAULT 0, -- 0 یعنی استعلامی/تماس بگیرید
    stock_status BOOLEAN DEFAULT TRUE,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- درج داده‌های نمونه اولیه
INSERT INTO categories (name, slug) VALUES 
('لوله و اتصالات', 'pipes-and-fittings'),
('شیرآلات صنعتی و ساختمانی', 'valves'),
('پمپ و بوستر پمپ', 'pumps')
ON CONFLICT DO NOTHING;

INSERT INTO products (title, slug, brand, size_spec, price, image_url, category_id) VALUES 
('شیر فلکه کشویی برنجی کیز ایران', 'kizz-iran-valve-2', 'کیز ایران', '۲ اینچ', 1450000, 'https://placehold.co/400x300/0F4C81/ffffff?text=Kizz+Iran+Valve', 2),
('لوله پنج لایه نیوپایپ سایز ۲۵', 'newpipe-25mm', 'نیوپایپ', '۲۵ میلیمتر', 3200000, 'https://placehold.co/400x300/1E293B/ffffff?text=Newpipe+Tube', 1),
('پمپ آب بشقابی یک اسب الکتروژن', 'electrogen-cm100', 'الکتروژن', '۱ اسب', 0, 'https://placehold.co/400x300/FF6B00/ffffff?text=Electrogen+Pump', 3)
ON CONFLICT DO NOTHING;
