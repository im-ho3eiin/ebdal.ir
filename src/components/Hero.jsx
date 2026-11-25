import { ChevronDown, Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative z-10 flex min-h-svh flex-col justify-end px-4 pb-16 pt-24 md:justify-center md:pb-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="md:max-w-xl">
          <span className="mb-4 inline-block rounded-full bg-brand-light px-4 py-1.5 text-sm font-bold text-brand">
            تاسیسات و ساختمان
          </span>
          <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            تخصص ما،
            <br />
            <span className="text-brand">آرامش خانه شما</span>
          </h1>
          <p className="mt-5 text-base leading-8 text-ink/75 sm:text-lg">
            کلیه کارهای ساختمانی و تاسیسات را با کیفیتی ماندگار انجام می‌دهیم.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-brand px-6 py-3.5 font-bold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark"
            >
              <Phone size={18} />
              درخواست مشاوره
            </a>
            <a
              href="#shop"
              className="inline-flex items-center rounded-2xl border-2 border-brand px-6 py-3 font-bold text-brand transition hover:bg-brand-light"
            >
              فروشگاه
            </a>
          </div>

          <div className="mt-10 flex gap-6 text-sm font-bold text-ink/80">
            {['تعهد', 'دقت', 'کیفیت'].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ChevronDown className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 animate-bounce text-brand md:block" />
    </section>
  )
}
