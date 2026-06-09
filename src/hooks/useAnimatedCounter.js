import { useEffect, useState } from 'react'

export function useAnimatedCounter(end, duration = 2000, active = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) {
      setCount(0)
      return
    }

    let start = 0
    const startTime = performance.now()

    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      start = Math.floor(eased * end)
      setCount(start)
      if (progress < 1) requestAnimationFrame(tick)
    }

    const id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [end, duration, active])

  return count
}
