<template>
  <div id="five_two">
    <button id="a" v-bind:style="style1" @mouseover.stop="overEvent" @mouseout.stop="outEvent">테스트</button>
  </div>
</template>

<script>
export default {
  name: "five_two",
  data (){
    return {
      style1 : {
        backgroundColor : 'aqua', border:'solid 1px gray', width : '100px', 'textAlign' : 'center'
      }
    }
  },
  methods: {
    overEvent : function (){
      this.style1.backgroundColor = 'purple';
      this.style1.color = 'yellow';
    },
    outEvent : function (){
      this.style1.backgroundColor ='aqua';
      this.style1.color ='black';
    }
  }
}
</script>

<style scoped>

</style>