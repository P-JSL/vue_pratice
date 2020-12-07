<template>
  <div id="ifshow">
    <label>
      예금액 :
      <input type="text" v-model="amount"/>
    </label>
    <img alt="" v-show="amount < 0" src="http://sample.bmaster.kro.kr/img/error.jpg"
    title="마이너스는 허용하지 않습니다." style="width: 15px;height: 15px;vertical-align: middle"
    />
  </div>
</template>

<script>
export default {
  name: "ifshow",
  data(){
    return {
      amount : 0
    }
  }
}
</script>

<style scoped>

</style>