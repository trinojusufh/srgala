<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">

    <section class="max-w-7xl mx-auto px-6 py-12">

      <div class="grid lg:grid-cols-2 gap-10">

        <!-- Gallery -->
        <div>

          <div class="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg">
            <img
              :src="selectedImage"
              class="w-full h-[500px] object-cover"
            />
          </div>

          <div class="grid grid-cols-4 gap-4 mt-4">

            <div
              v-for="image in product.images"
              :key="image"
              @click="selectedImage = image"
              class="cursor-pointer bg-white dark:bg-gray-800 rounded-xl overflow-hidden border-2 hover:border-blue-500"
            >
              <img
                :src="image"
                class="w-full h-24 object-cover"
              />
            </div>

          </div>

        </div>

        <!-- Product Info -->
        <div>

          <span
            class="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm"
          >
            {{ product.category }}
          </span>

          <h1 class="text-4xl font-bold mt-4">
            {{ product.name }}
          </h1>

          <div class="flex items-center gap-4 mt-4">

            <span class="text-yellow-500">
              ⭐ {{ product.rating }}
            </span>

            <span class="text-gray-500">
              {{ product.review }} Review
            </span>

            <span class="text-gray-500">
              {{ product.sold }} Terjual
            </span>

          </div>

          <div class="mt-8">
            <h2 class="text-5xl font-bold text-orange-500">
              Rp {{ formatPrice(product.price) }}
            </h2>
          </div>

          <div class="mt-8">

            <h3 class="font-semibold mb-3">
              Jumlah
            </h3>

            <div class="flex items-center gap-4">

              <button
                @click="decreaseQty"
                class="w-10 h-10 bg-gray-200 rounded-lg"
              >
                -
              </button>

              <span class="text-xl font-bold">
                {{ quantity }}
              </span>

              <button
                @click="quantity++"
                class="w-10 h-10 bg-gray-200 rounded-lg"
              >
                +
              </button>

            </div>

          </div>

          <div class="grid md:grid-cols-2 gap-4 mt-10">

          <button
  @click="addToCart"
  class="bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold"
>
  Tambah Keranjang
</button>

            <button
              @click="buyNow"
              class="bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold"
            >
              Beli Sekarang
            </button>

          </div>

          <!-- Specs -->
          <div class="mt-10 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">

            <h3 class="font-bold text-xl mb-4">
              Spesifikasi
            </h3>

            <div class="space-y-3">

              <div class="flex justify-between">
                <span>Brand</span>
                <span>{{ product.brand }}</span>
              </div>

              <div class="flex justify-between">
                <span>Stok</span>
                <span>{{ product.stock }}</span>
              </div>

              <div class="flex justify-between">
                <span>Berat</span>
                <span>1 Kg</span>
              </div>

            </div>

          </div>

        </div>

      </div>

      <!-- Description -->
      <div
        class="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 mt-16"
      >

        <h2 class="text-3xl font-bold mb-6">
          Deskripsi Produk
        </h2>

        <p class="leading-8 text-gray-600 dark:text-gray-300">
          {{ product.description }}
        </p>

      </div>

      <!-- Reviews -->
      <div
        class="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 mt-10"
      >

        <h2 class="text-3xl font-bold mb-8">
          Ulasan Pembeli
        </h2>

        <div
          v-for="review in reviews"
          :key="review.name"
          class="border-b py-6"
        >

          <div class="flex justify-between">

            <h3 class="font-bold">
              {{ review.name }}
            </h3>

            <span>
              ⭐ {{ review.rating }}
            </span>

          </div>

          <p class="mt-3 text-gray-500">
            {{ review.comment }}
          </p>

        </div>

      </div>

      <!-- Related Product -->
      <div class="mt-16">

        <h2 class="text-3xl font-bold mb-8">
          Produk Terkait
        </h2>

        <div class="grid md:grid-cols-4 gap-6">

       <div
  v-for="item in relatedProducts"
  :key="item.id"
  @click="$router.push(`/produk/${item.id}`)"
  class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition"
>

            <img
              :src="item.image"
              class="w-full h-52 object-cover"
            />

            <div class="p-4">

              <h3 class="font-bold">
                {{ item.name }}
              </h3>

              <p class="text-orange-500 mt-2">
                Rp {{ formatPrice(item.price) }}
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { useCartStore } from '../stores/cart'
export default {
  name: 'ProductDetailView',

  data() {
    return {
      quantity: 1,

      product: {
        id: null,
        name: '',
        category: '',
        price: 0,
        rating: 0,
        review: 0,
        sold: 0,
        brand: '',
        stock: 0,
        description: '',
        images: []
      },

      selectedImage: '',

      reviews: [],

      relatedProducts: []
    }
  },

  mounted() {
    this.loadProduct()
  },

  methods: {
    loadProduct() {
      const productId = this.$route.params.id

      const products = [
        {
          id: 1,
          name: 'Alpha Jersey',
          category: 'Running',
          price: 18999000,
          rating: 4.9,
          review: 1200,
          sold: 5400,
          brand: 'Srgala',
          stock: 25,
          description:
            'Jersey running berkualitas tinggi untuk aktivitas olahraga.',
          images: [
            'https://picsum.photos/800/800?1',
            'https://picsum.photos/800/800?2',
            'https://picsum.photos/800/800?3',
            'https://picsum.photos/800/800?4'
          ]
        },
        {
          id: 2,
          name: 'Sepatu Running',
          category: 'Fashion',
          price: 750000,
          rating: 4.8,
          review: 500,
          sold: 2100,
          brand: 'Nike',
          stock: 50,
          description:
            'Sepatu running nyaman untuk olahraga harian.',
          images: [
            'https://picsum.photos/800/800?5',
            'https://picsum.photos/800/800?6',
            'https://picsum.photos/800/800?7',
            'https://picsum.photos/800/800?8'
          ]
        }
      ]

      const foundProduct = products.find(
        item => item.id === Number(productId)
      )

      if (foundProduct) {
        this.product = foundProduct
        this.selectedImage = foundProduct.images[0]
      }

      this.reviews = [
        {
          name: 'Budi',
          rating: 5,
          comment: 'Barang bagus dan original.'
        },
        {
          name: 'Andi',
          rating: 5,
          comment: 'Pengiriman cepat dan aman.'
        }
      ]

      this.relatedProducts = products.filter(
        item => item.id !== Number(productId)
      )
    },

   decreaseQty() {
    if (this.quantity > 1) {
      this.quantity--
    }
  },

     addToCart() {
    const cartStore = useCartStore()

    cartStore.add({
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      image: this.product.images[0],
      qty: this.quantity
    })

    Swal.fire({
      icon: 'success',
      title: 'Berhasil!',
      text: `${this.product.name} ditambahkan ke keranjang`,
      showConfirmButton: false,
      timer: 1500
    })
  },

    buyNow() {
    const cartStore = useCartStore()

    cartStore.add({
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      image: this.product.images[0],
      qty: this.quantity
    })

    this.$router.push('/checkout')
  },

    formatPrice(price) {
    return new Intl.NumberFormat('id-ID').format(price)
  }
  }
}
</script>