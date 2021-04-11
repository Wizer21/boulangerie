<template>
  <div>
    <div id="button" @click="togglePanel">
      <span class="line" id="lineTop">        
      </span>
      <span class="line"  id="lineBottom">        
      </span>
    </div>
    <div id="panel">
      <p @click="goMain">
        Menu Principal
      </p>
      <p @click="goCreations">
        Créations
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigator",
  data(){
    return{
      isPanelOpen: false,
      isMenuOpen: true
    }
  },
  methods: {
    togglePanel(){
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
        lineTop.style.transform = "rotate(45deg) translate(0.4vw, 0.35vw)"
        lineBottom.style.transform = "rotate(-45deg) translate(0.4vw, -0.35vw)"
      }
    },
    goMain(){
      if (!this.isMenuOpen){
        this.isMenuOpen = true

        this.$emit('goMain')
        this.togglePanel()
      }
    },
    goCreations(){
      if (this.isMenuOpen){
        this.isMenuOpen = false
        
        this.$emit('goCreations')
        this.togglePanel()
      }
    },
  } 
}
</script>


<style scoped>
#button
{  
  /* Stuck it */
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;

  /* Style */
  background-color: #c9c9c9;
  height: 6vh;
  width: 6vh;
  border-radius: 50%;
  margin: 2vw;
  border: 2px solid #1a1a1a;
  cursor: pointer;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
}
#panel
{
  /* Stuck it */
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;

  /* Style */
  background-color: #c9c9c9;
  width: 100vw;
  height: 80vh;
  transform: translateY(-100vh);
  transition-duration: 500ms;
  clip-path: polygon(0 0, 100% 0%, 100% 78%, 0% 100%);
  transition-timing-function: ease-in-out;

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
  height: 0.3vw;
  width: 2vw;
  background-color: #262626;
  border-radius: 10px;
  transition-duration: 500ms;
}
/* #lineTop
{
  transform: rotate(45deg) translate(0.4vw, 0.35vw);
}
#lineBottom
{
  transform: rotate(-45deg) translate(0.4vw, -0.35vw);
} */
</style>