<script setup lang="ts">
import { MapPin } from '@lucide/vue'
import { serviceAreas, serviceAreaSection } from '../../data/content'
import { useLang } from '../../composables/useLang'
import { useGsap } from '../../composables/useGsap'
import { useReducedMotion } from '../../composables/useReducedMotion'
import MotionReveal from '../motion/MotionReveal.vue'

const lang = useLang()
const reduced = useReducedMotion()

const root = useGsap(({ gsap }) => {
  if (reduced.value) return
  gsap.fromTo(
    '.area-tag',
    { autoAlpha: 0, y: 18 },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.025,
      immediateRender: false,
      scrollTrigger: {
        trigger: '.area-cloud',
        start: 'top 85%',
        once: true,
      },
    },
  )
})
</script>

<template>
  <section ref="root" class="bg-mist py-24" aria-label="Area Pengiriman Cocopeat Block">
    <div class="container-x">
      <div class="mb-14 text-center">
        <MotionReveal :y="20">
          <span class="section-label">{{ serviceAreaSection.label[lang] }}</span>
        </MotionReveal>
        <MotionReveal :y="24" :delay="0.05" effect="clip">
          <h2 class="section-title" v-html="serviceAreaSection.title[lang]"></h2>
        </MotionReveal>
        <MotionReveal :y="20" :delay="0.12">
          <p class="mx-auto mt-4 max-w-[620px] text-[1.05rem] text-sage">
            {{ serviceAreaSection.desc[lang] }}
          </p>
        </MotionReveal>
      </div>

      <div class="area-cloud mb-6 flex flex-wrap justify-center gap-2.5">
        <span
          v-for="area in serviceAreas"
          :key="area"
          class="area-tag inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-mint bg-white px-4 py-1.5 text-sm font-medium text-forest transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-mint"
        >
          <MapPin class="h-3.5 w-3.5 text-leaf" />
          {{ area }}
        </span>
      </div>

      <MotionReveal :y="16" :delay="0.1">
        <p class="mt-2 text-center text-sm text-sage">
          {{ serviceAreaSection.note[lang] }}
        </p>
      </MotionReveal>
    </div>
  </section>
</template>
