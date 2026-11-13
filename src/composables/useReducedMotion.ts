import { ref, onUnmounted } from 'vue'

const QUERY = '(prefers-reduced-motion: reduce)'

/**
 * Reactive flag for the user's reduced-motion preference.
 * Read synchronously so it is reliable during onMounted setup,
 * and watched for runtime changes.
 */
export function useReducedMotion() {
  const prefersReducedMotion = ref(false)

  if (typeof window !== 'undefined' && 'matchMedia' in window) {
    const media = window.matchMedia(QUERY)
    prefersReducedMotion.value = media.matches

    const onChange = (event: MediaQueryListEvent) => {
      prefersReducedMotion.value = event.matches
    }
    media.addEventListener('change', onChange)
    onUnmounted(() => media.removeEventListener('change', onChange))
  }

  return prefersReducedMotion
}
