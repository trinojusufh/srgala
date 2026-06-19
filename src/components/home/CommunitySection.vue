<template>
  <section class="py-24 bg-white">

    <div class="container-srgala">

      <div class="text-center">
        <span class="section-subtitle">
          KOMUNITAS
        </span>

        <h2 class="section-title mt-4">
          #SRGALAJOURNEY
        </h2>

        <p
          class="max-w-2xl mx-auto mt-6 text-slate-600"
        >
          Tumbuh bersama mereka yang terus bergerak.
          Dari lintasan lari, gym, hingga jalur pendakian.
        </p>
      </div>

      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
      >

        <div
          v-for="index in 8"
          :key="index"
          class="aspect-square rounded-3xl bg-slate-200"
        />

      </div>

    </div>

  </section>
</template>

<script>
export default {
  name: 'CommunitySection'
}
</script>