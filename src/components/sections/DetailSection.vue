<script setup lang="ts">
import { computed } from 'vue'
import { detailSection, detailFeatures } from '../../data/content'
import { useLang } from '../../composables/useLang'
import { useGsap } from '../../composables/useGsap'
import { useReducedMotion } from '../../composables/useReducedMotion'
import { iconMap } from '../../utils/icons'
import MotionReveal from '../motion/MotionReveal.vue'

const lang = useLang()
const reduced = useReducedMotion()

const featureIcons = computed(() =>
  detailFeatures.map((f) => iconMap[f.icon] ?? iconMap.sprout),
)

const root = useGsap(({ gsap }) => {
  if (reduced.value) return
  gsap.matchMedia().add('(min-width: 768px)', () => {
    gsap.fromTo(
      '.detail__image',
      { scale: 1.1 },
      {
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.detail__image-wrap',
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
  <section ref="root" class="overflow-hidden py-24">
    <div class="container-x grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
      <MotionReveal effect="clip" :y="24" :duration="1.1" class="detail__image-wrap">
        <div
          class="overflow-hidden rounded-[28px] bg-[#eef4ec] shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
        >
          <img
            :src="detailSection.image.src"
            :alt="detailSection.image.alt"
            class="detail__image aspect-[4/3] h-full w-full object-cover will-change-transform"
            loading="lazy"
            decoding="async"
          />
        </div>
      </MotionReveal>

      <div>
        <MotionReveal :y="20">
          <span class="section-label">{{ detailSection.label[lang] }}</span>
        </MotionReveal>
        <MotionReveal :y="24" :delay="0.05" effect="clip">
          <h2 class="section-title" v-html="detailSection.title[lang]"></h2>
        </MotionReveal>
        <MotionReveal :y="24" :delay="0.12">
          <p class="mt-4 mb-6 text-moss">{{ detailSection.desc[lang] }}</p>
        </MotionReveal>

        <div class="grid gap-4">
          <MotionReveal
            v-for="(feature, i) in detailFeatures"
            :key="i"
            :y="28"
            :delay="0.15 + i * 0.08"
          >
            <div
              class="flex gap-4 rounded-2xl border border-[#e6efe4] bg-[#f8fbf7] p-5 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-leaf/30 hover:shadow-[var(--shadow-card)]"
            >
              <span class="icon-tile">
                <component :is="featureIcons[i]" />
              </span>
              <div>
                <h4 class="mb-1 text-lg font-bold text-[#1f3d2b]">{{ feature.title[lang] }}</h4>
                <p class="text-[0.95rem] leading-relaxed text-[#627166]">
                  {{ feature.desc[lang] }}
                </p>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal :y="20" :delay="0.4">
            <p class="mt-1 text-sm font-semibold text-sage">
              {{ detailSection.suitable[lang] }}
            </p>
          </MotionReveal>
        </div>
      </div>
    </div>
  </section>
</template>
