<template>
    <div class="content">
      <div class="movie-info-box">
        <div class="mainTitle">영화정보</div>
        <div class="movie-template">
          <img class="poster" src="https://file2.nocutnews.co.kr/newsroom/image/2023/08/21/202308210927594431_0.jpg" />
          <div class="frame">
            <img class="bookMark_Bt" :src="path" />
            <div class="movieName">오펜하이머</div>
            <div class="bold">2023.08.15 개봉</div>
            <div class="line"></div>
            <div class="infoFrame">
              <div class="bold">감독</div>
              <div class="normalFont">크리스토퍼 놀란</div>
            </div>
            <div class="infoFrame">
              <div class="bold">출연</div>
              <p class="normalFont">
                킬리언 머피, 에밀리 블런트, 맷 데이면, 로버트 다우니 주니어, 플로렌스 퓨, 조쉬 하트넷
              </p>
            </div>
            <div class="infoFrame">
              <div class="bold">장르</div>
              <p class="p">드라마 / 정치 / 전기</p>
            </div>
            <div class="infoFrame">
              <div class="bold">러닝</div>
              <div class="normalFont">180분</div>
            </div>
          </div>
        </div>
      </div>
      <div class="subWrap">
        <div class="subTitle">예고편</div>
        <div class="trailer-template">
          <div class="trailerBox">
            <div class="trailerBox">
              <img @click="trailerScale()" class="trailer" src="@/images/movieInfo/Rectangle 421.png" />
              <img class="play-bt" src="@/images/movieInfo/play_bt.svg" />
            </div>
            <div class="trailerTitle">티저 예고편</div>
          </div>
          <div class="trailerBox">
            <div class="trailerBox">
              <img @click="trailerScale()" class="trailer" src="@/images/movieInfo/Rectangle 422.png" />
              <img class="play-bt" src="@/images/movieInfo/play_bt.svg" />
            </div>
            <div class="trailerTitle">메인 예고편</div>
          </div>
          <div class="trailerBox">
            <div class="trailerBox">
              <img @click="trailerScale()" class="trailer" src="@/images/movieInfo/Rectangle 423.png" />
              <img class="play-bt" src="@/images/movieInfo/play_bt.svg" />
            </div>
            <div class="trailerTitle">메인 예고편 2</div>
          </div>
        </div>
      </div>
      <div class="subWrap">
        <div class="subTitle">차트</div>
        <div class="chartWrap">
          <div class="chartBox">
            <radarChart/>
          </div>
          <div class="chartBox">
            <h3>지난 10일 간의 관객 수</h3>
            <lineChart/>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isBig" @click="switcher()" id="darkBg">
      <img id="big" :src="image">
    </div>
</template>

<script>
import lineChart from '../components/chart/lineChart.vue'
import radarChart from '../components/chart/radarChart.vue'
import {ref, onMounted} from 'vue'
export default{
    name: 'MovieTitle',
    components:{lineChart, radarChart},
    setup(){
      const isBig = ref(false);
      const isSwitched = ref(false);
      const path = ref('');
      const image = ref('');

      const switcher = () => {
        isBig.value = !isBig.value;
      }

      const trailerScale = () => {
        const vid = document.getElementsByClassName('trailer');
        const big = document.querySelector('#big');
        for( var i=0; i<=vid.length-1; i++ ){
          vid[i].addEventListener('click', function(){
            if( isBig.value = true ){
              var temp = this.src.split('5173')[1];
              image.value = temp;
            }else if( isBig.value = false) {

            }
          })
        }
      }
      
      onMounted(()=>{
        trailerScale();

        path.value = '/src/images/movieInfo/bookmark.svg'

        const bookMark_Bt = document.querySelector('.bookMark_Bt');
        bookMark_Bt.addEventListener('click', function(){
          if( !isSwitched.value ){
            path.value = '/src/images/movieInfo/bookmark_checked.svg';
            isSwitched.value = !isSwitched.value;
          }else if ( isSwitched.value ){
            path.value = '/src/images/movieInfo/bookmark.svg';
            isSwitched.value = !isSwitched.value;
          }
        })
        
      });

      return{path, isBig, switcher, trailerScale, isSwitched, image}
    }
}
</script>

<style scoped>
@import url(./MovieTitle.css);
</style>