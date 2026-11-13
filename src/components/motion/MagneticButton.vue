<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { useReducedMotion } from '../../composables/useReducedMotion'

interface Props {
  href?: string
  strength?: number
}

const props = withDefaults(defineProps<Props>(), {
  href: '',
  strength: 0.3,
})

const root = ref<HTMLElement | null>(null)
const reduced = useReducedMotion()
let cleanup: (() => void) | null = null

onMounted(() => {
  const el = root.value
  if (reduced.value || !el || !window.matchMedia('(pointer: fine)').matches) return

  const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3.out' })
  const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3.out' })

  const onMove = (event: PointerEvent) => {
    const rect = el.getBoundingClientRect()
    const relX = event.clientX - (rect.left + rect.width / 2)
    const relY = event.clientY - (rect.top + rect.height / 2)
    xTo(relX * props.strength)
    yTo(relY * props.strength)
  }
  const onLeave = () => {
    xTo(0)
    yTo(0)
  }

  el.addEventListener('pointermove', onMove)
  el.addEventListener('pointerleave', onLeave)

  cleanup = () => {
    el.removeEventListener('pointermove', onMove)
    el.removeEventListener('pointerleave', onLeave)
    gsap.killTweensOf(el)
  }
})

onUnmounted(() => {
  cleanup?.()
  cleanup = null
})
</script>

<template>
  <a v-if="href" :href="href" ref="root" class="magnetic inline-flex">
    <slot />
  </a>
  <button v-else ref="root" type="button" class="magnetic inline-flex cursor-pointer">
    <slot />
  </button>
</template>
