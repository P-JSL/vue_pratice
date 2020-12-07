<template>
  <div id="Sel">
    <div>좋아하는 과일을 모두 골라주세요.</div>
    <label>
      <input type="checkbox" value="1" v-model="fruits">
      사과
    </label>사과<br/>
    <label>
      <input type="checkbox" value="2" v-model="fruits">
      키위
    </label>키위<br/>
    <label>
      <input type="checkbox" value="3" v-model="fruits">
      포도
    </label>포도<br/>
    <label>
      <input type="checkbox" value="4" v-model="fruits">
      수박
    </label>수박<br/>
    <label>
      <input type="checkbox" value="5" v-model="fruits">
      참외
    </label>참외<br/>
    <hr/>
    <p id="simple2">
      선택한 과일들 : <span v-html="fruits"></span>
    <p/>
  </div>
</template>

<script>
export default {
  name: "Sel",
 data(){
    return{
      fruits:[]
    }
 }
}
</script>

<style scoped>

</style>