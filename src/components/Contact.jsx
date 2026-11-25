import { CalendarDays, Clock, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-black md:text-4xl">تماس با ما</h2>

        <div className="mt-8 grid gap-4 rounded-3xl border-2 border-brand p-5 sm:grid-cols-2 sm:p-8">
          <div className="flex items-center gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-light text-brand">
              <Clock size={28} />
            </div>
            <div>
              <div className="font-bold text-brand">ساعت کاری:</div>
              <div className="text-2xl font-black">۸:۰۰ تا ۲۱:۰۰</div>
            </div>
          </div>
          <div className="flex items-center gap-4 sm:border-s sm:border-brand/20 sm:ps-6">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-light text-brand">
              <CalendarDays size={28} />
            </div>
            <div>
              <div className="font-bold text-brand">جمعه‌ها:</div>
              <div className="text-2xl font-black">۹:۰۰ تا ۱۳:۰۰</div>
            </div>
          </div>
        </div>

        <a
          href="tel:+989120000000"
          className="mt-6 flex items-center justify-center gap-3 rounded-2xl bg-brand py-4 font-bold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark"
        >
          <Phone size={20} />
          تماس بگیرید (شماره نمونه: ۰۹۱۲۰۰۰۰۰۰۰)
        </a>
      </div>

      <footer className="mx-auto mt-16 max-w-4xl border-t border-brand/15 pt-8 text-center">
        <div className="text-xl font-black text-brand">تعهد، دقت، کیفیت</div>
        <div className="mt-2 text-sm text-ink/60">ایدال — تخصص ما، آرامش خانه شما</div>
      </footer>
    </section>
  )
}
