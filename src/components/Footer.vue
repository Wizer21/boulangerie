<template>
  <div id="footer">
    <p>
      Merci de votre visite !
    </p>
    <div id="portfolioHolder">
      <a href="https://wizer21.github.io/" target="_blank" id="portfolio"> 
        <p >
          Venez découvrir mon portefolio !
        </p>
      </a>
      <div id="underline">        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
#footer
{
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 3vw;
}
#portfolioHolder
{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
#portfolioHolder:hover #underline
{
  width: 50vw;
  transform: rotate(1.5deg) translateY(6vh);
  opacity: 1;
  box-shadow: 0 0 10px #c9c9c9; 
}
#portfolioHolder:hover #portfolio
{
  transform: rotate(-1deg) translateY(-2vh);
}
#portfolio
{
  transition-duration: 500ms;
  text-decoration: none;
  color: #c9c9c9;
}
#underline
{
  position: absolute;
  height: 0.5vh;
  width: 0vw;
  background-color: #c9c9c9;
  opacity: 0;
  border-radius: 10px;
  transform: translateY(15vh);
  transition: box-shadow 500ms 700ms, width 500ms, transform 500ms, opacity 500ms;
}
@media screen and (max-width: 800px) {  
  #footer
  {
    font-size: 6vw;
  }
}
</style>