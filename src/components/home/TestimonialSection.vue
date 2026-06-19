<template>
  <section
    class="py-24 bg-gradient-to-r from-blue-950 via-black to-slate-950 text-white"
  >

    <div class="container-srgala">

      <div class="text-center">

        <span class="section-subtitle">
          TESTIMONI
        </span>

        <h2
          class="section-title mt-4 text-white"
        >
          Dipercaya Oleh Mereka
          Yang Terus Bergerak
        </h2>

      </div>

      <div
        class="grid md:grid-cols-3 gap-8 mt-16"
      >

        <div
          v-for="item in testimonials"
          :key="item.name"
          class="glass-card p-8"
        >
          <p
            class="text-slate-300 leading-relaxed"
          >
            "{{ item.review }}"
          </p>

          <div class="mt-6">
            <h4
              class="font-bold"
            >
              {{ item.name }}
            </h4>

            <p
              class="text-orange-400 text-sm"
            >
              {{ item.role }}
            </p>
          </div>
        </div>

      </div>

      <div
        class="grid md:grid-cols-3 gap-8 mt-20 text-center"
      >

        <div>
          <h3
            class="text-5xl font-black text-orange-500"
          >
            500+
          </h3>

          <p
            class="mt-3 text-slate-400"
          >
            Pelanggan Puas
          </p>
        </div>

        <div>
          <h3
            class="text-5xl font-black text-orange-500"
          >
            1000+
          </h3>

          <p
            class="mt-3 text-slate-400"
          >
            Produk Terjual
          </p>
        </div>

        <div>
          <h3
            class="text-5xl font-black text-orange-500"
          >
            50+
          </h3>

          <p
            class="mt-3 text-slate-400"
          >
            Kota Di Indonesia
          </p>
        </div>

      </div>

    </div>

  </section>
</template>

<script>
export default {
  name: 'TestimonialSection',

  data() {
    return {
      testimonials: [
        {
          name: 'Andi',
          role: 'Runner',
          review:
            'Bahannya ringan dan nyaman dipakai untuk lari jarak jauh.'
        },
        {
          name: 'Rizky',
          role: 'Gym Enthusiast',
          review:
            'Nyaman digunakan latihan harian dan cepat kering.'
        },
        {
          name: 'Fajar',
          role: 'Outdoor Explorer',
          review:
            'Jaketnya cocok untuk aktivitas outdoor dan cuaca berubah-ubah.'
        }
      ]
    }
  }
}
</script>