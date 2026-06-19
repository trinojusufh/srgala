<template>

<div
 class="bg-white
 dark:bg-slate-800
 rounded-xl
 shadow">

 <img
  :src="product.image"
  class="h-52 w-full object-cover">

 <div class="p-4">

  <h3 class="font-semibold">

   {{ product.name }}

  </h3>

  <p
   class="text-orange-500
   font-bold">

   Rp {{ formatPrice(product.price) }}

  </p>

  <button
   @click="addToCart(product)"
   class="mt-4
   w-full
   bg-orange-500
   text-white
   py-2
   rounded-lg">

   Tambah Keranjang

  </button>

 </div>

</div>

</template>