<script setup lang="ts">
import { computed } from 'vue'
import { MessageCircle } from '@lucide/vue'
import { reasons, whyUsSection } from '../../data/content'
import { useLang } from '../../composables/useLang'
import { iconMap } from '../../utils/icons'
import MotionReveal from '../motion/MotionReveal.vue'
import MagneticButton from '../motion/MagneticButton.vue'

const lang = useLang()
const icons = computed(() => reasons.map((r) => iconMap[r.icon] ?? iconMap.sprout))
</script>

<template>
  <section class="relative overflow-hidden bg-bark py-24">
    <div
      class="pointer-events-none absolute inset-0"
      style="
        background:
          radial-gradient(46rem 30rem at 90% 0%, rgba(168, 230, 191, 0.09), transparent 60%),
          radial-gradient(40rem 28rem at 0% 100%, rgba(160, 120, 80, 0.35), transparent 60%);
      "
      aria-hidden="true"
    ></div>

    <div class="container-x relative">
      <div class="mb-14">
        <MotionReveal :y="20">
          <span class="section-label section-label--light">{{ whyUsSection.label[lang] }}</span>
        </MotionReveal>
        <MotionReveal :y="24" :delay="0.05" effect="clip">
          <h2 class="section-title section-title--light" v-html="whyUsSection.title[lang]"></h2>
        </MotionReveal>
      </div>

      <div class="mb-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MotionReveal
          v-for="(reason, i) in reasons"
          :key="i"
          :y="44"
          :delay="i * 0.08"
          as="article"
          class="glass-card p-8 text-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:bg-white/20"
        >
          <span
            class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/15 text-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-110"
          >
            <component :is="icons[i]" class="h-6 w-6" />
          </span>
          <h3 class="mb-2.5 text-[1.05rem] font-bold text-white">
            {{ reason.title[lang] }}
          </h3>
          <p class="text-[0.88rem] leading-[1.6] text-white/70">
            {{ reason.desc[lang] }}
          </p>
        </MotionReveal>
      </div>

      <MotionReveal :y="36" effect="clip" :duration="1">
        <div
          class="flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-white/20 bg-gradient-to-r from-white/15 to-white/5 p-8 backdrop-blur-md md:p-12"
        >
          <p class="min-w-[240px] flex-1 text-xl leading-snug font-semibold text-white">
            {{ whyUsSection.bannerText[lang] }}
          </p>
          <MagneticButton href="#kontak" class="btn btn--white">
            <MessageCircle />
            {{ whyUsSection.bannerCta[lang] }}
          </MagneticButton>
        </div>
      </MotionReveal>
    </div>
  </section>
</template>
