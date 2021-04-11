<template>
  <div>
    <div id="button" @click="togglePanel">
      <span class="line" id="lineTop">        
      </span>
      <span class="line"  id="lineBottom">        
      </span>
    </div>
    <div id="panel">
      <p @click="goMain" id="mainButton">
        Menu Principal
      </p>
      <p @click="goCreations" id="creationButton">
        Créations
      </p>
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
        lineTop.style.transform = ""
        lineBottom.style.transform = ""
      }
      else{        
        this.isPanelOpen = true
        panel.style.transform = "translateY(0vh)"
        lineTop.style.transform = "rotate(45deg) translate(19%, 125%)"
        lineBottom.style.transform = "rotate(-45deg) translate(19%, -125%)"
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
        console.log(xPercent, yPercent);

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
        console.log(xPercent, yPercent);

        setTimeout(() => {
          transitionScreen.style.transitionDuration = "1000ms"
          transitionScreen.style.clipPath = `circle(150% at ${xPercent}% ${yPercent}%)`

          setTimeout(() => {
            window.location.assign('/creations')
          }, 1000)
        }, 100)
      }
    },
  } 
}
</script>


<style scoped>
#button
{  
  position: fixed;
  background-color: #c9c9c9;
  height: 6vh;
  width: 6vh;
  border-radius: 50%;
  margin: 2vw;
  border: 2px solid #1a1a1a;
  cursor: pointer;
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
}
#panel
{
  position: fixed;
  background-color: #c9c9c9;
  width: 100vw;
  height: 80vh;
  transform: translateY(-100vh);
  transition-duration: 500ms;
  clip-path: polygon(0 0, 100% 0%, 100% 78%, 0% 100%);
  transition-timing-function: ease-in-out;
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
  margin: 5vh 10vw;
  transition-duration: 500ms;
  cursor: pointer;
}
.line
{
  height: 10%;
  width: 70%;
  background-color: #262626;
  border-radius: 10px;
  transition-duration: 500ms;
}
#transitionScreen
{
  position: fixed;
  background-color: #b1b1b1;
  height: 100vh;
  width: 100vw;
  z-index: 4;
  clip-path: circle(0% at 0 0);
}
</style>