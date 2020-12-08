<template>
  <div id="getsets">
    금액 : <span>{{ amount }}원</span>
  </div>
</template>

<script>
export default {
  name: "getset",
  data() {
    return {amt: 1234567}
  },
  computed: {
    amount: {
      get: function () {
        var s = String("" + this.amt);
        var result = "";
        var num = 0;
        for (var i = s.length - 1; i >= 0; i--) {
          result = s[i] + result;
          if (num % 3 == 2 && i != 0)
            result = "," + result;
          num++;
        }
        return result;
      },
      set: function (amt) {
        if (typeof (amt) == "string") {
          var result = parseInt(amt.repeat(/,/g, ""));
          if (isNaN(result)) this.amt = 0;
          else this.amt = result;
        } else if (typeof (amt) == "number")
          this.amt = amt;
      }
    }
  }
}
</script>

<style scoped>

</style>