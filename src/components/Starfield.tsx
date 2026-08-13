import { useEffect, useRef } from 'react'

type Star = {
  x: number
  y: number
  radius: number
  alpha: number
  phase: number
  speed: number
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext('2d', { alpha: true })
    if (!context) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let stars: Star[] = []
    let animationFrame = 0
    let lastTime = 0
    let isVisible = !document.hidden

    const createStars = () => {
      const isMobile = window.innerWidth < 700
      const count = Math.min(isMobile ? 38 : 78, Math.floor((window.innerWidth * window.innerHeight) / 18000))
      stars = Array.from({ length: count }, () => ({
        x: Math.random(),
        y: Math.random(),
        radius: 0.45 + Math.random() * 1.05,
        alpha: 0.12 + Math.random() * 0.4,
        phase: Math.random() * Math.PI * 2,
        speed: 0.0015 + Math.random() * 0.0025,
      }))
    }

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = Math.floor(window.innerWidth * ratio)
      canvas.height = Math.floor(window.innerHeight * ratio)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      createStars()
      draw(performance.now())
    }

    const draw = (time: number) => {
      const width = window.innerWidth
      const height = window.innerHeight
      const lightTheme = document.documentElement.dataset.theme === 'light'
      context.clearRect(0, 0, width, height)
      context.fillStyle = lightTheme ? '#23272b' : '#ffffff'

      const delta = Math.min(time - lastTime, 32)
      lastTime = time

      stars.forEach((star) => {
        if (!reducedMotion) {
          star.y -= star.speed * delta * 0.012
          star.phase += delta * 0.00045
          if (star.y < -0.02) {
            star.y = 1.02
            star.x = Math.random()
          }
        }
        const pulse = reducedMotion ? 1 : 0.72 + Math.sin(star.phase) * 0.28
        context.globalAlpha = star.alpha * pulse
        context.beginPath()
        context.arc(star.x * width, star.y * height, star.radius, 0, Math.PI * 2)
        context.fill()
      })
      context.globalAlpha = 1
    }

    const loop = (time: number) => {
      if (isVisible) draw(time)
      animationFrame = requestAnimationFrame(loop)
    }

    const handleVisibility = () => {
      isVisible = !document.hidden
      lastTime = performance.now()
    }

    const themeObserver = new MutationObserver(() => draw(performance.now()))
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    window.addEventListener('resize', resize, { passive: true })
    document.addEventListener('visibilitychange', handleVisibility)
    resize()
    if (!reducedMotion) animationFrame = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(animationFrame)
      themeObserver.disconnect()
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])

  return <canvas ref={canvasRef} className="starfield" aria-hidden="true" />
}
