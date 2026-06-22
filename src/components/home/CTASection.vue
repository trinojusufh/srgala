<template>
  <section
    class="relative overflow-hidden bg-gradient-to-r from-slate-950 via-black to-slate-950 py-24"
  >
    <div
      class="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-3xl"
    />

    <div
      class="container-srgala relative z-10 text-center"
    >
      <span
        class="section-subtitle"
      >
        MOVE BEYOND LIMITS
      </span>

      <h2
        class="section-title mt-4 text-white"
      >
        Saatnya Bergerak
        <span class="block text-orange-500">
          Lebih Jauh
        </span>
      </h2>

      <p
        class="mx-auto mt-6 max-w-2xl text-lg text-slate-400"
      >
        Temukan jersey dan jaket performa tinggi
        yang siap menemani setiap langkah,
        latihan, dan petualanganmu.
      </p>

      <div
        class="mt-10 flex flex-wrap justify-center gap-4"
      >
        <button
        @click="$router.push('/katalog')"
          class="btn-primary"
        >
          Belanja Sekarang
        </button>

        <button
        @click="$router.push('/katalog')"
          class="btn-secondary"
        >
          Lihat Koleksi
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CTASection'
}
</script>