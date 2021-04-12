<template>
  <div data-scroll-container id="creation">
    <Unwrap ref="unwrapref"/>
    <Navigator :isMainPage="false"/>
    <div id="textLine">
      <div id="textLine1">    
        <template v-for="i in midWordNumber" :key="i" >        
          Creations
        </template>
      </div>
      <div id="textLine2">
        <template v-for="i in midWordNumber" :key="i" >  
          Creations
        </template>
      </div>
    </div>
    <div id="columnsHolder" data-scroll-section>
      <div class="parts" id="part1">
        <div v-for="item of itemList1" :key="item.name">
          <div class="imageHolder">
            <img :src="item.url" :alt="item.name" @load="newLoad">
          </div>
          <div class="titleSlider">        
            <p class="infiniteSlideP1">
              <template v-for="i in wordNumber" :key="i" >
                {{ item.name }}&nbsp;
              </template>
            </p>
            <p class="infiniteSlideP2">
              <template v-for="i in wordNumber" :key="i" >
                {{ item.name }}&nbsp;
              </template>
            </p>
          </div>
        </div>
      </div>
      <div class="parts" id="part2">
        <div v-for="item of itemList2" :key="item.name">
          <div class="imageHolder">
            <img :src="item.url" :alt="item.name" @load="newLoad">
          </div>
          <div class="titleSlider">        
            <p class="infiniteSlideP1">
              <template v-for="i in wordNumber" :key="i" >
                {{ item.name }}&nbsp;
              </template>
            </p>
            <p class="infiniteSlideP2">
              <template v-for="i in wordNumber" :key="i" >
                &nbsp;{{ item.name }}&nbsp;
              </template>
            </p>
          </div>
        </div>
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
      scroll: null,
      wordNumber: 5,
      midWordNumber: 40,
      loadCount: 0,
      itemList1: [
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
        }
      ],
      itemList2: [
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
        }
      ]
    }
  },
  methods: {
    newLoad(){
      this.loadCount ++

      if (this.loadCount >= 6){
        this.$refs.unwrapref.open()
        this.scroll.update()
      }
    }
  },
  mounted(){
    this.scroll = setupScroll()

    // Creation title loop
    let textLine1 = document.getElementById('textLine1')
    let textLine2 = document.getElementById('textLine2')

    textLine1.style.setProperty('--antiLoop', this.$style["antiLoop"])
    textLine2.style.setProperty('--antiLoop', this.$style["antiLoop"])

    setTimeout(() => {      
      textLine2.style.opacity = "1"
    }, 2500)

    // Items title loop
    let stack1 = document.getElementsByClassName('infiniteSlideP1')
    let stack2 = document.getElementsByClassName('infiniteSlideP2')
    
    for (let item of stack1){
      item.style.setProperty('--loop', this.$style["loop"])
    }
    for (let item of stack2){
      item.style.setProperty('--loop', this.$style["loop"])
    }

    setTimeout(() => {
      for (let item of stack2){
        item.style.opacity = "1"
      }
    }, 10000)

    let imageStack = document.querySelectorAll('.imageHolder img')
    for (let image of imageStack){
      image.addEventListener('mousemove', event => {
        let rect = image.getBoundingClientRect()
        let x = event.offsetX - (rect.width / 2)
        let y = event.offsetY - (rect.height / 2)

        let ratioX = rect.width / (rect.width/10)
        let ratioY = rect.height / (rect.height/10)

        x = x / ratioX
        y = y / ratioY

        image.style.transform = `translate(${-x}px, ${-y}px) scale(1.1)`
      })
      image.addEventListener('mouseleave', () => {        
        image.style.transform = ""
      })
    }
  }  
}
</script>

<style scoped>
#creation
{
  background-color: #1a1a1a
}
#columnsHolder
{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.parts
{  
  width: 45vw;  
  margin: 0;
  background-color: #c9c9c9;
}
#part1
{
  margin-right: 10vw;
}
#textLine
{ 
  position: fixed;
  height: 110vh;
  top: -5vh;
  width: 20vw; 
  font-size: 5vw;
  background-color: #c9c9c9;
  color: #1a1a1a;
  margin-left: 40vw;
  transform: rotate(3deg);

  display: grid;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#textLine1
{
  grid-row: 1;
  grid-column: 1;
  animation: var(--antiLoop) 5s infinite linear;
}
#textLine2
{
  grid-row: 1;
  grid-column: 1;
  opacity: 0;
  animation: var(--antiLoop) 5s infinite linear 2.5s;
}
#textLine1 p,
#textLine2 p
{
  margin: 0;
  line-height: 80%;
}
.imageHolder
{
  line-height: 0px;
  min-height: 0;
  overflow: hidden;
}
.imageHolder img
{
  object-fit: cover;
  height: 100%;
  width: 100%;

  transition-duration: 500ms;
  transition-timing-function: ease-out;
}
.titleSlider
{
  height: 10vh;
  background-color: #c9c9c9;
  display: grid;
  overflow: hidden;

  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.titleSlider p
{
  font-size: 5vh;
  margin: 0;
  color: #1a1a1a;

  grid-column: 1;
  grid-row: 1;
}
.infiniteSlideP1
{
  animation: var(--loop) 20s infinite linear;
  white-space: nowrap;
}
.infiniteSlideP2
{
  animation: var(--loop) 20s infinite linear 10s;
  white-space: nowrap;
  opacity: 0;
}
@media screen and (max-width: 1000px) {  
  .parts
  {  
    width: 90vw;  
  }
  #textLine
  { 
    margin-left: 85vw;
  }
}
</style>

<style module>
@keyframes loop {
  0%{
    margin-left: -100%;
  }
  100%{
    margin-left: 100%;
  }  
}
@keyframes antiLoop {
  0%{
    margin-left: 100%;
  }
  100%{
    margin-left: -100%;
  }  
}
</style>