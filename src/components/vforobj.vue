<template>
  <div id="vforobj">
    <div class="example">
      <label for="regions"></label><select id="regions">
        <option disabled selected>지역을 선택하세요</option>
        <option v-for="(val, key) in regions" v-bind:value="key" v-bind:key="val">{{val}}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "vforobj",
  data(){
    return{
      regions : {
        "A": "Asia",
        "B": "America",
        "C":"Europe",
        "D":"Africa",
        "E":"Oceania"
      }
    }
  }
}
</script>

<style scoped>

</style>