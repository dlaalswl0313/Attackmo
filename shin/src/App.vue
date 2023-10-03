<script>
import { RouterView } from 'vue-router';
import topHeader from './components/interface/topHeader.vue';
import botFooter from './components/interface/botFooter.vue';
import topAds from './components/AD/topAds.vue';
import botAds from './components/AD/botAds.vue';
import {ref, provide, onMounted} from 'vue';


export default {
  components: {
    topAds, topHeader, botAds, botFooter
  }, setup() {

    const isLogin = ref(false);

    const loginToggle = () => {
      const sessionStorage = window.sessionStorage;
      if ( sessionStorage.getItem('login') == 'false' ) {
        sessionStorage.setItem('login', true);
        loginCheck();
        console.log('login is : '+sessionStorage.getItem('login'))
      } else {
        sessionStorage.setItem('login', false);
        loginCheck();
        console.log('login is : '+sessionStorage.getItem('login'))
      }
    }

    const loginCheck = () =>{
      const sessionStorage = window.sessionStorage;
      if ( sessionStorage.getItem('login') == 'false' ) isLogin.value = false;
      if ( sessionStorage.getItem('login') == 'true' ) isLogin.value = true;
    }

    
    provide('loginCheck', loginCheck)
    provide('loginToggle', loginToggle);
    provide('isLogin', isLogin);

    onMounted(()=>{
      sessionStorage.setItem('login', false);
      console.log('login is : '+sessionStorage.getItem('login'))
    })
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
