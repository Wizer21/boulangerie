<template>
  <div id="faces">  
    <div class="holder">
      <div class="p1Text" data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">
        <h2>
          Artémis
        </h2>
        <p>
          force . sagesse
        </p>
      </div>
      <div data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">
        <img :src="require('../assets/images/p1.png')">
      </div>
      <div class="backp1">        
      </div>
    </div>
    <div class="holder">
      <div id="p2Img" data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
        <img :src="require('../assets/images/p2.png')">
      </div>
      <div id="p2Text" data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
        <h2>
          Mercure 
        </h2>
        <p>
          éloquence . rapidité
        </p>
      </div>
      <div id="backp2">        
      </div>
    </div>
    <div class="holder" id="p3">
      <div class="p1Text" data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">
        <h2>
          Sobek
        </h2>
        <p>
          le stagiaire
        </p>
      </div>
      <div class="backp1">        
      </div>
      <div id="p3Img" data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">
        <img :src="require('../assets/images/p3.png')">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Faces'
}
</script>

<style scoped>
#faces
{
  width: 100vw;
  background-color: #1a1a1a;
}
.holder
{
  height: 50vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
/* p1 */
.p1Text h2
{
  font-size: 5em;
  color: #262626;
  z-index: 2;
  margin: 0;
  margin-left: -5vw;
}
.p1Text p
{
  font-size: 2em;
  color: #262626;
  z-index: 2;
  margin: 0;
}
.backp1
{
  position: absolute;
  background-color: #c9c9c9;
  height: 40vh;
  width: 200vw;
  transform: rotate(20deg);  
  left: -65vw;
  z-index: -1;
}
/* p2 */
#p2Text
{
  font-size: 2em;
  color: #c9c9c9;
  z-index: 2;
  margin-top: 25vh;
}
#p2Img
{
  margin-top: 15vh;
}
#backp2
{
  position: absolute;
  background-color: #262626;
  height: 40vh;
  width: 200vw;
  transform: rotate(-20deg);  
  top: 80vh;
  z-index: -1;
}
/* p3 */
#p3
{
  margin-top: 20vh;
}
</style>
