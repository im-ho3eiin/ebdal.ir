export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>© {new Date().getFullYear()} تاسیسات ابدال</div>
          <div className="text-gray-500">
            تعهد، دقت، کیفیت — ساعات کاری: ۸ تا ۲۱ | جمعه‌ها: ۹ تا ۱۳
          </div>
        </div>
      </div>
    </footer>
  );
}
