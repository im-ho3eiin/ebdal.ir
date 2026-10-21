import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function ShopLayout() {
  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 font-vazir text-gray-900">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
