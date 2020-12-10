<template>
  <div id="von" class="container layout1">
    <p><input v-model="amount" class="form-control" type="text"></p>
    <p>
      <button id="deposit" class="btn btn-primary" v-on:click="deposit">예금</button>
      <button id="withdraw" class="btn btn-primary" v-on:click="withdraw">인출</button>
    </p>
    <h3>계좌 잔고 : {{balance}}</h3>
  </div>
</template>

<script>
export default {
  name: "Evon",
  data() {
    return {
      amount: 0,
      balance: 0,
    }
  },
  methods : {
    deposit : function (e){
      console.log(e);
      var amt = parseInt(this.amount);
      if(amt <= 0 ){
        alert("0보다 큰 값을 예금해야 합니다.");
      }else {
        this.balance += amt;
      }
    },
    withdraw : function (e){
      console.log(e);
      var amt = parseInt(this.amount);
      if(amt <=0 ){
        alert("0보다 큰 값을 인출 할 수 있습니다.");
      }else if(amt > this.balance) {
        alert("잔고보다 많은 금액을 인출할 수 없습니다.")
      }else {
        this.balance -= amt;
      }
    }
  }
}
</script>

<style scoped>
  .layout1 {margin: 30px 30px 30px 30px;}
</style>