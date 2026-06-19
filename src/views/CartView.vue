<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <section
      class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16"
    >
      <div class="max-w-7xl mx-auto px-6">
        <h1 class="text-4xl font-bold">Keranjang Belanja</h1>
        <p class="mt-2 opacity-90">Periksa kembali produk sebelum checkout</p>
      </div>
    </section>
    
    <section class="max-w-7xl mx-auto px-6 py-10">
        <div
  v-if="cartItems.length === 0"
  class="bg-white rounded-2xl p-10 text-center shadow-lg"
>
  <div class="text-6xl mb-4">
    🛒
  </div>

  <h2 class="text-2xl font-bold">
    Keranjang Masih Kosong
  </h2>

  <p class="text-gray-500 mt-2">
    Yuk mulai belanja sekarang
  </p>

  <button
    @click="$router.push('/katalog')"
    class="mt-6 bg-orange-500 text-white px-8 py-3 rounded-xl"
  >
    Belanja Sekarang
  </button>
</div>
      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Product List -->
        <div class="lg:col-span-2 space-y-6">
          <div
            v-for="item in cartItems"
            :key="item.id"
            class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5"
          >
            <div class="flex flex-col md:flex-row gap-5">
              <img
                :src="item.image"
                class="w-full md:w-40 h-40 object-cover rounded-xl"
              />

              <div class="flex-1">
                <h2 class="text-xl font-bold">
                  {{ item.name }}
                </h2>

                <p class="text-gray-500 mt-2">
                  {{ item.category }}
                </p>

                <p class="text-orange-500 font-bold text-2xl mt-4">
                  Rp {{ formatPrice(item.price) }}
                </p>
              </div>

              <div class="flex flex-col justify-between">
                <button
                  @click="removeItem(item.id)"
                  class="text-red-500 hover:text-red-700"
                >
                  🗑 Hapus
                </button>

                <div class="flex items-center gap-3">
                  <button
                    @click="decreaseQty(item)"
                    class="w-10 h-10 rounded-lg bg-gray-200"
                  >
                    -
                  </button>

                  <span class="font-bold text-lg">
                    {{ item.qty }}
                  </span>

                  <button
                    @click="increaseQty(item)"
                    class="w-10 h-10 rounded-lg bg-gray-200"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Summary -->
        <div>
          <div
            class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sticky top-5"
          >
            <h2 class="text-2xl font-bold mb-6">Ringkasan Belanja</h2>

            <!-- Voucher -->
            <div class="mb-6">
              <label class="font-medium"> Kode Voucher </label>

              <div class="flex mt-2">
                <input
                  v-model="voucher"
                  placeholder="Masukkan voucher"
                  class="flex-1 border rounded-l-xl px-4 py-3"
                />

                <button class="bg-blue-600 text-white px-5 rounded-r-xl">
                  Pakai
                </button>
              </div>
            </div>

            <div class="space-y-4">
              <div class="flex justify-between">
                <span>Subtotal</span>
                <span> Rp {{ formatPrice(subtotal) }} </span>
              </div>

              <div class="flex justify-between">
                <span>Ongkir</span>
                <span> Rp {{ formatPrice(shipping) }} </span>
              </div>

              <div class="flex justify-between">
                <span>Biaya Admin</span>
                <span> Rp {{ formatPrice(adminFee) }} </span>
              </div>

              <hr />

              <div class="flex justify-between font-bold text-xl">
                <span>Total</span>

                <span class="text-orange-500">
                  Rp {{ formatPrice(total) }}
                </span>
              </div>
            </div>

            <button
              @click="checkout"
              class="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold"
            >
              Checkout Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { useCartStore } from "../stores/cart";

export default {
  name: "CartView",

  data() {
    return {
      voucher: "",
      shipping: 15000,
      adminFee: 2500,
    };
  },

  computed: {
    cartStore() {
      return useCartStore();
    },

    cartItems() {
      return this.cartStore.items;
    },

    subtotal() {
      return this.cartItems.reduce(
        (total, item) => total + item.price * item.qty,
        0
      );
    },

    total() {
      return this.subtotal + this.shipping + this.adminFee;
    },
  },

  methods: {
    formatPrice(price) {
      return new Intl.NumberFormat("id-ID").format(price);
    },

    increaseQty(item) {
      item.qty++;
    },

    decreaseQty(item) {
      if (item.qty > 1) {
        item.qty--;
      }
    },

    removeItem(id) {
      Swal.fire({
        title: "Hapus Produk?",
        text: "Produk akan dihapus dari keranjang",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#f97316",
        cancelButtonColor: "#6b7280",
        confirmButtonText: "Ya, Hapus",
      }).then((result) => {
        if (result.isConfirmed) {
          this.cartStore.remove(id);

          Swal.fire({
            icon: "success",
            title: "Berhasil",
            text: "Produk dihapus dari keranjang",
            timer: 1500,
            showConfirmButton: false,
          });
        }
      });
    },

    checkout() {
      if (this.cartItems.length === 0) {
        Swal.fire({
          icon: "error",
          title: "Keranjang Kosong",
          text: "Silakan pilih produk terlebih dahulu",
        });

        return;
      }

      this.$router.push("/checkout");
    },
  },
};
</script>