<template>
  <div id="fors">
    <table id="list">
      <thead>
      <tr>
        <th>인덱스</th>
        <th>번호</th>
        <th>이름</th>
        <th>전화번호</th>
        <th>주소</th>
      </tr>
      </thead>
      <tbody id="contacts">
        <tr v-for="(contact,i) in contacts" v-bind:key="contact">
          <td>{{i+1}}</td>
          <td>{{contact.no}}</td>
          <td>{{contact.name}}</td>
          <td>{{contact.tel}}</td>
          <td>{{contact.address}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "fors",
  data(){
    return{
      "pageno" : 1,
      "pagesize" : 10,
      "totalcount" : 100,
      "contacts" : [
        {"no":100,"name":"설현","tel":"010-3456-8299","address":"서울"},
        {"no":99,"name":"혜리","tel":"010-3456-8288","address":"서울"},
        {"no":98,"name":"하니","tel":"010-3456-8287","address":"경기"},
        {"no":97,"name":"성소","tel":"010-3456-8286","address":"제주"},
        {"no":96,"name":"지아","tel":"010-3456-8295","address":"서울"},
        {"no":95,"name":"쯔위","tel":"010-3456-8284","address":"서울"},
        {"no":94,"name":"사나","tel":"010-3456-8283","address":"경기"},
        {"no":93,"name":"모모","tel":"010-3456-8282","address":"제주"},
      ]
    }
  }
}
</script>

<style scoped>
#list{
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