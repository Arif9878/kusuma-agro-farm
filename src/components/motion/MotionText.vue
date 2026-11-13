<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '../../composables/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  text: string
  as?: string
  mode?: 'scroll' | 'mount'
  delay?: number
  stagger?: number
  duration?: number
  start?: string
  once?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  as: 'span',
  mode: 'scroll',
  delay: 0,
  stagger: 0.04,
  duration: 0.85,
  start: 'top 88%',
  once: true,
})

const words = computed(() => props.text.split(' '))
const root = ref<HTMLElement | null>(null)
const reduced = useReducedMotion()
let ctx: gsap.Context | null = null

onMounted(() => {
  if (reduced.value || !root.value) return

  ctx = gsap.context(() => {
    const inners = root.value!.querySelectorAll('.motion-text__inner')
    const visible: gsap.TweenVars = {
      yPercent: 0,
      duration: props.duration,
      delay: props.delay,
      stagger: props.stagger,
      ease: 'power4.out',
      immediateRender: false,
    }
    if (props.mode === 'scroll') {
      visible.scrollTrigger = { trigger: root.value, start: props.start, once: props.once }
    }
    gsap.fromTo(inners, { yPercent: 115 }, visible)
  }, root.value)
})

onUnmounted(() => {
  ctx?.revert()
  ctx = null
})
</script>

<template>
  <component :is="as" ref="root" class="motion-text" :aria-label="text">
    <template v-for="(word, i) in words" :key="i">
      <span class="motion-text__word" aria-hidden="true">
        <span class="motion-text__inner">{{ word }}</span>
      </span><template v-if="i < words.length - 1">{{ ' ' }}</template>
    </template>
  </component>
</template>
