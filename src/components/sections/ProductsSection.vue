<script setup lang="ts">
import { products, productSection } from '../../data/content'
import { useLang } from '../../composables/useLang'
import MotionReveal from '../motion/MotionReveal.vue'
import ProductCard from './ProductCard.vue'

const lang = useLang()
</script>

<template>
  <section id="produk" class="bg-mist py-24">
    <div class="container-x">
      <div class="mb-14 text-center">
        <MotionReveal :y="20">
          <span class="section-label">{{ productSection.label[lang] }}</span>
        </MotionReveal>
        <MotionReveal :y="24" :delay="0.05" effect="clip">
          <h2 class="section-title" v-html="productSection.title[lang]"></h2>
        </MotionReveal>
        <MotionReveal :y="20" :delay="0.12">
          <p class="mx-auto mt-4 max-w-[600px] text-[1.05rem] text-sage">
            {{ productSection.desc[lang] }}
          </p>
        </MotionReveal>
      </div>

      <div class="grid items-stretch gap-7 md:grid-cols-2 lg:grid-cols-3">
        <ProductCard
          v-for="(product, i) in products"
          :key="product.title.en"
          :product="product"
          :index="i"
        />
      </div>
    </div>
  </section>
</template>
