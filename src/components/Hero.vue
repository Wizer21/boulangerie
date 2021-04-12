<template>
  <div id="hero">
    <div class="parts">
      <div id="breadHolder" data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
        <img :src="require('../assets/images/bread.jpg')" alt="bread" class="floatingImage" @load="newLoad">
      </div>
      <div id="tableHolder" data-scroll data-scroll-speed="1" data-scroll-direction="horizontal">
        <img :src="require('../assets/images/table.jpg')" alt="bread" class="floatingImage" @load="newLoad">
      </div>
      <div id="pieHolder" data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal">
        <img :src="require('../assets/images/pie.jpg')" alt="bread" class="floatingImage" @load="newLoad">
      </div>
      <h1 id="mainTitle" data-scroll data-scroll-speed="4" data-scroll-direction="horizontal">
        Boulangerie
      </h1>
    </div>
    <div class="parts" id="part2">
      <div id="shopHolder" data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal">
        <img :src="require('../assets/images/shop.jpg')" alt="bread" class="floatingImage" @load="newLoad">
      </div>
      <div id="clapHolder" data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">
        <img :src="require('../assets/images/clap.jpg')" alt="bread" class="floatingImage" @load="newLoad">
      </div>
      <h2 id="subTitle" data-scroll data-scroll-speed="-4" data-scroll-direction="horizontal">
        Venez découvrir nos saveurs artisanales
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  methods: {
    newLoad(){
      this.$emit('newLoad')
    }
  },
  mounted(){
    let images = document.querySelectorAll('.parts div')
    for (let img of images){
      img.addEventListener('mouseenter', () => {
        pickUp(img)
      })
      img.addEventListener('mouseleave', () => {
        drop(img)
      })
      img.addEventListener('mousemove', event => {
        if (img.dataset.holded == "in"){
          let rect = img.getBoundingClientRect()

          img.style.left = `${img.offsetLeft + (event.offsetX - rect.width/2)}px`
          img.style.top = `${img.offsetTop  + (event.offsetY - rect.height/2)}px`
        }
      })
    }

    function pickUp(item){
      item.dataset.holded = "in"

      let child = item.children[0]
      child.style.boxShadow = "-10px 10px 50px #1a1a1a"
    }

    function drop(item){
      item.dataset.holded = "out"

      let child = item.children[0]
      child.style.boxShadow = "-10px 10px 20px #1a1a1a"
      item.style.left = `${item.offsetLeft}px`
      item.style.top = `${item.offsetTop}px`
    }
  }
}
</script>

<style scoped>
#hero
{
  width: 100vw;
}
.parts
{
  height: 100vh;
}
.floatingImage
{
  height: 100%;
  width: 100%;
  object-fit: contain;

  border-radius: 30px;
  box-shadow: -10px 10px 20px #1a1a1a;
  transition-duration: 300ms;

  user-drag: none; 
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
.parts div
{  
  position: absolute;
  transition-duration: 5000ms;
  transition-timing-function: ease-out;
}
/* Bread */
#breadHolder
{
  left: 10vw;
  top: 15vh;
  width: 25vw;
  z-index: 2;
}
/* Table */
#tableHolder
{
  left: 40vw;
  top: 35vh;
  width: 50vw;
}
/* Pie */
#pieHolder
{
  left: 60vw;
  top: 10vh;
  width: 10vw;
  z-index: 3;
}
#mainTitle
{
  position: absolute;
  left: 20vw;
  top: 50vh;
  z-index: 4;
  font-size: 15vw;
  margin: 0;
  text-shadow: -10px 10px 20px rgb(26, 26, 26, 0.5);
  pointer-events: none;
}
#subTitle
{
  position: absolute;
  top: 50vh;

  text-shadow: -5px 5px 10px rgb(26, 26, 26, 0.5);
  font-size: 4vw;
  margin: 0;
  z-index: 4;
  pointer-events: none;
}
#shopHolder
{
  left: 15vw;
  width: 50vw;
}
#part2
{
  transform: translateY(0vh);
}
#clapHolder
{
  left: 55vw;
  top: 50vh;
  width: 35vw;
}
@media screen and (max-width: 800px) {  
  #breadHolder
  {
    left: 0vw;
    width: 50vw;
  }
  #tableHolder
  {
    left: 25vw;
    width: 100vw;
  }
  #pieHolder
  {
    width: 30vw;
  }
  #shopHolder
  {
    left: -20vw;
    top: -15vh;
    width: 120vw;
  }
  #clapHolder
  {
    left: 30vw;
    width: 60vw;
  }
  #subTitle
  {
    font-size: 6vw;
  }
}
</style>
