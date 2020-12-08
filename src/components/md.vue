<template>
  <div id="md">
    <input v-model="num" type="text" /><br/>
    1부터 입력된 수까지의 합 : <span>{{ sum }}</span>
  </div>
</template>

<script>
export default {
  name: "md",
  data() {
    return {
      num: 0
    }
  },
  computed : {
    sum : function (){
      console.log(Date.now());
      var n = Number(this.num);
      if(Number.isNaN(n) || n < 1) return 0;
      return ((1+n)*n)/2;
    }
  }
}
</script>

<style scoped>

</style>