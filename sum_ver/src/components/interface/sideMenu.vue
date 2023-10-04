<script>
import { inject } from 'vue'
import { RouterLink } from 'vue-router';
export default {
    name: 'sideMenu',
    setup() {
        const isSlideMenuToggle = inject('isSlideMenuToggle');
        const sideMenuOpen = inject('sideMenuOpen');
        const loginToggle = inject('loginToggle');
        const loginCheck = inject('loginCheck');
        const isLogin = inject('isLogin');
        return { isSlideMenuToggle, sideMenuOpen,
            loginToggle, loginCheck, isLogin };
    },
    components: { RouterLink }
}
</script>

<template>
  <div class="side-menu">
    <div class="top-side">
      <RouterLink to="/"><img class="LOGO" src="@/images/LOGO.svg" /></RouterLink>
      <div class="frame">
        <RouterLink to="/Info"><img class="person-icon" src="@/images/personicon.svg" /></RouterLink>
        <div class="loginWrapper">
          <div v-if="!isLogin" @click="loginToggle()" style="cursor:pointer;">로그인</div>
          <div v-if="isLogin" @click="loginToggle()" style="cursor:pointer;">로그아웃</div> /
          <div>회원가입</div>
        </div>
      </div>
    </div>
    <div class="frame2">
      <img class="person-icon" src="@/images/personicon.svg" />
      <div class="loginWrapperMobile">
        <div v-if="!isLogin" @click="loginToggle()" style="cursor:pointer;">로그인</div>
        <div v-if="isLogin" @click="loginToggle()" style="cursor:pointer;">로그아웃</div> /
        <div>회원가입</div>
      </div>
    </div>
    <div class="category">
      <RouterLink to="/MovieMain" class="c-title">
        <div class="div">영화</div>
      </RouterLink>
      <div class="c-childs">
        <RouterLink to="/Mnow" class="child">
          <div class="normalFont">- 상영중인 영화</div>
        </RouterLink>
        <RouterLink to="/Mcoming" class="child">
          <div class="normalFont">- 상영예정 영화</div>
        </RouterLink>
        <div class="div-wrapper">
          <div class="normalFont">- 이벤트</div>
        </div>
        <div class="child">
          <div class="normalFont">- 시사회</div>
        </div>
      </div>
    </div>
    <div class="category">
      <div class="c-title">
        <div class="div">리뷰</div>
      </div>
      <div class="c-childs">
        <div class="child">
          <div class="normalFont">- 리뷰페이지</div>
        </div>
        <div class="child">
          <div class="normalFont">- 좋아요</div>
        </div>
        <div class="div-wrapper">
          <div class="normalFont">- 북마크</div>
        </div>
    </div>
  </div>
  <div class="category">
    <div class="c-title">
      <div class="div">공지사항</div>
    </div>
  </div>
  <div class="category">
    <div class="c-title">
      <div class="div">문의사항</div>
    </div>
    <div class="c-childs">
      <div class="child">
        <div class="normalFont">- 문의 게시판</div>
      </div>
    </div>
  </div>
</div>
<div @click="sideMenuOpen()" class="darkBG"></div></template>

<style>@import url(./sideMenu.css);</style>