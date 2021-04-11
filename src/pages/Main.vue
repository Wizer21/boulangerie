<template>
  <div id="menu" data-scroll-container>
    <Unwrap ref="unwrapref"/>
    <Navigator :isMainPage="true" />
    <Hero data-scroll-section @newLoad="newLoad"/>
    <Faces data-scroll-section @newLoad="newLoad" />
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
  data(){
    return {
      scroll: null,
      loadStack: 0
    }
  },
  methods: {
    newLoad(){
      this.loadStack += 1

      if(this.loadStack >= 8){
        this.scroll.update()
        this.$refs.unwrapref.open()
      }
    },
  },
  mounted(){    
    this.scroll = setupScroll()
  }
}
</script>

<style>
#menu
{
  background-color: #1a1a1a;
}
</style>

