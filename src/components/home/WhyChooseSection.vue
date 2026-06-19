<template>
  <section class="py-24 bg-slate-50">

    <div class="max-w-7xl mx-auto px-6">

      <div class="text-center">
        <h2
          class="text-5xl font-black"
        >
          Kenapa SRGALA
        </h2>
      </div>

      <div
        class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
      >

        <div
          v-for="item in items"
          :key="item"
          class="bg-white p-8 rounded-3xl"
        >
          <h3 class="font-bold text-xl">
            {{ item }}
          </h3>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
const items = [
  'Cepat Kering',
  'Ringan Dipakai',
  'Breathable',
  '4-Way Stretch',
  'Outdoor Ready',
  'Premium Local Brand'
]
</script>