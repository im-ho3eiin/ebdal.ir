import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductBySlug } from "../services/api";

export default function ProductDetailsPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await getProductBySlug(slug);
        setProduct(data);
      } catch {
        setError("محصول مورد نظر یافت نشد یا خطایی در ارتباط با سرور رخ داده است.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading) {
    return <div className="py-20 text-center text-gray-500">در حال بارگذاری اطلاعات محصول...</div>;
  }

  if (error || !product) {
    return (
      <div className="py-20 text-center space-y-4">
        <div className="text-red-600 font-bold">{error}</div>
        <Link to="/products" className="inline-block bg-[#0F4C81] text-white px-4 py-2 rounded-xl text-sm">
          بازگشت به کاتالوگ محصولات
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white border rounded-2xl p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between border-b pb-4">
        <Link to="/products" className="text-sm text-[#0F4C81] hover:underline font-bold">
          ← بازگشت به محصولات
        </Link>
        <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
          دسته‌بندی: {product.category_name}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* تصویر محصول */}
        <div className="rounded-xl overflow-hidden border bg-gray-50">
          <img 
            src={product.image_url || "https://placehold.co/600x400?text=Ebdal"} 
            alt={product.title} 
            className="w-full h-80 object-cover"
          />
        </div>

        {/* اطلاعات و مشخصات */}
        <div className="space-y-4">
          <h1 className="text-2xl font-extrabold text-gray-900">{product.title}</h1>
          
          <div className="text-sm text-gray-500">
            برند: <span className="font-bold text-gray-700">{product.brand || "متفرقه"}</span>
          </div>

          <div className="text-2xl font-black text-[#FF6B00]">
            {Number(product.price).toLocaleString("fa-IR")} تومان
          </div>

          <div className={`inline-block px-3 py-1 rounded-lg text-xs font-bold ${
            product.stock_status ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
          }`}>
            {product.stock_status ? "موجود در انبار ابدال" : "ناموجود"}
          </div>

          <p className="text-sm text-gray-600 leading-relaxed pt-2">
            {product.description || "توضیحات تکمیلی برای این محصول ثبت نشده است. جهت مشاوره خرید تجهیزات تاسیساتی می‌توانید با پشتیبانی تماس بگیرید."}
          </p>

          <div className="pt-4 border-t flex gap-4">
            <button 
              disabled={!product.stock_status}
              className={`flex-1 py-3 rounded-xl font-bold text-sm transition ${
                product.stock_status 
                  ? "bg-[#FF6B00] hover:bg-[#ff7a1a] text-white" 
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
