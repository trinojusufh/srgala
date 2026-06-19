<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">

    <!-- Header -->
    <section class="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">
      <div class="max-w-7xl mx-auto px-6">
        <h1 class="text-4xl font-bold">
          Checkout
        </h1>
        <p class="mt-2 opacity-90">
          Lengkapi data pengiriman dan pembayaran
        </p>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-10">

      <div class="grid lg:grid-cols-3 gap-8">

        <!-- Form -->
        <div class="lg:col-span-2 space-y-8">

          <!-- Alamat -->
          <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6">

            <h2 class="text-2xl font-bold mb-6">
              📍 Alamat Pengiriman
            </h2>

            <div class="grid md:grid-cols-2 gap-4">

              <input
                v-model="form.name"
                type="text"
                placeholder="Nama Penerima"
                class="border rounded-xl px-4 py-3"
              />

              <input
                v-model="form.phone"
                type="text"
                placeholder="Nomor Telepon"
                class="border rounded-xl px-4 py-3"
              />

            </div>

            <textarea
              v-model="form.address"
              rows="4"
              placeholder="Alamat Lengkap"
              class="w-full border rounded-xl px-4 py-3 mt-4"
            ></textarea>

          </div>

          <!-- Kurir -->
          <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6">

            <h2 class="text-2xl font-bold mb-6">
              🚚 Pilih Kurir
            </h2>

            <div class="space-y-4">

              <label
                v-for="courier in couriers"
                :key="courier.name"
                class="flex items-center justify-between border rounded-xl p-4 cursor-pointer hover:border-orange-500"
              >
                <div class="flex items-center gap-3">
                  <input
                    type="radio"
                    v-model="selectedCourier"
                    :value="courier"
                  />
                  <span>{{ courier.name }}</span>
                </div>

                <span>
                  Rp {{ formatPrice(courier.price) }}
                </span>
              </label>

            </div>

          </div>

          <!-- Payment -->
          <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6">

            <h2 class="text-2xl font-bold mb-6">
              💳 Metode Pembayaran
            </h2>

            <div class="space-y-4">

              <label
                v-for="method in payments"
                :key="method"
                class="flex items-center gap-3 border rounded-xl p-4 cursor-pointer"
              >
                <input
                  type="radio"
                  v-model="paymentMethod"
                  :value="method"
                />

                <span>{{ method }}</span>

              </label>

            </div>

          </div>

        </div>

        <!-- Summary -->
        <div>

          <div
            class="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 sticky top-5"
          >

            <h2 class="text-2xl font-bold mb-6">
              Ringkasan Pesanan
            </h2>

            <div class="space-y-4">

              <div
                v-for="item in items"
                :key="item.id"
                class="flex justify-between"
              >
                <span>{{ item.name }}</span>
                <span>
                  Rp {{ formatPrice(item.price) }}
                </span>
              </div>

            </div>

            <hr class="my-6">

            <div class="mb-6">

              <label class="font-medium">
                Voucher
              </label>

              <div class="flex mt-2">

                <input
                  v-model="voucher"
                  placeholder="Masukkan voucher"
                  class="flex-1 border rounded-l-xl px-4 py-3"
                />

                <button
                  class="bg-blue-600 text-white px-5 rounded-r-xl"
                >
                  Pakai
                </button>

              </div>

            </div>

            <div class="space-y-4">

              <div class="flex justify-between">
                <span>Subtotal</span>
                <span>
                  Rp {{ formatPrice(subtotal) }}
                </span>
              </div>

              <div class="flex justify-between">
                <span>Ongkir</span>
                <span>
                  Rp {{ formatPrice(selectedCourier.price) }}
                </span>
              </div>

              <div class="flex justify-between">
                <span>Admin</span>
                <span>
                  Rp {{ formatPrice(adminFee) }}
                </span>
              </div>

              <hr>

              <div
                class="flex justify-between text-2xl font-bold"
              >
                <span>Total</span>

                <span class="text-orange-500">
                  Rp {{ formatPrice(total) }}
                </span>
              </div>

            </div>

            <router-link
              to="/payment"
              class="block text-center mt-8 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold"
            >
              Bayar Sekarang
            </router-link>

          </div>

        </div>

      </div>

    </section>

  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const voucher = ref('')

const adminFee = 2500

const form = reactive({
  name: '',
  phone: '',
  address: ''
})

const couriers = [
  {
    name: 'JNE Regular',
    price: 18000
  },
  {
    name: 'J&T Express',
    price: 15000
  },
  {
    name: 'SiCepat',
    price: 12000
  }
]

const selectedCourier = ref(couriers[1])

const payments = [
  'QRIS',
  'Bank Transfer',
  'GoPay',
  'OVO',
  'DANA'
]

const paymentMethod = ref('QRIS')

const items = ref([
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    price: 18999000
  },
  {
    id: 2,
    name: 'Apple Watch',
    price: 5500000
  }
])

const subtotal = computed(() => {
  return items.value.reduce(
    (total, item) => total + item.price,
    0
  )
})

const total = computed(() => {
  return (
    subtotal.value +
    selectedCourier.value.price +
    adminFee
  )
})

const formatPrice = (value) => {
  return new Intl.NumberFormat('id-ID').format(value)
}
</script>