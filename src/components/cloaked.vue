<template>
  <div v-cloak id="clo">

  </div>
</template>

<script>
export default {
  name: "cloaked"
}
</script>

<style scoped>
  #list { width: 600px; border: 1px solid black; border-collapse: collapse;}
  #list td , #list th {border: 1px solid black; text-align: center;}
  #list > thead > tr {color:yellow; background: purple;}
  [v-cloak] {display: none}
</style>