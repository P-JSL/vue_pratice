<template>
    <div id="outer" @click="outerClick">
      <div id="inner" @click="innerClick"></div>
    </div>
</template>

<script>
export default {
  name: "Bubbles",
  methods : {
    outerClick : function (e){
      console.log("### OUTER CLICK");
      console.log("Event Phase : " +e.eventPhase.toString());
      console.log("Current Target : "+ e.currentTarget);
      console.log("Target : " + e.target);
      //추가
      e.stopPropagation();
    },
    innerClick : function (e){
      console.log("### Inner CLICK");
      console.log("Event Phase : " +e.eventPhase);
      console.log("Current Target : "+ e.currentTarget);
      console.log("Target : " + e.target);
      e.stopPropagation();

    }
  }
}
</script>

<style scoped>
  #outer { width: 200px;height: 200px; border: 2px solid black;
          background: aqua; position: absolute;  top: 100px; left: 50px; padding: 10px 10px 10px 10px;}
  #inner { width: 100px; height: 100px; border: 2px solid black; background: yellow;}

</style>