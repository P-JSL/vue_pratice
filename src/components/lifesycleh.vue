<template>
  <div id="lifes">
    <span>LifeCycleHook</span><br/>
    <label>
      <input v-model="num" type="text"/>
    </label><br/>
    1부터 입력된 수 까지의 합 : <span>{{ sum }}</span>
  </div>
</template>

<script>
export default {
  name: "lifesycleh",
  data() {
    return {
      num: 0
    }
  },
  created: function () {
    console.log("Created !");
  },
  updated: function () {
    console.log("updated !");
    console.log(this.num);
  }
  ,
  computed: {
    sum: function () {
      let n = Number(this.num);
      if (Number.isNaN() || n < 0) return 0;
      return ((n + 1) * n) / 2;
    }
  }
}
</script>