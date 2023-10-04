<template>
    <div id="resBox">
        <img src="@/images/exitBt.svg" class="exit" @click="searchingStart()">
        <div class="searchWrap">
            <router-link to="/MovieTitle">
            <div class="posterWrap">
                <img src="https://file2.nocutnews.co.kr/newsroom/image/2023/08/21/202308210927594431_0.jpg" alt="poster">
            </div>
            </router-link>
            <div class="infoWrap">
                    <div class="title">
                        <strong>오펜하이머</strong>
                    </div>
                    <div class="onMobile">
                        <div class="director">
                            <strong>감독</strong><span>크리스토퍼 놀란</span>
                        </div>
                        <div class="staring">
                            <strong>출연</strong><span>킬리언 머피, 에밀리 블런트, 맷 데이면, 로버트 다우니 주니어, 플로렌스 퓨, 조쉬 하트넷</span>
                        </div>
                        <div class="genre">
                            <strong>장르</strong><span>드라마 / 정치 / 전기</span>
                        </div>
                        <div class="time">
                            <strong>러닝</strong><span>180분</span>
                        </div>
                        <div class="date">
                            <span>2023.08.15 개봉</span>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import {inject} from 'vue';
export default{
    name:'searchBar',
    setup(){
        const searchingStart = inject('searchingStart');
        return{searchingStart};
    }
}
</script>

<style scoped>
@import url(./searchBar.css);
</style>