<template>
  <div data-scroll-container id="creation">
    <Unwrap ref="unwrapref"/>
    <Navigator :isMainPage="false"/>
    <div data-scroll-section>
      <div v-for="item of itemList" :key="item.name" class="creationStack">
        <div class="imageHolder">
          <img :src="item.url" :alt="item.name">
        </div>
        <p class="creationTitle">
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

    let creationStack = document.getElementsByClassName('imageHolder')
    let isLeft = true
    for (let creation of creationStack){
      if (isLeft){
        isLeft = false
        creation.classList.add('leftCrea')
      }
      else{
        isLeft = true
        creation.classList.add('rightCrea')
      }
      
    }
  }  
}
</script>

<style scoped>
#creation
{
  background-color: #1a1a1a
}
.creationTitle
{
  position: absolute;;
}
.creationStack
{  
  height: 50vw;
  width: 100vw;  
}
.imageHolder
{
  height: 70vw;
  width: 70vw;
}
.imageHolder img
{
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition-duration: 500ms;
  transition-timing-function: ease-in-out;
}
</style>

<style>
.leftCrea
{
  clip-path: polygon(100% 50%, 0 0, 0 100%);
}
.leftCrea:hover img
{
  transform: scale(1.2);
  margin-top: -20vw;
}
.rightCrea
{
  clip-path: polygon(0 50%, 100% 0, 100% 100%);

  margin: 0;
  margin-left: auto;
}
.rightCrea:hover img
{
  transform: scale(1.2);
}
</style>
