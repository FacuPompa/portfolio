import { useEffect, useRef, useState, type CSSProperties } from 'react'
import {
  motion,
  useMotionValueEvent,
  useScroll,
} from 'motion/react'

type LearningItem = {
  period: string
  title: string
  place: string
  description: string
  type: string
  status: string
  logo: string
  logoAlt: string
}

function TimelineItem({
  item,
  isActive,
}: {
  item: LearningItem
  isActive: boolean
}) {
  const isCurrent = item.status === 'En curso' || item.status === 'In progress'

  return (
    <motion.article
      className="learning-timeline-item"
      animate={{ opacity: isActive ? 1 : 0.34, scale: isActive ? 1 : 0.92, y: isActive ? 0 : 10 }}
      transition={{ type: 'spring', stiffness: 190, damping: 26 }}
      aria-current={isActive ? 'step' : undefined}
    >
      <span className="learning-timeline-logo"><img src={item.logo} alt={item.logoAlt} /></span>
      <span className="learning-timeline-node" aria-hidden="true" />
      <div className="learning-timeline-copy">
        <p>{item.period}</p>
        <h4>{item.title}</h4>
        <strong>{item.place}</strong>
        <span className="learning-timeline-description">{item.description}</span>
        <div className="learning-timeline-meta">
          <small className={item.type === 'Estudio universitario' || item.type === 'University studies' ? 'is-university' : 'is-course'}>{item.type}</small>
          <em className={isCurrent ? 'is-current' : 'is-complete'}>{item.status}</em>
        </div>
      </div>
    </motion.article>
  )
}

export function LearningTimeline({ title, items }: { title: string; items: readonly LearningItem[] }) {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [step, setStep] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const measure = () => {
      const first = track.querySelector<HTMLElement>('.learning-timeline-item')
      if (!first) return
      const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0
      setStep(first.offsetWidth + gap)
    }

    const observer = new ResizeObserver(measure)
    observer.observe(track)
    measure()
    return () => observer.disconnect()
  }, [items.length])

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const nextIndex = Math.min(items.length - 1, Math.max(0, Math.round(latest * (items.length - 1))))
    setActiveIndex((current) => current === nextIndex ? current : nextIndex)
  })

  return (
    <section
      ref={sectionRef}
      className="learning-horizontal"
      aria-labelledby="learning-timeline-title"
      style={{ '--timeline-steps': items.length } as CSSProperties}
    >
      <div className="learning-horizontal-sticky">
        <header className="learning-horizontal-header">
          <h3 id="learning-timeline-title">{title}</h3>
          <p aria-hidden="true">{String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</p>
        </header>
        <div className="learning-horizontal-viewport">
          <motion.div
            ref={trackRef}
            className="learning-timeline-track"
            animate={{ x: -activeIndex * step }}
            transition={{ type: 'spring', stiffness: 145, damping: 25, mass: 0.82 }}
          >
            <span className="learning-timeline-rail" aria-hidden="true" />
            {items.map((item, index) => (
              <TimelineItem
                item={item}
                isActive={index === activeIndex}
                key={`${item.place}-${item.title}`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
