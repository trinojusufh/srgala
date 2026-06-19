<template>
  <section class="py-24 bg-slate-50">

    <div class="container-srgala">

      <div class="text-center">
        <span class="section-subtitle">
          NILAI KAMI
        </span>

        <h2 class="section-title mt-4">
          Lebih Dari Sekadar Apparel
        </h2>
      </div>

      <div
        class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
      >

        <div
          v-for="item in values"
          :key="item"
          class="feature-card text-center"
        >
          <h3
            class="text-2xl font-black text-orange-500"
          >
            {{ item }}
          </h3>
        </div>

      </div>

    </div>

  </section>
</template>

<script>
export default {
  name: 'ValuesSection',

  data() {
    return {
      values: [
        'Disiplin',
        'Konsisten',
        'Berani',
        'Tangguh',
        'Pantang Menyerah',
        'Eksplorasi',
        'Komitmen',
        'Berkembang'
      ]
    }
  }
}
</script>