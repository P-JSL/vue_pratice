<template>
  <div id="elsif">
    <label>
      잔고 :
      <input type="text" v-model="balance"/>
    </label>
    <br/>
    회원님의 등급 :
    <span v-if="balance >= 1000000">Gold</span>
    <span v-else-if="balance >= 500000">Silver</span>
    <span v-else-if="balance >=200000">Bronze</span>
    <span v-else>Basic</span>
  </div>
</template>

<script>
export default {
  name: "elsfif",
  data(){
    return{
      balance : 0
    }
  }
}
</script>

<style scoped>

</style>