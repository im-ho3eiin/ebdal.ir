import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import PipeScene from './components/PipeScene.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Shop from './components/Shop.jsx'
import Contact from './components/Contact.jsx'
import CartDrawer from './components/CartDrawer.jsx'

export default function App() {
  const [cart, setCart] = useState({})
  const [cartOpen, setCartOpen] = useState(false)

  const add = (id) => setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }))
  const remove = (id) =>
    setCart((c) => {
      const next = { ...c, [id]: (c[id] || 0) - 1 }
      if (next[id] <= 0) delete next[id]
      return next
    })
  const count = Object.values(cart).reduce((a, b) => a + b, 0)

  return (
    <div className="font-sans">
      <PipeScene />
      <Navbar cartCount={count} onCart={() => setCartOpen(true)} />
      <main>
        <Hero />
        <Services />
        <Shop onAdd={add} />
        <Contact />
      </main>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} cart={cart} onAdd={add} onRemove={remove} />
    </div>
  )
}
