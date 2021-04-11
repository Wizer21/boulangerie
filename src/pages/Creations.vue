<template>
  <div data-scroll-container>
    <Unwrap ref="unwrapref"/>
    <Navigator :isMainPage="false"/>
    <div data-scroll-section>
      <div v-for="item of itemList" :key="item.name">
        <img :src="item.url" :alt="item.name">
        <p>
          {{ item.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import setupScroll from '../assets/locomotiveSetup.js'
import Navigator from '../components/Navigator.vue'
import Unwrap from '../components/Unwrap.vue'

export default {
  name: "Creations",
  components: { Navigator, Unwrap },
  data(){
    return {
      itemList: [
        {
          name: "Baguette",
          url: require('../assets/creations/bread.jpg')
        },
        {
          name: "Croissant",
          url: require('../assets/creations/croissant.jpg')
        },
        {
          name: "Cupcake",
          url: require('../assets/creations/cupcake.jpg')
        },
        {
          name: "Pancake",
          url: require('../assets/creations/pancake.jpg')
        },
        {
          name: "Tarte",
          url: require('../assets/creations/tarte.jpg')
        },
        {
          name: "Brioche Canelle",
          url: require('../assets/creations/briocheCanelle.jpg')
        },
      ]
    }
  },
  mounted(){
    let scroll = setupScroll()

    setTimeout(() => {
      this.$refs.unwrapref.open()
      scroll.update()
    }, 1000)
  }  
}
</script>
