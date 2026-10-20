import { useEffect, useState } from 'react';
import { getProducts } from './services/api';

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // لود محصولات از بک‌اند هنگام بالا آمدن صفحه
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError('خطا در دریافت محصولات از سرور');
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  return (
    <div dir="rtl" className="min-h-screen bg-gray-100 font-vazir">
      {/* هدر */}
      <header className="bg-[#0F4C81] text-white p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">🏗️ تاسیسات ابدال</h1>
          <span className="bg-white/20 px-4 py-1 rounded-full text-sm">فروشگاه تأسیسات</span>
        </div>
      </header>

      {/* بخش محصولات */}
      <main className="max-w-6xl mx-auto p-4">
        {/* وضعیت بارگذاری */}
        {loading && <p className="text-center text-gray-500 py-20">در حال بارگذاری محصولات...</p>}

        {/* پیام خطا */}
        {error && <p className="text-center text-red-600 bg-red-100 p-4 rounded-lg">{error}</p>}

        {/* گرید محصولات */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <img
                  src={product.image_url}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="font-bold text-lg text-gray-800">{product.title}</h2>
                  <p className="text-sm text-gray-500 mt-1">{product.category_name} — {product.brand}</p>
                  <p className="text-sm text-gray-400 mt-1">{product.size_spec}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className={`text-sm ${product.stock_status ? 'text-green-600' : 'text-red-500'}`}>
                      {product.stock_status ? '✓ موجود' : '✗ ناموجود'}
                    </span>
                    <span className="font-bold text-[#FF6B00]">
                      {Number(product.price).toLocaleString('fa-IR')} تومان
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
