import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { useReducedMotion } from './useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export type ScrollToTarget = string | number | HTMLElement

export interface ScrollToFn {
  (target: ScrollToTarget): void
}

/**
 * App-level smooth scrolling via Lenis, synced with GSAP's ticker so
 * ScrollTrigger and Lenis share one animation loop. Automatically
 * disabled when the user prefers reduced motion.
 *
 * The returned scrollTo helpers fall back to native behavior when
 * Lenis is not running.
 */
export function useLenis() {
  const reduced = useReducedMotion()
  let lenis: Lenis | null = null
  let rafCallback: ((time: number) => void) | null = null

  onMounted(() => {
    if (reduced.value || lenis) return

    lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    lenis.on('scroll', ScrollTrigger.update)

    rafCallback = (time: number) => {
      lenis?.raf(time * 1000)
    }
    gsap.ticker.add(rafCallback)
    gsap.ticker.lagSmoothing(0)
  })

  onUnmounted(() => {
    if (rafCallback) gsap.ticker.remove(rafCallback)
    rafCallback = null
    lenis?.destroy()
    lenis = null
  })

  const scrollTo: ScrollToFn = (target) => {
    if (lenis) {
      const offset = typeof target === 'number' ? 0 : -72
      lenis.scrollTo(target as never, { offset, duration: 1.2 })
      return
    }
    if (typeof target === 'number') {
      window.scrollTo({ top: target, behavior: 'auto' })
      return
    }
    const el = typeof target === 'string' ? document.querySelector(target) : target
    if (el instanceof HTMLElement) {
      el.scrollIntoView({ behavior: 'auto', block: 'start' })
    }
  }

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 })
      return
    }
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  return { scrollTo, scrollToTop }
}
