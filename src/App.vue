<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// ── Navbar ──────────────────────────────────────────────────────────────────
const menuOpen = ref(false);
const scrolled = ref(false);

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Produk", href: "#produk" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Kontak", href: "#kontak" },
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

// ── Produk ───────────────────────────────────────────────────────────────────
const products = [
  {
    title: "Cocopeat Block 5 kg",
    desc: "Blok cocopeat padat berukuran standar ekspor dari Madiun, Jawa Timur. Cocok untuk media tanam hidroponik, persemaian bibit, dan campuran tanah hortikultura. Kadar EC rendah, serat halus, pH netral.",
    tags: ["Hidroponik", "Persemaian", "Hortikultura"],
    icon: "🌿",
  },
  {
    title: "Cocopeat Block 650g",
    desc: "Ukuran compact untuk pengguna rumahan, nursery kecil, dan pot tanaman. Mudah disimpan dan dikirim ke seluruh Jawa Timur maupun luar pulau. Langsung pakai setelah direndam air.",
    tags: ["Rumahan", "Nursery", "Pot & Polybag"],
    icon: "🪴",
  },
  {
    title: "Cocopeat Block Custom",
    desc: "Tersedia dalam berbagai bobot dan dimensi sesuai permintaan. Ideal untuk distributor, eksportir, petani skala besar di Jawa Timur, dan kebutuhan komersial nasional.",
    tags: ["Ekspor", "Distributor", "Skala Besar"],
    icon: "📦",
  },
];

// ── Keunggulan ───────────────────────────────────────────────────────────────
const advantages = [
  {
    icon: "♻️",
    title: "100% Ramah Lingkungan",
    desc: "Terbuat dari sabut kelapa alami Jawa Timur — limbah pertanian yang diproses menjadi media tanam bernilai tinggi tanpa bahan kimia berbahaya.",
  },
  {
    icon: "💧",
    title: "Daya Serap Air Tinggi",
    desc: "Mampu menyerap dan menyimpan air hingga 8–10x beratnya, menjaga kelembaban akar tanaman lebih lama — ideal untuk iklim tropis Indonesia.",
  },
  {
    icon: "🌱",
    title: "Cocok Semua Jenis Tanaman",
    desc: "Ideal untuk sayuran, buah-buahan, bunga, tanaman hias, stroberi, melon, cabai, dan hampir semua tanaman pertanian maupun hortikultura.",
  },
  {
    icon: "⚡",
    title: "Praktis & Efisien",
    desc: "Bentuk blok padat memudahkan penyimpanan, transportasi, dan pengiriman ke seluruh Indonesia. Cukup rendam air dan cocopeat siap digunakan.",
  },
  {
    icon: "✅",
    title: "Kualitas Terjaga & Konsisten",
    desc: "Diproduksi dengan seleksi ketat di Madiun, Jawa Timur — kadar EC rendah, bebas gulma & patogen, dan konsisten di setiap batch produksi.",
  },
];

// ── Mengapa Kami ─────────────────────────────────────────────────────────────
const reasons = [
  {
    icon: "🏆",
    title: "Bahan Pilihan Lokal",
    desc: "Sabut kelapa segar dipilih dari petani lokal Jawa Timur terpercaya untuk memastikan kualitas serat cocopeat terbaik.",
  },
  {
    icon: "💰",
    title: "Harga Kompetitif",
    desc: "Langsung dari produsen di Madiun tanpa perantara — harga lebih terjangkau dengan kualitas premium setara ekspor.",
  },
  {
    icon: "🤝",
    title: "Pelayanan Responsif",
    desc: "Tim kami siap konsultasi kebutuhan media tanam Anda, dari petani Jawa Timur hingga distributor di seluruh Indonesia.",
  },
  {
    icon: "🌾",
    title: "Melayani Semua Segmen",
    desc: "Petani, nursery, pelaku hidroponik, rumahan, distributor, hingga eksportir — semua kami layani dengan standar yang sama.",
  },
];

// ── Area Layanan ──────────────────────────────────────────────────────────────
const serviceAreas = [
  "Malang", "Surabaya", "Sidoarjo", "Pasuruan", "Probolinggo",
  "Jember", "Banyuwangi", "Kediri", "Blitar", "Madiun",
  "Mojokerto", "Gresik", "Lamongan", "Tuban", "Bojonegoro",
  "Jakarta", "Bandung", "Semarang", "Yogyakarta", "Makassar",
  "Medan", "Palembang", "Balikpapan", "Denpasar",
];

// ── Kontak ────────────────────────────────────────────────────────────────────
const form = ref({ name: "", email: "", message: "" });
const formSent = ref(false);

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

        <nav class="navbar__links" :class="{ 'navbar__links--open': menuOpen }">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="navbar__link"
            @click="smoothScroll($event, link.href)"
            >{{ link.label }}</a
          >
          <a
            href="#kontak"
            class="btn btn--sm"
            @click="smoothScroll($event, '#kontak')"
            >Hubungi Kami</a
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
        <span class="hero__badge">🌱 Supplier Cocopeat Block Terpercaya – Jawa Timur</span>
        <h1 class="hero__title">
          Cocopeat Block Berkualitas<br />
          dari <em>Madiun, Jawa Timur</em>
        </h1>
        <p class="hero__sub">
          Media tanam alami dari sabut kelapa pilihan — ramah lingkungan, daya serap
          tinggi, dan siap pakai untuk pertanian, hidroponik, nursery, serta
          persemaian. Melayani pengiriman ke seluruh Indonesia.
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
              <strong>Berdiri Sejak 2018</strong>
              <p>Produsen Lokal Terpercaya</p>
            </div>
          </div>
        </div>
        <div class="about__content">
          <div class="section-label">Tentang Kami</div>
          <h2 class="section-title">
            Mitra Pertanian Anda yang <em>Dapat Dipercaya</em>
          </h2>
          <p>
            <strong>Kusuma Agro Farm</strong> adalah produsen dan supplier
            <strong>cocopeat block</strong> UMKM berbasis di <strong>Madiun, Jawa Timur</strong>
            yang berkomitmen menghadirkan media tanam berkualitas tinggi dari
            sabut kelapa pilihan untuk petani dan pelaku agribisnis di seluruh Indonesia.
          </p>
          <p>
            Kami memahami kebutuhan petani, pelaku <strong>hidroponik</strong>, nursery, dan
            distributor di Jawa Timur, Jawa Tengah, Jawa Barat, dan seluruh nusantara —
            sehingga setiap produk kami dirancang dengan standar kualitas ketat:
            kadar EC rendah, bebas gulma, daya serap optimal, dan konsistensi di
            setiap pengiriman.
          </p>
          <p>
            Sejak 2018, kami telah melayani berbagai pelanggan dari skala
            rumahan hingga ekspor. Kepercayaan Anda adalah prioritas utama kami.
          </p>
          <div class="about__highlights">
            <div class="about__highlight">
              <span>✅</span> Proses produksi higienis & terkontrol
            </div>
            <div class="about__highlight">
              <span>✅</span> Melayani seluruh wilayah Jawa Timur & Indonesia
            </div>
            <div class="about__highlight">
              <span>✅</span> Ekspor ke mancanegara tersedia
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ════════════════════════ PRODUK ════════════════════════ -->
    <section id="produk" class="section section--green-light">
      <div class="container">
        <div class="section-header">
          <div class="section-label">Produk Kami</div>
          <h2 class="section-title">Cocopeat Block <em>Unggulan</em></h2>
          <p class="section-desc">
            Kami menyediakan berbagai varian <strong>cocopeat block</strong> berkualitas
            ekspor untuk kebutuhan pertanian, hidroponik, dan nursery — tersedia
            dari skala rumahan hingga pengiriman ke seluruh Indonesia.
          </p>
        </div>
        <div class="product-grid">
          <div v-for="(p, i) in products" :key="i" class="product-card">
            <div class="product-card__icon">{{ p.icon }}</div>
            <h3 class="product-card__title">{{ p.title }}</h3>
            <p class="product-card__desc">{{ p.desc }}</p>
            <div class="product-card__tags">
              <span
                v-for="tag in p.tags"
                :key="tag"
                class="product-card__tag"
                >{{ tag }}</span
              >
            </div>
            <a
              href="#kontak"
              class="btn btn--sm btn--primary mt-auto"
              @click="smoothScroll($event, '#kontak')"
            >
              Tanya Harga
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ════════════════════════ KEUNGGULAN ════════════════════════ -->
    <section id="keunggulan" class="section section--light">
      <div class="container">
        <div class="section-header">
          <div class="section-label">Keunggulan Produk</div>
          <h2 class="section-title">
            Kenapa Cocopeat Block <em>Lebih Unggul?</em>
          </h2>
          <p class="section-desc">
            Dibandingkan media tanam konvensional, <strong>cocopeat block Kusuma Agro Farm</strong>
            dari Madiun, Jawa Timur menawarkan keunggulan nyata untuk
            pertumbuhan tanaman yang lebih sehat dan produktif.
          </p>
        </div>
        <div class="advantage-grid">
          <div v-for="(a, i) in advantages" :key="i" class="advantage-card">
            <div class="advantage-card__icon">{{ a.icon }}</div>
            <h3 class="advantage-card__title">{{ a.title }}</h3>
            <p class="advantage-card__desc">{{ a.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ════════════════════════ MENGAPA KAMI ════════════════════════ -->
    <section class="section section--brown">
      <div class="container">
        <div class="section-header">
          <div class="section-label section-label--light">
            Mengapa Memilih Kami
          </div>
          <h2 class="section-title section-title--light">
            Kami Hadir untuk <em>Mendukung Pertanian Anda</em>
          </h2>
        </div>
        <div class="reason-grid">
          <div v-for="(r, i) in reasons" :key="i" class="reason-card">
            <div class="reason-card__icon">{{ r.icon }}</div>
            <h3 class="reason-card__title">{{ r.title }}</h3>
            <p class="reason-card__desc">{{ r.desc }}</p>
          </div>
        </div>
        <div class="cta-banner">
          <p>
            Siap meningkatkan hasil pertanian Anda bersama Kusuma Agro Farm?
          </p>
          <a
            href="#kontak"
            class="btn btn--white"
            @click="smoothScroll($event, '#kontak')"
          >
            💬 Konsultasi Gratis Sekarang
          </a>
        </div>
      </div>
    </section>

    <!-- ════════════════════════ AREA LAYANAN ════════════════════════ -->
    <section class="section section--green-light" aria-label="Area Pengiriman Cocopeat Block">
      <div class="container">
        <div class="section-header">
          <div class="section-label">Jangkauan Layanan</div>
          <h2 class="section-title">Kirim ke <em>Seluruh Indonesia</em></h2>
          <p class="section-desc">
            Dari Madiun, Jawa Timur — kami melayani pengiriman cocopeat block
            ke berbagai kota dan wilayah di Indonesia.
          </p>
        </div>
        <div class="area-cloud">
          <span v-for="area in serviceAreas" :key="area" class="area-tag">
            📍 {{ area }}
          </span>
        </div>
        <p class="area-note">
          Tidak ada kota Anda di daftar? Kami tetap bisa kirim! Hubungi kami
          untuk konfirmasi pengiriman ke wilayah Anda.
        </p>
      </div>
    </section>

    <!-- ════════════════════════ FAQ ════════════════════════ -->
    <section class="section section--light" aria-label="FAQ Cocopeat Block">
      <div class="container">
        <div class="section-header">
          <div class="section-label">FAQ</div>
          <h2 class="section-title">Pertanyaan yang <em>Sering Ditanyakan</em></h2>
        </div>
        <div class="faq-list">
          <details class="faq-item">
            <summary class="faq-q">Apa itu cocopeat block dan apa kegunaannya?</summary>
            <p class="faq-a">Cocopeat block adalah media tanam padat berbahan sabut kelapa yang dipadatkan. Sangat cocok digunakan sebagai media tanam hidroponik, persemaian bibit, campuran tanah pot, dan pertanian hortikultura karena memiliki daya serap air tinggi dan bersifat ramah lingkungan.</p>
          </details>
          <details class="faq-item">
            <summary class="faq-q">Apakah cocopeat block Kusuma Agro Farm aman untuk semua jenis tanaman?</summary>
            <p class="faq-a">Ya. Produk kami memiliki kadar EC rendah, pH netral (5.5–6.5), dan bebas gulma serta patogen, sehingga aman dan ideal untuk semua jenis tanaman — dari sayuran, buah-buahan, hingga tanaman hias dan bunga.</p>
          </details>
          <details class="faq-item">
            <summary class="faq-q">Bagaimana cara menggunakan cocopeat block?</summary>
            <p class="faq-a">Sangat mudah: rendam blok cocopeat dalam air selama 10–15 menit, kemudian hancurkan dan aduk hingga merata. Cocopeat siap digunakan langsung sebagai media tanam atau dicampur dengan sekam, perlite, atau kompos sesuai kebutuhan.</p>
          </details>
          <details class="faq-item">
            <summary class="faq-q">Apakah tersedia pengiriman ke luar Jawa Timur?</summary>
            <p class="faq-a">Ya, kami melayani pengiriman ke seluruh Indonesia — Jawa, Sumatera, Kalimantan, Sulawesi, Bali, NTT, Papua, dan wilayah lainnya. Hubungi kami untuk informasi ongkir ke lokasi Anda.</p>
          </details>
          <details class="faq-item">
            <summary class="faq-q">Berapa minimum pemesanan cocopeat block?</summary>
            <p class="faq-a">Kami melayani pemesanan dari kuantitas kecil untuk kebutuhan rumahan hingga kontainer penuh untuk ekspor dan distributor besar. Tidak ada minimum order yang ketat — hubungi kami untuk diskusi lebih lanjut.</p>
          </details>
        </div>
      </div>
    </section>

    <!-- ════════════════════════ KONTAK ════════════════════════ -->
    <section id="kontak" class="section section--light">
      <div class="container contact">
        <div class="contact__info">
          <div class="section-label">Hubungi Kami</div>
          <h2 class="section-title">Kami Siap <em>Membantu Anda</em></h2>
          <p>
            Konsultasikan kebutuhan media tanam Anda. Tim kami akan merespons
            dalam 1×24 jam.
          </p>

          <div class="contact__details">
            <div class="contact__item">
              <span class="contact__item-icon">📱</span>
              <div>
                <strong>WhatsApp</strong>
                <p>+62 812-3456-7890</p>
              </div>
            </div>
            <div class="contact__item">
              <span class="contact__item-icon">✉️</span>
              <div>
                <strong>Email</strong>
                <p>info@kusumaagrofarm.com</p>
              </div>
            </div>
            <div class="contact__item">
              <span class="contact__item-icon">📍</span>
              <div>
                <strong>Alamat</strong>
                <p>Jl. Pertanian No. 12, Madiun, Jawa Timur 63100</p>
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
          <form class="contact__form" @submit.prevent="handleSubmit">
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
        <p class="footer__tagline">Supplier cocopeat block berkualitas dari Madiun, Jawa Timur — pengiriman ke seluruh Indonesia.</p>
        <nav class="footer__links">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            @click="smoothScroll($event, link.href)"
          >
            {{ link.label }}
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
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.product-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 36px 28px;
  box-shadow: var(--shadow-sm);
  border: 1px solid rgba(64, 145, 108, 0.1);
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: var(--transition);
}
.product-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-md);
  border-color: var(--green-soft);
}

.product-card__icon {
  font-size: 2.8rem;
}
.product-card__title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--green-dark);
}
.product-card__desc {
  font-size: 0.92rem;
  color: var(--text-mid);
  line-height: 1.65;
  flex: 1;
}
.product-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.product-card__tag {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--green-soft);
  background: var(--green-light);
  padding: 4px 12px;
  border-radius: 50px;
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
  font-size: .85rem;
  font-weight: 500;
  color: var(--green-dark);
  background: var(--white);
  border: 1.5px solid var(--green-light);
  padding: 6px 16px;
  border-radius: 50px;
  transition: var(--transition);
}
.area-tag:hover { background: var(--green-light); border-color: var(--green-soft); }

.area-note {
  text-align: center;
  font-size: .9rem;
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
.faq-item[open] { border-color: var(--green-soft); box-shadow: var(--shadow-sm); }

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
.faq-q::-webkit-details-marker { display: none; }
.faq-q::after {
  content: "+";
  font-size: 1.4rem;
  font-weight: 300;
  color: var(--green-soft);
  flex-shrink: 0;
  transition: var(--transition);
}
.faq-item[open] .faq-q::after { content: "−"; }

.faq-a {
  padding: 0 24px 20px;
  font-size: .95rem;
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
</style>
