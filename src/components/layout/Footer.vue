<script setup lang="ts">
import { inject } from 'vue'
import { Sprout } from '@lucide/vue'
import { navLinks, footerContent } from '../../data/content'
import { useLang, SCROLL_TO_KEY } from '../../composables/useLang'
import type { ScrollToFn } from '../../composables/useLenis'

const lang = useLang()
const scrollTo = inject<ScrollToFn>(SCROLL_TO_KEY, () => {})

const go = (event: MouseEvent, href: string) => {
  event.preventDefault()
  scrollTo(href)
}
</script>

<template>
  <footer class="relative bg-forest text-white">
    <div
      class="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-mintpop/50 to-transparent"
    ></div>
    <div class="container-x flex flex-col items-center gap-5 py-14 text-center">
      <div class="flex items-center gap-2.5 text-xl">
        <span
          class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-mintpop"
        >
          <Sprout class="h-5 w-5" />
        </span>
        <span class="font-semibold tracking-tight">
          Kusuma <strong class="font-extrabold">Agro Farm</strong>
        </span>
      </div>
      <p class="max-w-md text-sm text-white/55">
        {{ footerContent.tagline[lang] }}
      </p>
      <nav class="flex flex-wrap justify-center gap-1" aria-label="Footer navigation">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="rounded-full px-4 py-1.5 text-sm text-white/65 transition-colors duration-300 hover:bg-white/10 hover:text-white"
          v-bind="
            link.external
              ? { target: '_blank', rel: 'noopener', 'aria-label': link.label[lang] }
              : {}
          "
          v-on="link.external ? {} : { click: (e: MouseEvent) => go(e, link.href) }"
        >
          <span v-if="link.icon" class="inline-flex items-center gap-1.5">
            <img :src="link.icon" alt="Shopee" class="h-3.5 w-3.5" />{{ link.label[lang] }}
          </span>
          <span v-else>{{ link.label[lang] }}</span>
        </a>
      </nav>
      <p class="mt-2 text-xs text-white/40">
        © {{ new Date().getFullYear() }} Kusuma Agro Farm. {{ footerContent.copy[lang] }}
      </p>
    </div>
  </footer>
</template>
