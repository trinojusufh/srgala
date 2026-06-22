<template>
  <section
    class="relative  mx-auto  py-10 md:py-10 bg-gradient-to-r from-blue-950 via-black to-slate-950 text-white"
  >
    <div
      class="absolute top-0 right-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl"
    />

    <div class="max-w-7xl mx-auto px-6 py-28">
      <div class="grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <span
            class="inline-flex rounded-full border border-orange-500/30 px-4 py-2 text-orange-400 text-sm"
          >
            ACTIVE • SPORT • OUTDOOR
          </span>

          <h1
            class="mt-8 text-6xl md:text-7xl font-black leading-none"
          >
            MOVE
            <span class="block text-orange-500">
              BEYOND
            </span>
            LIMITS
          </h1>

          <p
            class="mt-8 text-slate-300 text-lg max-w-xl"
          >
            Apparel performa tinggi untuk olahraga
            dan aktivitas outdoor.
          </p>

          <div class="mt-10 flex gap-4">
            <button
            @click="$router.push('/katalog')"
              class="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold"
            >
              Belanja Sekarang
            </button>

            <button
            @click="$router.push('/tentang')"
              class="border border-slate-700 px-8 py-4 rounded-xl"
            >
              Tentang SRGALA
            </button>
          </div>
        </div>

      <div class="relative w-full h-[550px]">

  <!-- decorative scratches -->
  <div class="absolute -top-6 -left-6 w-32 h-32 bg-orange-500/20 blur-2xl rotate-12"></div>
  <div class="absolute bottom-0 right-0 w-40 h-40 bg-white/10 blur-3xl"></div>

  <!-- FRAME -->
  <div class="relative h-full overflow-hidden border border-white/10 clip-slashed">

    <!-- IMAGE -->
    <div
      class="absolute inset-0 bg-cover bg-center scale-110 animate-zoomSlow"
      style="background-image: url('/image/hero.png')"
    ></div>

    <!-- overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/70"></div>

  </div>

</div>
      </div>
    </div>
  </section>
</template>