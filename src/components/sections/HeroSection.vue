<script setup lang="ts">
import { MessageCircle, ShoppingBag, Sprout } from '@lucide/vue'
import { heroContent } from '../../data/content'
import { useLang } from '../../composables/useLang'
import { useGsap } from '../../composables/useGsap'
import { useReducedMotion } from '../../composables/useReducedMotion'
import MotionReveal from '../motion/MotionReveal.vue'
import MotionText from '../motion/MotionText.vue'
import MagneticButton from '../motion/MagneticButton.vue'

const lang = useLang()
const reduced = useReducedMotion()

const root = useGsap(({ gsap }) => {
  if (reduced.value) return

  const mm = gsap.matchMedia()

  // Parallax on larger screens only; mobile keeps interactions lightweight.
  mm.add('(min-width: 768px)', () => {
    gsap.to('.hero__image', {
      yPercent: 18,
      ease: 'none',
      scrollTrigger: {
        trigger: root.value,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
    gsap.to('.hero__content', {
      yPercent: -10,
      opacity: 0.15,
      ease: 'none',
      scrollTrigger: {
        trigger: root.value,
        start: 'top top',
        end: '70% top',
        scrub: true,
      },
    })
  })
})
</script>

<template>
  <section
    id="beranda"
    ref="root"
    class="relative flex min-h-screen items-center overflow-hidden bg-forest"
  >
    <!-- Background -->
    <div class="absolute inset-0">
      <MotionReveal
        as="div"
        :y="0"
        :scale="1.15"
        :duration="1.8"
        trigger="mount"
        class="absolute inset-0 will-change-transform"
      >
        <img
          :src="heroContent.image.src"
          :alt="heroContent.image.alt"
          class="hero__image h-full w-full object-cover opacity-40"
          decoding="async"
        />
      </MotionReveal>
      <div
        class="absolute inset-0 bg-gradient-to-br from-forest/90 via-pine/70 to-cocoa/60"
      ></div>
      <div
        class="pointer-events-none absolute inset-0 opacity-60"
        style="
          background:
            radial-gradient(52rem 30rem at 85% -10%, rgba(168, 230, 191, 0.16), transparent 60%),
            radial-gradient(40rem 26rem at -10% 110%, rgba(124, 92, 50, 0.35), transparent 60%);
        "
      ></div>
    </div>

    <!-- Content -->
    <div
      class="hero__content container-x relative z-10 max-w-[820px] pt-32 pb-24 will-change-transform"
    >
      <MotionReveal :y="20" :delay="0.1" :duration="0.8" trigger="mount">
        <span class="hero__badge">
          <Sprout />
          {{ heroContent.badge[lang] }}
        </span>
      </MotionReveal>

      <h1 class="hero__title mt-6">
        <MotionText
          as="span"
          class="block"
          mode="mount"
          :delay="0.22"
          :text="heroContent.title[lang].line1"
        />
        <MotionText
          as="span"
          class="hero__title-em mt-2 block"
          mode="mount"
          :delay="0.36"
          :stagger="0.03"
          :text="heroContent.title[lang].line2"
        />
      </h1>

      <MotionReveal :y="24" :delay="0.55" trigger="mount">
        <p
          class="mb-10 max-w-[620px] text-[clamp(1rem,1.8vw,1.15rem)] leading-[1.75] text-white/80"
          v-html="heroContent.sub[lang]"
        ></p>
      </MotionReveal>

      <MotionReveal :y="24" :delay="0.68" trigger="mount">
        <div class="mb-14 flex flex-wrap gap-4">
          <MagneticButton href="#kontak" class="btn btn--primary">
            <MessageCircle />
            {{ heroContent.ctaPrimary[lang] }}
          </MagneticButton>
          <a href="#produk" class="btn btn--outline">
            <ShoppingBag />
            {{ heroContent.ctaSecondary[lang] }}
          </a>
        </div>
      </MotionReveal>

      <MotionReveal :y="20" :delay="0.82" trigger="mount">
        <div class="flex flex-wrap items-center gap-x-6 gap-y-4">
          <template v-for="(stat, i) in heroContent.stats" :key="i">
            <div class="flex flex-col">
              <strong class="text-2xl leading-none font-extrabold text-white">
                {{ stat.value[lang] }}
              </strong>
              <span class="mt-1.5 text-[0.72rem] tracking-[0.08em] text-white/60 uppercase">
                {{ stat.label[lang] }}
              </span>
            </div>
            <div
              v-if="i < heroContent.stats.length - 1"
              class="h-10 w-px bg-white/25"
              aria-hidden="true"
            ></div>
          </template>
        </div>
      </MotionReveal>
    </div>

    <!-- Scroll cue -->
    <div
      class="absolute right-8 bottom-8 z-10 hidden flex-col items-center gap-2.5 text-white/50 md:flex"
    >
      <span class="text-[10px] font-semibold tracking-[0.32em] uppercase">
        {{ heroContent.scrollCue[lang] }}
      </span>
      <span class="hero__scroll-cue-line" aria-hidden="true"></span>
    </div>
  </section>
</template>
