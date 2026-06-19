<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">

   <section
  class="relative overflow-hidden bg-gradient-to-r from-blue-950 via-black to-slate-950 text-white py-24"
>
  <!-- Glow -->
  <div
    class="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full"
  />

  <div
    class="container-srgala relative z-10"
  >

    <span
      class="section-subtitle"
    >
      SRGALA COLLECTION
    </span>

    <h1
      class="mt-4 text-5xl md:text-6xl font-black leading-tight"
    >
      Jersey &
      <span class="text-orange-500">
        Performance Jacket
      </span>
    </h1>

    <p
      class="mt-6 max-w-2xl text-lg text-slate-300"
    >
      Koleksi apparel sport dan outdoor yang
      dirancang untuk performa maksimal,
      kenyamanan sepanjang aktivitas,
      dan petualangan tanpa batas.
    </p>

    <div
      class="flex flex-wrap gap-4 mt-10"
    >
      <div
        class="px-5 py-2 rounded-full bg-white/10 backdrop-blur border border-white/10"
      >
        🏃 Running
      </div>

      <div
        class="px-5 py-2 rounded-full bg-white/10 backdrop-blur border border-white/10"
      >
        🏋 Training
      </div>

      <div
        class="px-5 py-2 rounded-full bg-white/10 backdrop-blur border border-white/10"
      >
        🏔 Outdoor
      </div>
    </div>

  </div>
</section>

    <!-- Search & Filter -->
    <section class="max-w-7xl mx-auto px-6 py-10">

      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow p-6">

        <div class="grid md:grid-cols-3 gap-4">

          <input
            v-model="search"
            type="text"
            placeholder="Cari produk..."
            class="border rounded-xl px-4 py-3 w-full dark:bg-gray-700"
          />

          <select
            v-model="category"
            class="border rounded-xl px-4 py-3 dark:bg-gray-700"
          >
            <option value="">Semua Kategori</option>
            <option>Elektronik</option>
            <option>Fashion</option>
            <option>Makanan</option>
            <option>Aksesoris</option>
          </select>

          <select
            v-model="sort"
            class="border rounded-xl px-4 py-3 dark:bg-gray-700"
          >
            <option value="">Urutkan</option>
            <option value="asc">Harga Termurah</option>
            <option value="desc">Harga Termahal</option>
          </select>

        </div>

      </div>

    </section>

    <!-- Product Grid -->
    <section class="max-w-7xl mx-auto px-6 pb-20">

      <div class="grid md:grid-cols-4 gap-6">

        <div
          v-for="item in filteredProducts"
          :key="item.id"
          class="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
        >

          <img
            :src="item.image"
            class="w-full h-60 object-cover"
          />

          <div class="p-5">

            <h3 class="font-bold text-lg">
              {{ item.name }}
            </h3>

            <p class="text-gray-500 text-sm mt-1">
              {{ item.category }}
            </p>

            <div class="flex justify-between items-center mt-4">

              <span class="text-orange-500 font-bold">
                Rp {{ formatPrice(item.price) }}
              </span>

              <span>
                ⭐ {{ item.rating }}
              </span>

            </div>

            <button @click="goToDetail(item.id)"
              class="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl"
            >
              Detail Produk
            </button>

          </div>

        </div>

      </div>

    </section>

  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      category: '',
      sort: '',
     products: [
  {
    id: 1,
    name: 'Alpha Jersey',
    category: 'Jersey',
    description: 'Quick Dry Performance Jersey',
    price: 179000,
    rating: 4.9,
    image: '/images/jersey-1.jpg'
  },
  {
    id: 2,
    name: 'Velocity Jersey',
    category: 'Running',
    description: 'Breathable Running Series',
    price: 199000,
    rating: 4.8,
    image: '/images/jersey-2.jpg'
  },
  {
    id: 3,
    name: 'Storm Jacket',
    category: 'Jaket',
    description: 'Outdoor Protection Jacket',
    price: 329000,
    rating: 4.9,
    image: '/images/jacket-1.jpg'
  },
  {
    id: 4,
    name: 'Trail Jacket',
    category: 'Outdoor',
    description: 'Lightweight Outdoor Jacket',
    price: 349000,
    rating: 4.9,
    image: '/images/jacket-2.jpg'
  }
]
    }
  },

  computed: {
    filteredProducts() {
      let data = [...this.products]

      if (this.search) {
        data = data.filter(item =>
          item.name.toLowerCase().includes(this.search.toLowerCase())
        )
      }

      if (this.category) {
        data = data.filter(
          item => item.category === this.category
        )
      }

      if (this.sort === 'asc') {
        data.sort((a, b) => a.price - b.price)
      }

      if (this.sort === 'desc') {
        data.sort((a, b) => b.price - a.price)
      }

      return data
    }
  },

  methods: {
    formatPrice(price) {
      return new Intl.NumberFormat('id-ID').format(price)
    },

    goToDetail(id) {
        console.log('Go to product detail with ID:', id)
      this.$router.push(`/produk/${id}`)
    }
  }
}
</script>
