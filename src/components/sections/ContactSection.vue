<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue'
import {
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  type LucideIcon,
} from '@lucide/vue'
import { contactSection } from '../../data/content'
import { useLang } from '../../composables/useLang'
import MotionReveal from '../motion/MotionReveal.vue'

const lang = useLang()

const contactIcons: Record<string, LucideIcon> = {
  whatsapp: MessageCircle,
  mail: Mail,
  'map-pin': MapPin,
  clock: Clock,
}

const detailIcons = computed(() =>
  contactSection.details.map((d) => contactIcons[d.icon] ?? Mail),
)

const form = ref({ name: '', email: '', message: '' })
const formSent = ref(false)
let resetTimer: number | undefined

function handleSubmit() {
  if (!form.value.name || !form.value.email || !form.value.message) return
  formSent.value = true

  const subject = encodeURIComponent(
    `Pesan dari ${form.value.name} – Kusuma Agro Farm`,
  )
  const body = encodeURIComponent(
    `${form.value.message}\n\n— ${form.value.name} (${form.value.email})`,
  )
  window.location.href = `mailto:jefriae@gmail.com?subject=${subject}&body=${body}`

  form.value = { name: '', email: '', message: '' }
  window.clearTimeout(resetTimer)
  resetTimer = window.setTimeout(() => (formSent.value = false), 5000)
}

onUnmounted(() => window.clearTimeout(resetTimer))

const inputClasses =
  'w-full rounded-xl border-[1.5px] border-[#d4e6d4] bg-cream px-4 py-3 text-[0.95rem] text-ink placeholder:text-sage transition-all duration-300 focus:border-leaf focus:bg-white focus:ring-4 focus:ring-leaf/15 focus:outline-none'
</script>

<template>
  <section id="kontak" class="bg-cream py-24">
    <div class="container-x grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
      <div class="flex flex-col gap-4">
        <MotionReveal :y="20">
          <span class="section-label">{{ contactSection.label[lang] }}</span>
        </MotionReveal>
        <MotionReveal :y="24" :delay="0.05" effect="clip">
          <h2 class="section-title" v-html="contactSection.title[lang]"></h2>
        </MotionReveal>
        <MotionReveal :y="20" :delay="0.12">
          <p class="text-moss">{{ contactSection.desc[lang] }}</p>
        </MotionReveal>

        <MotionReveal :y="24" :delay="0.18">
          <div class="mt-4 grid gap-5">
            <div
              v-for="(detail, i) in contactSection.details"
              :key="i"
              class="group flex items-start gap-4"
            >
              <span class="icon-tile transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:-rotate-6">
                <component :is="detailIcons[i]" />
              </span>
              <div>
                <strong class="mb-1 block text-[0.95rem] text-forest">{{ detail.label }}</strong>
                <a
                  v-if="detail.href"
                  :href="detail.href"
                  target="_blank"
                  rel="noopener"
                  class="text-sm text-moss underline decoration-leaf/40 decoration-2 underline-offset-4 transition-colors hover:text-leaf"
                >
                  {{ detail.value }}
                </a>
                <p v-else class="text-sm text-moss">{{ detail.value }}</p>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>

      <MotionReveal :y="40" :delay="0.1">
        <div class="rounded-3xl bg-white p-7 shadow-[var(--shadow-card)] md:p-10">
          <h3 class="mb-7 text-[1.3rem] font-bold text-forest">
            {{ contactSection.form.title[lang] }}
          </h3>

          <div
            v-if="formSent"
            class="mb-5 flex items-center gap-2.5 rounded-xl border border-[#95d5b2] bg-mint px-4 py-3.5 text-sm font-semibold text-forest"
            role="status"
          >
            <CheckCircle2 class="h-4.5 w-4.5 shrink-0 text-leaf" />
            {{ contactSection.form.success[lang] }}
          </div>

          <form action="mailto:jefriae@gmail.com" method="POST" enctype="text/plain" @submit.prevent="handleSubmit">
            <div class="mb-5 flex flex-col gap-2">
              <label for="name" class="text-sm font-semibold text-moss">
                {{ contactSection.form.name[lang] }}
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                :placeholder="contactSection.form.namePlaceholder[lang]"
                required
                :class="inputClasses"
              />
            </div>
            <div class="mb-5 flex flex-col gap-2">
              <label for="email" class="text-sm font-semibold text-moss">
                {{ contactSection.form.email[lang] }}
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                :placeholder="contactSection.form.emailPlaceholder[lang]"
                required
                :class="inputClasses"
              />
            </div>
            <div class="mb-6 flex flex-col gap-2">
              <label for="message" class="text-sm font-semibold text-moss">
                {{ contactSection.form.message[lang] }}
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                :placeholder="contactSection.form.messagePlaceholder[lang]"
                required
                :class="inputClasses"
              ></textarea>
            </div>
            <button type="submit" class="btn btn--primary btn--full">
              <Send />
              {{ contactSection.form.send[lang] }}
            </button>
          </form>
        </div>
      </MotionReveal>
    </div>
  </section>
</template>
