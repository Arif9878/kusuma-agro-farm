import { inject, type Ref } from 'vue'
import type { Lang } from '../data/content'

export const LANG_KEY = Symbol('lang')
export const SCROLL_TO_KEY = Symbol('scroll-to')
export const SCROLL_TO_TOP_KEY = Symbol('scroll-to-top')

export function useLang(): Ref<Lang> {
  const lang = inject<Ref<Lang>>(LANG_KEY)
  if (!lang) throw new Error('useLang: lang provider not found')
  return lang
}
