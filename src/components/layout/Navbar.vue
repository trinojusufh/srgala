<template>
  <header class="sticky top-0 z-50 bg-white dark:bg-slate-900 shadow-md">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <!-- Logo -->

      <div
        class="relative flex items-center gap-4 cursor-pointer overflow-hidden"
        @click="goHome"
      >
        <!-- Speed Effect -->
        <div class="absolute left-0 top-1/2 -translate-y-1/2">
          <div class="speed-line"></div>
        </div>

        <div
          class="logo-pulse w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg"
        >
          <span class="text-white font-black text-xl"> SG </span>
        </div>

        <div class="relative z-10">
          <h1  class="font-black text-2xl tracking-wider
         bg-gradient-to-r
         from-orange-500
         to-red-500
         bg-clip-text
         text-transparent">SRGALA</h1>

          <p class="text-[10px] uppercase tracking-[0.25em] text-orange-500">
            Move Beyond Limits
          </p>
        </div>
      </div>

      <!-- Desktop Menu -->
      <nav class="hidden md:flex items-center gap-8">
        <router-link to="/" class="hover:text-orange-500 transition">
          Beranda
        </router-link>

        <router-link to="/katalog" class="hover:text-orange-500 transition">
          Katalog
        </router-link>

        <router-link to="/tentang" class="hover:text-orange-500 transition">
          Tentang
        </router-link>

        <router-link to="/kontak" class="hover:text-orange-500 transition">
          Kontak
        </router-link>
      </nav>

      <!-- Right -->
      <div class="flex items-center gap-4">
        <!-- Theme -->
        <button
          @click="toggleTheme"
          class="w-10 h-10 rounded-xl bg-gray-100 dark:bg-slate-800"
        >
          {{ darkMode ? "☀️" : "🌙" }}
        </button>

        <!-- Cart -->
        <router-link to="/cart" class="relative">
          <div
            class="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center"
          >
            🛒
          </div>

          <span
            v-if="totalItems > 0"
            class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold"
          >
            {{ totalItems }}
          </span>
        </router-link>

        <!-- Mobile Button -->
        <button @click="mobileMenu = !mobileMenu" class="md:hidden text-2xl">
          ☰
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="mobileMenu"
      class="md:hidden bg-white dark:bg-slate-900 border-t"
    >
      <div class="flex flex-col p-4 gap-4">
        <router-link to="/"> Beranda </router-link>

        <router-link to="/katalog"> Katalog </router-link>

        <router-link to="/tentang"> Tentang </router-link>

        <router-link to="/kontak"> Kontak </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { useCartStore } from "@/stores/cart";
export default {
  name: "NavbarComponent",

  data() {
    return {
      mobileMenu: false,
      darkMode: false,

      // dummy cart
      cartItems: [
        {
          id: 1,
          qty: 2,
        },
        {
          id: 2,
          qty: 3,
        },
      ],
    };
  },
  computed: {
    totalItems() {
      const cartStore = useCartStore();
      return cartStore.totalItems;
    },
  },

  mounted() {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      this.darkMode = true;
      document.documentElement.classList.add("dark");
    }
  },

  methods: {
    goHome() {
      this.$router.push("/");
    },

    toggleTheme() {
      this.darkMode = !this.darkMode;

      if (this.darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    },
  },
};
</script>

<style scoped>
.router-link-active {
  color: #f97316;
  font-weight: 700;
}
.speed-line {
  width: 120px;
  height: 3px;
  background: linear-gradient(90deg, transparent, #f97316, transparent);

  animation: speedMove 2s linear infinite;
}

@keyframes speedMove {
  0% {
    transform: translateX(-80px);
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    transform: translateX(120px);
    opacity: 0;
  }
}
.brand-text {
  position: relative;
  overflow: hidden;
}

.brand-text::after {
  content: "";
  position: absolute;
  top: 0;
  left: -150%;

  width: 60%;
  height: 100%;

  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.7),
    transparent
  );

  animation: sweep 4s infinite;
}

@keyframes sweep {
  0% {
    left: -150%;
  }

  100% {
    left: 200%;
  }
}
.brand-text::before {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;

  height: 3px;
  width: 0;

  background: #f97316;

  animation: underlineGrow 2s ease infinite;
}

@keyframes underlineGrow {
  0% {
    width: 0;
  }

  50% {
    width: 100%;
  }

  100% {
    width: 0;
    left: 100%;
  }
}
.logo-pulse {
  animation: pulseLogo 3s ease infinite;
}

@keyframes pulseLogo {
  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.08);
  }
}
</style>