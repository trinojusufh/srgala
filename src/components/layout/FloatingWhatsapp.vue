<template>
  <a
    :href="whatsappLink"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed bottom-5 right-5 z-50 "
  >
    <img
      src="/image/wa.png"
      alt="WhatsApp"
      class="w-20 h-20 object-contain hover:scale-110 transition-transform duration-300"
    />
  </a>
</template>


<script setup>
const phoneNumber = "6281234567890"
const message = "Halo, saya ingin tanya tentang layanan Anda"

const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
</script>