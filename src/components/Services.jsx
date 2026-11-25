import { services } from '../data.js'

export default function Services() {
  return (
    <section id="services" className="relative z-10 bg-white/85 px-4 py-16 backdrop-blur-md md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-black md:text-4xl">خدمات ما</h2>
        <p className="mt-3 text-ink/70">از بازسازی تا تاسیسات و ساختمان‌سازی، همه در یک مجموعه.</p>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {services.map(({ id, title, desc, icon: Icon }) => (
            <article
              key={id}
              className="group rounded-3xl border border-brand/15 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-brand hover:shadow-xl hover:shadow-brand/10 sm:p-6"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-light text-brand transition group-hover:bg-brand group-hover:text-white sm:h-14 sm:w-14">
                <Icon size={26} />
              </div>
              <h3 className="mt-4 text-base font-extrabold sm:text-lg">{title}</h3>
              <p className="mt-2 text-xs leading-6 text-ink/70 sm:text-sm sm:leading-7">{desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-brand px-6 py-5 text-center text-sm font-bold text-white sm:text-base">
          کلیه کارهای ساختمانی و تاسیسات را با کیفیتی ماندگار انجام می‌دهیم
        </div>
      </div>
    </section>
  )
}
