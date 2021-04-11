<template>
  <div id="menu" data-scroll-container>
    <Unwrap ref="unwrapref"/>
    <Navigator :isMainPage="true" />
    <Hero data-scroll-section />
    <Faces data-scroll-section />
    <Ratings data-scroll-section />
    <Footer data-scroll-section />
  </div>
</template>

<script>
import Navigator from '../components/Navigator.vue'
import Hero from '../components/Hero.vue'
import Faces from '../components/Faces.vue'
import Ratings from '../components/Ratings.vue'
import Footer from '../components/Footer.vue'
import Unwrap from '../components/Unwrap.vue'

import setupScroll from '../assets/locomotiveSetup.js'

export default {
  name: 'Main',
  components: { Hero, Faces, Ratings, Footer, Navigator, Unwrap },
  mounted(){    
    let scroll = setupScroll()

    setTimeout(() => {
      scroll.update()
      this.$refs.unwrapref.open()
    }, 1000)
  }
}
</script>

<style>
#menu
{
  background-color: #1a1a1a;
}
</style>

