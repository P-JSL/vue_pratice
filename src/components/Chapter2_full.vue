<template>
  <div id="fulls">
    <p>
      <label>
        국가명 :
        <input type="text" placeholder="국가명" v-model="countryname"/>
      </label>
    </p>
    <table id="list">
      <thead>
      <tr>
        <th>번호</th>
        <th>국가명</th>
        <th>수도</th>
        <th>지역</th>
      </tr>
      </thead>
      <tbody id="contacts">
        <tr v-for="c in filtered" v-bind:key="c">
          <td>{{c.no}}</td>
          <td>{{c.name}}</td>
          <td>{{c.capital}}</td>
          <td>{{c.region}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Chapter2_full",
  data(){
    return{
      "countryname":"",
      "countries" : [
        {"no":1,"name":"미국","capital":"워싱턴","region":"america"},
        {"no":2,"name":"프랑스","capital":"파리","region":"europe"},
        {"no":3,"name":"영국","capital":"런던","region":"europe"},
        {"no":4,"name":"중국","capital":"베이징","region":"asia"},
        {"no":5,"name":"태국","capital":"방콕","region":"asia"},
        {"no":6,"name":"모로코","capital":"라바트","region":"africa"},
        {"no":7,"name":"라오스","capital":"비엔티안","region":"asia"},
        {"no":8,"name":"베트남","capital":"하노이","region":"asia"},
        {"no":9,"name":"피지","capital":"수바","region":"oceania"},
        {"no":10,"name":"솔로몬 제도","capital":"호니아라","region":"oceania"},
        {"no":11,"name":"자메이카","capital":"킹스턴","region":"america"},
        {"no":12,"name":"나미비아","capital":"빈트후크","region":"africa"},
      ]
    }
  },
  computed : {
    filtered : function (){
      var cname = this.countryname.trim();
      return this.countries.filter(function(item, index){
        if(item.name.indexOf(cname) > -1){
          console.log(index);
          return true;
        }
      });
    }
  }
}
</script>

<style scoped>
#list {
  width: 400px;
  border: 1px solid black;
  border-collapse: collapse;
}

#list td, #list th {
  border: 1px solid black;
  text-align: center;
}

#list > thead > tr {
  color: yellow;
  background: purple;
}
</style>