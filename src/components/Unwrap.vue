<template>
  <div id="wrap" v-if="stillOpen">
  </div>
</template>

<script>
export default {
  name: "Unwrap",
  data() {
    return {
      x: 50,
      y: 50,
      stillOpen: true,
      openning: false
    }
  },
  methods: {
    open() {
      let wrap = document.getElementById('wrap')
      wrap.style.clipPath = `circle(0% at ${this.x}% ${this.y}%)`
      this.openning = true

      setTimeout(() => {
        this.stillOpen = false
      }, 2000)
    }
  },
  mounted(){
    let wrap = document.getElementById('wrap')
    wrap.addEventListener('mousemove', event => {
      this.x = event.offsetX / (window.innerWidth / 100)
      this.y = event.offsetY / (window.innerHeight / 100)     

      if (this.openning){
        wrap.style.clipPath = `circle(0% at ${this.x}% ${this.y}%)`
      }
    })
  }
}
</script>

<style scoped>
#wrap
{
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: #b1b1b1;
  z-index: 5;

  transition-duration: 500ms;
  transition-timing-function: ease-out;
  clip-path: circle(100% at 50% 50%);
}
</style>