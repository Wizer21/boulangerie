<template>
  <div id="table">
    <div id="table_holder">
      <img :src="require('../assets/images/table.jpg')" >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  mounted(){
  }
}
</script>

<style scoped>
#table
{
  height: 100vh;
  width: 100vw;
}
#table_holder
{
  height: 100vh;
  width: 100vw;
}
#table_holder img
{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
