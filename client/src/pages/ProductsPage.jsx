import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../services/api";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch {
        setError("خطا در دریافت محصولات از سرور");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return <div className="py-16 text-center text-gray-500">در حال بارگذاری…</div>;
  if (error) return <div className="py-16 text-center text-red-600">{error}</div>;

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-xl font-extrabold">کاتالوگ محصولات</h2>
        <div className="text-sm text-gray-500">{products.length} کالا</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {products.map((p) => (
          <Link
            key={p.id}
            to={`/products/${p.slug}`}
            className="bg-white border rounded-2xl overflow-hidden hover:shadow-md transition"
          >
            <img src={p.image_url} alt={p.title} className="w-full h-44 object-cover" />
            <div className="p-4 space-y-1">
              <div className="font-bold">{p.title}</div>
              <div className="text-xs text-gray-500">{p.category_name} — {p.brand}</div>
              <div className="flex items-center justify-between pt-2">
                <span className={`text-xs ${p.stock_status ? "text-green-600" : "text-red-600"}`}>
                  {p.stock_status ? "موجود" : "ناموجود"}
                </span>
                <span className="font-extrabold text-[#FF6B00]">
                  {Number(p.price).toLocaleString("fa-IR")} تومان
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
