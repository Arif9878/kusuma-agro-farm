<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, inject } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Sprout, Globe } from '@lucide/vue'
import { navLinks } from '../../data/content'
import { useLang, SCROLL_TO_KEY } from '../../composables/useLang'
import { useReducedMotion } from '../../composables/useReducedMotion'
import type { ScrollToFn } from '../../composables/useLenis'

gsap.registerPlugin(ScrollTrigger)

const SECTION_IDS = ['beranda', 'tentang', 'produk', 'keunggulan', 'kontak']

const lang = useLang()
const scrollTo = inject<ScrollToFn>(SCROLL_TO_KEY, () => {})
const reduced = useReducedMotion()

const menuOpen = ref(false)
const scrolled = ref(false)
const activeSection = ref('beranda')
let ctx: gsap.Context | null = null

const onScroll = () => {
  scrolled.value = window.scrollY > 60
}

const go = (event: MouseEvent, href: string) => {
  event.preventDefault()
  menuOpen.value = false
  scrollTo(href)
}

watch(menuOpen, (open) => {
  document.documentElement.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()

  if (reduced.value) return

  ctx = gsap.context(() => {
    gsap.from('.navbar-anim', {
      y: -24,
      opacity: 0,
      duration: 0.8,
      delay: 0.15,
      stagger: 0.08,
      ease: 'power3.out',
    })

    SECTION_IDS.forEach((id) => {
      ScrollTrigger.create({
        trigger: `#${id}`,
        start: 'top center',
        end: 'bottom center',
        onToggle: (self) => {
          if (self.isActive) activeSection.value = id
        },
      })
    })
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  ctx?.revert()
  ctx = null
  document.documentElement.style.overflow = ''
})
</script>

<template>
  <header
    class="fixed top-0 right-0 left-0 z-[1000] transition-all duration-500"
    :class="
      scrolled
        ? 'bg-cream/90 py-3 shadow-[0_2px_20px_rgba(0,0,0,0.06)] backdrop-blur-xl'
        : 'bg-transparent py-5'
    "
  >
    <div class="container-x flex items-center gap-4">
      <a
        href="#beranda"
        class="navbar-anim flex items-center gap-2.5 text-lg transition-colors duration-300"
        :class="scrolled ? 'text-ink' : 'text-white'"
        @click="go($event, '#beranda')"
      >
        <span
          class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-pine to-leaf text-white shadow-[0_6px_16px_rgba(45,106,79,0.4)]"
        >
          <Sprout class="h-5 w-5" />
        </span>
        <span class="font-semibold tracking-tight">
          Kusuma <strong class="font-extrabold">Agro Farm</strong>
        </span>
      </a>

      <div class="navbar-anim ml-auto mr-1 flex items-center gap-1.5">
        <Globe
          class="h-4 w-4"
          :class="scrolled ? 'text-sage' : 'text-white/70'"
        />
        <button
          class="rounded-full px-2.5 py-1 text-xs font-bold tracking-wide transition-all duration-300"
          :class="
            lang === 'id'
              ? scrolled
                ? 'bg-pine text-white'
                : 'bg-white/20 text-white'
              : scrolled
                ? 'text-sage hover:text-pine'
                : 'text-white/70 hover:text-white'
          "
          @click="lang = 'id'"
        >
          ID
        </button>
        <button
          class="rounded-full px-2.5 py-1 text-xs font-bold tracking-wide transition-all duration-300"
          :class="
            lang === 'en'
              ? scrolled
                ? 'bg-pine text-white'
                : 'bg-white/20 text-white'
              : scrolled
                ? 'text-sage hover:text-pine'
                : 'text-white/70 hover:text-white'
          "
          @click="lang = 'en'"
        >
          EN
        </button>
      </div>

      <nav class="navbar-anim hidden items-center gap-1 lg:flex" aria-label="Main navigation">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="navbar-link rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-300"
          :class="[
            scrolled ? 'text-moss hover:text-pine' : 'text-white/90 hover:text-white',
            !link.external && activeSection === link.href.slice(1)
              ? scrolled
                ? 'navbar-link--active text-pine'
                : 'navbar-link--active text-white'
              : '',
          ]"
          v-bind="
            link.external
              ? { target: '_blank', rel: 'noopener', 'aria-label': link.label[lang] }
              : {}
          "
          v-on="link.external ? {} : { click: (e: MouseEvent) => go(e, link.href) }"
        >
          <span v-if="link.icon" class="inline-flex items-center gap-1.5">
            <img :src="link.icon" alt="Shopee" class="h-4 w-4" />{{ link.label[lang] }}
          </span>
          <span v-else>{{ link.label[lang] }}</span>
        </a>
      </nav>

      <button
        class="navbar-anim flex flex-col gap-[5px] p-1.5 lg:hidden"
        :class="{ 'navbar__burger--open': menuOpen }"
        aria-label="Toggle menu"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        <span
          class="block h-0.5 w-6 rounded-full transition-all duration-300"
          :class="[
            scrolled || menuOpen ? 'bg-ink' : 'bg-white',
            menuOpen ? 'translate-y-[7px] rotate-45' : '',
          ]"
        ></span>
        <span
          class="block h-0.5 w-6 rounded-full transition-all duration-300"
          :class="[scrolled || menuOpen ? 'bg-ink' : 'bg-white', menuOpen ? 'opacity-0' : '']"
        ></span>
        <span
          class="block h-0.5 w-6 rounded-full transition-all duration-300"
          :class="[
            scrolled || menuOpen ? 'bg-ink' : 'bg-white',
            menuOpen ? '-translate-y-[7px] -rotate-45' : '',
          ]"
        ></span>
      </button>
    </div>
  </header>

  <!-- Mobile menu -->
  <transition name="menu-backdrop">
    <div
      v-if="menuOpen"
      class="fixed inset-0 z-[998] bg-forest/40 backdrop-blur-sm lg:hidden"
      @click="menuOpen = false"
    ></div>
  </transition>
  <nav
    class="fixed top-0 right-0 left-0 z-[999] flex flex-col gap-1 rounded-b-3xl bg-white px-6 pt-24 pb-8 shadow-[0_24px_60px_rgba(0,0,0,0.18)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden"
    :class="menuOpen ? 'navbar__links--open translate-y-0' : '-translate-y-[110%]'"
    aria-label="Mobile navigation"
  >
    <a
      v-for="(link, i) in navLinks"
      :key="link.href"
      :href="link.href"
      class="mobile-menu-link rounded-xl px-4 py-3 font-medium text-moss transition-colors hover:bg-mist hover:text-pine"
      :style="{ '--i': i }"
      v-bind="
        link.external
          ? { target: '_blank', rel: 'noopener', 'aria-label': link.label[lang] }
          : {}
      "
      v-on="link.external ? { click: () => (menuOpen = false) } : { click: (e: MouseEvent) => go(e, link.href) }"
    >
      <span v-if="link.icon" class="inline-flex items-center gap-2">
        <img :src="link.icon" alt="Shopee" class="h-4 w-4" />{{ link.label[lang] }}
      </span>
      <span v-else>{{ link.label[lang] }}</span>
    </a>
  </nav>
</template>

<style scoped>
.menu-backdrop-enter-active,
.menu-backdrop-leave-active {
  transition: opacity 0.4s ease;
}
.menu-backdrop-enter-from,
.menu-backdrop-leave-to {
  opacity: 0;
}
</style>
