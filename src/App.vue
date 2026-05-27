<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// ── Navbar ──────────────────────────────────────────────────────────────────
const menuOpen = ref(false);
const scrolled = ref(false);

import shopeeIcon from './assets/shopee-icon.svg';

const lang = ref('id');
const navLinks = [
  { label: {id: "Beranda", en: "Home"}, href: "#beranda" },
  { label: {id: "Tentang Kami", en: "About Us"}, href: "#tentang" },
  { label: {id: "Produk", en: "Products"}, href: "#produk" },
  { label: {id: "Keunggulan", en: "Advantages"}, href: "#keunggulan" },
  { label: {id: "Hubungi Kami", en: "Contact Us"}, href: "#kontak" },
  { label: {id: "Shopee", en: "Shopee"}, href: "https://id.shp.ee/4oUNDGwB", external: true, icon: shopeeIcon },
];

// ── About Section Bilingual Content ──
const aboutBadge = {
  title: { id: "Berdiri Sejak 2018", en: "Established Since 2018" },
  desc: { id: "Produsen Lokal Terpercaya", en: "Trusted Local Producer" }
};
const aboutSection = {
  label: { id: "Tentang Kami", en: "About Us" },
  title: { id: "Mitra Pertanian Anda yang Dapat Dipercaya", en: "Your Trusted Agriculture Partner" },
  p1: {
    id: '<strong>Kusuma Agro Farm</strong> adalah produsen dan supplier cocopeat block UMKM berbasis di <strong>Madiun, Jawa Timur</strong>.<br>Kami berkomitmen menghadirkan <strong>media tanam cocopeat</strong> berkualitas tinggi dari sabut kelapa pilihan untuk petani, pelaku <strong>hidroponik</strong>, <strong>nursery</strong>, dan agribisnis di seluruh Indonesia.<br><a href="#produk">Lihat produk cocopeat &rarr;</a>',
    en: '<strong>Kusuma Agro Farm</strong> is a UMKM-based cocopeat block producer and supplier located in <strong>Madiun, East Java</strong>.<br>We are committed to providing high-quality <strong>cocopeat growing media</strong> from selected coconut husks for farmers, hydroponics, nurseries, and agribusinesses throughout Indonesia.<br><a href="#produk">See cocopeat products &rarr;</a>'
  },
  p2: {
    id: 'Kami memahami kebutuhan petani, pelaku <strong>hidroponik</strong>, nursery, dan distributor di Jawa Timur, Jawa Tengah, Jawa Barat, dan seluruh nusantara — sehingga setiap produk kami dirancang dengan standar kualitas ketat: kadar EC rendah, bebas gulma, daya serap optimal, dan konsistensi di setiap pengiriman.',
    en: 'We understand the needs of farmers, hydroponics practitioners, nurseries, and distributors in East Java, Central Java, West Java, and across the archipelago — so every product is designed with strict quality standards: low EC, weed-free, optimal absorption, and consistency in every shipment.'
  },
  p3: {
    id: 'Sejak 2018, kami telah melayani berbagai pelanggan dari skala rumahan hingga ekspor. Kepercayaan Anda adalah prioritas utama kami.',
    en: 'Since 2018, we have served a wide range of customers from home scale to export. Your trust is our top priority.'
  }
};
const aboutHighlights = [
  { id: "Proses produksi higienis & terkontrol", en: "Hygienic & controlled production process" },
  { id: "Melayani seluruh wilayah Jawa Timur & Indonesia", en: "Serving all East Java & Indonesia regions" },
  { id: "Ekspor ke mancanegara tersedia", en: "Export to overseas available" }
];

// ── Product Section Bilingual Content ──
const productSection = {
  label: { id: "Produk Kami", en: "Our Products" },
  title: { id: "Cocopeat Block <em>Unggulan</em>", en: "Featured <em>Cocopeat Block</em>" },
  desc: {
    id: "Kami menyediakan berbagai varian <strong>cocopeat block</strong> berkualitas untuk kebutuhan pertanian, hidroponik, nursery, dan distribusi dalam berbagai skala.",
    en: "We provide a variety of high-quality <strong>cocopeat blocks</strong> for agriculture, hydroponics, nurseries, and distribution at various scales."
  },
  cta: { id: "Tanya Harga", en: "Ask Price" }
};

// ── Detail Section Bilingual Content ──
const detailSection = {
  label: { id: "Detail Produk", en: "Product Details" },
  title: { id: "Tekstur Cocopeat Berkualitas dan Siap Pakai", en: "High-Quality, Ready-to-Use Cocopeat Texture" },
  desc: {
    id: "Cocopeat kami memiliki tekstur yang baik, daya serap air tinggi, dan cocok digunakan sebagai media tanam untuk berbagai jenis tanaman. Material diproses dengan perhatian pada kualitas agar hasilnya konsisten dan siap memenuhi kebutuhan pasar retail maupun distribusi.",
    en: "Our cocopeat has a good texture, high water absorption, and is suitable as a growing medium for various types of plants. The material is processed with attention to quality so the results are consistent and ready to meet the needs of both retail and distribution markets."
  },
  suitable: {
    id: "Cocok untuk nursery, hortikultura, hidroponik, dan pembibitan.",
    en: "Suitable for nurseries, horticulture, hydroponics, and seedling."
  }
};
const detailFeatures = [
  {
    title: { id: "Daya Serap Tinggi", en: "High Absorption" },
    desc: { id: "Membantu menjaga kelembapan media tanam lebih optimal.", en: "Helps maintain optimal moisture in the growing media." }
  },
  {
    title: { id: "Ramah Lingkungan", en: "Eco-Friendly" },
    desc: { id: "Terbuat dari bahan alami yang mendukung pertanian berkelanjutan.", en: "Made from natural materials that support sustainable agriculture." }
  },
  {
    title: { id: "Serbaguna", en: "Versatile" },
    desc: { id: "Cocok untuk nursery, hortikultura, hidroponik, dan pembibitan.", en: "Suitable for nurseries, horticulture, hydroponics, and seedling." }
  }
];

function smoothScroll(e, href) {
  e.preventDefault();
  menuOpen.value = false;
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function onScroll() {
  scrolled.value = window.scrollY > 60;
}

onMounted(() => window.addEventListener("scroll", onScroll));
onUnmounted(() => window.removeEventListener("scroll", onScroll));

// ── FAQ Bilingual Content ──
const faqList = [
  {
    q: {
      id: "Apa itu cocopeat block dan apa kegunaannya?",
      en: "What is a cocopeat block and what is it used for?"
    },
    a: {
      id: "Cocopeat block adalah media tanam padat berbahan sabut kelapa yang dipadatkan. Sangat cocok digunakan sebagai media tanam hidroponik, persemaian bibit, campuran tanah pot, dan pertanian hortikultura karena memiliki daya serap air tinggi dan bersifat ramah lingkungan.",
      en: "A cocopeat block is a solid growing medium made from compressed coconut husk. It is ideal for hydroponics, seedling nurseries, potting soil mixes, and horticulture because it has high water retention and is environmentally friendly."
    }
  },
  {
    q: {
      id: "Apakah cocopeat block Kusuma Agro Farm aman untuk semua jenis tanaman?",
      en: "Is Kusuma Agro Farm's cocopeat block safe for all types of plants?"
    },
    a: {
      id: "Ya. Produk kami memiliki kadar EC rendah, pH netral (5.5–6.5), dan bebas gulma serta patogen, sehingga aman dan ideal untuk semua jenis tanaman — dari sayuran, buah-buahan, hingga tanaman hias dan bunga.",
      en: "Yes. Our product has low EC, neutral pH (5.5–6.5), and is free from weeds and pathogens, making it safe and ideal for all types of plants — from vegetables and fruits to ornamental and flowering plants."
    }
  },
  {
    q: {
      id: "Bagaimana cara menggunakan cocopeat block?",
      en: "How do you use a cocopeat block?"
    },
    a: {
      id: "Sangat mudah: rendam blok cocopeat dalam air selama 10–15 menit, kemudian hancurkan dan aduk hingga merata. Cocopeat siap digunakan langsung sebagai media tanam atau dicampur dengan sekam, perlite, atau kompos sesuai kebutuhan.",
      en: "Very easy: soak the cocopeat block in water for 10–15 minutes, then break it apart and mix evenly. The cocopeat is ready to use directly as a growing medium or mixed with husk, perlite, or compost as needed."
    }
  },
  {
    q: {
      id: "Apakah tersedia pengiriman ke luar Jawa Timur?",
      en: "Is shipping available outside East Java?"
    },
    a: {
      id: "Ya, kami melayani pengiriman ke seluruh Indonesia — Jawa, Sumatera, Kalimantan, Sulawesi, Bali, NTT, Papua, dan wilayah lainnya. Hubungi kami untuk informasi ongkir ke lokasi Anda.",
      en: "Yes, we ship throughout Indonesia — Java, Sumatra, Kalimantan, Sulawesi, Bali, NTT, Papua, and other regions. Contact us for shipping rates to your location."
    }
  },
  {
    q: {
      id: "Berapa minimum pemesanan cocopeat block?",
      en: "What is the minimum order for cocopeat blocks?"
    },
    a: {
      id: "Kami melayani pemesanan dari kuantitas kecil untuk kebutuhan rumahan hingga kontainer penuh untuk ekspor dan distributor besar. Tidak ada minimum order yang ketat — hubungi kami untuk diskusi lebih lanjut.",
      en: "We accept orders from small quantities for home use to full containers for export and large distributors. There is no strict minimum order — contact us to discuss your needs."
    }
  }
];

// ── Produk ───────────────────────────────────────────────────────────────────
const products = [
  {
    title: {id: "Cocopeat Block 5 kg", en: "Cocopeat Block 5 kg"},
    image: "/products/cocopeat-block-5kg.webp",
    desc: {
      id: "Blok cocopeat padat 5 kg, cocok untuk media tanam, persemaian, dan hortikultura.",
      en: "5 kg solid cocopeat block, ideal for growing media, seedling, and horticulture."
    },
    tags: {id: ["Hidroponik", "Persemaian", "Hortikultura"], en: ["Hydroponics", "Seedling", "Horticulture"]},
    icon: "🌿",
    price: {id: "IDR 55.950/blok", en: "IDR 55,950/block"},
    label: {id: "", en: ""}
  },
  {
    title: {id: "Cocopeat Block 650g", en: "Cocopeat Block 650g"},
    image: "/products/cocopeat-block-650.webp",
    desc: {
      id: "Cocopeat block 650g, ukuran praktis untuk rumah tangga dan nursery kecil.",
      en: "650g cocopeat block, practical size for home use and small nurseries."
    },
    tags: {id: ["Rumahan", "Nursery", "Pot & Polybag"], en: ["Home", "Nursery", "Pot & Polybag"]},
    icon: "🪴",
    price: {id: "", en: ""},
    label: {id: "Segera Tersedia", en: "Ready Soon"}
  },
  {
    title: {id: "Cocopeat Block Custom", en: "Cocopeat Block Custom"},
    image: "/products/cocopeat-block-custom.webp",
    desc: {
      id: "Blok cocopeat custom, tersedia berbagai ukuran sesuai kebutuhan Anda.",
      en: "Custom cocopeat block, available in various sizes to suit your needs."
    },
    tags: {id: ["Ekspor", "Distributor", "Skala Besar"], en: ["Export", "Distributor", "Large Scale"]},
    icon: "📦",
    price: {id: "", en: ""},
    label: {id: "", en: ""},
  },
];

// ── Keunggulan ───────────────────────────────────────────────────────────────
const advantages = [
  {
    icon: "♻️",
    title: {id: "100% Ramah Lingkungan", en: "100% Eco-Friendly"},
    desc: {
      id: "Terbuat dari sabut kelapa alami Jawa Timur — limbah pertanian yang diproses menjadi media tanam bernilai tinggi tanpa bahan kimia berbahaya.",
      en: "Made from natural coconut husk from East Java — agricultural waste processed into high-value growing media without harmful chemicals."
    },
  },
  {
    icon: "💧",
    title: {id: "Daya Serap Air Tinggi", en: "High Water Absorption"},
    desc: {
      id: "Mampu menyerap dan menyimpan air hingga 8–10x beratnya, menjaga kelembaban akar tanaman lebih lama — ideal untuk iklim tropis Indonesia.",
      en: "Can absorb and retain water up to 8–10x its weight, keeping plant roots moist longer — ideal for Indonesia's tropical climate."
    },
  },
  {
    icon: "🌱",
    title: {id: "Cocok Semua Jenis Tanaman", en: "Suitable for All Plants"},
    desc: {
      id: "Ideal untuk sayuran, buah-buahan, bunga, tanaman hias, stroberi, melon, cabai, dan hampir semua tanaman pertanian maupun hortikultura.",
      en: "Ideal for vegetables, fruits, flowers, ornamentals, strawberries, melons, chilies, and almost all agricultural or horticultural crops."
    },
  },
  {
    icon: "⚡",
    title: {id: "Praktis & Efisien", en: "Practical & Efficient"},
    desc: {
      id: "Bentuk blok padat memudahkan penyimpanan, transportasi, dan pengiriman ke seluruh Indonesia. Cukup rendam air dan cocopeat siap digunakan.",
      en: "Solid block form makes storage, transport, and shipping across Indonesia easy. Just soak in water and cocopeat is ready to use."
    },
  },
  {
    icon: "✅",
    title: {id: "Kualitas Terjaga & Konsisten", en: "Consistent Quality"},
    desc: {
      id: "Diproduksi dengan seleksi ketat di Madiun, Jawa Timur — kadar EC rendah, bebas gulma & patogen, dan konsisten di setiap batch produksi.",
      en: "Produced with strict selection in Madiun, East Java — low EC, weed & pathogen free, and consistent in every production batch."
    },
  },
];

// ── Mengapa Kami ─────────────────────────────────────────────────────────────
const reasons = [
  {
    icon: "🏆",
    title: {id: "Bahan Pilihan Lokal", en: "Selected Local Materials"},
    desc: {
      id: "Sabut kelapa segar dipilih dari petani lokal Jawa Timur terpercaya untuk memastikan kualitas serat cocopeat terbaik.",
      en: "Fresh coconut husks are selected from trusted East Java farmers to ensure the best cocopeat fiber quality."
    },
  },
  {
    icon: "💰",
    title: {id: "Harga Kompetitif", en: "Competitive Price"},
    desc: {
      id: "Langsung dari produsen di Madiun tanpa perantara — harga lebih terjangkau dengan kualitas premium setara ekspor.",
      en: "Direct from the producer in Madiun without intermediaries — more affordable prices with export-quality standards."
    },
  },
  {
    icon: "🤝",
    title: {id: "Pelayanan Responsif", en: "Responsive Service"},
    desc: {
      id: "Tim kami siap konsultasi kebutuhan media tanam Anda, dari petani Jawa Timur hingga distributor di seluruh Indonesia.",
      en: "Our team is ready to consult your growing media needs, from East Java farmers to distributors across Indonesia."
    },
  },
  {
    icon: "🌾",
    title: {id: "Melayani Semua Segmen", en: "Serving All Segments"},
    desc: {
      id: "Petani, nursery, pelaku hidroponik, rumahan, distributor, hingga eksportir — semua kami layani dengan standar yang sama.",
      en: "Farmers, nurseries, hydroponic practitioners, households, distributors, and exporters — all served with the same standard."
    },
  },
];

// ── Area Layanan ──────────────────────────────────────────────────────────────
const serviceAreas = {
  id: [
    "Malang", "Surabaya", "Sidoarjo", "Pasuruan", "Probolinggo", "Jember", "Banyuwangi", "Kediri", "Blitar", "Madiun", "Mojokerto", "Gresik", "Lamongan", "Tuban", "Bojonegoro", "Jakarta", "Bandung", "Semarang", "Yogyakarta", "Makassar", "Medan", "Palembang", "Balikpapan", "Denpasar"
  ],
  en: [
    "Malang", "Surabaya", "Sidoarjo", "Pasuruan", "Probolinggo", "Jember", "Banyuwangi", "Kediri", "Blitar", "Madiun", "Mojokerto", "Gresik", "Lamongan", "Tuban", "Bojonegoro", "Jakarta", "Bandung", "Semarang", "Yogyakarta", "Makassar", "Medan", "Palembang", "Balikpapan", "Denpasar"
  ]
};

// ── Kontak ────────────────────────────────────────────────────────────────────
const form = ref({ name: "", email: "", message: "" });
const formSent = ref(false);

const contactText = {
  id: {
    title: "Kontak Kami",
    name: "Nama",
    email: "Email",
    message: "Pesan",
    send: "Kirim Pesan",
    sent: "Pesan berhasil dikirim!"
  },
  en: {
    title: "Contact Us",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send Message",
    sent: "Message sent successfully!"
  }
};

function handleSubmit() {
  if (!form.value.name || !form.value.email || !form.value.message) return;
  formSent.value = true;
  form.value = { name: "", email: "", message: "" };
  setTimeout(() => (formSent.value = false), 5000);
}
</script>

<template>
  <div class="app">
    <!-- ════════════════════════ NAVBAR ════════════════════════ -->
    <header class="navbar" :class="{ 'navbar--scrolled': scrolled }">
      <div class="container navbar__inner">
        <a
          href="#beranda"
          class="navbar__logo"
          @click.prevent="smoothScroll($event, '#beranda')"
        >
          <span class="navbar__logo-icon">🌿</span>
          <span class="navbar__logo-text"
            >Kusuma <strong>Agro Farm</strong></span
          >
        </a>
        <div class="navbar__lang-toggle" style="margin-left:auto;display:flex;align-items:center;gap:4px;">
  <span style="font-size:1.2em;vertical-align:middle;margin-right:4px;">🌐</span>
  <button :class="{active: lang==='id'}" @click="lang='id'" style="padding:2px 8px;">ID</button>
  <button :class="{active: lang==='en'}" @click="lang='en'" style="padding:2px 8px;">EN</button>
</div>
        <nav class="navbar__links" :class="{ 'navbar__links--open': menuOpen }">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="navbar__link"
            v-bind="link.external ? { target: '_blank', rel: 'noopener', 'aria-label': link.label[lang] } : {}"
            v-on="!link.external ? { click: (e) => smoothScroll(e, link.href) } : {}"
            ><span v-if="link.icon" style="display:inline-flex;align-items:center;"><img :src="link.icon" alt="Shopee" style="height:1em;width:1em;vertical-align:middle;margin-right:4px;display:inline;" />{{ link.label[lang] }}</span><span v-else>{{ link.label[lang] }}</span></a
          >
        </nav>

        <button
          class="navbar__burger"
          :class="{ 'navbar__burger--open': menuOpen }"
          @click="menuOpen = !menuOpen"
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>

    <!-- ════════════════════════ HERO ════════════════════════ -->
    <section id="beranda" class="hero">
      <div class="hero__bg-overlay"></div>
      <div class="container hero__content">
        <span class="hero__badge">
  <template v-if="lang==='id'">🌱 Supplier Cocopeat Block Terpercaya – Jawa Timur</template>
  <template v-else>🌱 Trusted Cocopeat Block Supplier – East Java</template>
</span>
        <h1 class="hero__title">
  <template v-if="lang==='id'">
    Supplier Cocopeat Block Berkualitas di Jawa Timur<br />
    Media Tanam Organik untuk Hidroponik, Nursery, dan Pertanian
  </template>
  <template v-else>
    High-Quality Cocopeat Block Supplier in East Java<br />
    Organic Growing Media for Hydroponics, Nurseries, and Farming
  </template>
</h1>
<p class="hero__sub">
  <template v-if="lang==='id'">
    Kusuma Agro Farm adalah produsen dan supplier <strong>cocopeat block</strong> terpercaya di Madiun, Jawa Timur. Menyediakan media tanam organik dari sabut kelapa pilihan, ramah lingkungan, daya serap tinggi, cocok untuk <strong>hidroponik</strong>, <strong>nursery</strong>, dan pertanian modern. <a href="#produk">Lihat produk cocopeat &rarr;</a> atau <a href="#kontak">hubungi kami</a> untuk pemesanan ke seluruh Indonesia.
  </template>
  <template v-else>
    Kusuma Agro Farm is a trusted <strong>cocopeat block</strong> producer and supplier in Madiun, East Java. We provide organic growing media from selected coconut husks, eco-friendly, high water retention, ideal for <strong>hydroponics</strong>, <strong>nurseries</strong>, and modern agriculture. <a href="#produk">See cocopeat products &rarr;</a> or <a href="#kontak">contact us</a> to order across Indonesia.
  </template>
</p>
        <div class="hero__cta">
          <a
            href="#kontak"
            class="btn btn--primary"
            @click="smoothScroll($event, '#kontak')"
            >💬 Hubungi Kami</a
          >
          <a
            href="#produk"
            class="btn btn--outline"
            @click="smoothScroll($event, '#produk')"
            >🛒 Lihat Produk</a
          >
        </div>
        <div class="hero__stats">
          <div class="hero__stat"><strong>100%</strong><span>Alami</span></div>
          <div class="hero__stat-divider"></div>
          <div class="hero__stat">
            <strong>8–10x</strong><span>Daya Serap Air</span>
          </div>
          <div class="hero__stat-divider"></div>
          <div class="hero__stat">
            <strong>EC Rendah</strong><span>Aman Semua Tanaman</span>
          </div>
        </div>
      </div>
      <div class="hero__image-wrap">
        <img
          src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80"
          alt="Lahan pertanian Kusuma Agro Farm di Madiun Jawa Timur – produsen cocopeat block"
          class="hero__image"
        />
      </div>
    </section>

    <!-- ════════════════════════ TENTANG KAMI ════════════════════════ -->
    <section id="tentang" class="section section--light">
      <div class="container about">
        <div class="about__image-wrap">
          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=700&q=80"
            alt="Produksi cocopeat block Kusuma Agro Farm di Madiun, Jawa Timur"
            class="about__image"
            loading="lazy"
            width="700"
            height="525"
          />
          <div class="about__badge-float">
            <span>🌿</span>
            <div>
              <strong>{{ aboutBadge.title[lang] }}</strong>
              <p>{{ aboutBadge.desc[lang] }}</p>
            </div>
          </div>
        </div>
        <div class="about__content">
          <div class="section-label">{{ aboutSection.label[lang] }}</div>
<h2 class="section-title">{{ aboutSection.title[lang] }}</h2>
<p v-html="aboutSection.p1[lang]"></p>
<p v-html="aboutSection.p2[lang]"></p>
<p v-html="aboutSection.p3[lang]"></p>
          <div class="about__highlights">
  <div class="about__highlight" v-for="(h, i) in aboutHighlights" :key="i">
    <span>✅</span> {{ h[lang] }}
  </div>
</div>
        </div>
      </div>
    </section>

    <!-- ════════════════════════ PRODUK ════════════════════════ -->
    <section id="produk" class="section section--green-light">
      <div class="container">
        <div class="section-header section-header--center">
          <div class="section-label">{{ productSection.label[lang] }}</div>
          <h2 class="section-title" v-html="productSection.title[lang]"></h2>
          <p class="section-desc">{{ productSection.desc[lang] }}</p>
        </div>

        <div class="product-grid">
          <article class="product-card" v-for="p in products" :key="p.title">
            <div class="product-image-wrap">
              <img
                :src="p.image"
                :alt="p.title"
                class="product-image"
                loading="lazy"
              />
            </div>

            <div class="product-content">
              <h3 class="product-content__title" style="margin-bottom:0;">
  {{ p.title[lang] }}<span v-if="p.label[lang]" class="product-content__label product-content__label--soon" style="font-size:0.95em; margin-left:8px; white-space:nowrap;">({{ p.label[lang] }})</span>
</h3>
              <p class="product-content__desc">{{ p.desc[lang] }}</p>

              <div v-if="p.price[lang]" class="product-content__price product-content__price--big">{{ p.price[lang] }}</div>

              <div class="product-content__tags">
                <span
                  v-for="tag in p.tags[lang]"
                  :key="tag"
                  class="product-content__tag"
                >
                  {{ tag }}
                </span>
              </div>

              <a
                v-if="!p.price[lang]"
                href="https://wa.me/6281249851168?text=Halo%20Kusuma%20Agro%20Farm%2C%20saya%20ingin%20tanya%20harga%20produk%20cocopeat%20block.%20Mohon%20info%20detailnya.%20Terima%20kasih!"
                class="btn btn--sm btn--primary product-content__cta"
                target="_blank"
                rel="noopener"
              >
                {{ productSection.cta[lang] }}
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="detail-produk" class="detail-section">
      <div class="container detail-grid">
        <div class="detail-image-wrap">
          <img
            src="/products/cocopeat-detail-texture.webp"
            alt="Detail tekstur cocopeat Kusuma Agro Farm"
            class="detail-image"
            loading="lazy"
          />
        </div>
          <div class="detail-content">
          <span class="eyebrow">{{ detailSection.label[lang] }}</span>
          <h2 v-html="detailSection.title[lang]"></h2>
          <p>{{ detailSection.desc[lang] }}</p>

          <div class="detail-features">
              <div class="feature-item" v-for="(f, i) in detailFeatures" :key="i">
                <h4>{{ f.title[lang] }}</h4>
                <p>{{ f.desc[lang] }}</p>
              </div>
              <p>{{ detailSection.suitable[lang] }}</p>
            </div>
          </div>
      </div>
    </section>

    <!-- ════════════════════════ KEUNGGULAN ════════════════════════ -->
    <section id="keunggulan" class="section section--light">
      <div class="container">
        <div class="section-header">
          <div class="section-label">
            <template v-if="lang==='id'">Keunggulan Produk</template>
            <template v-else>Product Advantages</template>
          </div>
          <h2 class="section-title">
            <template v-if="lang==='id'">Kenapa Cocopeat Block <em>Lebih Unggul?</em></template>
            <template v-else>Why is Cocopeat Block <em>Better?</em></template>
          </h2>
          <p class="section-desc">
            Dibandingkan media tanam konvensional,
            <strong>cocopeat block Kusuma Agro Farm</strong>
            dari Madiun, Jawa Timur menawarkan keunggulan nyata untuk
            pertumbuhan tanaman yang lebih sehat dan produktif.
          </p>
        </div>
        <div class="advantage-grid">
          <div v-for="(a, i) in advantages" :key="i" class="advantage-card">
            <div class="advantage-card__icon">{{ a.icon }}</div>
            <h3 class="advantage-card__title">{{ a.title[lang] }}</h3>
            <p class="advantage-card__desc">{{ a.desc[lang] }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ════════════════════════ MENGAPA KAMI ════════════════════════ -->
    <section class="section section--brown">
      <div class="container">
        <div class="section-header">
          <div class="section-label section-label--light">
          <template v-if="lang==='id'">Mengapa Memilih Kami</template>
          <template v-else>Why Choose Us</template>
        </div>
        <h2 class="section-title section-title--light">
          <template v-if="lang==='id'">Kami Hadir untuk <em>Mendukung Pertanian Anda</em></template>
          <template v-else>We Are Here to <em>Support Your Agriculture</em></template>
        </h2>
        </div>
        <div class="reason-grid">
          <div v-for="(r, i) in reasons" :key="i" class="reason-card">
            <div class="reason-card__icon">{{ r.icon }}</div>
            <h3 class="reason-card__title">{{ r.title[lang] }}</h3>
            <p class="reason-card__desc">{{ r.desc[lang] }}</p>
          </div>
        </div>
        <div class="cta-banner">
          <p>
  <template v-if="lang==='id'">Siap meningkatkan hasil pertanian Anda bersama Kusuma Agro Farm?</template>
  <template v-else>Ready to boost your harvest with Kusuma Agro Farm?</template>
</p>
<a
  href="#kontak"
  class="btn btn--white"
  @click="smoothScroll($event, '#kontak')"
>
  <template v-if="lang==='id'">💬 Konsultasi Gratis Sekarang</template>
  <template v-else>💬 Free Consultation Now</template>
</a>
        </div>
      </div>
    </section>

    <!-- ════════════════════════ AREA LAYANAN ════════════════════════ -->
    <section
      class="section section--green-light"
      aria-label="Area Pengiriman Cocopeat Block"
    >
      <div class="container">
        <div class="section-header">
          <div class="section-label">Jangkauan Layanan</div>
          <h2 class="section-title">
  <template v-if="lang==='id'">Kirim ke <em>Seluruh Indonesia</em></template>
  <template v-else>Shipping <em>Across Indonesia</em></template>
</h2>
<p class="section-desc">
  <template v-if="lang==='id'">Dari Madiun, Jawa Timur — kami melayani pengiriman cocopeat block ke berbagai kota dan wilayah di Indonesia.</template>
  <template v-else>From Madiun, East Java — we deliver cocopeat blocks to cities and regions across Indonesia.</template>
</p>
        </div>
        <div class="area-cloud">
          <span v-for="area in serviceAreas[lang]" :key="area" class="area-tag">
            📍 {{ area }}
          </span>
        </div>
        <p class="area-note">
          <template v-if="lang==='id'">Tidak ada kota Anda di daftar? Kami tetap bisa kirim! Hubungi kami untuk konfirmasi pengiriman ke wilayah Anda.</template>
          <template v-else>Your city not listed? We can still deliver! Contact us to confirm shipping to your area.</template>
        </p>
      </div>
    </section>

    <!-- ════════════════════════ FAQ ════════════════════════ -->
    <section class="section section--light" aria-label="FAQ Cocopeat Block">
      <div class="container">
        <div class="section-header">
          <div class="section-label">
  <div class="section-label">{{ lang === 'id' ? 'FAQ' : 'FAQ' }}</div>
<h2 class="section-title">{{ lang === 'id' ? 'Pertanyaan yang ' : 'Frequently ' }}<em>{{ lang === 'id' ? 'Sering Ditanyakan' : 'Asked Questions' }}</em></h2>
        </div>
        <div class="faq-list">
  <details class="faq-item" v-for="(item, i) in faqList" :key="i">
    <summary class="faq-q">{{ item.q[lang] }}</summary>
    <p class="faq-a">{{ item.a[lang] }}</p>
  </details>
</div>
      </div>
      </div>
    </section>

    <!-- ════════════════════════ KONTAK ════════════════════════ -->
    <section id="kontak" class="section section--light">
      <div class="container contact">
        <div class="contact__info">
          <div class="section-label">
  <template v-if="lang==='id'">Hubungi Kami</template>
  <template v-else>Contact Us</template>
</div>
<h2 class="section-title">
  <template v-if="lang==='id'">Kami Siap <em>Membantu Anda</em></template>
  <template v-else>We Are <em>Ready to Help You</em></template>
</h2>
<p>
  <template v-if="lang==='id'">Konsultasikan kebutuhan media tanam Anda. Tim kami akan merespons dalam 1×24 jam.</template>
  <template v-else>Consult your growing media needs. Our team will respond within 24 hours.</template>
</p>

          <div class="contact__details">
            <div class="contact__item">
              <span class="contact__item-icon">📱</span>
              <div>
                <strong>WhatsApp</strong>
                <p>+6281249851168</p>
              </div>
            </div>
            <div class="contact__item">
              <span class="contact__item-icon">✉️</span>
              <div>
                <strong>Email</strong>
                <p>jefriae@gmail.com</p>
              </div>
            </div>
            <div class="contact__item">
              <span class="contact__item-icon">📍</span>
              <div>
                <strong>Alamat</strong>
                <p>
                  Dsn. Krajan, Ds. Suluk, Kec. Dolopo, Kabupaten Madiun, Jawa
                  Timur 63174
                </p>
              </div>
            </div>
            <div class="contact__item">
              <span class="contact__item-icon">🕐</span>
              <div>
                <strong>Jam Operasional</strong>
                <p>Senin – Sabtu, 08.00 – 17.00 WIB</p>
              </div>
            </div>
          </div>
        </div>

        <div class="contact__form-wrap">
          <form class="contact__form" action="mailto:jefriae@gmail.com" method="POST" enctype="text/plain">
            <h3>Kirim Pesan</h3>

            <div v-if="formSent" class="form-success">
              ✅ Pesan berhasil dikirim! Kami akan menghubungi Anda segera.
            </div>

            <div class="form-group">
              <label for="name">Nama Lengkap</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                placeholder="Contoh: Budi Santoso"
                required
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="email@anda.com"
                required
              />
            </div>
            <div class="form-group">
              <label for="message">Pesan</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                placeholder="Ceritakan kebutuhan Anda, misal: jenis tanaman, jumlah, lokasi pengiriman..."
                required
              ></textarea>
            </div>
            <button type="submit" class="btn btn--primary btn--full">
              📩 Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- ════════════════════════ FOOTER ════════════════════════ -->
    <footer class="footer">
      <div class="container footer__inner">
        <div class="footer__brand">
          <span class="navbar__logo-icon">🌿</span>
          <span class="footer__brand-text"
            >Kusuma <strong>Agro Farm</strong></span
          >
        </div>
        <p class="footer__tagline">
          Supplier cocopeat block berkualitas dari Madiun, Jawa Timur —
          pengiriman ke seluruh Indonesia.
        </p>
        <nav class="footer__links">
  <a
    v-for="link in navLinks"
    :key="link.href"
    :href="link.href"
    v-bind="link.external ? { target: '_blank', rel: 'noopener', 'aria-label': link.label[lang] } : {}"
    v-on="!link.external ? { click: (e) => smoothScroll(e, link.href) } : {}"
  >
    <span v-if="link.icon" style="display:inline-flex;align-items:center;"><img :src="link.icon" alt="Shopee" style="height:1em;width:1em;vertical-align:middle;margin-right:4px;display:inline;" />{{ link.label[lang] }}</span><span v-else>{{ link.label[lang] }}</span>
  </a>
</nav>
        <p class="footer__copy">
          © {{ new Date().getFullYear() }} Kusuma Agro Farm. Hak Cipta
          Dilindungi.
        </p>
      </div>
    </footer>
  </div>
</template>

<style>
/* ── Reset & Base ─────────────────────────────────────────────────────────── */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --green-dark: #1b4332;
  --green-mid: #2d6a4f;
  --green-soft: #40916c;
  --green-light: #d8f3dc;
  --green-pale: #f0faf3;
  --brown-dark: #5c3d1e;
  --brown-mid: #7c5c32;
  --brown-soft: #a07850;
  --brown-light: #f5efe6;
  --cream: #fdfaf5;
  --white: #ffffff;
  --text-dark: #1a2e1a;
  --text-mid: #3d5a3d;
  --text-light: #6b8f6b;
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.07);
  --shadow-md: 0 6px 24px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 16px 48px rgba(0, 0, 0, 0.13);
  --transition: all 0.25s ease;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family:
    "Segoe UI",
    system-ui,
    -apple-system,
    sans-serif;
  color: var(--text-dark);
  background: var(--cream);
  line-height: 1.7;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
  color: inherit;
}

em {
  font-style: normal;
  color: var(--green-soft);
}

.app {
  overflow-x: hidden;
}

/* ── Container ────────────────────────────────────────────────────────────── */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ── Buttons ──────────────────────────────────────────────────────────────── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  border: 2px solid transparent;
  transition: var(--transition);
  white-space: nowrap;
}

.btn--primary {
  background: var(--green-mid);
  color: var(--white);
  border-color: var(--green-mid);
}
.btn--primary:hover {
  background: var(--green-dark);
  border-color: var(--green-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn--outline {
  background: transparent;
  color: var(--white);
  border-color: rgba(255, 255, 255, 0.6);
}
.btn--outline:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: var(--white);
  transform: translateY(-2px);
}

.btn--white {
  background: var(--white);
  color: var(--brown-dark);
  border-color: var(--white);
}
.btn--white:hover {
  background: var(--cream);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn--sm {
  padding: 10px 20px;
  font-size: 0.875rem;
}
.btn--full {
  width: 100%;
  justify-content: center;
}

.mt-auto {
  margin-top: auto;
}

/* ── Section commons ──────────────────────────────────────────────────────── */
.section {
  padding: 96px 0;
}
.section--light {
  background: var(--cream);
}
.section--green-light {
  background: var(--green-pale);
}
.section--brown {
  background: var(--brown-dark);
}

.section-header {
  text-align: center;
  margin-bottom: 56px;
}

.section-label {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--green-soft);
  background: var(--green-light);
  padding: 6px 16px;
  border-radius: 50px;
  margin-bottom: 16px;
}
.section-label--light {
  color: var(--green-light);
  background: rgba(255, 255, 255, 0.15);
}

.section-title {
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 800;
  color: var(--text-dark);
  line-height: 1.25;
  margin-bottom: 16px;
}
.section-title--light {
  color: var(--white);
}
.section-title--light em {
  color: #a8d5b5;
}

.section-desc {
  max-width: 600px;
  margin: 0 auto;
  color: var(--text-light);
  font-size: 1.05rem;
}

/* ── NAVBAR ───────────────────────────────────────────────────────────────── */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: var(--transition);
}
.navbar--scrolled {
  background: rgba(253, 250, 245, 0.95);
  backdrop-filter: blur(10px);
  padding: 12px 0;
  box-shadow: var(--shadow-sm);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.navbar__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.1rem;
  color: var(--white);
  transition: var(--transition);
}
.navbar--scrolled .navbar__logo {
  color: var(--text-dark);
}
.navbar__logo-icon {
  font-size: 1.5rem;
}
.navbar__logo-text strong {
  font-weight: 800;
}

.navbar__links {
  display: flex;
  align-items: center;
  gap: 4px;
}

.navbar__link {
  padding: 8px 14px;
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  transition: var(--transition);
}
.navbar--scrolled .navbar__link {
  color: var(--text-mid);
}
.navbar__link:hover {
  color: var(--white);
  background: rgba(255, 255, 255, 0.15);
}
.navbar--scrolled .navbar__link:hover {
  color: var(--green-mid);
  background: var(--green-light);
}

.navbar__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
}
.navbar__burger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--white);
  border-radius: 2px;
  transition: var(--transition);
}
.navbar--scrolled .navbar__burger span {
  background: var(--text-dark);
}
.navbar__burger--open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.navbar__burger--open span:nth-child(2) {
  opacity: 0;
}
.navbar__burger--open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ── HERO ─────────────────────────────────────────────────────────────────── */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    var(--green-dark) 0%,
    var(--green-mid) 50%,
    var(--brown-mid) 100%
  );
}

.hero__bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(27, 67, 50, 0.85) 0%,
    rgba(45, 106, 79, 0.6) 60%,
    rgba(124, 92, 50, 0.5) 100%
  );
  z-index: 1;
}

.hero__image-wrap {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.35;
}

.hero__content {
  position: relative;
  z-index: 2;
  padding-top: 100px;
  padding-bottom: 80px;
  max-width: 780px;
}

.hero__badge {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--green-light);
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding: 8px 18px;
  border-radius: 50px;
  margin-bottom: 24px;
  backdrop-filter: blur(4px);
}

.hero__title {
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 900;
  color: var(--white);
  line-height: 1.15;
  margin-bottom: 24px;
  letter-spacing: -0.02em;
}
.hero__title em {
  color: #a8e6bf;
  font-style: normal;
}

.hero__sub {
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  color: rgba(255, 255, 255, 0.85);
  max-width: 620px;
  margin-bottom: 40px;
  line-height: 1.75;
}

.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 56px;
}

.hero__stats {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}
.hero__stat {
  display: flex;
  flex-direction: column;
}
.hero__stat strong {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--white);
  line-height: 1;
}
.hero__stat span {
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.65);
  margin-top: 4px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.hero__stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.25);
}

/* ── ABOUT ────────────────────────────────────────────────────────────────── */
.about {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.about__image-wrap {
  position: relative;
}
.about__image {
  width: 100%;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  object-fit: cover;
  aspect-ratio: 4/3;
}
.about__badge-float {
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: var(--white);
  border-radius: var(--radius-md);
  padding: 16px 20px;
  box-shadow: var(--shadow-md);
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 2rem;
}
.about__badge-float > div strong {
  display: block;
  font-size: 0.95rem;
  color: var(--green-dark);
}
.about__badge-float > div p {
  font-size: 0.8rem;
  color: var(--text-light);
}

.about__content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.about__content p {
  color: var(--text-mid);
}
.about__content .section-label {
  align-self: flex-start;
}

.about__highlights {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 8px;
}
.about__highlight {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--green-dark);
}

/* ── PRODUCT GRID ─────────────────────────────────────────────────────────── */
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
  align-items: stretch;
}

.product-card {
  background: var(--white);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 14px 34px rgba(16, 24, 40, 0.08);
  border: 1px solid rgba(64, 145, 108, 0.12);
  display: flex;
  flex-direction: column;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 22px 50px rgba(16, 24, 40, 0.12);
  border-color: rgba(64, 145, 108, 0.28);
}

.product-image-wrap {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: #eef4ec;
}

.product-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

.product-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 22px 22px 24px;
}

.product-content__title {
  margin: 0 0 10px;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.35;
  color: var(--green-dark);
}

.product-content__desc {
  margin: 0 0 16px;
  font-size: 0.95rem;
  line-height: 1.75;
  color: var(--text-mid);
  flex: 1;
}

.product-content__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
}

.product-content__tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 30px;
  padding: 6px 12px;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1;
  color: var(--green-soft);
  background: var(--green-light);
  border: 1px solid rgba(64, 145, 108, 0.12);
  border-radius: 999px;
}

.product-content__cta {
  margin-top: auto;
  width: fit-content;
}

@media (max-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .product-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .product-content {
    padding: 18px 18px 20px;
  }

  .product-content__title {
    font-size: 1.08rem;
  }

  .product-content__desc {
    font-size: 0.9rem;
  }
}

/* ── DETAIL PRODUCT GRID ─────────────────────────────────────────────────────────── */

.detail-grid {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 40px;
  align-items: center;
}

.detail-image-wrap {
  overflow: hidden;
  border-radius: 28px;
  background: #eef4ec;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
}

.detail-content p {
  margin-bottom: 24px;
}

.detail-features {
  display: grid;
  gap: 16px;
}

.feature-item {
  padding: 18px 20px;
  border-radius: 18px;
  background: #f8fbf7;
  border: 1px solid #e6efe4;
}

.feature-item h4 {
  margin: 0 0 8px;
  font-size: 18px;
  color: #1f3d2b;
}

.feature-item p {
  margin: 0;
  font-size: 15px;
  line-height: 1.7;
  color: #627166;
}

@media (max-width: 960px) {
  .product-grid,
  .detail-grid {
    grid-template-columns: 1fr;
  }

  .section-header h2,
  .detail-content h2 {
    font-size: 30px;
  }
}

/* ── ADVANTAGE GRID ───────────────────────────────────────────────────────── */
.advantage-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.advantage-card {
  background: var(--white);
  border-radius: var(--radius-md);
  padding: 32px 24px;
  box-shadow: var(--shadow-sm);
  border-left: 4px solid var(--green-soft);
  transition: var(--transition);
}
.advantage-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.advantage-card__icon {
  font-size: 2.2rem;
  margin-bottom: 16px;
}
.advantage-card__title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--green-dark);
  margin-bottom: 10px;
}
.advantage-card__desc {
  font-size: 0.9rem;
  color: var(--text-mid);
  line-height: 1.65;
}

/* ── REASON GRID ──────────────────────────────────────────────────────────── */
.reason-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 56px;
}

.reason-card {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-md);
  padding: 32px 24px;
  text-align: center;
  backdrop-filter: blur(4px);
  transition: var(--transition);
}
.reason-card:hover {
  background: rgba(255, 255, 255, 0.18);
  transform: translateY(-4px);
}

.reason-card__icon {
  font-size: 2.4rem;
  margin-bottom: 16px;
}
.reason-card__title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 10px;
}
.reason-card__desc {
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.6;
}

.cta-banner {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-lg);
  padding: 40px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}
.cta-banner p {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--white);
  flex: 1;
}

/* ── CONTACT ──────────────────────────────────────────────────────────────── */
.contact {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
}

.contact__info {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.contact__info .section-label {
  align-self: flex-start;
}
.contact__info p {
  color: var(--text-mid);
}

.contact__details {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 8px;
}

.contact__item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}
.contact__item-icon {
  font-size: 1.5rem;
  background: var(--green-light);
  padding: 12px;
  border-radius: var(--radius-sm);
  flex-shrink: 0;
}
.contact__item strong {
  display: block;
  font-size: 0.95rem;
  color: var(--green-dark);
  margin-bottom: 4px;
}
.contact__item p {
  font-size: 0.9rem;
  color: var(--text-mid);
}

.contact__form-wrap {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 40px 36px;
  box-shadow: var(--shadow-md);
}
.contact__form h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--green-dark);
  margin-bottom: 28px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
}
.form-group label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-mid);
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1.5px solid #d4e6d4;
  border-radius: var(--radius-sm);
  font-size: 0.95rem;
  color: var(--text-dark);
  background: var(--cream);
  transition: var(--transition);
  font-family: inherit;
  resize: vertical;
}
.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--green-soft);
  background: var(--white);
  box-shadow: 0 0 0 3px rgba(64, 145, 108, 0.12);
}

.form-success {
  background: var(--green-light);
  color: var(--green-dark);
  padding: 14px 18px;
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 20px;
  border: 1px solid #95d5b2;
}

/* ── FOOTER ───────────────────────────────────────────────────────────────── */
.footer {
  background: var(--green-dark);
  padding: 48px 0;
}
.footer__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
}
.footer__brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.2rem;
  color: var(--white);
}
.footer__brand-text strong {
  font-weight: 800;
}
.footer__tagline {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.55);
}

.footer__links {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: center;
}
.footer__links a {
  padding: 6px 14px;
  border-radius: 50px;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.65);
  transition: var(--transition);
}
.footer__links a:hover {
  color: var(--white);
  background: rgba(255, 255, 255, 0.1);
}

.footer__copy {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.35);
  margin-top: 8px;
}

/* ── AREA LAYANAN ─────────────────────────────────────────────────────────── */
.area-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 24px;
}
.area-tag {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--green-dark);
  background: var(--white);
  border: 1.5px solid var(--green-light);
  padding: 6px 16px;
  border-radius: 50px;
  transition: var(--transition);
}
.area-tag:hover {
  background: var(--green-light);
  border-color: var(--green-soft);
}

.area-note {
  text-align: center;
  font-size: 0.9rem;
  color: var(--text-light);
  margin-top: 8px;
}

/* ── FAQ ──────────────────────────────────────────────────────────────────── */
.faq-list {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.faq-item {
  background: var(--white);
  border: 1.5px solid #d4e6d4;
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: var(--transition);
}
.faq-item[open] {
  border-color: var(--green-soft);
  box-shadow: var(--shadow-sm);
}

.faq-q {
  list-style: none;
  padding: 20px 24px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--green-dark);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  user-select: none;
}
.faq-q::-webkit-details-marker {
  display: none;
}
.faq-q::after {
  content: "+";
  font-size: 1.4rem;
  font-weight: 300;
  color: var(--green-soft);
  flex-shrink: 0;
  transition: var(--transition);
}
.faq-item[open] .faq-q::after {
  content: "−";
}

.faq-a {
  padding: 0 24px 20px;
  font-size: 0.95rem;
  color: var(--text-mid);
  line-height: 1.7;
  border-top: 1px solid var(--green-light);
  margin-top: -1px;
}

/* ── RESPONSIVE ───────────────────────────────────────────────────────────── */
@media (max-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .advantage-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .reason-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .section {
    padding: 64px 0;
  }

  /* Navbar mobile */
  .navbar__burger {
    display: flex;
  }

  .navbar__links {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    background: var(--white);
    padding: 80px 24px 32px;
    gap: 4px;
    box-shadow: var(--shadow-lg);
    transform: translateY(-110%);
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 999;
  }
  .navbar__links--open {
    transform: translateY(0);
  }
  .navbar__link {
    color: var(--text-mid);
    padding: 12px 16px;
  }
  .navbar__link:hover {
    color: var(--green-mid);
    background: var(--green-pale);
  }
  .navbar__links .btn {
    margin-top: 8px;
    text-align: center;
    justify-content: center;
  }

  /* Hero */
  .hero__content {
    padding-top: 120px;
  }
  .hero__cta {
    flex-direction: column;
  }
  .hero__cta .btn {
    text-align: center;
    justify-content: center;
  }

  /* About */
  .about {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .about__badge-float {
    bottom: -16px;
    right: 16px;
  }

  /* Products */
  .product-grid {
    grid-template-columns: 1fr;
  }

  /* Advantages */
  .advantage-grid {
    grid-template-columns: 1fr;
  }

  /* Reasons */
  .reason-grid {
    grid-template-columns: 1fr;
  }

  /* CTA Banner */
  .cta-banner {
    flex-direction: column;
    text-align: center;
    padding: 32px 24px;
  }

  /* Contact */
  .contact {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .contact__form-wrap {
    padding: 28px 20px;
  }
}

@media (max-width: 480px) {
  .hero__stats {
    gap: 16px;
  }
  .hero__stat-divider {
    height: 32px;
  }
  .about__badge-float {
    display: none;
  }
}
.product-content__price--big {
  font-size: 2rem;
  font-weight: bold;
  color: var(--green-mid);
  margin: 12px 0 8px 0;
  letter-spacing: 0.5px;
  line-height: 1.2;
}

</style>
