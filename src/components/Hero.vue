<template>
  <div id="hero">
    <div id="flour">
      <img :src="require('../assets/images/flour.png')" alt="miche de pain">
    </div>   
    <div id="hero-main_image">
      <img :src="require('../assets/images/mainPain.jpg')" alt="miche de pain" id="heroBread">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  mounted(){
    let heroBread = document.getElementById('heroBread')
    let flour = document.getElementById('flour')

    setTimeout(() => {
      heroBread.style.transform = "scale(1)"
      flour.style.transform = "scale(1)"
      flour.style.opacity = "1"

    }, 2000)


    let hero = document.getElementById('hero')
    hero.addEventListener('mousemove', event => {
      let x = event.offsetX - (window.innerWidth/2)
      let y = event.offsetY - (window.innerHeight/2)

      flour.style.transform = `translate(${-(x / 20)}px, ${-(y / 20)}px) scale(1.1)`
    })
  }
}
</script>

<style scoped>
#hero
{
  height: 100vh;
  width: 100vw;
}
#flour
{
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 2;

  transition-duration: 500ms;
  transform: scale(2) translateY(-10vh);
  opacity: 0;

  pointer-events: none;
  transition-timing-function: ease-out;
}
#flour img
{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
#hero-main_image
{
  position: absolute;
  height: 100vh;
  width: 100vw;
  pointer-events: none;
}
#heroBread
{
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: 50% 50%;

  transition-duration: 500ms;
  transform: scale(2);
}
</style>
