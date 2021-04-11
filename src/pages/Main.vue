<template>
  <div>
    <Hero data-scroll-section />
    <Faces data-scroll-section />
    <Ratings data-scroll-section />
    <Footer data-scroll-section />
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import Faces from '../components/Faces.vue'
import Ratings from '../components/Ratings.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Main',
  components: { Hero, Faces, Ratings, Footer },
}
</script>

