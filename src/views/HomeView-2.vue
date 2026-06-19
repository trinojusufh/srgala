
<template>
<div class='min-h-screen bg-white dark:bg-black text-black dark:text-white'>
    <Srgala />
  <section class="relative overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-r from-blue-900 via-black to-slate-900"></div>

  <div class="relative max-w-7xl mx-auto px-6 py-28">
    <div class="grid lg:grid-cols-2 gap-10 items-center">

      <div>
        <span class="bg-orange-500 text-white px-4 py-2 rounded-full text-sm">
          Promo Terbaru 🔥
        </span>

        <h1 class="text-6xl font-extrabold mt-6 text-white leading-tight">
          Belanja Mudah
          <span class="text-orange-500">
            Dengan QRIS
          </span>
        </h1>

        <p class="mt-6 text-gray-300 text-lg">
          Temukan produk pilihan terbaik dengan pembayaran cepat,
          aman dan terpercaya.
        </p>

        <div class="flex gap-4 mt-8">
          <button   @click="goToCatalog" class="bg-orange-500 px-8 py-4 rounded-xl text-white">
            Belanja Sekarang
          </button>

          <button @click="goToCatalog" class="border border-white px-8 py-4 rounded-xl text-white">
            Lihat Katalog
          </button>
        </div>
      </div>

      <div>
        <img
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
          class="rounded-3xl shadow-2xl"
        />
      </div>

    </div>
  </div>
</section>
<section class="py-16 bg-gray-50 dark:bg-gray-900">
  <div class="max-w-7xl mx-auto px-6">

    <div class="grid md:grid-cols-4 gap-6">
<div
  class="bg-white dark:bg-gray-800 p-6 rounded-2xl text-center cursor-pointer hover:shadow-xl"
  @click="goToCatalog"
>
  <h3 class="text-4xl font-bold">1000+</h3>
  <p>Produk</p>
</div>

     <div
  class="bg-white dark:bg-gray-800 p-6 rounded-2xl text-center cursor-pointer hover:shadow-xl"
  @click="goToAbout"
>
  <h3 class="text-4xl font-bold">500+</h3>
  <p>Pelanggan</p>
</div>

      <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl text-center">
        <h3 class="text-4xl font-bold">50+</h3>
        <p>Kategori</p>
      </div>

      <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl text-center">
        <h3 class="text-4xl font-bold">24/7</h3>
        <p>Support</p>
      </div>

    </div>
  </div>
</section>
<section class="py-20">
  <div class="max-w-7xl mx-auto px-6">

    <h2 class="text-4xl font-bold text-center mb-12">
      Kategori Populer
    </h2>

    <div class="grid md:grid-cols-4 gap-8">

     <div
  @click="goToCatalog"
  class="bg-white shadow-lg rounded-2xl p-8 text-center hover:-translate-y-2 transition cursor-pointer"
>
  📱
  <h3 class="font-bold mt-4">
    Elektronik
  </h3>
</div>

      <div class="bg-white shadow-lg rounded-2xl p-8 text-center hover:-translate-y-2 transition">
        👕
        <h3 class="font-bold mt-4">Fashion</h3>
      </div>

      <div class="bg-white shadow-lg rounded-2xl p-8 text-center hover:-translate-y-2 transition">
        🍔
        <h3 class="font-bold mt-4">Makanan</h3>
      </div>

      <div class="bg-white shadow-lg rounded-2xl p-8 text-center hover:-translate-y-2 transition">
        ⌚
        <h3 class="font-bold mt-4">Aksesoris</h3>
      </div>

    </div>
  </div>
</section>
<section class="py-20 bg-gray-50">

  <div class="max-w-7xl mx-auto px-6">

    <h2 class="text-4xl font-bold mb-12">
      Produk Trending
    </h2>

    <div class="grid md:grid-cols-4 gap-8">
<div
  @click="goToProduct(1)"
  class="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition"
>
  <img
    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    class="h-60 w-full object-cover"
  />

  <div class="p-5">

    <h3 class="font-bold">
      Sneakers Premium
    </h3>

    <p class="text-orange-500 font-bold mt-2">
      Rp 299.000
    </p>

    <button
      class="w-full mt-4 bg-orange-500 text-white py-3 rounded-xl"
    >
      Detail Produk
    </button>

  </div>
</div>

    </div>

  </div>

</section>
<section class="py-20">
  <div class="max-w-7xl mx-auto px-6">

    <div
      class="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 text-white"
    >
      <h2 class="text-5xl font-bold">
        Diskon Hingga 70%
      </h2>

      <p class="mt-4">
        Khusus pembayaran menggunakan QRIS.
      </p>

      <button  @click="goToCheckout"
        class="mt-8 bg-white text-black px-8 py-4 rounded-xl"
      >
        Klaim Promo
      </button>
    </div>

  </div>
</section>
<section class="py-20">
  <div class="max-w-7xl mx-auto px-6">

    <div class="bg-blue-600 rounded-3xl p-12 text-center text-white">

      <h2 class="text-5xl font-bold">
        Siap Berbelanja?
      </h2>

      <p class="mt-4 text-lg">
        Temukan ribuan produk terbaik hari ini.
      </p>

      <div class="flex justify-center gap-4 mt-8">

        <button
          @click="goToCatalog"
          class="bg-orange-500 px-8 py-4 rounded-xl"
        >
          Mulai Belanja
        </button>

        <button
          @click="goToContact"
          class="border border-white px-8 py-4 rounded-xl"
        >
          Hubungi Kami
        </button>

      </div>

    </div>

  </div>
</section>
</div>
</template>
<script>
import Srgala from './Srgala_Home.vue'
export default {
  components: {
    Srgala
  },
  methods: {
    goToCatalog() {
      this.$router.push('/katalog')
    },

    goToAbout() {
      this.$router.push('/tentang')
    },

    goToContact() {
      this.$router.push('/kontak')
    },

    goToCheckout() {
      this.$router.push('/checkout')
    },

    goToProduct(id) {
      this.$router.push(`/produk/${id}`)
    }
  }
}
</script>
