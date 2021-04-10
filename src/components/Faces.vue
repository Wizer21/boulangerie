<template>
  <div id="faces">  
    <div class="holder">
      <div class="characterHolder" id="ch1" data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">
        <div class="p1Text">
          <h2 class="name">
            Artémis
          </h2>
          <p class="subTitles">
            force . sagesse
          </p>
        </div>
        <div class="faceImage">
          <img :src="require('../assets/images/p1.png')">
        </div>
      </div>
      <div class="backp1">        
      </div>
    </div>
    <div class="holder">
      <div class="characterHolder" id="ch2" data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
        <div id="p2Img" class="faceImage">
          <img :src="require('../assets/images/p2.png')">
        </div>
        <div id="p2Text">
          <h2 class="name">
            Mercure 
          </h2>
          <p class="subTitles">
            éloquence . rapidité
          </p>
        </div>
      </div>
      <div id="backp2">        
      </div>
    </div>
    <div class="holder" id="p3">
      <div class="characterHolder" id="ch3" data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">
        <div class="p1Text" >
          <h2 class="name">
            Sobek
          </h2>
          <p class="subTitles">
            le stagiaire
          </p>
        </div>
        <div id="p3Img" class="faceImage">
          <img :src="require('../assets/images/p3.png')">
        </div>
      </div>
      <div class="backp1">        
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
  height: 30vw;
  width: 100vw;

  display: grid;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
.holder div
{
  grid-column: 1;
  grid-row: 1;
}
.name
{
  font-size: 7vw;
  z-index: 2;
  margin: 0;
}
.subTitles
{
  font-size: 3vw;
  z-index: 2;
  margin: 0;
}
.faceImage
{
  width: 30vw;
  height: 30vw;
}
.faceImage img
{
  height: 100%;
  width: 100%;
  object-fit: contain;
}
.characterHolder
{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
/* p1 */
#ch1
{
  margin-left: 15vw;
}
.p1Text
{
  color: #262626;
}
.p1Text h2
{
  margin-left: -7vw;
}
.backp1
{
  background-color: #c9c9c9;
  height: 40vw;
  width: 200vw;
  transform: rotate(20deg) translateY(10vh);  
  z-index: -1;
}
/* p2 */
#ch2
{
  margin-left: -15vw;
}
#p2Text
{
  color: #c9c9c9;
  margin-top: 25vh;
}
#p2Text h2
{
  margin-left: 5vw;  
}
#p2Img
{
  margin-top: 15vh;
}
#backp2
{
  background-color: #262626;
  height: 40vw;
  width: 200vw;
  transform: rotate(-20deg) translateY(20vh);  
  z-index: -1;
}
/* p3 */
#p3
{
  margin-top: 30vh;
}
#ch3
{
  margin-left: 15vw;
}

@media screen and (max-width: 1000px) {  
  #ch1
  {
    margin-top: 15vh;
  }
  #ch2
  {
    margin-top: 15vh;
  }
  #ch3
  {
    margin-top: 15vh;
  }
  .name
  {
    font-size: 10vw;
  }
  .subTitles
  {
    font-size: 5vw;
  }
  .backp1 
  {
    height: 60vw;    
  }
  #backp2
  {
    height: 60vw;
  }
}
</style>
