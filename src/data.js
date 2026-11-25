import { Building2, Droplets, Flame, PaintRoller, Wrench, Zap } from 'lucide-react'

export const services = [
  { id: 'renovation', title: 'بازسازی', desc: 'بازسازی کامل یا موضعی خانه، آشپزخانه و سرویس‌ها با طراحی و اجرای دقیق.', icon: PaintRoller },
  { id: 'electric', title: 'تاسیسات برق', desc: 'سیم‌کشی، تابلو برق، روشنایی و رفع اتصالی با رعایت استانداردهای ایمنی.', icon: Zap },
  { id: 'water', title: 'تاسیسات آب و فاضلاب', desc: 'لوله‌کشی آب، فاضلاب، رفع نشتی و نصب شیرآلات و سرویس‌های بهداشتی.', icon: Droplets },
  { id: 'heating', title: 'تاسیسات حرارتی', desc: 'نصب و سرویس پکیج، رادیاتور و سیستم‌های گرمایش از کف.', icon: Flame },
  { id: 'piping', title: 'تاسیسات لوله‌کشی', desc: 'لوله‌کشی گاز و آب ساختمان با مصالح مرغوب و تست فشار.', icon: Wrench },
  { id: 'building', title: 'ساختمان‌سازی', desc: 'اجرای پروژه‌های ساختمانی از اسکلت تا نازک‌کاری با مدیریت دقیق.', icon: Building2 },
]

export const categories = ['همه', 'لوله‌کشی', 'شیرآلات', 'حرارتی', 'برق']

// تصاویر و قیمت‌ها نمونه هستند
export const products = [
  { id: 1, title: 'لوله پنج‌لایه ۲۰ میلی‌متر (۶ متر)', cat: 'لوله‌کشی', price: 285000, emoji: '🔧' },
  { id: 2, title: 'شیر توپی برنجی ½ اینچ', cat: 'شیرآلات', price: 145000, emoji: '🚰' },
  { id: 3, title: 'شیر مخلوط روشویی کروم', cat: 'شیرآلات', price: 1250000, emoji: '🚿' },
  { id: 4, title: 'رادیاتور پنلی ۶۰ سانتی‌متر', cat: 'حرارتی', price: 3400000, emoji: '🔥' },
  { id: 5, title: 'پمپ آب خانگی ۱ اسب', cat: 'لوله‌کشی', price: 4800000, emoji: '💧' },
  { id: 6, title: 'کلید و پریز روکار سفید', cat: 'برق', price: 95000, emoji: '🔌' },
  { id: 7, title: 'سیم افشان ۲.۵ (حلقه ۱۰۰ متری)', cat: 'برق', price: 2150000, emoji: '💡' },
  { id: 8, title: 'شیر رادیاتور ترموستاتیک', cat: 'حرارتی', price: 620000, emoji: '🌡️' },
]

export const fa = (n) => Number(n).toLocaleString('fa-IR')
