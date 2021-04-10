<template>
  <div>
    <Hero data-scroll-section />
    <Faces data-scroll-section />
    <div id="test">

    </div>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import Faces from '../components/Faces.vue'

export default {
  name: 'Main',
  components: { Hero, Faces },
}
</script>

<style scoped>
#test
{
  height: 100vh;
  width: 100vw;
  background-color: bisque;
}
</style>
