import { ref, onMounted, onUnmounted, type Ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface GsapTools {
  gsap: typeof gsap
  ScrollTrigger: typeof ScrollTrigger
}

/**
 * Runs GSAP setup inside a scoped context that is reverted on unmount,
 * guaranteeing all tweens, ScrollTriggers and matchMedia queries created
 * inside are cleaned up with the component.
 *
 * Usage: const root = useGsap(({ gsap, ScrollTrigger }) => { ... })
 *        <section ref="root">…</section>
 */
export function useGsap(setup: (tools: GsapTools) => void): Ref<HTMLElement | null> {
  const scope = ref<HTMLElement | null>(null)
  let ctx: gsap.Context | null = null

  onMounted(() => {
    ctx = gsap.context(() => setup({ gsap, ScrollTrigger }), scope.value ?? undefined)
  })

  onUnmounted(() => {
    ctx?.revert()
    ctx = null
  })

  return scope
}
