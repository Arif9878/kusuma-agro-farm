<script setup lang="ts">
import { computed } from 'vue'
import { ArrowRight } from '@lucide/vue'
import {
  advantages,
  advantageSection,
  advantageCta,
} from '../../data/content'
import { useLang } from '../../composables/useLang'
import { iconMap } from '../../utils/icons'
import MotionReveal from '../motion/MotionReveal.vue'

const lang = useLang()
const icons = computed(() => advantages.map((a) => iconMap[a.icon] ?? iconMap.sprout))
</script>

<template>
  <section id="keunggulan" class="bg-cream py-24">
    <div class="container-x">
      <div class="mb-14">
        <MotionReveal :y="20">
          <span class="section-label">{{ advantageSection.label[lang] }}</span>
        </MotionReveal>
        <MotionReveal :y="24" :delay="0.05" effect="clip">
          <h2 class="section-title" v-html="advantageSection.title[lang]"></h2>
        </MotionReveal>
        <MotionReveal :y="20" :delay="0.12">
          <p
            class="mt-4 max-w-[640px] text-[1.05rem] text-sage"
            v-html="advantageSection.desc[lang]"
          ></p>
        </MotionReveal>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <MotionReveal
          v-for="(advantage, i) in advantages"
          :key="i"
          :y="44"
          :delay="i * 0.08"
          as="article"
          class="group rounded-2xl border-l-4 border-leaf bg-white p-8 shadow-[var(--shadow-card)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[var(--shadow-card-lg)]"
        >
          <span class="icon-tile mb-5 h-13 w-13 !rounded-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:-rotate-6">
            <component :is="icons[i]" class="!h-6 !w-6" />
          </span>
          <h3 class="mb-2.5 text-[1.05rem] font-bold text-forest">
            {{ advantage.title[lang] }}
          </h3>
          <p class="text-[0.9rem] leading-[1.65] text-moss">
            {{ advantage.desc[lang] }}
          </p>
        </MotionReveal>

        <!-- Bulk-order CTA tile -->
        <MotionReveal :y="44" :delay="advantages.length * 0.08" as="article">
          <a
            href="#kontak"
            class="group flex h-full min-h-[220px] flex-col justify-between gap-4 overflow-hidden rounded-2xl bg-gradient-to-br from-pine to-forest p-8 shadow-[var(--shadow-glow)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(27,67,50,0.5)]"
          >
            <div>
              <h3 class="mb-2.5 text-[1.15rem] font-bold text-white">
                {{ advantageCta.title[lang] }}
              </h3>
              <p class="text-[0.9rem] leading-[1.65] text-white/75">
                {{ advantageCta.desc[lang] }}
              </p>
            </div>
            <span
              class="inline-flex items-center gap-2 text-sm font-bold text-mintpop transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
            >
              {{ advantageCta.cta[lang] }}
              <ArrowRight class="h-4 w-4 transition-transform duration-400 group-hover:translate-x-1" />
            </span>
          </a>
        </MotionReveal>
      </div>
    </div>
  </section>
</template>
