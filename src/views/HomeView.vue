<template>
  <main class="overflow-hidden">
    <HeroSection  />
    <AboutSection />
    <FeaturedProducts />
    <LifestyleBanner />
    <TechnologySection />
   
    <BestSellerSection />
    <ValuesSection />
    <CTASection />
    <CommunitySection />
    <TestimonialSection />
   
    
      <WhyChooseSection />

  </main>
</template>

<script>
import HeroSection from '@/components/home/HeroSection.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import FeaturedProducts from '@/components/home/FeaturedProducts.vue'
import WhyChooseSection from '@/components/home/WhyChooseSection.vue'
import TechnologySection from '@/components/home/TechnologySection.vue'
import LifestyleBanner from '@/components/home/LifestyleBanner.vue'
import BestSellerSection from '@/components/home/BestSellerSection.vue'
import ValuesSection from '@/components/home/ValuesSection.vue'
import CommunitySection from '@/components/home/CommunitySection.vue'
import TestimonialSection from '@/components/home/TestimonialSection.vue'
import CTASection from '@/components/home/CTASection.vue'

export default {
  name: 'HomeView',

  components: {
    HeroSection,
    AboutSection,
    FeaturedProducts,
    WhyChooseSection,
    TechnologySection,
    LifestyleBanner,
    BestSellerSection,
    ValuesSection,
    CommunitySection,
    TestimonialSection,
    CTASection
  }
}
</script>