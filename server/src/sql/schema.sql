-- جدول دسته‌بندی‌ها (لوله، شیرآلات، پمپ و...)
CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- جدول محصولات با فیلدهای تخصصی تأسیساتی (سایز، برند، متریال، قیمت توافقی/نقدی)
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    category_id INT REFERENCES categories(id) ON DELETE SET NULL,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    brand VARCHAR(100),
    size_spec VARCHAR(50), -- مثل: 1/2 اینچ، 2 اینچ، 63 میلیمتر
    price NUMERIC(12, 0) DEFAULT 0, -- قیمت بر حسب تومان (0 یعنی تماس بگیرید/استعلامی)
    stock_status BOOLEAN DEFAULT TRUE,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- مقادیر پیش‌فرض دسته‌ها برای شروع سریع MVP
INSERT INTO categories (name, slug) VALUES 
('لوله و اتصالات', 'pipes-and-fittings'),
('شیرآلات صنعتی و ساختمانی', 'valves'),
('پمپ و موتورخانه', 'pumps')
ON CONFLICT DO NOTHING;
