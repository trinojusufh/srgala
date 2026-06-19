<template>
  <section class="py-24 bg-white">
    <div class="container-srgala">

      <div class="text-center">
        <span class="section-subtitle">
          PALING DICARI
        </span>

        <h2 class="section-title mt-4">
          Produk Favorit SRGALA
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-8 mt-16">

        <div
          v-for="item in products"
          :key="item.name"
          class="product-card"
        >
          <div
            class="h-80 bg-gradient-to-br from-slate-900 to-black"
          />

          <div class="p-6">
            <h3 class="text-2xl font-bold">
              {{ item.name }}
            </h3>

            <p class="mt-3 text-slate-600">
              {{ item.description }}
            </p>

            <button
              class="mt-6 text-orange-500 font-semibold"
            >
              Lihat Detail →
            </button>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'BestSellerSection',

  data() {
    return {
      products: [
        {
          name: 'Alpha Jersey',
          description: 'Ringan dan breathable untuk performa maksimal.'
        },
        {
          name: 'Velocity Jersey',
          description: 'Dirancang untuk aktivitas intensitas tinggi.'
        },
        {
          name: 'Storm Jacket',
          description: 'Perlindungan ekstra untuk aktivitas outdoor.'
        }
      ]
    }
  }
}
</script>