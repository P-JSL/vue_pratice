<template>
  <div id="dev" v-on:contextmenu="ctxStop">
    <a href="https://facebook.com" @click="confirmFB">페이스북</a>
  </div>
</template>

<script>
export default {
  name: "defaultev",
  methods: {
    ctxStop: function (e) {
      e.preventDefault();
    },
    confirmFB : function (e){
      if(!confirm("페이스북으로 이동 할까요?")){
        e.preventDefault();
      }
    }
  }
}
</script>

<style scoped>

</style>