<script setup lang="ts">
import { Leaf, CheckCircle2 } from '@lucide/vue'
import { aboutSection, aboutBadge } from '../../data/content'
import { useLang } from '../../composables/useLang'
import { useGsap } from '../../composables/useGsap'
import { useReducedMotion } from '../../composables/useReducedMotion'
import MotionReveal from '../motion/MotionReveal.vue'

const lang = useLang()
const reduced = useReducedMotion()

const root = useGsap(({ gsap }) => {
  if (reduced.value) return
  gsap.matchMedia().add('(min-width: 768px)', () => {
    gsap.fromTo(
      '.about__image',
      { yPercent: -6, scale: 1.08 },
      {
        yPercent: 6,
        ease: 'none',
        scrollTrigger: {
          trigger: '.about__image-wrap',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      },
    )
  })
})
</script>

<template>
  <section id="tentang" ref="root" class="bg-cream py-24">
    <div class="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <MotionReveal effect="clip" :y="24" :duration="1.1" class="about__image-wrap relative">
        <div class="overflow-hidden rounded-3xl shadow-[var(--shadow-card-lg)]">
          <img
            :src="aboutSection.image.src"
            :alt="aboutSection.image.alt"
            class="about__image aspect-[4/3] w-full object-cover will-change-transform"
            loading="lazy"
            decoding="async"
            width="700"
            height="525"
          />
        </div>
        <MotionReveal
          :scale="0.8"
          :y="16"
          :delay="0.35"
          :duration="0.7"
          class="absolute -right-4 -bottom-5 md:-right-5"
        >
          <div
            class="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 text-3xl shadow-[var(--shadow-card)]"
          >
            <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-mint text-leaf">
              <Leaf class="h-5 w-5" />
            </span>
            <div>
              <strong class="block text-sm text-forest">{{ aboutBadge.title[lang] }}</strong>
              <p class="text-xs text-sage">{{ aboutBadge.desc[lang] }}</p>
            </div>
          </div>
        </MotionReveal>
      </MotionReveal>

      <div class="flex flex-col gap-4">
        <MotionReveal :y="20">
          <span class="section-label">{{ aboutSection.label[lang] }}</span>
        </MotionReveal>
        <MotionReveal :y="24" :delay="0.05" effect="clip">
          <h2 class="section-title">{{ aboutSection.title[lang] }}</h2>
        </MotionReveal>
        <MotionReveal :y="24" :delay="0.12">
          <p class="text-moss" v-html="aboutSection.p1[lang]"></p>
        </MotionReveal>
        <MotionReveal :y="24" :delay="0.18">
          <p class="text-moss" v-html="aboutSection.p2[lang]"></p>
        </MotionReveal>
        <MotionReveal :y="24" :delay="0.24">
          <p class="text-moss" v-html="aboutSection.p3[lang]"></p>
        </MotionReveal>
        <MotionReveal :y="20" :delay="0.3">
          <div class="mt-2 flex flex-col gap-2.5">
            <div
              v-for="(h, i) in aboutSection.highlights"
              :key="i"
              class="flex items-center gap-2.5 text-[0.95rem] font-medium text-forest"
            >
              <CheckCircle2 class="h-4.5 w-4.5 shrink-0 text-leaf" />
              {{ h[lang] }}
            </div>
          </div>
        </MotionReveal>
      </div>
    </div>
  </section>
</template>
