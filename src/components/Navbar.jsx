import { useState } from 'react'
import { Menu, ShoppingCart, X } from 'lucide-react'

const links = [
  { href: '#home', label: 'خانه' },
  { href: '#services', label: 'خدمات' },
  { href: '#shop', label: 'فروشگاه' },
  { href: '#contact', label: 'تماس' },
]

export default function Navbar({ cartCount, onCart }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-brand/10 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#home" aria-label="ایدال">
          <img src="/logo.svg" alt="ایدال" className="h-11 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-medium text-ink/80 transition hover:text-brand">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onCart}
            className="relative grid h-10 w-10 place-items-center rounded-full bg-brand-light text-brand transition hover:bg-brand hover:text-white"
            aria-label="سبد خرید"
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -start-1 grid h-5 min-w-5 place-items-center rounded-full bg-ink px-1 text-[11px] font-bold text-white">
                {cartCount.toLocaleString('fa-IR')}
              </span>
            )}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-full text-ink md:hidden"
            aria-label="منو"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-brand/10 bg-white px-4 py-2 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 font-medium text-ink/80">
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
