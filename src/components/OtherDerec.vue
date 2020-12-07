<template>
  <div id="prev">
    v-pre : <span v-pre>{{ message }}</span>
    <br/>
    v-once : <span v-once>{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: "OtherDerec",
  data() {
    return {
      message: "Hello world"
    }
  }
}
</script>

<style scoped>

</style>