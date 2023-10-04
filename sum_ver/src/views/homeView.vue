<template>
    <div class="screen">
      <div class="video">
          <div class="div"></div>
        <div class="iframe">
            <img class="rectangle" src="../images/Rectangle420.png" />
        </div>
      </div>
      <div class="controler">
        <div class="detail">
          <div class="more">상세보기</div>
          <img class="chevron-right" src="../images/chevron_right.svg" />
        </div>

        <img @click="playToggle()" v-if="isPlaying" 
        class="img" style="cursor:pointer" src="../images/play_circle.svg" />

        <img @click="playToggle()" v-if="!isPlaying" 
        class="img" style="cursor:pointer" src="../images/pause_circle.svg" />

        <img @click="soundToggle()" v-if="isSound" 
        class="img" style="cursor:pointer" src="../images/sound.svg" />

        <img @click="soundToggle()" v-if="!isSound" 
        class="img" style="cursor:pointer" src="../images/volume_off.svg" />
        
      </div>
    </div>


    <div class="div-wrapper">
      <div class="top">
        <div class="frame">
          <div class="title">인기 TOP 10</div>
          <div class="div" id="top10Plus"><router-link to="/MovieMain">+</router-link></div>
        </div>
        <div class="posters">
          <RouterLink to="/MovieTitle" class="link">
            <img class="rectangle" src="../images/Rectangle 695.png" />
          </RouterLink>
          <img class="img" src="../images/Rectangle 696.png" />
          <img class="img" src="../images/Rectangle 697.png" />
          <img class="rectangle" src="../images/Rectangle 698.png" />
        </div>
      </div>
      <div class="top">
        <div class="frame">
          <div class="title">상영중인 영화</div>
          <div class="div"><router-link to="/Mnow">+</router-link></div>
        </div>
        <div class="posters">
          <img class="rectangle-2" src="../images/Rectangle 618.png" />
          <img class="rectangle-2" src="../images/Rectangle 642.png" />
          <img class="rectangle-2" src="../images/Rectangle 643.png" />
          <img class="rectangle-2" src="../images/Rectangle 653.png" />
        </div>
      </div>
      <div v-if="isLogin" class="top">
        <div class="frame">
          <div class="title">당신의 취향은?</div>
          <div class="div">+</div>
        </div>
        <div class="posters">
          <img class="rectangle" src="../images/Rectangle 698.png" />
          <img class="rectangle-2" src="../images/Rectangle 629.png" />
          <img class="rectangle-2" src="../images/Rectangle 613.png" />
          <img class="rectangle-2" src="../images/Rectangle 614.png" />
        </div>
      </div>
    </div>
</template>

<script>
import {inject, ref} from 'vue';
export default{
    name:'homeView',
    setup(){
      const isLogin = inject('isLogin');
      const isPlaying = ref(false);
      const isSound = ref(false);

      const playToggle = () => isPlaying.value = !isPlaying.value;
      const soundToggle = () => isSound.value = !isSound.value;

      return {isLogin, isPlaying, isSound,
              playToggle, soundToggle}
    }
}
</script>

<style scoped>
@import url(./homeView.css);
</style>