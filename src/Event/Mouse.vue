<template>
  <div id="mouses" v-on:contextmenu.prevent="ctxStop" @mouseup.left="leftMouse" @mouseup.right="rightMouse">
    <div>
      Left Click : 왼쪽으로 <br/>
      Right Click : 오른쪽으로
    </div>
    <img src="../images/foot.jpg" v-bind:style="{position : 'absolute', left : pos.left + 'px', right:pos.right + 'px'}"/>
  </div>
</template>

<script>
export default {
  name: "Mouse",
  data() {
    return {pos: {left: 100, right: 100}}
  },
  methods: {
    ctxStop: function () {
    },
    leftMouse: function () {
      if (this.pos.left > 30) {
        this.pos.left -= 30;
        console.log("Move Left");
      }
    },
    rightMouse: function () {
      this.pos.left+=30;
      console.log("Move right");
    }
  }
}
</script>

<style scoped>

</style>