import shopeeIcon from '../assets/shopee-icon.svg'

export interface LocalText {
  id: string
  en: string
}

export interface NavLink {
  label: LocalText
  href: string
  external?: boolean
  icon?: string
}

export interface ProductVariant {
  name: LocalText
  price: LocalText
}

export interface Product {
  title: LocalText
  image: string
  desc: LocalText
  tags: { id: string[]; en: string[] }
  icon: string
  variants: ProductVariant[]
  price: LocalText
  priceNote: LocalText
  priceButton: LocalText
  label: LocalText
}

export interface Feature {
  icon: string
  title: LocalText
  desc: LocalText
}

export interface FaqItem {
  q: LocalText
  a: LocalText
}

export interface HeroStat {
  value: LocalText
  label: LocalText
}

export type Lang = 'id' | 'en'

// ── Navigation ─────────────────────────────────────────────────────────────
export const navLinks: NavLink[] = [
  { label: { id: 'Beranda', en: 'Home' }, href: '#beranda' },
  { label: { id: 'Tentang Kami', en: 'About Us' }, href: '#tentang' },
  { label: { id: 'Produk', en: 'Products' }, href: '#produk' },
  { label: { id: 'Keunggulan', en: 'Advantages' }, href: '#keunggulan' },
  { label: { id: 'Hubungi Kami', en: 'Contact Us' }, href: '#kontak' },
  {
    label: { id: 'Shopee', en: 'Shopee' },
    href: 'https://id.shp.ee/4oUNDGwB',
    external: true,
    icon: shopeeIcon,
  },
]

// ── Hero ───────────────────────────────────────────────────────────────────
export const heroContent = {
  badge: {
    id: 'Supplier Cocopeat Block Terpercaya – Jawa Timur',
    en: 'Trusted Cocopeat Block Supplier – East Java',
  },
  title: {
    id: {
      line1: 'Supplier Cocopeat Block Berkualitas di Jawa Timur',
      line2: 'Media Tanam Organik untuk Hidroponik, Nursery, dan Pertanian',
    },
    en: {
      line1: 'High-Quality Cocopeat Block Supplier in East Java',
      line2: 'Organic Growing Media for Hydroponics, Nurseries, and Farming',
    },
  },
  sub: {
    id: 'Kusuma Agro Farm adalah produsen dan supplier <strong>cocopeat block</strong> terpercaya di Madiun, Jawa Timur. Menyediakan media tanam organik dari sabut kelapa pilihan, ramah lingkungan, daya serap tinggi, cocok untuk <strong>hidroponik</strong>, <strong>nursery</strong>, dan pertanian modern. <a href="#produk">Lihat produk cocopeat &rarr;</a> atau <a href="#kontak">hubungi kami</a> untuk pemesanan ke seluruh Indonesia.',
    en: 'Kusuma Agro Farm is a trusted <strong>cocopeat block</strong> producer and supplier in Madiun, East Java. We provide organic growing media from selected coconut husks, eco-friendly, high water retention, ideal for <strong>hydroponics</strong>, <strong>nurseries</strong>, and modern agriculture. <a href="#produk">See cocopeat products &rarr;</a> or <a href="#kontak">contact us</a> to order across Indonesia.',
  },
  ctaPrimary: { id: 'Hubungi Kami', en: 'Contact Us' },
  ctaSecondary: { id: 'Lihat Produk', en: 'View Products' },
  stats: [
    { value: { id: '100%', en: '100%' }, label: { id: 'Alami', en: 'Natural' } },
    {
      value: { id: '8–10x', en: '8–10x' },
      label: { id: 'Daya Serap Air', en: 'Water Absorption' },
    },
    {
      value: { id: 'EC Rendah', en: 'Low EC' },
      label: { id: 'Aman Semua Tanaman', en: 'Safe for All Plants' },
    },
  ] as HeroStat[],
  scrollCue: { id: 'Gulir', en: 'Scroll' },
  image: {
    src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    alt: 'Lahan pertanian Kusuma Agro Farm di Madiun Jawa Timur – produsen cocopeat block',
  },
}

// ── About ──────────────────────────────────────────────────────────────────
export const aboutBadge = {
  title: { id: 'Berdiri Sejak 2018', en: 'Established Since 2018' },
  desc: { id: 'Produsen Lokal Terpercaya', en: 'Trusted Local Producer' },
}

export const aboutSection = {
  label: { id: 'Tentang Kami', en: 'About Us' },
  title: {
    id: 'Mitra Pertanian Anda yang Dapat Dipercaya',
    en: 'Your Trusted Agriculture Partner',
  },
  p1: {
    id: '<strong>Kusuma Agro Farm</strong> adalah produsen dan supplier cocopeat block UMKM berbasis di <strong>Madiun, Jawa Timur</strong>.<br>Kami berkomitmen menghadirkan <strong>media tanam cocopeat</strong> berkualitas tinggi dari sabut kelapa pilihan untuk petani, pelaku <strong>hidroponik</strong>, <strong>nursery</strong>, dan agribisnis di seluruh Indonesia.<br><a href="#produk">Lihat produk cocopeat &rarr;</a>',
    en: '<strong>Kusuma Agro Farm</strong> is a UMKM-based cocopeat block producer and supplier located in <strong>Madiun, East Java</strong>.<br>We are committed to providing high-quality <strong>cocopeat growing media</strong> from selected coconut husks for farmers, hydroponics, nurseries, and agribusinesses throughout Indonesia.<br><a href="#produk">See cocopeat products &rarr;</a>',
  },
  p2: {
    id: 'Kami memahami kebutuhan petani, pelaku <strong>hidroponik</strong>, nursery, dan distributor di Jawa Timur, Jawa Tengah, Jawa Barat, dan seluruh nusantara — sehingga setiap produk kami dirancang dengan standar kualitas ketat: kadar EC rendah, bebas gulma, daya serap optimal, dan konsistensi di setiap pengiriman.',
    en: 'We understand the needs of farmers, hydroponics practitioners, nurseries, and distributors in East Java, Central Java, West Java, and across the archipelago — so every product is designed with strict quality standards: low EC, weed-free, optimal absorption, and consistency in every shipment.',
  },
  p3: {
    id: 'Sejak 2018, kami telah melayani berbagai pelanggan dari skala rumahan hingga ekspor. Kepercayaan Anda adalah prioritas utama kami.',
    en: 'Since 2018, we have served a wide range of customers from home scale to export. Your trust is our top priority.',
  },
  highlights: [
    {
      id: 'Proses produksi higienis & terkontrol',
      en: 'Hygienic & controlled production process',
    },
    {
      id: 'Melayani seluruh wilayah Jawa Timur & Indonesia',
      en: 'Serving all East Java & Indonesia regions',
    },
    { id: 'Ekspor ke mancanegara tersedia', en: 'Export to overseas available' },
  ] as LocalText[],
  image: {
    src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=700&q=80',
    alt: 'Produksi cocopeat block Kusuma Agro Farm di Madiun, Jawa Timur',
  },
}

// ── Products ───────────────────────────────────────────────────────────────
export const productSection = {
  label: { id: 'Produk Kami', en: 'Our Products' },
  title: {
    id: 'Cocopeat Block <em>Unggulan</em>',
    en: 'Featured <em>Cocopeat Block</em>',
  },
  desc: {
    id: 'Kami menyediakan berbagai varian cocopeat block berkualitas untuk kebutuhan pertanian, hidroponik, nursery, dan distribusi dalam berbagai skala.',
    en: 'We provide a variety of high-quality cocopeat blocks for agriculture, hydroponics, nurseries, and distribution at various scales.',
  },
  cta: { id: 'Tanya Harga', en: 'Ask Price' },
}

export const products: Product[] = [
  {
    title: { id: 'Cocopeat Block 5 kg', en: 'Cocopeat Block 5 kg' },
    image: '/products/cocopeat-block-5kg.webp',
    desc: {
      id: 'Blok cocopeat padat 5 kg, cocok untuk media tanam, persemaian, hidroponik, dan hortikultura.',
      en: '5 kg solid cocopeat block, ideal for growing media, seedling, hydroponics, and horticulture.',
    },
    tags: {
      id: ['High EC', 'Low EC', 'Hidroponik', 'Hortikultura'],
      en: ['High EC', 'Low EC', 'Hydroponics', 'Horticulture'],
    },
    icon: 'package',
    variants: [
      {
        name: { id: 'Varian B / High EC', en: 'Variant B / High EC' },
        price: { id: 'IDR 38.000/blok', en: 'IDR 38,000/block' },
      },
      {
        name: { id: 'Varian Low EC', en: 'Low EC Variant' },
        price: { id: 'IDR 48.000/blok', en: 'IDR 48,000/block' },
      },
    ],
    price: {
      id: 'Mulai IDR 38.000/blok',
      en: 'From IDR 38,000/block',
    },
    priceNote: {
      id: 'Pembelian di atas 100 pcs bisa nego harga.',
      en: 'Price is negotiable for purchases above 100 pcs.',
    },
    priceButton: { id: 'Beli', en: 'Buy' },
    label: { id: '', en: '' },
  },
  {
    title: { id: 'Cocopeat Block 650g', en: 'Cocopeat Block 650g' },
    image: '/products/cocopeat-block-650.webp',
    desc: {
      id: 'Cocopeat block 650g, ukuran praktis untuk rumah tangga dan nursery kecil.',
      en: '650g cocopeat block, practical size for home use and small nurseries.',
    },
    tags: {
      id: ['Rumahan', 'Nursery', 'Pot & Polybag'],
      en: ['Home', 'Nursery', 'Pot & Polybag'],
    },
    icon: 'sprout',
    variants: [],
    price: { id: '', en: '' },
    priceNote: { id: '', en: '' },
    priceButton: { id: 'Beli', en: 'Buy' },
    label: { id: 'Segera Tersedia', en: 'Ready Soon' },
  },
  {
    title: { id: 'Cocopeat Block Custom', en: 'Cocopeat Block Custom' },
    image: '/products/cocopeat-block-custom.webp',
    desc: {
      id: 'Blok cocopeat custom, tersedia berbagai ukuran sesuai kebutuhan distributor, ekspor, dan pembelian skala besar.',
      en: 'Custom cocopeat block, available in various sizes for distributors, export, and large-scale purchases.',
    },
    tags: {
      id: ['Ekspor', 'Distributor', 'Skala Besar'],
      en: ['Export', 'Distributor', 'Large Scale'],
    },
    icon: 'boxes',
    variants: [],
    price: {
      id: 'Harga menyesuaikan kebutuhan',
      en: 'Price based on requirements',
    },
    priceNote: {
      id: 'Pembelian di atas 100 pcs bisa nego harga.',
      en: 'Price is negotiable for purchases above 100 pcs.',
    },
    priceButton: { id: 'Tanya Harga', en: 'Ask Price' },
    label: { id: '', en: '' },
  },
]

// ── Product detail ─────────────────────────────────────────────────────────
export const detailSection = {
  label: { id: 'Detail Produk', en: 'Product Details' },
  title: {
    id: 'Tekstur Cocopeat Berkualitas dan Siap Pakai',
    en: 'High-Quality, Ready-to-Use Cocopeat Texture',
  },
  desc: {
    id: 'Cocopeat kami memiliki tekstur yang baik, daya serap air tinggi, dan cocok digunakan sebagai media tanam untuk berbagai jenis tanaman. Material diproses dengan perhatian pada kualitas agar hasilnya konsisten dan siap memenuhi kebutuhan pasar retail maupun distribusi.',
    en: 'Our cocopeat has a good texture, high water absorption, and is suitable as a growing medium for various types of plants. The material is processed with attention to quality so the results are consistent and ready to meet the needs of both retail and distribution markets.',
  },
  suitable: {
    id: 'Cocok untuk nursery, hortikultura, hidroponik, dan pembibitan.',
    en: 'Suitable for nurseries, horticulture, hydroponics, and seedling.',
  },
  image: {
    src: '/products/cocopeat-detail-texture.webp',
    alt: 'Detail tekstur cocopeat Kusuma Agro Farm',
  },
}

export const detailFeatures: Feature[] = [
  {
    icon: 'droplets',
    title: { id: 'Daya Serap Tinggi', en: 'High Absorption' },
    desc: {
      id: 'Membantu menjaga kelembapan media tanam lebih optimal.',
      en: 'Helps maintain optimal moisture in the growing media.',
    },
  },
  {
    icon: 'leaf',
    title: { id: 'Ramah Lingkungan', en: 'Eco-Friendly' },
    desc: {
      id: 'Terbuat dari bahan alami yang mendukung pertanian berkelanjutan.',
      en: 'Made from natural materials that support sustainable agriculture.',
    },
  },
  {
    icon: 'sprout',
    title: { id: 'Serbaguna', en: 'Versatile' },
    desc: {
      id: 'Cocok untuk nursery, hortikultura, hidroponik, dan pembibitan.',
      en: 'Suitable for nurseries, horticulture, hydroponics, and seedling.',
    },
  },
]

// ── Advantages ─────────────────────────────────────────────────────────────
export const advantageSection = {
  label: { id: 'Keunggulan Produk', en: 'Product Advantages' },
  title: {
    id: 'Kenapa Cocopeat Block <em>Lebih Unggul?</em>',
    en: 'Why is Cocopeat Block <em>Better?</em>',
  },
  desc: {
    id: 'Dibandingkan media tanam konvensional, <strong>cocopeat block Kusuma Agro Farm</strong> dari Madiun, Jawa Timur menawarkan keunggulan nyata untuk pertumbuhan tanaman yang lebih sehat dan produktif.',
    en: 'Compared to conventional growing media, <strong>Kusuma Agro Farm cocopeat block</strong> from Madiun, East Java offers real advantages for healthier, more productive plant growth.',
  },
}

export const advantages: Feature[] = [
  {
    icon: 'recycle',
    title: { id: '100% Ramah Lingkungan', en: '100% Eco-Friendly' },
    desc: {
      id: 'Terbuat dari sabut kelapa alami Jawa Timur — limbah pertanian yang diproses menjadi media tanam bernilai tinggi tanpa bahan kimia berbahaya.',
      en: 'Made from natural coconut husk from East Java — agricultural waste processed into high-value growing media without harmful chemicals.',
    },
  },
  {
    icon: 'droplets',
    title: { id: 'Daya Serap Air Tinggi', en: 'High Water Absorption' },
    desc: {
      id: 'Mampu menyerap dan menyimpan air hingga 8–10x beratnya, menjaga kelembaban akar tanaman lebih lama — ideal untuk iklim tropis Indonesia.',
      en: 'Can absorb and retain water up to 8–10x its weight, keeping plant roots moist longer — ideal for Indonesia\'s tropical climate.',
    },
  },
  {
    icon: 'sprout',
    title: { id: 'Cocok Semua Jenis Tanaman', en: 'Suitable for All Plants' },
    desc: {
      id: 'Ideal untuk sayuran, buah-buahan, bunga, tanaman hias, stroberi, melon, cabai, dan hampir semua tanaman pertanian maupun hortikultura.',
      en: 'Ideal for vegetables, fruits, flowers, ornamentals, strawberries, melons, chilies, and almost all agricultural or horticultural crops.',
    },
  },
  {
    icon: 'zap',
    title: { id: 'Praktis & Efisien', en: 'Practical & Efficient' },
    desc: {
      id: 'Bentuk blok padat memudahkan penyimpanan, transportasi, dan pengiriman ke seluruh Indonesia. Cukup rendam air dan cocopeat siap digunakan.',
      en: 'Solid block form makes storage, transport, and shipping across Indonesia easy. Just soak in water and cocopeat is ready to use.',
    },
  },
  {
    icon: 'shield',
    title: { id: 'Kualitas Terjaga & Konsisten', en: 'Consistent Quality' },
    desc: {
      id: 'Diproduksi dengan seleksi ketat di Madiun, Jawa Timur — kadar EC rendah, bebas gulma & patogen, dan konsisten di setiap batch produksi.',
      en: 'Produced with strict selection in Madiun, East Java — low EC, weed & pathogen free, and consistent in every production batch.',
    },
  },
]

export const advantageCta = {
  title: { id: 'Pemesanan Jumlah Besar?', en: 'Bulk Ordering?' },
  desc: {
    id: 'Untuk distributor & ekspor, kami siap memenuhi kebutuhan custom Anda.',
    en: 'For distributors & export, we are ready to meet your custom needs.',
  },
  cta: { id: 'Diskusi Sekarang', en: 'Discuss Now' },
}

// ── Why us ─────────────────────────────────────────────────────────────────
export const whyUsSection = {
  label: { id: 'Mengapa Memilih Kami', en: 'Why Choose Us' },
  title: {
    id: 'Kami Hadir untuk <em>Mendukung Pertanian Anda</em>',
    en: 'We Are Here to <em>Support Your Agriculture</em>',
  },
  bannerText: {
    id: 'Siap meningkatkan hasil pertanian Anda bersama Kusuma Agro Farm?',
    en: 'Ready to boost your harvest with Kusuma Agro Farm?',
  },
  bannerCta: { id: 'Konsultasi Gratis Sekarang', en: 'Free Consultation Now' },
}

export const reasons: Feature[] = [
  {
    icon: 'trophy',
    title: { id: 'Bahan Pilihan Lokal', en: 'Selected Local Materials' },
    desc: {
      id: 'Sabut kelapa segar dipilih dari petani lokal Jawa Timur terpercaya untuk memastikan kualitas serat cocopeat terbaik.',
      en: 'Fresh coconut husks are selected from trusted East Java farmers to ensure the best cocopeat fiber quality.',
    },
  },
  {
    icon: 'coins',
    title: { id: 'Harga Kompetitif', en: 'Competitive Price' },
    desc: {
      id: 'Langsung dari produsen di Madiun tanpa perantara — harga lebih terjangkau dengan kualitas premium setara ekspor.',
      en: 'Direct from the producer in Madiun without intermediaries — more affordable prices with export-quality standards.',
    },
  },
  {
    icon: 'handshake',
    title: { id: 'Pelayanan Responsif', en: 'Responsive Service' },
    desc: {
      id: 'Tim kami siap konsultasi kebutuhan media tanam Anda, dari petani Jawa Timur hingga distributor di seluruh Indonesia.',
      en: 'Our team is ready to consult your growing media needs, from East Java farmers to distributors across Indonesia.',
    },
  },
  {
    icon: 'wheat',
    title: { id: 'Melayani Semua Segmen', en: 'Serving All Segments' },
    desc: {
      id: 'Petani, nursery, pelaku hidroponik, rumahan, distributor, hingga eksportir — semua kami layani dengan standar yang sama.',
      en: 'Farmers, nurseries, hydroponic practitioners, households, distributors, and exporters — all served with the same standard.',
    },
  },
]

// ── Service areas ──────────────────────────────────────────────────────────
export const serviceAreaSection = {
  label: { id: 'Jangkauan Layanan', en: 'Service Coverage' },
  title: {
    id: 'Kirim ke <em>Seluruh Indonesia</em>',
    en: 'Shipping <em>Across Indonesia</em>',
  },
  desc: {
    id: 'Dari Madiun, Jawa Timur — kami melayani pengiriman cocopeat block ke berbagai kota dan wilayah di Indonesia.',
    en: 'From Madiun, East Java — we deliver cocopeat blocks to cities and regions across Indonesia.',
  },
  note: {
    id: 'Tidak ada kota Anda di daftar? Kami tetap bisa kirim! Hubungi kami untuk konfirmasi pengiriman ke wilayah Anda.',
    en: 'Your city not listed? We can still deliver! Contact us to confirm shipping to your area.',
  },
}

export const serviceAreas: string[] = [
  'Malang', 'Surabaya', 'Sidoarjo', 'Pasuruan', 'Probolinggo', 'Jember',
  'Banyuwangi', 'Kediri', 'Blitar', 'Madiun', 'Mojokerto', 'Gresik',
  'Lamongan', 'Tuban', 'Bojonegoro', 'Jakarta', 'Bandung', 'Semarang',
  'Yogyakarta', 'Makassar', 'Medan', 'Palembang', 'Balikpapan', 'Denpasar',
]

// ── FAQ ────────────────────────────────────────────────────────────────────
export const faqSection = {
  label: { id: 'FAQ', en: 'FAQ' },
  title: {
    id: 'Pertanyaan yang <em>Sering Ditanyakan</em>',
    en: 'Frequently <em>Asked Questions</em>',
  },
}

export const faqList: FaqItem[] = [
  {
    q: {
      id: 'Apa itu cocopeat block dan apa kegunaannya?',
      en: 'What is a cocopeat block and what is it used for?',
    },
    a: {
      id: 'Cocopeat block adalah media tanam padat berbahan sabut kelapa yang dipadatkan. Sangat cocok digunakan sebagai media tanam hidroponik, persemaian bibit, campuran tanah pot, dan pertanian hortikultura karena memiliki daya serap air tinggi dan bersifat ramah lingkungan.',
      en: 'A cocopeat block is a solid growing medium made from compressed coconut husk. It is ideal for hydroponics, seedling nurseries, potting soil mixes, and horticulture because it has high water retention and is environmentally friendly.',
    },
  },
  {
    q: {
      id: 'Apakah cocopeat block Kusuma Agro Farm aman untuk semua jenis tanaman?',
      en: "Is Kusuma Agro Farm's cocopeat block safe for all types of plants?",
    },
    a: {
      id: 'Ya. Produk kami memiliki kadar EC rendah, pH netral (5.5–6.5), dan bebas gulma serta patogen, sehingga aman dan ideal untuk semua jenis tanaman — dari sayuran, buah-buahan, hingga tanaman hias dan bunga.',
      en: 'Yes. Our product has low EC, neutral pH (5.5–6.5), and is free from weeds and pathogens, making it safe and ideal for all types of plants — from vegetables and fruits to ornamental and flowering plants.',
    },
  },
  {
    q: {
      id: 'Bagaimana cara menggunakan cocopeat block?',
      en: 'How do you use a cocopeat block?',
    },
    a: {
      id: 'Sangat mudah: rendam blok cocopeat dalam air selama 10–15 menit, kemudian hancurkan dan aduk hingga merata. Cocopeat siap digunakan langsung sebagai media tanam atau dicampur dengan sekam, perlite, atau kompos sesuai kebutuhan.',
      en: 'Very easy: soak the cocopeat block in water for 10–15 minutes, then break it apart and mix evenly. The cocopeat is ready to use directly as a growing medium or mixed with husk, perlite, or compost as needed.',
    },
  },
  {
    q: {
      id: 'Apakah tersedia pengiriman ke luar Jawa Timur?',
      en: 'Is shipping available outside East Java?',
    },
    a: {
      id: 'Ya, kami melayani pengiriman ke seluruh Indonesia — Jawa, Sumatera, Kalimantan, Sulawesi, Bali, NTT, Papua, dan wilayah lainnya. Hubungi kami untuk informasi ongkir ke lokasi Anda.',
      en: 'Yes, we ship throughout Indonesia — Java, Sumatra, Kalimantan, Sulawesi, Bali, NTT, Papua, and other regions. Contact us for shipping rates to your location.',
    },
  },
  {
    q: {
      id: 'Berapa minimum pemesanan cocopeat block?',
      en: 'What is the minimum order for cocopeat blocks?',
    },
    a: {
      id: 'Kami melayani pemesanan dari kuantitas kecil untuk kebutuhan rumahan hingga kontainer penuh untuk ekspor dan distributor besar. Tidak ada minimum order yang ketat — hubungi kami untuk diskusi lebih lanjut.',
      en: 'We accept orders from small quantities for home use to full containers for export and large distributors. There is no strict minimum order — contact us to discuss your needs.',
    },
  },
]

// ── Contact ────────────────────────────────────────────────────────────────
export const contactSection = {
  label: { id: 'Hubungi Kami', en: 'Contact Us' },
  title: {
    id: 'Kami Siap <em>Membantu Anda</em>',
    en: 'We Are <em>Ready to Help You</em>',
  },
  desc: {
    id: 'Konsultasikan kebutuhan media tanam Anda. Tim kami akan merespons dalam 1×24 jam.',
    en: 'Consult your growing media needs. Our team will respond within 24 hours.',
  },
  details: [
    { icon: 'whatsapp', label: 'WhatsApp', value: '+6281249851168', href: 'https://wa.me/6281249851168' },
    { icon: 'mail', label: 'Email', value: 'jefriae@gmail.com', href: 'mailto:jefriae@gmail.com' },
    {
      icon: 'map-pin',
      label: 'Alamat',
      value: 'Dsn. Krajan, Ds. Suluk, Kec. Dolopo, Kabupaten Madiun, Jawa Timur 63174',
    },
    { icon: 'clock', label: 'Jam Operasional', value: 'Senin – Sabtu, 08.00 – 17.00 WIB' },
  ] as { icon: string; label: string; value: string; href?: string }[],
  form: {
    title: { id: 'Kirim Pesan', en: 'Send a Message' },
    name: { id: 'Nama Lengkap', en: 'Full Name' },
    namePlaceholder: { id: 'Contoh: Budi Santoso', en: 'e.g. Budi Santoso' },
    email: { id: 'Email', en: 'Email' },
    emailPlaceholder: { id: 'email@anda.com', en: 'you@example.com' },
    message: { id: 'Pesan', en: 'Message' },
    messagePlaceholder: {
      id: 'Ceritakan kebutuhan Anda, misal: jenis tanaman, jumlah, lokasi pengiriman...',
      en: 'Tell us your needs, e.g. plant type, quantity, delivery location...',
    },
    send: { id: 'Kirim Pesan', en: 'Send Message' },
    success: {
      id: 'Pesan berhasil dikirim! Kami akan menghubungi Anda segera.',
      en: 'Message sent successfully! We will contact you shortly.',
    },
  },
}

// ── Footer ─────────────────────────────────────────────────────────────────
export const footerContent = {
  tagline: {
    id: 'Supplier cocopeat block berkualitas dari Madiun, Jawa Timur — pengiriman ke seluruh Indonesia.',
    en: 'Quality cocopeat block supplier from Madiun, East Java — shipping across Indonesia.',
  },
  copy: {
    id: 'Hak Cipta Dilindungi.',
    en: 'All Rights Reserved.',
  },
}
