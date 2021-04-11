<template>
  <div>
    <div id="button" @click="togglePanel">
      <span class="line" id="lineTop">        
      </span>
      <span class="line"  id="lineBottom">        
      </span>
    </div>
    <div id="panel">
      <div class="textHolder">
        <p @click="goMain" id="mainButton">
          Menu Principal
        </p>
        <div class="textLine" id="mainDecoration">
        </div>
      </div>
      <div class="textHolder">
        <p @click="goCreations" id="creationButton">
          Créations
        </p>
        <div class="textLine" id="creationDecoration">
        </div>
      </div>
    </div>
    <div id="transitionScreen">
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigator",
  props: {
    isMainPage: {
      type: Boolean,
      required: true
    }
  },
  data(){
    return{
      isPanelOpen: false,
    }
  },
  methods: {
    togglePanel(){
      console.log("toggle");
      let panel = document.getElementById('panel')
      let lineTop = document.getElementById('lineTop')
      let lineBottom = document.getElementById('lineBottom')

      if (this.isPanelOpen) {
        this.isPanelOpen = false
        panel.style.transform = "translateY(-100vh)"
        panel.style.clipPath = "polygon(0 0, 100% 0%, 100% 0, 0% 100%)"

        lineTop.style.transform = ""
        lineBottom.style.transform = ""
        
        lineTop.style.backgroundColor = "#c9c9c9"
        lineBottom.style.backgroundColor = "#c9c9c9"
      }
      else{        
        this.isPanelOpen = true
        panel.style.transform = "translateY(0vh)"
        panel.style.clipPath = "polygon(0 0, 100% 0%, 100% 78%, 0% 100%)"

        lineTop.style.transform = "rotate(45deg) translate(15%, 110%)"
        lineBottom.style.transform = "rotate(-45deg) translate(15%, -110%)"

        lineTop.style.backgroundColor = "#262626"
        lineBottom.style.backgroundColor = "#262626"
      }
    },
    goMain(event){
      if (!this.isMainPage){
        let mainButton = document.getElementById('mainButton')
        let transitionScreen = document.getElementById('transitionScreen')
        let x = event.offsetX + mainButton.offsetLeft
        let y = event.offsetY + mainButton.offsetTop

        let xPercent = x / (window.innerWidth / 100)
        let yPercent = y / (window.innerHeight / 100)

        transitionScreen.style.clipPath = `circle(0% at ${xPercent}% ${yPercent}%)`

        setTimeout(() => {
          transitionScreen.style.transitionDuration = "1000ms"
          transitionScreen.style.clipPath = `circle(150% at ${xPercent}% ${yPercent}%)`

          setTimeout(() => {
            window.location.assign('/')
          }, 1000)
        }, 100)
      }
    },
    goCreations(event){
      if (this.isMainPage){
        let creationButton = document.getElementById('creationButton')
        let transitionScreen = document.getElementById('transitionScreen')
        let x = event.offsetX + creationButton.offsetLeft
        let y = event.offsetY + creationButton.offsetTop

        let xPercent = x / (window.innerWidth / 100)
        let yPercent = y / (window.innerHeight / 100)

        transitionScreen.style.clipPath = `circle(0% at ${xPercent}% ${yPercent}%)`

        setTimeout(() => {
          transitionScreen.style.transitionDuration = "1000ms"
          transitionScreen.style.clipPath = `circle(150% at ${xPercent}% ${yPercent}%)`

          setTimeout(() => {
            window.location.assign('/creations')
          }, 1000)
        }, 100)
      }
    }
  },
  mounted(){
    let mainDecoration = document.getElementById('mainDecoration')
    let creationDecoration = document.getElementById('creationDecoration')

    if (this.isMainPage){
      creationDecoration.style.display = "none"
    }
    else{
      mainDecoration.style.display = "none"
    }
  } 
}
</script>

<style scoped>
#button
{  
  position: fixed;
  height: 6vh;
  width: 6vh;
  border-radius: 50%;
  margin: 2vw;
  cursor: pointer;
  z-index: 3;
  border: 1px solid transparent;
  transition-duration: 500ms;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
}
#button:hover
{
  background-color: #c9c9c9;
  border: 1px solid #1a1a1a;
}
#panel
{
  position: fixed;
  background-color: #c9c9c9;
  width: 100vw;
  height: 80vh;
  transform: translateY(-100vh);
  clip-path: polygon(0 0, 100% 0%, 100% 0, 0% 100%);
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
  z-index: 2;

  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  color: #262626;
  font-size: 5vw;
}
#panel p
{
  transition-duration: 500ms;
  cursor: pointer;
}
.line
{
  height: 10%;
  width: 70%;
  background-color: #c9c9c9;
  border-radius: 10px;
  transition-duration: 500ms;
  border: 1px solid #1a1a1a;
}
#transitionScreen
{
  position: fixed;
  background-color: #c9c9c9;
  height: 100vh;
  width: 100vw;
  z-index: 4;
  clip-path: circle(0% at 0 0);
}
.textHolder
{
  margin-left: 20vw;
  display: grid;
  align-items: center;
  justify-content: flex-start;
}
.textHolder div,
.textHolder p
{
  grid-column: 1;
  grid-row: 1;
}
.textHolder:hover .textLine
{
  height: 0.8vh;
}
.textHolder:hover #mainDecoration
{
  transform: rotate(0deg);
}
.textHolder:hover #creationDecoration
{
  transform: rotate(0deg);
}
.textLine
{
  height: 0.5vh;
  width: 100%;
  background-color: #1a1a1a;
  transition-duration: 500ms;
}
#mainDecoration
{
  transform: rotate(2deg);
}
#creationDecoration
{
  transform: rotate(-2.5deg);
}
</style>