<template>
  <div id="app">
    <fulls></fulls>
    <br/>
    <getset></getset><br/>
    <method></method>
    <!--<input id="a" type="text" v-bind:value="msg">
    <br/>
    <img v-bind:src="imagePath">
    <br/>
    <input type="text" v-model="name" placeholder="이름을 입력해주세요.">
    <br/>
    입력된 이름 : <h2 v-html="name"></h2>
    <sel></sel>
    <br/>
    <ifshow></ifshow>
    <br/>
    <elsfif></elsfif>
    <br/>
    <fors></fors>
    <hr/>
    <vfor></vfor>
    <hr/>
    <prev></prev>
    <hr/>
    <com01></com01>-->
  </div>
</template>

<script>
/*import ifshow from './components/ifshow'
import elsfif from  './components/elsfif'
import fors from  './components/for'
import vforobj from "@/components/vforobj"
import prev from  './components/OtherDerec'
import com01 from './components/Computed_01'
*/
import fulls from './components/Chapter2_full'
import getset from './components/getset'
import Md from "@/components/md";

export default {
  name: 'App',
  components : {
    "fulls" : fulls,
    "getset" : getset,
    "method" : Md
    /*'ifshow':ifshow,
    'elsfif':elsfif,
    'fors' : fors,
    "vfor" : vforobj,
    "prev" : prev,
    "com01":com01*/
},
  data(){
    return{
      msg : 'v-bind 사진',
      imagePath:'http://sample.bmaster.kro.kr/photos/61.jpg',
      name : ''
    }
  }
}
</script>

<style>
#app{
  height: 100vh;
}

</style>
