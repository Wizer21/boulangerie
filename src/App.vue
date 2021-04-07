<template>
  <Main />
</template>

<script>
import Main from './pages/Main.vue'

export default {
  name: 'App',
  components: { Main }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
::-moz-selection {
  color: rgb(44, 44, 44);
  background: rgb(236, 236, 236);
}
::selection {
  color: rgb(44, 44, 44);
  background: rgb(236, 236, 236);
}
body
{
  margin: 0px;
  color: rgb(219, 219, 211);
  font-family: 'Nunito', sans-serif;
}
#app
{
  position: relative;
  overflow: hidden;
}
</style>
