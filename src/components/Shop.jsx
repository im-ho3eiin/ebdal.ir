import { useState } from 'react'
import { Plus } from 'lucide-react'
import { categories, products, fa } from '../data.js'

export default function Shop({ onAdd }) {
  const [cat, setCat] = useState('همه')
  const list = cat === 'همه' ? products : products.filter((p) => p.cat === cat)

  return (
    <section id="shop" className="relative z-10 bg-white/90 px-4 py-16 backdrop-blur-md md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-black md:text-4xl">فروشگاه</h2>
        <p className="mt-3 text-ink/70">مصالح و تجهیزات تاسیساتی با کیفیت (نمونه محصولات).</p>

        <div className="-mx-4 mt-6 flex gap-2 overflow-x-auto px-4 pb-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`shrink-0 rounded-full px-5 py-2 text-sm font-bold transition ${
                cat === c ? 'bg-brand text-white' : 'bg-brand-light text-brand hover:bg-brand/20'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {list.map((p) => (
            <article key={p.id} className="flex flex-col overflow-hidden rounded-3xl border border-brand/15 bg-white shadow-sm">
              <div className="grid aspect-square place-items-center bg-gradient-to-br from-brand-light to-white text-5xl sm:text-6xl">
                {p.emoji}
              </div>
              <div className="flex flex-1 flex-col p-3 sm:p-4">
                <span className="text-[11px] font-bold text-brand">{p.cat}</span>
                <h3 className="mt-1 flex-1 text-sm font-bold leading-6">{p.title}</h3>
                <div className="mt-3 flex items-center justify-between gap-2">
                  <span className="text-xs font-extrabold sm:text-sm">{fa(p.price)} <span className="font-normal text-ink/60">تومان</span></span>
                  <button
                    onClick={() => onAdd(p.id)}
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand text-white transition hover:bg-brand-dark"
                    aria-label="افزودن به سبد"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
