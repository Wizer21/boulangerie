<template>
  <div id="ratings">
    <div class="rate left" data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
      <h2>
        Bob
      </h2>
      <p>
        Quel voyage temporel, c'est fabuleux !
      </p>
    </div>
    <div class="rate right" data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">
      <h2>
        Marie
      </h2>
      <p>
        Leurs travail est une véritable péptite! Je recommande!
      </p>
    </div>
    <div class="rate left" data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
      <h2>
        Mario
      </h2>
      <p>
        C'est moi! Mario.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ratings',  
}
</script>

<style scoped>
#ratings
{
  width: 100vw;
  height: 100vh;
  background-color: #262626; 
}
.rate
{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.left
{
  text-align: left;
}
.right
{
  text-align: right;
}
.rate h2
{
  font-size: 6vw;
  margin: 2vh 5vw;
  color: #c9c9c9;
}
.rate p
{
  font-size: 3vw;
  margin: 0;
  margin: 0 7vw;
  padding: 1vw;
  color: #262626;
  background-color: #c9c9c9;
  border-radius: 10px;
}
</style>
 