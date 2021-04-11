<template>
  <div data-scroll-container id="creation">
    <Unwrap ref="unwrapref"/>
    <Navigator :isMainPage="false"/>
    <div id="columnsHolder">
      <div class="parts">
        <div v-for="item of itemList1" :key="item.name">
          <div class="imageHolder">
            <img :src="item.url" :alt="item.name">
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
      <div id="textLine">
          <div id="textLine1">    
            <template v-for="i in wordNumber" :key="i" >        
              <p v-for="i in 'Creation'" :key="i">
                {{ i }}
              </p>
            </template>
          </div>
          <div id="textLine2">
            <template v-for="i in wordNumber" :key="i" >  
              <p v-for="i in 'Creation'" :key="i">
                {{ i }}
              </p>
            </template>
          </div>
      </div>
      <div class="parts" id="part2">
        <div v-for="item of itemList2" :key="item.name">
          <div class="imageHolder">
            <img :src="item.url" :alt="item.name">
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
      wordNumber: 10,
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
    updateInterface(){
      let totalHeight = document.getElementById('creation').getBoundingClientRect().height
      document.getElementById('textLine').style.height = `${totalHeight}px`
    }
  },
  mounted(){
    let scroll = setupScroll()

    setTimeout(() => {
      this.$refs.unwrapref.open()
      scroll.update()

      this.updateInterface()
    }, 1000)

    // Creation title loop
    let textLine1 = document.getElementById('textLine1')
    let textLine2 = document.getElementById('textLine2')

    textLine1.style.setProperty('--loop', this.$style["loop"])
    textLine2.style.setProperty('--loop', this.$style["loop"])

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
      stack2.style.opacity = "1"
    }, 10000)
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
}
#textLine
{
  height: 100vh;
  width: 10vw; 
  background-color: #c9c9c9;
  font-size: 15vw;
  color: #1a1a1a;
  overflow: hidden;

  display: grid;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#textLine1
{
  grid-row: 1;
  grid-column: 1;
  animation: var(--loop) 5s infinite linear;
}
#textLine2
{
  grid-row: 1;
  grid-column: 1;
  opacity: 0;
  animation: var(--loop) 5s infinite linear 2.5s;
}
#textLine1 p,
#textLine2 p
{
  margin: 0;
  line-height: 80%;
}
.imageHolder img
{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.titleSlider
{
  height: 10vh;
  background-color: #c9c9c9;
  border: 2px solid #1a1a1a;
  display: grid;
  overflow: hidden;

  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.titleSlider p
{
  font-size: 7vh;
  margin: 0;
  color: #1a1a1a;

  grid-column: 1;
  grid-row: 1;
}
.infiniteSlideP1
{
  animation: var(--loop) 25s infinite linear;
  white-space: nowrap;
}
.infiniteSlideP2
{
  animation: var(--loop) 25s infinite linear 12.5s;
  white-space: nowrap;
  opacity: 0;
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
</style>