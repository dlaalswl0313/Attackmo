<script>
import { RouterView} from 'vue-router';
import topHeader from './components/interface/topHeader.vue';
import botFooter from './components/interface/botFooter.vue';
import topAds from './components/AD/topAds.vue';
import botAds from './components/AD/botAds.vue';
import {ref, provide, onMounted } from 'vue';
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
      isLogin.value = !isLogin.value;
      sessionStorage.setItem('login', isLogin.value);
      console.log('login is = ' + sessionStorage.getItem('login'))
    }
    provide('loginToggle', loginToggle);


    const isSiren = ref(true);

    onMounted(() => {
      const sessionStorage = window.sessionStorage;
      sessionStorage.setItem('login', isLogin.value);

      if (location.href.split("/")[3] == 'Siren') {
        isSiren.value = false;
      } else {
        isSiren.value = true;
      }
    })

    return{
      isSiren
    }
  }
}

</script>

<template>
  <!-- 최상단으로 버튼 -->
  <div v-if="isSiren" id="topBt">
    <a href="#">
      <img src="@/images/topBt.svg">
    </a>
  </div>

  <!-- 상단광고 위치 -->
  <section v-if="isSiren">
    <topAds/>
  </section>

  <!-- 헤더 -->
  <topHeader v-if="isSiren"/>

  <!-- 컨텐츠 -->
  <RouterView />

  <!-- 하단광고 위치 -->
  <section v-if="isSiren">
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
