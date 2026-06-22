<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">

    <section class="max-w-7xl mx-auto px-6 py-12">

      <div class="grid lg:grid-cols-2 gap-10">

        <!-- Gallery -->
        <div>

          <div class="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg">
           <img
  :src="selectedImage"
  :alt="product.name"
  class="w-full h-[500px] object-contain bg-slate-100 dark:bg-slate-900 p-4"
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
  :src="item.images[0]"
  :alt="item.name"
  class="w-full h-52 object-contain bg-slate-100 p-2"
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
    name: 'Wolf Jacket',
    category: 'Jaket',
    description: 'Jaket Wolf Series dengan bahan premium, nyaman digunakan untuk aktivitas outdoor maupun olahraga.',
    price: 329000,
    rating: 4.9,
    review: 128,
    sold: 340,
    stock: 50,
    brand: 'SRGALA',
    images: ['/baju/jaketwolf.png']
  },
  {
    id: 2,
    name: 'Wolf Singlet',
    category: 'Singlet',
    description: 'Singlet Wolf Series dengan teknologi quick dry.',
    price: 159000,
    rating: 4.8,
    review: 95,
    sold: 210,
    stock: 40,
    brand: 'SRGALA',
    images: ['/baju/singletwolf.png']
  },
  {
    id: 3,
    name: 'Samba Pendek',
    category: 'Jersey Pendek',
    description: 'Jersey Samba lengan pendek dengan bahan breathable.',
    price: 179000,
    rating: 4.8,
    review: 80,
    sold: 190,
    stock: 45,
    brand: 'SRGALA',
    images: ['/baju/pendeksamba.png']
  },
  {
    id: 4,
    name: 'Samba Jacket',
    category: 'Jaket',
    description: 'Jaket Samba untuk olahraga dan aktivitas harian.',
    price: 329000,
    rating: 4.9,
    review: 70,
    sold: 170,
    stock: 30,
    brand: 'SRGALA',
    images: ['/baju/jaketsamba.png']
  },
  {
    id: 5,
    name: 'Wolf Panjang',
    category: 'Jersey Panjang',
    description: 'Jersey Wolf lengan panjang dengan perlindungan ekstra.',
    price: 199000,
    rating: 4.8,
    review: 75,
    sold: 160,
    stock: 40,
    brand: 'SRGALA',
    images: ['/baju/panjangwolf.png']
  },
  {
    id: 6,
    name: 'Sunset Jacket',
    category: 'Jaket',
    description: 'Jaket Sunset Series dengan desain modern.',
    price: 329000,
    rating: 4.9,
    review: 90,
    sold: 250,
    stock: 35,
    brand: 'SRGALA',
    images: ['/baju/jaketsunset.png']
  },
  {
    id: 7,
    name: 'Wolf Pendek',
    category: 'Jersey Pendek',
    description: 'Jersey Wolf lengan pendek untuk aktivitas olahraga.',
    price: 179000,
    rating: 4.8,
    review: 85,
    sold: 220,
    stock: 60,
    brand: 'SRGALA',
    images: ['/baju/pendekwolf.png']
  },
  {
    id: 8,
    name: 'Sunset Singlet',
    category: 'Singlet',
    description: 'Singlet Sunset dengan bahan ringan dan adem.',
    price: 159000,
    rating: 4.7,
    review: 50,
    sold: 130,
    stock: 30,
    brand: 'SRGALA',
    images: ['/baju/singletsunset.png']
  },
  {
    id: 9,
    name: 'Sunset Panjang',
    category: 'Jersey Panjang',
    description: 'Jersey Sunset lengan panjang untuk outdoor.',
    price: 199000,
    rating: 4.8,
    review: 55,
    sold: 145,
    stock: 40,
    brand: 'SRGALA',
    images: ['/baju/panjangsunset.png']
  },
  {
    id: 10,
    name: 'Sunset Pendek',
    category: 'Jersey Pendek',
    description: 'Jersey Sunset lengan pendek dengan warna gradasi.',
    price: 179000,
    rating: 4.8,
    review: 62,
    sold: 180,
    stock: 50,
    brand: 'SRGALA',
    images: ['/baju/pendeksunset.png']
  },
  {
    id: 11,
    name: 'Green Jacket',
    category: 'Jaket',
    description: 'Jaket Green Series dengan desain eksklusif.',
    price: 329000,
    rating: 4.9,
    review: 65,
    sold: 150,
    stock: 25,
    brand: 'SRGALA',
    images: ['/baju/jaketgreen.png']
  },
  {
    id: 12,
    name: 'Black Jersey',
    category: 'Jersey Pendek',
    description: 'Jersey hitam premium dengan bahan quick dry.',
    price: 179000,
    rating: 4.8,
    review: 73,
    sold: 170,
    stock: 50,
    brand: 'SRGALA',
    images: ['/baju/blackpendek.png']
  },
  {
    id: 13,
    name: 'Green Jersey',
    category: 'Jersey Pendek',
    description: 'Jersey hijau dengan bahan breathable.',
    price: 179000,
    rating: 4.8,
    review: 68,
    sold: 160,
    stock: 40,
    brand: 'SRGALA',
    images: ['/baju/greenpendek.png']
  },
  {
    id: 14,
    name: 'Storm Singlet',
    category: 'Singlet',
    description: 'Singlet Storm Series dengan teknologi quick dry.',
    price: 159000,
    rating: 4.7,
    review: 48,
    sold: 120,
    stock: 35,
    brand: 'SRGALA',
    images: ['/baju/singletstrom.png']
  },
  {
    id: 15,
    name: 'Storm Pendek',
    category: 'Jersey Pendek',
    description: 'Jersey Storm lengan pendek untuk olahraga.',
    price: 179000,
    rating: 4.8,
    review: 60,
    sold: 150,
    stock: 45,
    brand: 'SRGALA',
    images: ['/baju/pendekstrom.png']
  },
  {
    id: 16,
    name: 'Storm Panjang',
    category: 'Jersey Panjang',
    description: 'Jersey Storm lengan panjang dengan perlindungan UV.',
    price: 199000,
    rating: 4.8,
    review: 55,
    sold: 140,
    stock: 40,
    brand: 'SRGALA',
    images: ['/baju/panjangstrom.png']
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