<template>
  <section class="py-24 bg-white">
    <div class="container-srgala">

      <div class="grid lg:grid-cols-2 gap-16 items-center">

        <!-- Left -->
        <div>
          <span class="section-subtitle">
            TENTANG SRGALA
          </span>

          <h2 class="section-title mt-4 text-slate-900">
            Dibangun Untuk
            <span class="text-orange-500">
              Terus Bergerak
            </span>
          </h2>

          <p class="mt-8 text-slate-600 leading-relaxed text-lg">
            SRGALA lahir dari semangat untuk terus melangkah,
            menghadapi tantangan, dan menikmati setiap perjalanan.
            Kami percaya bahwa kemajuan tidak ditentukan oleh
            siapa yang paling cepat, tetapi oleh mereka yang
            tidak berhenti bergerak.
          </p>

          <p class="mt-6 text-slate-600 leading-relaxed">
            Dari lintasan lari, sesi latihan, hingga petualangan
            outdoor, setiap produk SRGALA dirancang untuk
            memberikan kenyamanan, performa, dan kepercayaan diri
            dalam setiap aktivitas.
          </p>

          <div class="grid grid-cols-2 gap-6 mt-10">

            <div>
              <h3 class="text-4xl font-black text-orange-500">
                100%
              </h3>

              <p class="mt-2 text-slate-600">
                Fokus Pada Performa
              </p>
            </div>

            <div>
              <h3 class="text-4xl font-black text-orange-500">
                ALL
              </h3>

              <p class="mt-2 text-slate-600">
                Sport Category
              </p>
            </div>

          </div>
        </div>

        <!-- Right -->
        <div>
          <div
            class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-black to-slate-950 h-[500px]"
          >

            <div
              class="absolute inset-0 bg-orange-500/5"
            />

            <div
              class="absolute top-10  bg-cover bg-center scale-410  right-20 h-80 w-80 "
              style="background-image: url('/image/logo.png')"
            />

            <div
              class="absolute bottom-10 left-10"
            >
              <h3
                class="text-6xl font-black text-white"
              >
                SRGALA
              </h3>

              <p
                class="mt-3 text-orange-400 tracking-[0.3em] uppercase"
              >
                MOVE BEYOND LIMITS
              </p>
            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>