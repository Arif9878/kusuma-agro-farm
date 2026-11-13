<script setup lang="ts">
import { ref, provide, onMounted, onUnmounted } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Lang } from './data/content'
import { useLenis } from './composables/useLenis'
import { LANG_KEY, SCROLL_TO_KEY, SCROLL_TO_TOP_KEY } from './composables/useLang'
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
import BackToTop from './components/layout/BackToTop.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import ProductsSection from './components/sections/ProductsSection.vue'
import DetailSection from './components/sections/DetailSection.vue'
import AdvantagesSection from './components/sections/AdvantagesSection.vue'
import WhyUsSection from './components/sections/WhyUsSection.vue'
import ServiceAreasSection from './components/sections/ServiceAreasSection.vue'
import FaqSection from './components/sections/FaqSection.vue'
import ContactSection from './components/sections/ContactSection.vue'

const lang = ref<Lang>('id')
provide(LANG_KEY, lang)

const { scrollTo, scrollToTop } = useLenis()
provide(SCROLL_TO_KEY, scrollTo)
provide(SCROLL_TO_TOP_KEY, scrollToTop)

// Delegate in-page anchor clicks (including links rendered via v-html)
// to Lenis so every smooth-scroll path behaves consistently.
const onDocumentClick = (event: MouseEvent) => {
  const anchor = (event.target as HTMLElement).closest('a[href^="#"]')
  if (!anchor) return
  const hash = anchor.getAttribute('href')
  if (!hash || hash === '#') return
  if (!document.querySelector(hash)) return
  event.preventDefault()
  scrollTo(hash)
}

const onWindowLoad = () => {
  // Recalculate trigger positions once all assets have settled.
  ScrollTrigger.refresh()
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick)
  window.addEventListener('load', onWindowLoad)
})

onUnmounted(() => {
  document.removeEventListener('click', onDocumentClick)
  window.removeEventListener('load', onWindowLoad)
})
</script>

<template>
  <div class="app overflow-x-clip">
    <a href="#main" class="skip-link">Skip to content</a>
    <Navbar />
    <main id="main">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <DetailSection />
      <AdvantagesSection />
      <WhyUsSection />
      <ServiceAreasSection />
      <FaqSection />
      <ContactSection />
    </main>
    <Footer />
    <BackToTop />
  </div>
</template>
