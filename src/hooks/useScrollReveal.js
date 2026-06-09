import { useEffect, useRef, useState } from 'react'

export function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (options.once !== false) observer.unobserve(el)
        } else if (!options.once) {
          setVisible(false)
        }
      },
      { threshold: options.threshold ?? 0.15, rootMargin: options.rootMargin ?? '0px 0px -40px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [options.once, options.threshold, options.rootMargin])

  return { ref, visible }
}

export function useStaggerReveal(count, options = {}) {
  const containerRef = useRef(null)
  const [visibleItems, setVisibleItems] = useState(() => new Set())

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const items = container.querySelectorAll('[data-reveal-item]')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((item, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => new Set([...prev, index]))
            }, index * (options.delay ?? 100))
          })
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [count, options.delay])

  return { containerRef, visibleItems }
}
