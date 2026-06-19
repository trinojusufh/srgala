<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">

    <!-- Header -->
    <section
      class="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16"
    >
      <div class="max-w-7xl mx-auto px-6">

        <h1 class="text-4xl font-bold">
          Pembayaran QRIS
        </h1>

        <p class="mt-3 opacity-90">
          Selesaikan pembayaran sebelum waktu habis
        </p>

      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-10">

      <div class="grid lg:grid-cols-3 gap-8">

        <!-- QRIS -->
        <div class="lg:col-span-2">

          <div
            class="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8"
          >

            <div class="text-center">

              <div
                class="inline-flex px-4 py-2 rounded-full bg-green-100 text-green-600 mb-6"
              >
                Menunggu Pembayaran
              </div>

              <h2 class="text-3xl font-bold mb-6">
                Scan QRIS
              </h2>

              <!-- QR -->
              <div
                class="w-80 h-80 mx-auto bg-white border-4 border-dashed rounded-3xl flex items-center justify-center"
              >
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=PAYMENT-DEMO"
                  alt="QRIS"
                  class="w-72 h-72"
                />
              </div>

              <p class="mt-6 text-gray-500">
                Scan menggunakan aplikasi
                Mobile Banking / E-Wallet
              </p>

            </div>

          </div>

        </div>

        <!-- Summary -->
        <div>

          <div
            class="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 sticky top-6"
          >

            <h3 class="text-2xl font-bold mb-6">
              Detail Pembayaran
            </h3>

            <!-- Timer -->
            <div
              class="bg-red-50 border border-red-200 rounded-2xl p-5 mb-6"
            >

              <p class="text-sm text-gray-500">
                Batas Waktu Pembayaran
              </p>

              <div
                class="text-4xl font-bold text-red-500 mt-2"
              >
                {{ formattedTime }}
              </div>

              <div
                class="w-full bg-gray-200 rounded-full h-3 mt-4"
              >
                <div
                  class="bg-red-500 h-3 rounded-full transition-all"
                  :style="{ width: progress + '%' }"
                ></div>
              </div>

            </div>

            <!-- Order -->
            <div class="space-y-4">

              <div class="flex justify-between">
                <span>Order ID</span>
                <span>#INV2026001</span>
              </div>

              <div class="flex justify-between">
                <span>Produk</span>
                <span>3 Item</span>
              </div>

              <div class="flex justify-between">
                <span>Subtotal</span>
                <span>Rp 24.499.000</span>
              </div>

              <div class="flex justify-between">
                <span>Ongkir</span>
                <span>Rp 15.000</span>
              </div>

              <div class="flex justify-between">
                <span>Admin</span>
                <span>Rp 2.500</span>
              </div>

            </div>

            <hr class="my-6">

            <div
              class="flex justify-between text-xl font-bold"
            >
              <span>Total</span>

              <span class="text-green-600">
                Rp 24.516.500
              </span>
            </div>

            <button
              @click="copyAmount"
              class="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
            >
              Salin Nominal
            </button>

            <button
              class="w-full mt-3 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl"
            >
              Saya Sudah Bayar
            </button>

          </div>

        </div>

      </div>

      <!-- Instructions -->
      <div
        class="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 mt-8"
      >

        <h3 class="text-2xl font-bold mb-6">
          Cara Pembayaran
        </h3>

        <ol class="space-y-4">

          <li>
            1. Buka aplikasi Mobile Banking atau E-Wallet.
          </li>

          <li>
            2. Pilih menu Scan QRIS.
          </li>

          <li>
            3. Scan kode QR yang tersedia.
          </li>

          <li>
            4. Pastikan nominal pembayaran sesuai.
          </li>

          <li>
            5. Selesaikan pembayaran.
          </li>

        </ol>

      </div>

    </section>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const initialTime = 15 * 60
const timer = ref(initialTime)

let interval = null

onMounted(() => {
  interval = setInterval(() => {
    if (timer.value > 0) {
      timer.value--
    }
  }, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})

const formattedTime = computed(() => {
  const minutes = Math.floor(timer.value / 60)
  const seconds = timer.value % 60

  return `${String(minutes).padStart(2, '0')}:${String(
    seconds
  ).padStart(2, '0')}`
})

const progress = computed(() => {
  return (timer.value / initialTime) * 100
})

const copyAmount = async () => {
  await navigator.clipboard.writeText('24516500')
  alert('Nominal berhasil disalin')
}
</script>