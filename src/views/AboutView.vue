<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">

    <!-- Hero -->
<section
  class="relative overflow-hidden bg-gradient-to-r from-blue-950 via-black to-slate-950 text-white"
>
  <div
    class="absolute inset-0 bg-orange-500/5"
  />

  <div
    class="container-srgala py-28 text-center relative z-10"
  >

    <span class="section-subtitle">
      ABOUT SRGALA
    </span>

    <h1 class="text-5xl md:text-6xl font-black mt-6">
      Built For
      <span class="text-orange-500">
        Movement
      </span>
    </h1>

    <p class="max-w-3xl mx-auto mt-6 text-lg text-slate-300">
      SRGALA adalah brand sport & outdoor apparel yang
      lahir dari semangat untuk terus bergerak,
      melampaui batas, dan berkembang tanpa henti.
    </p>

  </div>
</section>

    <!-- Statistik -->
   <section class="container-srgala py-24">

 <div class="grid md:grid-cols-4 gap-6">

  <div
    v-for="item in stats"
    :key="item.label"
    class="text-center p-8 rounded-3xl bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl transition"
  >

    <div class="text-5xl font-black text-orange-500">
      {{ item.display }}<span v-if="item.label !== 'Athlete Satisfaction'">+</span>
      <span v-else>%</span>
    </div>

    <div class="mt-3 text-slate-500">
      {{ item.label }}
    </div>

  </div>

</div>

</section>
    <!-- Visi Misi -->
  <section class="container-srgala pb-24">

  <div class="grid lg:grid-cols-2 gap-10">

    <!-- Visi -->
    <div class="glass-card p-10">

      <h2 class="text-3xl font-black mb-6">
        🎯 Vision
      </h2>

      <p class="text-slate-400 leading-8">
        Menjadi brand sport & outdoor apparel yang
        menginspirasi orang untuk terus bergerak,
        berkembang, dan melampaui batas kemampuan mereka.
      </p>

    </div>

    <!-- Misi -->
    <div class="glass-card p-10">

      <h2 class="text-3xl font-black mb-6">
        🚀 Mission
      </h2>

      <ul class="space-y-4 text-slate-400">

        <li>✓ Membuat apparel yang nyaman & performa tinggi</li>
        <li>✓ Mendukung gaya hidup aktif & outdoor</li>
        <li>✓ Menggabungkan teknologi & desain modern</li>
        <li>✓ Membangun komunitas yang terus bergerak</li>

      </ul>

    </div>

  </div>

</section>

    <!-- Why Choose Us -->
   <section class="bg-slate-950 py-24 text-white">

  <div class="container-srgala">

    <h2 class="text-4xl md:text-5xl font-black text-center">
      Kenapa SRGALA?
    </h2>

    <div class="grid md:grid-cols-3 gap-8 mt-16">

      <div
  v-for="feature in features"
  :key="feature.title"
  class="group p-8 rounded-3xl bg-white dark:bg-slate-900 border border-transparent hover:border-orange-500 transition duration-500 hover:-translate-y-2"
>

  <div class="text-5xl group-hover:scale-110 transition">
    {{ feature.icon }}
  </div>

  <h3 class="text-xl font-bold mt-4 group-hover:text-orange-500 transition">
    {{ feature.title }}
  </h3>

  <p class="text-slate-500 mt-3">
    {{ feature.description }}
  </p>

</div>

    </div>

  </div>

</section>

    <!-- Team -->
  <section class="container-srgala py-24">

  <h2 class="text-4xl font-black text-center mb-14">
    Team SRGALA
  </h2>

  <div class="grid md:grid-cols-4 gap-8">

   <div
  v-for="member in team"
  :key="member.name"
  class="group overflow-hidden rounded-3xl bg-slate-900"
>

  <div class="h-72 overflow-hidden">
    <img
      :src="member.image"
      class="w-full h-full object-cover group-hover:scale-110 transition duration-700"
    />
  </div>

  <div class="p-6 text-center">
    <h3 class="text-white font-bold text-xl">
      {{ member.name }}
    </h3>

    <p class="text-orange-500 mt-2">
      {{ member.position }}
    </p>
  </div>

</div>
  </div>

</section>

  </div>
</template>

<script>
import img1 from '@/assets/image/1.jpeg'
import img2 from '@/assets/image/2.jpeg'
import img3 from '@/assets/image/3.jpeg'
import img4 from '@/assets/image/4.jpeg'
export default {
  name: 'AboutSection',

  data() {
    return {
      stats: [
        { value: 10000, label: 'Produk Terjual', display: 0 },
        { value: 5000, label: 'Pelanggan Aktif', display: 0 },
        { value: 3, label: 'Kategori Utama', display: 0 },
        { value: 99, label: 'Athlete Satisfaction', display: 0 }
      ],

       features: [
        {
          icon: '⚡',
          title: 'Performance First',
          description:
            'Dirancang untuk mendukung aktivitas intens & movement maksimal.'
        },
        {
          icon: '🌬️',
          title: 'Breathable Tech',
          description:
            'Material ringan dengan sirkulasi udara optimal untuk semua kondisi.'
        },
        {
          icon: '🛡️',
          title: 'Durability',
          description:
            'Tahan lama untuk latihan, lari, gym, hingga outdoor ekstrem.'
        }
      ],

     team: [
        {
          name: 'Jusuf',
          position: 'Brand Director',
          image: img3
        },
        {
          name: 'Naufal',
          position: 'Product Designer',
          image: img4
        },
        {
          name: 'Ridho',
          position: 'Tech Apparel Engineer',
          image: img1
        },
        {
          name: 'Rakha',
          position: 'Marketing & Community',
          image: img2
        }
      ]
    }
  }, 
    mounted() {
    this.animateStats()
  },
  methods: {
    animateStats() {
      this.stats.forEach((stat) => {
        let start = 0
        const end = stat.value
        const duration = 1200
        const stepTime = 20

        const increment = end / (duration / stepTime)

        const timer = setInterval(() => {
          start += increment

          if (start >= end) {
            stat.display = end
            clearInterval(timer)
          } else {
            stat.display = Math.floor(start)
          }
        }, stepTime)
      })
    }
}
}
</script>