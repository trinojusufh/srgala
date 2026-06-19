<template>
  <div class="bg-slate-950 text-white">

    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-r from-blue-950 via-black to-slate-950 py-24 text-center">

      <div class="absolute inset-0 bg-orange-500/5" />

      <div class="container-srgala relative z-10">

        <span class="section-subtitle">
          GET IN TOUCH
        </span>

        <h1 class="text-5xl md:text-6xl font-black mt-6">
          Hubungi
          <span class="text-orange-500">
            SRGALA
          </span>
        </h1>

        <p class="mt-6 text-slate-300 max-w-2xl mx-auto">
          Kami siap membantu kamu untuk memilih
          jersey dan jaket terbaik untuk performa maksimal.
        </p>

      </div>
    </section>

    <!-- Contact Section -->
    <section class="container-srgala py-20">

      <div class="grid lg:grid-cols-2 gap-10">

        <!-- FORM -->
        <div class="glass-card p-10">

          <h2 class="text-2xl font-black mb-8">
            Kirim Pesan
          </h2>

          <form @submit.prevent="submitForm">

            <input
              v-model="form.name"
              type="text"
              placeholder="Nama kamu"
              class="w-full mb-4 px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-orange-500 outline-none"
            />

            <input
              v-model="form.email"
              type="email"
              placeholder="Email"
              class="w-full mb-4 px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-orange-500 outline-none"
            />

            <input
              v-model="form.subject"
              type="text"
              placeholder="Subjek"
              class="w-full mb-4 px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-orange-500 outline-none"
            />

            <textarea
              v-model="form.message"
              rows="5"
              placeholder="Tulis pesan..."
              class="w-full mb-6 px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-orange-500 outline-none"
            />

            <button
              type="submit"
              class="btn-primary w-full"
            >
              Kirim Pesan
            </button>

          </form>

        </div>

        <!-- INFO -->
        <div class="space-y-6">

          <div class="glass-card p-8">
            <h2 class="text-xl font-black mb-6">
              Informasi SRGALA
            </h2>

            <div class="space-y-4 text-slate-300">

              <p>📍 Bandung, Indonesia</p>
              <p>📧 hello@srgala.com</p>
              <p>📞 +62 8xx xxxx xxxx</p>
              <p>🕒 Senin - Minggu (08:00 - 22:00)</p>

            </div>
          </div>

          <div class="glass-card p-8">

            <h2 class="text-xl font-black mb-6">
              FAQ
            </h2>

            <div class="space-y-4 text-slate-300">

              <div>
                <p class="font-semibold text-white">
                  Cara order?
                </p>
                <p class="text-sm">
                  Pilih produk → checkout → pembayaran.
                </p>
              </div>

              <div>
                <p class="font-semibold text-white">
                  Payment method?
                </p>
                <p class="text-sm">
                  QRIS, transfer bank, e-wallet.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

    <!-- MAPS -->
    <section class="pb-20 container-srgala">

      <div class="rounded-3xl overflow-hidden border border-slate-800">
        <iframe
          class="w-full h-[450px]"
          src="https://maps.google.com/maps?q=Bandung&t=&z=13&ie=UTF8&iwloc=&output=embed"
        />
      </div>

    </section>

  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'ContactView',

  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },

  methods: {
    submitForm() {
      if (
        !this.form.name ||
        !this.form.email ||
        !this.form.message
      ) {
        Swal.fire({
          icon: 'warning',
          title: 'Lengkapi Form',
          text: 'Harap isi semua data terlebih dahulu'
        })
        return
      }

      Swal.fire({
        icon: 'success',
        title: 'Pesan Terkirim',
        text: 'Tim SRGALA akan segera menghubungi kamu',
        background: '#020617',
        color: '#fff',
        confirmButtonColor: '#f97316'
      })

      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  }
}
</script>