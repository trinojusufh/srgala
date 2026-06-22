
<template>
<Navbar />
<router-view />
<Footer />
<FloatingWhatsapp />
</template>
<script setup>
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
import FloatingWhatsapp from './components/layout/FloatingWhatsapp.vue'
</script>
