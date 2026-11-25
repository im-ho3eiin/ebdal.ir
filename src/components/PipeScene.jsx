import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import logo from '../logoShapes.json'

const { meta, shapes } = logo
const LOGO_W = 8.2 // عرض لوگو در دنیای سه‌بعدی
const S = LOGO_W / (meta.bbox[2] - meta.bbox[0]) // مقیاس پیکسل به واحد سه‌بعدی
const CX = (meta.bbox[0] + meta.bbox[2]) / 2
const CY = (meta.bbox[1] + meta.bbox[3]) / 2
const toW = ([x, y]) => new THREE.Vector2((x - CX) * S, -(y - CY) * S)

// ساخت هندسه حجم‌دار (اکسترود با پخ لبه) از مسیرهای ردیابی‌شده لوگو
function extrude(layer, depth) {
  const list = layer.map(({ outer, holes }) => {
    const shape = new THREE.Shape(outer.map(toW))
    shape.holes = holes.map((h) => new THREE.Path(h.map(toW)))
    return shape
  })
  const geo = new THREE.ExtrudeGeometry(list, {
    depth,
    bevelEnabled: true,
    bevelThickness: 0.04,
    bevelSize: 0.03,
    bevelSegments: 3,
    curveSegments: 1,
  })
  geo.translate(0, 0, -depth / 2)
  return geo
}

// صحنه سه‌بعدی: لوگوی واقعی ایدال با حجم؛ فلکه‌ی بالای لوگو با اسکرول می‌چرخد
export default function PipeScene() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100)

    scene.add(new THREE.AmbientLight(0xffffff, 1.15))
    const key = new THREE.DirectionalLight(0xffffff, 2.3)
    key.position.set(4, 6, 8)
    scene.add(key)
    const rim = new THREE.PointLight(0x6fa0ff, 70, 40)
    rim.position.set(-6, 2, 5)
    scene.add(rim)

    const disposables = []
    const track = (o) => {
      disposables.push(o)
      return o
    }
    const mat = (color, metalness, roughness) =>
      track(new THREE.MeshStandardMaterial({ color, metalness, roughness }))

    const textMat = mat(0x1a222c, 0.5, 0.32)
    // بخش آبی (لوله، فلکه، بست) تک‌رنگ و با سایه‌ی تیره‌تر لوگو
    const blueMat = mat(0x003b5b, 0.55, 0.3)
    const deepMat = blueMat

    const group = new THREE.Group()
    scene.add(group)

    // حروف سرمه‌ای، لوله آبی و بست‌های تیره
    group.add(new THREE.Mesh(track(extrude(shapes.text, 0.8)), textMat))
    group.add(new THREE.Mesh(track(extrude(shapes.pipe, 0.5)), blueMat))
    group.add(new THREE.Mesh(track(extrude(shapes.deep, 0.62)), deepMat))

    // فلکه سه‌بعدی بالای لوگو (هم‌زاویه با لوگوی اصلی)
    const wl = meta.wheel
    const R = (wl.w / 2) * S * 0.92
    const tilt = Math.acos(Math.min(1, wl.h / wl.w))
    const wheelPos = toW([wl.cx, wl.cy])

    const wheelTilt = new THREE.Group()
    wheelTilt.position.set(wheelPos.x, wheelPos.y, 0)
    wheelTilt.rotation.x = -tilt
    group.add(wheelTilt)

    const spin = new THREE.Group()
    wheelTilt.add(spin)
    spin.add(new THREE.Mesh(track(new THREE.TorusGeometry(R, 0.06, 16, 64)), blueMat))
    const spokeGeo = track(new THREE.BoxGeometry(R * 2, 0.07, 0.07))
    const sp1 = new THREE.Mesh(spokeGeo, blueMat)
    const sp2 = new THREE.Mesh(spokeGeo, blueMat)
    sp2.rotation.z = Math.PI / 2
    spin.add(sp1, sp2)
    spin.add(new THREE.Mesh(track(new THREE.SphereGeometry(0.12, 20, 20)), blueMat))

    // ساقه بین فلکه و بست سرمه‌ای
    const stemTop = toW([wl.cx, meta.stemTopY])
    const stemH = Math.max(0.1, wheelPos.y - stemTop.y)
    const stem = new THREE.Mesh(track(new THREE.CylinderGeometry(0.08, 0.08, stemH, 16)), blueMat)
    stem.position.set(wheelPos.x, wheelPos.y - stemH / 2, 0)
    group.add(stem)

    // وضعیت
    let isMobile = false
    let target = 0
    let current = 0
    let raf = 0
    const clock = new THREE.Clock()

    const resize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      isMobile = w < 768
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.position.set(0, 0, isMobile ? 15 : 11)
      camera.updateProjectionMatrix()
    }
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      target = max > 0 ? window.scrollY / max : 0
      const o = Math.max(0, 1 - window.scrollY / (window.innerHeight * 0.9))
      canvas.style.opacity = String(0.22 + 0.78 * o)
    }
    resize()
    onScroll()
    current = target
    window.addEventListener('resize', resize)
    window.addEventListener('scroll', onScroll, { passive: true })

    const tick = () => {
      const t = clock.getElapsedTime()
      current += (target - current) * 0.08
      const p = current

      // چرخش لوگو به چپ و راست (خوانا می‌ماند) و چرخش فلکه با اسکرول
      group.rotation.y = Math.sin(p * Math.PI * 2) * 0.8 + Math.sin(t * 0.5) * 0.06
      group.rotation.x = -0.08 + Math.sin(p * Math.PI) * 0.22 + Math.sin(t * 0.35) * 0.03
      spin.rotation.z = p * Math.PI * 12 + t * 0.15

      const bob = Math.sin(t * 0.8) * 0.08
      if (isMobile) {
        group.position.set(0, 2.1 - p * 1.2 + bob, 0)
        group.scale.setScalar(0.55)
      } else {
        group.position.set(-3.3 + 6.6 * Math.sin(p * Math.PI), 0.2 + bob, 0)
        group.scale.setScalar(0.9)
      }

      renderer.render(scene, camera)
      raf = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', onScroll)
      disposables.forEach((d) => d.dispose())
      renderer.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0 h-full w-full" aria-hidden="true" />
}
