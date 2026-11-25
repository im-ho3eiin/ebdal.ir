import { Minus, Plus, X } from 'lucide-react'
import { products, fa } from '../data.js'

export default function CartDrawer({ open, onClose, cart, onAdd, onRemove }) {
  if (!open) return null
  const items = Object.entries(cart)
    .map(([id, qty]) => ({ ...products.find((p) => p.id === Number(id)), qty }))
    .filter((i) => i.id)
  const total = items.reduce((s, i) => s + i.price * i.qty, 0)

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-ink/40" onClick={onClose} />
      <aside className="absolute inset-x-0 bottom-0 flex max-h-[80vh] flex-col rounded-t-3xl bg-white p-5 shadow-2xl md:inset-y-0 md:bottom-auto md:left-0 md:right-auto md:max-h-none md:w-96 md:rounded-none md:rounded-e-3xl">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-black">سبد خرید</h3>
          <button onClick={onClose} className="grid h-9 w-9 place-items-center rounded-full bg-brand-light text-brand" aria-label="بستن">
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto">
          {items.length === 0 && <p className="py-10 text-center text-ink/60">سبد خرید خالی است.</p>}
          {items.map((i) => (
            <div key={i.id} className="flex items-center gap-3 rounded-2xl border border-brand/15 p-3">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-brand-light text-3xl">{i.emoji}</div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-bold">{i.title}</div>
                <div className="text-xs text-ink/60">{fa(i.price)} تومان</div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => onAdd(i.id)} className="grid h-7 w-7 place-items-center rounded-full bg-brand text-white" aria-label="افزودن">
                  <Plus size={14} />
                </button>
                <span className="w-5 text-center text-sm font-bold">{fa(i.qty)}</span>
                <button onClick={() => onRemove(i.id)} className="grid h-7 w-7 place-items-center rounded-full bg-brand-light text-brand" aria-label="کم کردن">
                  <Minus size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 border-t border-brand/15 pt-4">
          <div className="flex justify-between font-bold">
            <span>جمع کل</span>
            <span>{fa(total)} تومان</span>
          </div>
          <button className="mt-4 w-full rounded-2xl bg-brand py-3.5 font-bold text-white transition hover:bg-brand-dark">
            ادامه خرید (نمونه)
          </button>
        </div>
      </aside>
    </div>
  )
}
