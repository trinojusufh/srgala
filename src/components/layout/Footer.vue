<template>
<footer class="bg-slate-950 dark:bg-slate-50 border-t border-slate-200 dark:border-slate-800">

  <!-- Top Footer -->
  <div class="container-srgala py-20">

    <div class="grid lg:grid-cols-4 gap-12">

      <!-- Brand -->
      <div class="lg:col-span-2">

        <h2
          class="text-4xl font-black tracking-wider text-white dark:text-slate-950"
        >
          SRGALA
        </h2>

        <p
          class="mt-6 text-slate-400 leading-8 max-w-lg"
        >
          SRGALA adalah apparel sport dan outdoor yang
          dirancang untuk mereka yang terus bergerak.
          Dari lintasan lari, latihan harian,
          hingga petualangan tanpa batas.
        </p>

        <div
          class="mt-8 inline-flex items-center rounded-full border border-orange-500/30 px-5 py-2 text-orange-400"
        >
          MOVE BEYOND LIMITS
        </div>

      </div>

      <!-- Navigation -->
      <div>

        <h3
          class="font-bold text-lg mb-6 text-white dark:text-slate-950"
        >
          Navigasi
        </h3>

        <ul class="space-y-4">

          <li>
            <router-link
              to="/"
              class="text-slate-400 hover:text-orange-500 transition"
            >
              Beranda
            </router-link>
          </li>

          <li>
            <router-link
              to="/products"
              class="text-slate-400 hover:text-orange-500 transition"
            >
              Produk
            </router-link>
          </li>

          <li>
            <router-link
              to="/about"
              class="text-slate-400 hover:text-orange-500 transition"
            >
              Tentang Kami
            </router-link>
          </li>

          <li>
            <router-link
              to="/contact"
              class="text-slate-400 hover:text-orange-500 transition"
            >
              Kontak
            </router-link>
          </li>

        </ul>

      </div>

      <!-- Collection -->
      <div>

        <h3
          class="font-bold text-lg mb-6 text-white dark:text-slate-950"
        >
          Koleksi
        </h3>

        <ul class="space-y-4">

          <li class="text-slate-400">
            Jersey Performance
          </li>

          <li class="text-slate-400">
            Running Series
          </li>

          <li class="text-slate-400">
            Outdoor Series
          </li>

          <li class="text-slate-400">
            Performance Jacket
          </li>

        </ul>

      </div>

    </div>

    <!-- Divider -->
    <div
      class="my-12 border-t border-slate-800"
    />

    <!-- Contact -->
    <div
      class="grid md:grid-cols-2 gap-8 items-center"
    >

      <div>

        <h3
          class="font-bold text-lg text-white dark:text-slate-950"
        >
          Hubungi Kami
        </h3>

        <div
          class="mt-4 space-y-2 text-slate-400"
        >
          <p>Bandung, Indonesia</p>
          <p>hello@srgala.com</p>
          <p>+62 8xx xxxx xxxx</p>
        </div>

      </div>

      <!-- Social -->
      <div
        class="flex md:justify-end gap-4"
      >

        <a
          href="#"
          class="w-12 h-12 rounded-full border text-white border-slate-700 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition"
        >
          IG
        </a>

        <a
          href="#"
          class="w-12 h-12 rounded-full border text-white border-slate-700 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition"
        >
          TT
        </a>

        <a
          href="#"
          class="w-12 h-12 rounded-full border text-white border-slate-700 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition"
        >
          WA
        </a>

      </div>

    </div>

  </div>

  <!-- Bottom -->
  <div
    class="border-t border-slate-900"
  >
    <div
      class="container-srgala py-6 flex flex-col md:flex-row justify-between items-center"
    >

      <p
        class="text-slate-500"
      >
        © {{ currentYear }} SRGALA. All Rights Reserved.
      </p>

      <p
        class="text-slate-600 text-sm mt-3 md:mt-0"
      >
        Designed for Movement.
      </p>

    </div>
  </div>

</footer>
</template>

<script>
export default {
  name: 'FooterComponent',

  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>