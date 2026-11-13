<script setup lang="ts">
import { computed } from 'vue'
import { MessageCircle } from '@lucide/vue'
import type { Product } from '../../data/content'
import { productSection } from '../../data/content'
import { useLang } from '../../composables/useLang'
import { getProductWhatsAppUrl } from '../../utils/whatsapp'
import { iconMap } from '../../utils/icons'
import MotionReveal from '../motion/MotionReveal.vue'

const props = defineProps<{
  product: Product
  index: number
}>()

const lang = useLang()
const Icon = computed(() => iconMap[props.product.icon] ?? iconMap.package)
const whatsappUrl = computed(() => getProductWhatsAppUrl(props.product, lang.value))
</script>

<template>
  <MotionReveal
    as="article"
    :y="56"
    :delay="index * 0.12"
    :duration="0.9"
    class="group relative flex flex-col overflow-hidden rounded-[26px] border border-leaf/15 bg-white shadow-[var(--shadow-card)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-leaf/35 hover:shadow-[var(--shadow-card-lg)]"
  >
    <div class="relative aspect-[4/3] overflow-hidden bg-mist">
      <img
        :src="product.image"
        :alt="product.title[lang]"
        class="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
        loading="lazy"
        decoding="async"
      />
      <span
        v-if="product.label && product.label[lang]"
        class="absolute top-3.5 right-3.5 inline-flex min-h-[30px] items-center rounded-full border border-leaf/20 bg-white/90 px-3 py-1.5 text-xs font-bold text-[#31533d] shadow-[0_8px_20px_rgba(16,24,40,0.08)] backdrop-blur-md"
      >
        {{ product.label[lang] }}
      </span>
    </div>

    <div class="flex flex-1 flex-col p-5.5">
      <div class="flex flex-1 flex-col">
        <div class="mb-2.5 flex items-start gap-2.5">
          <span class="icon-tile !h-9 !w-9 !rounded-xl">
            <Icon />
          </span>
          <h3 class="mt-0.5 text-[1.18rem] leading-snug font-extrabold tracking-tight text-forest">
            {{ product.title[lang] }}
          </h3>
        </div>

        <p class="mb-4 text-[0.94rem] leading-[1.72] text-moss">
          {{ product.desc[lang] }}
        </p>

        <div class="mb-4.5 mt-auto flex flex-wrap gap-2">
          <span
            v-for="tag in product.tags[lang]"
            :key="tag"
            class="inline-flex min-h-[29px] items-center rounded-full border border-leaf/15 bg-leaf/10 px-2.75 py-1.5 text-xs font-bold text-leaf"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <div class="grid gap-3 border-t border-leaf/10 pt-4">
        <div v-if="product.price && product.price[lang]" class="grid gap-0.5">
          <span class="text-xs font-bold tracking-[0.06em] text-moss uppercase">
            {{ lang === 'id' ? 'Harga' : 'Price' }}
          </span>
          <strong class="text-[1.18rem] leading-snug font-extrabold text-forest">
            {{ product.price[lang] }}
          </strong>
        </div>

        <div v-if="product.variants && product.variants.length" class="grid gap-2">
          <div
            v-for="variant in product.variants"
            :key="variant.name[lang]"
            class="flex items-center justify-between gap-3 rounded-[14px] border border-leaf/10 bg-[#f8fbf7] px-3 py-2.5"
          >
            <span class="text-sm leading-snug font-bold text-[#31533d]">
              {{ variant.name[lang] }}
            </span>
            <span class="text-sm font-extrabold whitespace-nowrap text-forest">
              {{ variant.price[lang] }}
            </span>
          </div>
        </div>

        <p
          v-if="product.priceNote && product.priceNote[lang]"
          class="rounded-[14px] bg-[#fff4d6]/70 py-2.5 pr-3 pl-9 text-[0.86rem] leading-relaxed font-semibold text-[#6d5520] relative before:content-['💬'] before:absolute before:top-2.5 before:left-3 before:text-sm"
        >
          {{ product.priceNote[lang] }}
        </p>

        <a
          :href="whatsappUrl"
          class="btn btn--primary btn--sm mt-0.5 w-full"
          target="_blank"
          rel="noopener"
        >
          <MessageCircle />
          {{
            product.price && product.price[lang]
              ? product.priceButton[lang]
              : productSection.cta[lang]
          }}
        </a>
      </div>
    </div>
  </MotionReveal>
</template>
