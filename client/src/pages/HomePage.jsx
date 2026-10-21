import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-l from-[#0F4C81] to-[#123e63] text-white p-6 sm:p-10">
        <h1 className="text-2xl sm:text-3xl font-extrabold">
          فروشگاه آنلاین تاسیسات ابدال
        </h1>
        <p className="mt-2 text-white/85">
          لوله و اتصالات، شیرآلات، پمپ و تجهیزات — خرید سریع و مطمئن
        </p>
        <div className="mt-6 flex gap-3">
          <Link
            to="/products"
            className="bg-[#FF6B00] hover:bg-[#ff7a1a] transition px-5 py-3 rounded-xl text-sm font-bold"
          >
            مشاهده محصولات
          </Link>
          <Link
            to="/cart"
            className="bg-white/10 hover:bg-white/15 transition px-5 py-3 rounded-xl text-sm font-bold"
          >
            سبد خرید
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {[
          "لوله و اتصالات",
          "شیرآلات",
          "پمپ و بوستر پمپ",
          "تاسیسات حرارتی",
          "تاسیسات برقی",
          "بازسازی",
        ].map((item) => (
          <div
            key={item}
            className="rounded-xl bg-white border p-3 text-center text-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
