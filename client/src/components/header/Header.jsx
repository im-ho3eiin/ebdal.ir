import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const navClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm transition ${
      isActive ? "bg-white/15 text-white" : "text-white/90 hover:bg-white/10"
    }`;

  return (
    <header className="bg-[#0F4C81] text-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center font-bold">
            ابدال
          </div>
          <div className="leading-tight">
            <div className="font-extrabold text-lg">تاسیسات ابدال</div>
            <div className="text-xs text-white/80">تخصص ما، آرامش خانه شما</div>
          </div>
        </Link>

        <nav className="hidden sm:flex items-center gap-2">
          <NavLink to="/" className={navClass} end>
            خانه
          </NavLink>
          <NavLink to="/products" className={navClass}>
            محصولات
          </NavLink>
          <NavLink to="/cart" className={navClass}>
            سبد خرید
          </NavLink>
        </nav>

        <Link
          to="/products"
          className="bg-[#FF6B00] hover:bg-[#ff7a1a] transition px-4 py-2 rounded-xl text-sm font-bold"
        >
          مشاهده کاتالوگ
        </Link>
      </div>
    </header>
  );
}
