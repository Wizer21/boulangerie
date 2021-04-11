<template>
  <Main data-scroll-container id="menu"/>
  <Creations data-scroll-container id="crea"/>
  <Navigator data-scroll-container @goMain="goMain" @goCreations="goCreations"/>
</template>

<script>
import Main from './pages/Main.vue'
import Creations from './pages/Creations.vue'
import Navigator from './components/Navigator.vue'

import LocomotiveScroll from 'locomotive-scroll';

export default {
  name: 'App',
  components: { Main, Creations, Navigator },
  methods: {
    goCreations(){
      let menu = document.getElementById('menu')
      let crea = document.getElementById('crea')

      menu.style.display = "none"
      crea.style.display = "block"

      setTimeout(() => {
        scroll.update()
      }, 1000)
    },
    goMain(){
      let menu = document.getElementById('menu')
      let crea = document.getElementById('crea')

      menu.style.display = "block"
      crea.style.display = "none"

      setTimeout(() => {
        scroll.update()
      }, 1000)
    }
  },
  mounted() {
    let scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp: 0.07,
    smartphone: {
      smooth: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
      lerp: 0,
    },
    tablet: {
      smooth: true, 
      direction: 'vertical',
      gestureDirection: 'vertical',
    },
    })

    setTimeout(() => {
      scroll.update()
    }, 1000)
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
@import './assets/locomotive-scroll.css';
::-moz-selection {
  color: rgb(44, 44, 44);
  background: rgb(236, 236, 236);
}
::selection {
  color: rgb(44, 44, 44);
  background: rgb(236, 236, 236);
}
body
{
  margin: 0px;
  color: rgb(219, 219, 211);
  font-family: 'Nunito', sans-serif;
}
#app
{
  position: relative;
  overflow: hidden;
}
#crea
{
  display: none;
}
</style>
