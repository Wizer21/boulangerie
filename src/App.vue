<template>
  <Main data-scroll-container />
</template>

<script>
import Main from './pages/Main.vue'
import LocomotiveScroll from 'locomotive-scroll';

export default {
  name: 'App',
  components: { Main },
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
</style>
