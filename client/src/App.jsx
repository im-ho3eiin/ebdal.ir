import React, { useState } from 'react';

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const sampleProducts = [
    {
      id: 1,
      title: 'شیر فلکه کشویی برنجی کیز ایران سایز ۲ اینچ',
      category: 'شیرآلات صنعتی',
      price: '۱,۴۵۰,۰۰۰',
      tag: 'پرفروش',
      image: 'https://placehold.co/400x300/0F4C81/ffffff?text=Kizz+Iran+Valve'
    },
    {
      id: 2,
      title: 'لوله پنج لایه نیوپایپ سایز ۲۵ (کلاف ۵۰ متری)',
      category: 'لوله و اتصالات',
      price: '۳,۲۰۰,۰۰۰',
      tag: 'ضمانت اصالت',
      image: 'https://placehold.co/400x300/1E293B/ffffff?text=Newpipe+Tube'
    },
    {
      id: 3,
      title: 'پمپ آب بشقابی یک اسب الکتروژن مدل CM100',
      category: 'پمپ و بوستر پمپ',
      price: 'تماس بگیرید',
      tag: 'استعلامی',
      image: 'https://placehold.co/400x300/FF6B00/ffffff?text=Electrogen+Pump'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      {/* هدر سایت */}
      <header className="bg-ebdal-blue text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-ebdal-accent rounded-lg flex items-center justify-center font-black text-xl shadow">
              آ
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">تأسیسات ابدال</h1>
              <p className="text-xs text-blue-200">فروشگاه تخصصی لوله، اتصالات و تجهیزات موتورخانه</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative cursor-pointer bg-white/10 hover:bg-white/20 p-2.5 rounded-xl transition">
              <span>🛒 سبد خرید</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-ebdal-accent text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* بنر خوش‌آمدگویی و تست سیستم */}
      <main className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full">
        <section className="bg-gradient-to-l from-ebdal-blue to-slate-900 text-white rounded-2xl p-6 sm:p-10 mb-8 shadow-lg flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="inline-block bg-ebdal-accent text-white text-xs px-3 py-1 rounded-full font-bold mb-3">
              پروژه فعال: ebdal.ir/shop
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 leading-relaxed">
              تأمین مستقیم تجهیزات پایپینگ و تأسیسات ساختمانی
            </h2>
            <p className="text-slate-300 text-sm max-w-xl">
              این صفحه تستی نشان‌دهنده بارگذاری موفق React، فونت وزیرمتن و استایل‌های بهینه‌سازی‌شده Tailwind است.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 text-center">
            <span className="text-xs text-slate-300 block mb-1">وضعیت فرانت‌اند:</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1.5 justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              سیستم کاملاً آماده
            </span>
          </div>
        </section>

        {/* لیست محصولات تستی */}
        <h3 className="text-xl font-bold mb-6 text-ebdal-dark border-r-4 border-ebdal-accent pr-3">
          نمونه کالاهای قابل استعلام
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sampleProducts.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col">
              <div className="relative bg-slate-100 aspect-video flex items-center justify-center">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                <span className="absolute top-3 right-3 bg-ebdal-dark/80 text-white text-xs px-2.5 py-1 rounded-md backdrop-blur-sm">
                  {p.tag}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs text-slate-500 font-medium">{p.category}</span>
                  <h4 className="font-bold text-slate-800 text-sm mt-1 line-clamp-2">{p.title}</h4>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block">قیمت واحد (تومان):</span>
                    <span className="font-extrabold text-ebdal-blue">{p.price}</span>
                  </div>
                  <button
                    onClick={() => setCartCount(cartCount + 1)}
                    className="bg-ebdal-accent hover:bg-orange-600 text-white px-3.5 py-2 rounded-xl text-xs font-bold transition shadow-sm active:scale-95"
                  >
                    + افزودن
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* فوتر */}
      <footer className="bg-ebdal-dark text-slate-400 py-6 border-t border-slate-800 text-center text-xs">
        <p>© تمام حقوق برای تأسیسات ابدال محفوظ است | توسعه سبک و بهینه MVP</p>
      </footer>
    </div>
  );
}
