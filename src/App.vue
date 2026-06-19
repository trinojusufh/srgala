
<template>
<Navbar />
<router-view />
<Footer />
<a href='https://wa.me/6281234567890' class='fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full'>WA</a>
</template>
<script setup>
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
</script>
