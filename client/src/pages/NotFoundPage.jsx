import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="py-16 text-center space-y-4">
      <div className="text-2xl font-extrabold">صفحه پیدا نشد</div>
      <Link to="/" className="text-[#0F4C81] underline">
        بازگشت به خانه
      </Link>
    </div>
  );
}
