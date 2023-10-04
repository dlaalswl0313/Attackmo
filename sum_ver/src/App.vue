<script>
import { RouterView } from 'vue-router';
import topHeader from './components/interface/topHeader.vue';
import botFooter from './components/interface/botFooter.vue';
import topAds from './components/AD/topAds.vue';
import botAds from './components/AD/botAds.vue';
import {ref, provide } from 'vue';
import {set} from './movieApi';


export default {
  components: {
    topAds, topHeader, botAds, botFooter
  }, setup() {
    console.log(set);

    const isLogin = ref(false);
    provide('isLogin', isLogin);

    const loginToggle = () => {
      const sessionStorage = window.sessionStorage;
      if (( sessionStorage.getItem('login') == 'false' )) {
        sessionStorage.setItem('login', true);
        if ( sessionStorage.getItem('login') == 'false' ) isLogin.value = false;
        if ( sessionStorage.getItem('login') == 'true' ) isLogin.value = true;
        console.log('login is : '+sessionStorage.getItem('login'))
      }else if (( sessionStorage.getItem('login') == 'true' )){
        sessionStorage.setItem('login', false);
        if ( sessionStorage.getItem('login') == 'false' ) isLogin.value = false;
        if ( sessionStorage.getItem('login') == 'true' ) isLogin.value = true;
        console.log('login is : '+sessionStorage.getItem('login'))
      }
    }
    // provide('loginToggle', loginToggle);
  }
}

</script>

<template>
  <!-- 최상단으로 버튼 -->
  <div id="topBt">
    <a href="#">
      <img src="@/images/topBt.svg">
    </a>
  </div>

  <!-- 상단광고 위치 -->
  <section>
    <topAds/>
  </section>

  <!-- 헤더 -->
  <topHeader/>

  <!-- 컨텐츠 -->
  <RouterView />

  <!-- 하단광고 위치 -->
  <section>
    <botAds/>
  </section>

  <!-- footer -->
  <footer>
    <botFooter/>
  </footer>
</template>

<style scoped>
#topBt{
  position:fixed; right:5%; bottom:10%;
  z-index:15; cursor:pointer;
}
@media(max-width:490px){
  #topBt{transform: scale(0.7);}
}
@media(max-width:1194px){
  section:first-child{display:none;}
  section{height:fit-content;}
}
</style>
