<template>
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6">

      <h2
        class="text-center text-5xl font-black"
      >
        Teknologi Material
      </h2>

      <div
        class="grid md:grid-cols-4 gap-6 mt-16"
      >

        <div
          v-for="tech in techs"
          :key="tech.title"
          class="p-8 rounded-3xl bg-slate-50"
        >
          <h3
            class="text-orange-500 text-2xl font-black"
          >
            {{ tech.title }}
          </h3>

          <p class="mt-3 text-slate-600">
            {{ tech.desc }}
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const techs = [
  {
    title: '4-WAY',
    desc: 'Stretch Fabric'
  },
  {
    title: 'DRYFIT',
    desc: 'Quick Dry'
  },
  {
    title: 'UV',
    desc: 'Protection'
  },
  {
    title: 'BREATHABLE',
    desc: 'Air Flow'
  }
]
</script>