<template>
  <div id="com_01">
    <label>
      <input type="text" v-model="num" />
    </label><br/>
    1부터 입력된 수 까지의 합 : <span>{{ sum }}</span>
  </div>
</template>

<script>
export default {
  name: "Computed_01",
  data() {
    return {
      num: 0
    }
  },
  computed : {
    sum : function() {
     let n = Number(this.num);
      if(Number.isNaN() || n < 0) return 0;
      return ((n+1)*n)/2;
    }
  }
}
</script>

<style scoped>

</style>