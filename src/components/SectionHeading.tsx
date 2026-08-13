import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

type SectionHeadingProps = {
  id: string
  kicker: string
  title: string
  intro?: string
}

export function SectionHeading({ id, kicker, title, intro }: SectionHeadingProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { amount: 0.45 })

  return (
    <motion.header
      ref={ref}
      className="section-heading"
      initial={false}
      animate={{ opacity: isInView ? 1 : 0.58, y: isInView ? 0 : 8 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
    >
      <p className="section-kicker">{kicker}</p>
      <h2 id={id}>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
      <motion.span
        className="section-heading-highlight"
        aria-hidden="true"
        initial={false}
        animate={{ scaleX: isInView ? 1 : 0 }}
        transition={{ duration: 0.38, ease: 'easeOut' }}
      />
    </motion.header>
  )
}
