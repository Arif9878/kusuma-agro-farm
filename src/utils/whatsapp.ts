import type { Lang } from '../data/content'

const WHATSAPP_NUMBER = '6281249851168'

interface WhatsAppProduct {
  title: { id: string; en: string }
  price?: { id: string; en: string }
  priceNote?: { id: string; en: string }
  variants?: { name: { id: string; en: string }; price: { id: string; en: string } }[]
}

function pick(field: { id: string; en: string } | undefined, lang: Lang): string {
  return field?.[lang] ?? field?.id ?? field?.en ?? ''
}

export function getProductWhatsAppUrl(product: WhatsAppProduct, lang: Lang): string {
  const title = pick(product.title, lang)
  const price = pick(product.price, lang)
  const priceNote = pick(product.priceNote, lang)
  const variantsText = product.variants?.length
    ? product.variants
        .map((v) => `- ${pick(v.name, lang)}: ${pick(v.price, lang)}`)
        .join('\n')
    : ''

  const message =
    lang === 'id'
      ? [
          `Halo Kusuma Agro Farm, saya ingin ${price ? 'membeli' : 'menanyakan harga'} produk ${title}.`,
          price ? `Harga: ${price}` : '',
          variantsText ? `Varian:\n${variantsText}` : '',
          priceNote ? `Catatan: ${priceNote}` : '',
          'Mohon info ketersediaan dan cara pemesanannya. Terima kasih.',
        ]
          .filter(Boolean)
          .join('\n\n')
      : [
          `Hello Kusuma Agro Farm, I would like to ${price ? 'buy' : 'ask the price for'} ${title}.`,
          price ? `Price: ${price}` : '',
          variantsText ? `Variants:\n${variantsText}` : '',
          priceNote ? `Note: ${priceNote}` : '',
          'Please share availability and ordering details. Thank you.',
        ]
          .filter(Boolean)
          .join('\n\n')

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
