<template>
    <div class="content">
      <div class="title"><div class="mainTitle">영화 검색결과 N건</div></div>
      <div class="results">
        <div class="template">
          <img class="rectangle" src="@/images/rectangle 408.png" />
          <div class="info">
            <div class="div">오펜하이머</div>
            <div class="line"></div>
            <div class="normalFont">2023.08.15 개봉</div>
            <div class="running-time">
              <div class="bold">러닝</div>
              <div class="normalFont">180분</div>
            </div>
          </div>
        </div>
        <div class="template">
          <img class="rectangle" src="@/images/rectangle 408.png" />
          <div class="info">
            <div class="div">오펜하이머</div>
            <div class="line"></div>
            <div class="normalFont">2023.08.15 개봉</div>
            <div class="running-time">
              <div class="bold">러닝</div>
              <div class="normalFont">180분</div>
            </div>
          </div>
        </div>
        <div class="template">
          <img class="rectangle" src="@/images/rectangle 408.png" />
          <div class="info">
            <div class="div">오펜하이머</div>
            <div class="line"></div>
            <div class="normalFont">2023.08.15 개봉</div>
            <div class="running-time">
              <div class="bold">러닝</div>
              <div class="normalFont">180분</div>
            </div>
          </div>
        </div>
        <div class="template">
          <img class="rectangle" src="@/images/rectangle 408.png" />
          <div class="info">
            <div class="div">오펜하이머</div>
            <div class="line"></div>
            <div class="normalFont">2023.08.15 개봉</div>
            <div class="running-time">
              <div class="bold">러닝</div>
              <div class="normalFont">180분</div>
            </div>
          </div>
        </div>
        <div class="template">
          <img class="rectangle" src="@/images/rectangle 408.png" />
          <div class="info">
            <div class="div">오펜하이머</div>
            <div class="line"></div>
            <div class="normalFont">2023.08.15 개봉</div>
            <div class="running-time">
              <div class="bold">러닝</div>
              <div class="normalFont">180분</div>
            </div>
          </div>
        </div>
        <div class="template">
          <img class="rectangle" src="@/images/rectangle 408.png" />
          <div class="info">
            <div class="div">오펜하이머</div>
            <div class="line"></div>
            <div class="normalFont">2023.08.15 개봉</div>
            <div class="running-time">
              <div class="bold">러닝</div>
              <div class="normalFont">180분</div>
            </div>
          </div>
        </div>
        <div class="template">
          <img class="rectangle" src="@/images/rectangle 408.png" />
          <div class="info">
            <div class="div">오펜하이머</div>
            <div class="line"></div>
            <div class="normalFont">2023.08.15 개봉</div>
            <div class="running-time">
              <div class="bold">러닝</div>
              <div class="normalFont">180분</div>
            </div>
          </div>
        </div>
        <div class="template">
          <img class="rectangle" src="@/images/rectangle 408.png" />
          <div class="info">
            <div class="div">오펜하이머</div>
            <div class="line"></div>
            <div class="normalFont">2023.08.15 개봉</div>
            <div class="running-time">
              <div class="bold">러닝</div>
              <div class="normalFont">180분</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import {useRouter} from 'vue-router';
import {onMounted} from 'vue'
export default{
    name:'MovieSearch',
    setup(){

      const router = useRouter();
      const path = router.currentRoute.value.path;

      onMounted(()=>{
        const query = router.currentRoute.value.query.searchWord;
        console.log(query);
      })

      window.addEventListener('resize', function(){
        if( path == '/Search' && this.window.innerWidth <= 1194 ){
          router.push('/')
        }
      })
    }
}
</script>

<style>
@import url(./MovieSearch.css);
</style>