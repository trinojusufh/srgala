<template>
  <section class="py-24 bg-white">
    <div class="container-srgala">

      <div class="text-center">
        <span class="section-subtitle">
          PALING DICARI
        </span>

        <h2 class="section-title mt-4">
          Produk Favorit SRGALA
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-8 mt-16">

        <div
          v-for="item in products"
          :key="item.name"
          class="product-card"
        >
          <div
  class="h-80 bg-slate-100 dark:bg-slate-900 flex items-center justify-center overflow-hidden"
>
 <img
  :src="item.image"
  :alt="item.name"
  class="w-full h-full object-contain p-4 transition duration-300 hover:scale-105"
/>
</div>

          <div class="p-6">
            <h3 class="text-2xl font-bold">
              {{ item.name }}
            </h3>

            <p class="mt-3 text-slate-600">
              {{ item.description }}
            </p>

            <button
            @click="$router.push(`/produk/${item.id}`)"
              class="mt-6 text-orange-500 font-semibold"
            >
              Lihat Detail →
            </button>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'BestSellerSection',

  data() {
    return {
      products:  [
  {
    id: 1,
    name: 'Wolf Jacket',
    category: 'Jaket',
    description: 'Jaket Wolf Series',
    price: 329000,
    rating: 4.9,
    image: '/baju/jaketwolf.png'
  },
  {
    id: 2,
    name: 'Wolf Singlet',
    category: 'Singlet',
    description: 'Singlet Wolf Series',
    price: 159000,
    rating: 4.8,
    image: '/baju/singletwolf.png'
  },
  {
    id: 3,
    name: 'Samba Pendek',
    category: 'Jersey Pendek',
    description: 'Jersey Samba Lengan Pendek',
    price: 179000,
    rating: 4.8,
    image: '/baju/pendeksamba.png'
  },
  {
    id: 4,
    name: 'Samba Jacket',
    category: 'Jaket',
    description: 'Jaket Samba Series',
    price: 329000,
    rating: 4.9,
    image: '/baju/jaketsamba.png'
  },
  {
    id: 5,
    name: 'Wolf Panjang',
    category: 'Jersey Panjang',
    description: 'Jersey Wolf Lengan Panjang',
    price: 199000,
    rating: 4.8,
    image: '/baju/panjangwolf.png'
  }, {
    id: 10,
    name: 'Sunset Pendek',
    category: 'Jersey Pendek',
    description: 'Jersey Sunset Lengan Pendek',
    price: 179000,
    rating: 4.8,
    image: '/baju/pendeksunset.png'
  }
      ]
    }
  }
}
</script>