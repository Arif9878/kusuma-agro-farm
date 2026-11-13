<script setup lang="ts">
import { ref, onMounted, onUnmounted, inject } from 'vue'
import { ArrowUp } from '@lucide/vue'
import { SCROLL_TO_TOP_KEY } from '../../composables/useLang'
import type { ScrollToFn } from '../../composables/useLenis'

const scrollToTop = inject<ScrollToFn>(SCROLL_TO_TOP_KEY, () => {})
const visible = ref(false)

const onScroll = () => {
  visible.value = window.scrollY > 640
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <button
    class="back-to-top fixed right-6 bottom-6 z-[900] flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pine to-leaf text-white shadow-[0_12px_32px_rgba(45,106,79,0.45)] hover:from-forest hover:to-pine"
    :class="{ 'back-to-top--visible': visible }"
    aria-label="Back to top"
    @click="scrollToTop(0)"
  >
    <ArrowUp class="h-5 w-5" />
  </button>
</template>
