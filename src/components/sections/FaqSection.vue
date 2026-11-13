<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown } from '@lucide/vue'
import { faqList, faqSection } from '../../data/content'
import { useLang } from '../../composables/useLang'
import MotionReveal from '../motion/MotionReveal.vue'

const lang = useLang()
const openIndex = ref<number | null>(null)

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section class="bg-cream py-24" aria-label="FAQ Cocopeat Block">
    <div class="container-x">
      <div class="mb-14 text-center">
        <MotionReveal :y="20">
          <span class="section-label">{{ faqSection.label[lang] }}</span>
        </MotionReveal>
        <MotionReveal :y="24" :delay="0.05" effect="clip">
          <h2 class="section-title" v-html="faqSection.title[lang]"></h2>
        </MotionReveal>
      </div>

      <MotionReveal :y="32">
        <div class="mx-auto flex max-w-[800px] flex-col gap-3">
          <div
            v-for="(item, i) in faqList"
            :key="i"
            class="faq-item overflow-hidden rounded-2xl border-[1.5px] border-[#d4e6d4] bg-white transition-all duration-300"
            :class="openIndex === i ? 'border-leaf shadow-[var(--shadow-card)]' : ''"
            :data-open="openIndex === i"
          >
            <button
              class="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
              :aria-expanded="openIndex === i"
              :aria-controls="`faq-panel-${i}`"
              @click="toggle(i)"
            >
              <span class="text-base font-semibold text-forest">{{ item.q[lang] }}</span>
              <ChevronDown class="faq-chevron h-5 w-5 shrink-0 text-leaf" />
            </button>
            <div :id="`faq-panel-${i}`" class="faq-panel" role="region">
              <div>
                <p class="px-5 pb-5 text-[0.95rem] leading-[1.7] text-moss md:px-6 md:pb-6">
                  {{ item.a[lang] }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </MotionReveal>
    </div>
  </section>
</template>
