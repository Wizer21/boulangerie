<template>
  <div>
    <Hero />
    <Table />
  </div>
</template>

<script>
import Hero from '../components/Hero'
import Table from '../components/Table'

export default {
  name: 'Main',
  components: { Hero, Table },
}
</script>

<style scoped>
</style>
