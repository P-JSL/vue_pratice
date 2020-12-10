<template>
  <div id="app">
    <five></five><br/>
    <two></two>
  </div>
</template>

<script>
import five from '@/FiveSection_Style/five_one'
import five_two from "@/FiveSection_Style/five_two";

export default {
  name: 'App',
  components: {
    "five" : five,
    "two" : five_two
  }
}
</script>

<style>
#app {
  height: 100vh;
}

</style>
