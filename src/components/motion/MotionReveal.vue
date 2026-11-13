<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '../../composables/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  as?: string
  y?: number
  x?: number
  scale?: number
  delay?: number
  duration?: number
  trigger?: 'scroll' | 'mount'
  start?: string
  once?: boolean
  effect?: 'fade' | 'clip'
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  y: 36,
  x: 0,
  scale: 0,
  delay: 0,
  duration: 0.9,
  trigger: 'scroll',
  start: 'top 86%',
  once: true,
  effect: 'fade',
})

const root = ref<HTMLElement | null>(null)
const reduced = useReducedMotion()
let ctx: gsap.Context | null = null

onMounted(() => {
  if (reduced.value || !root.value) return

  ctx = gsap.context(() => {
    const hidden: gsap.TweenVars = { autoAlpha: 0, x: props.x, y: props.y }
    if (props.scale) hidden.scale = props.scale
    if (props.effect === 'clip') {
      hidden.clipPath = 'inset(0% 0% 100% 0%)'
      hidden.y = Math.min(props.y, 20)
    }

    const visible: gsap.TweenVars = {
      autoAlpha: 1,
      x: 0,
      y: 0,
      scale: 1,
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: props.duration,
      delay: props.delay,
      ease: 'power3.out',
      // Never pre-render the hidden state: a ScrollTrigger refresh must not
      // be able to leave content stuck invisible before the trigger fires.
      immediateRender: false,
    }
    if (props.trigger === 'scroll') {
      visible.scrollTrigger = { trigger: root.value, start: props.start, once: props.once }
    }
    gsap.fromTo(root.value, hidden, visible)
  }, root.value)
})

onUnmounted(() => {
  ctx?.revert()
  ctx = null
})
</script>

<template>
  <component :is="as" ref="root" class="motion-reveal">
    <slot />
  </component>
</template>
