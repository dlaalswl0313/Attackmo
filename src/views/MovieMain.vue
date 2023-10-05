<template>
    <div class="screen">
      <div class="div">
        <div class="title">
          <div class="mainTitle">인기 TOP 10</div>
        </div>
        <div class="cont">
          <div class="poster-box">
            <img class="image" src="@/images/poster.png" />
            <div class="view">
              <div class="movieTitle">영화제목</div>
              <div class="movieDate">개봉일</div>
            </div>
            <div class="starBox">
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starBlack">★</div>
            </div>
          </div>
          <div class="poster-box">
            <img class="image" src="@/images/poster.png" />
            <div class="view">
              <div class="movieTitle">영화제목</div>
              <div class="movieDate">개봉일</div>
            </div>
            <div class="starBox">
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starBlack">★</div>
            </div>
          </div>
          <div class="poster-box">
            <img class="image" src="@/images/poster.png" />
            <div class="view">
              <div class="movieTitle">영화제목</div>
              <div class="movieDate">개봉일</div>
            </div>
            <div class="starBox">
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starBlack">★</div>
            </div>
          </div>
          <div class="poster-box">
            <img class="image" src="@/images/poster.png" />
            <div class="view">
              <div class="movieTitle">영화제목</div>
              <div class="movieDate">개봉일</div>
            </div>
            <div class="starBox">
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starBlack">★</div>
            </div>
          </div>
        </div>
      </div>
      <div class="div">
        <div class="title">
          <div class="mainTitle">기대작</div>
          <div class="plusBt"><RouterLink to="/Mcoming">+</RouterLink></div>
        </div>
        <div class="cont">
          <div class="poster-box">
            <img class="image" src="@/images/poster.png" />
            <div class="view">
              <div class="movieTitle">영화제목</div>
              <div class="movieDate">개봉일</div>
            </div>
            <div class="starBox">
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starBlack">★</div>
            </div>
          </div>
          <div class="poster-box">
            <img class="image" src="@/images/poster.png" />
            <div class="view">
              <div class="movieTitle">영화제목</div>
              <div class="movieDate">개봉일</div>
            </div>
            <div class="starBox">
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starBlack">★</div>
            </div>
          </div>
          <div class="poster-box">
            <img class="image" src="@/images/poster.png" />
            <div class="view">
              <div class="movieTitle">영화제목</div>
              <div class="movieDate">개봉일</div>
            </div>
            <div class="starBox">
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starBlack">★</div>
            </div>
          </div>
          <div class="poster-box">
            <img class="image" src="@/images/poster.png" />
            <div class="view">
              <div class="movieTitle">영화제목</div>
              <div class="movieDate">개봉일</div>
            </div>
            <div class="starBox">
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starBlack">★</div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isLogin" class="div">
        <div class="title">
          <div class="mainTitle">추천리스트</div>
          <RouterLink to="/RecHistory"><div class="plusBt">+</div></RouterLink>
        </div>
        <div class="cont">
          <div class="poster-box">
            <img class="image" src="@/images/poster.png" />
            <div class="view">
              <div class="movieTitle">영화제목</div>
              <div class="movieDate">개봉일</div>
            </div>
            <div class="starBox">
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starBlack">★</div>
            </div>
          </div>
          <div class="poster-box">
            <img class="image" src="@/images/poster.png" />
            <div class="view">
              <div class="movieTitle">영화제목</div>
              <div class="movieDate">개봉일</div>
            </div>
            <div class="starBox">
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starBlack">★</div>
            </div>
          </div>
          <div class="poster-box">
            <img class="image" src="@/images/poster.png" />
            <div class="view">
              <div class="movieTitle">영화제목</div>
              <div class="movieDate">개봉일</div>
            </div>
            <div class="starBox">
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starBlack">★</div>
            </div>
          </div>
          <div class="poster-box">
            <img class="image" src="@/images/poster.png" />
            <div class="view">
              <div class="movieTitle">영화제목</div>
              <div class="movieDate">개봉일</div>
            </div>
            <div class="starBox">
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starBlack">★</div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isLogin" class="div">
        <div class="title">
          <div class="mainTitle">리뷰 좋아요</div>
          <RouterLink to="/Like"><div class="plusBt">+</div></RouterLink>
        </div>
        <div class="cont">
          <div class="poster-box">
            <img class="image" src="@/images/poster.png" />
            <div class="view">
              <div class="movieTitle">영화제목</div>
              <div class="movieDate">개봉일</div>
            </div>
            <div class="starBox">
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starBlack">★</div>
            </div>
          </div>
          <div class="poster-box">
            <img class="image" src="@/images/poster.png" />
            <div class="view">
              <div class="movieTitle">영화제목</div>
              <div class="movieDate">개봉일</div>
            </div>
            <div class="starBox">
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starBlack">★</div>
            </div>
          </div>
          <div class="poster-box">
            <img class="image" src="@/images/poster.png" />
            <div class="view">
              <div class="movieTitle">영화제목</div>
              <div class="movieDate">개봉일</div>
            </div>
            <div class="starBox">
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starBlack">★</div>
            </div>
          </div>
          <div class="poster-box">
            <img class="image" src="@/images/poster.png" />
            <div class="view">
              <div class="movieTitle">영화제목</div>
              <div class="movieDate">개봉일</div>
            </div>
            <div class="starBox">
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starBlack">★</div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isLogin" class="div">
        <div class="title">
          <div class="mainTitle">영화 북마크</div>
          <RouterLink to="/Mark"><div class="plusBt">+</div></RouterLink>
        </div>
        <div class="cont">
          <div class="poster-box">
            <img class="image" src="@/images/poster.png" />
            <div class="view">
              <div class="movieTitle">영화제목</div>
              <div class="movieDate">개봉일</div>
            </div>
            <div class="starBox">
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starBlack">★</div>
            </div>
          </div>
          <div class="poster-box">
            <img class="image" src="@/images/poster.png" />
            <div class="view">
              <div class="movieTitle">영화제목</div>
              <div class="movieDate">개봉일</div>
            </div>
            <div class="starBox">
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starBlack">★</div>
            </div>
          </div>
          <div class="poster-box">
            <img class="image" src="@/images/poster.png" />
            <div class="view">
              <div class="movieTitle">영화제목</div>
              <div class="movieDate">개봉일</div>
            </div>
            <div class="starBox">
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starBlack">★</div>
            </div>
          </div>
          <div class="poster-box">
            <img class="image" src="@/images/poster.png" />
            <div class="view">
              <div class="movieTitle">영화제목</div>
              <div class="movieDate">개봉일</div>
            </div>
            <div class="starBox">
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starYellow">★</div>
              <div class="starBlack">★</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import {inject} from 'vue';
export default{
    name:'MovieMain',
    setup(){
      const isLogin = inject('isLogin');

      return {isLogin}
    }
}
</script>

<style scoped>
@import url(./MovieMain.css);
</style>