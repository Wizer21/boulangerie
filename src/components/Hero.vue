<template>
  <div id="hero">
    <div class="parts">
      <div id="breadHolder" data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
        <img :src="require('../assets/images/bread.jpg')" alt="bread" class="floatingImage">
      </div>
      <div id="tableHolder" data-scroll data-scroll-speed="1" data-scroll-direction="horizontal">
        <img :src="require('../assets/images/table.jpg')" alt="bread" class="floatingImage">
      </div>
      <div id="pieHolder" data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal">
        <img :src="require('../assets/images/pie.jpg')" alt="bread" class="floatingImage">
      </div>
      <h1 id="mainTitle" data-scroll data-scroll-speed="4" data-scroll-direction="horizontal">
        Boulangerie
      </h1>
    </div>
    <div class="parts">
      <div id="shopHolder" data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal">
        <img :src="require('../assets/images/shop.jpg')" alt="bread" class="floatingImage">
      </div>
      <div id="clapHolder" data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">
        <img :src="require('../assets/images/clap.jpg')" alt="bread" class="floatingImage">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  mounted(){
    let images = document.querySelectorAll('.parts div')
    for (let img of images){
      img.dataset.x = 0
      img.dataset.y = 0

      img.addEventListener('mousedown', () => {
        pickUp(img)
      })
      img.addEventListener('mouseup', () => {
        drop(img)
      })
      img.addEventListener('mouseleave', () => {
        drop(img)
      })
      img.addEventListener('mousemove', event => {
        if (img.dataset.holded == "in"){
          let rect = img.getBoundingClientRect()
          img.dataset.x = parseInt(img.dataset.x) + (((rect.left + event.offsetX) - rect.width/2) /10)
          img.dataset.y = parseInt(img.dataset.y) + ((event.offsetY - rect.height/2) /10)

          //img.style.transform = `translate(${img.dataset.x}px, ${img.dataset.y}px) scale(1.2)`
          img.style.left = `${rect.left + (event.offsetX - rect.width/2)}px`
          img.style.top = `${rect.top + (event.offsetY - rect.height/2)}px`
        }
      })
    }

    function pickUp(item){
      item.dataset.holded = "in"
      //item.style.transform = `translate(${item.dataset.x}px, ${item.dataset.y}px) scale(1.2)`

      let child = item.children[0]
      child.style.boxShadow = "-10px 10px 50px #1a1a1a"
    }

    function drop(item){
      item.dataset.holded = "out"
      //item.style.transform = `translate(${item.dataset.x}px, ${item.dataset.y}px) scale(1)`

      let child = item.children[0]
      child.style.boxShadow = "-10px 10px 20px #1a1a1a"
    }
  }
}
</script>

<style scoped>
#hero
{
  width: 100vw;
  background-color: #262626;
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
  transition-duration: 300ms;
  transition-timing-function: ease-out;
  cursor: pointer;
  perspective: 300px;
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
#shopHolder
{
  left: 15vw;
  top: 100vh;
  width: 50vw;
}
#clapHolder
{
  left: 55vw;
  top: 150vh;
  width: 35vw;
}
</style>
