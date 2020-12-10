<template>
  <div id="watched">
    x : <input v-model="x" type="text"/><br/>
    y : <input v-model="y" type="text"/>
    덧셈 결과 : {{ sum }}
  </div>
</template>

<script>
export default {
  name: "watched",
  data() {
    return {x: 0, y: 0}
  },
  computed : {
    sum : function (){
      var result = Number(this.x) + Number(this.y);
      if(isNaN(result)) return 0;
      else return result;
    }
  }

}
</script>

<style scoped>

</style>