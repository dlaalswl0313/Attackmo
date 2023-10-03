<template>
    <div class="sub-menu">
      <div class="frame">
        <div class="div">
          <RouterLink to="/Mnow"><div class="navBt">상영중인 영화</div></RouterLink>
          <RouterLink to="/Mcoming"><div class="navBt">상영예정 영화</div></RouterLink>
          <div class="navBt">이벤트</div>
          <div class="navBt">시사회</div>
        </div>
        <img class="line" src="@/images/subMenuLine.svg" />
        <div class="div">
          <div class="navBt">리뷰</div>
          <div class="navBt">좋아요</div>
          <div class="navBt">북마크</div>
        </div>
        <img class="line" src="@/images/subMenuLine.svg" />
        <div class="div"><div class="navBt">공지사항</div></div>
        <img class="line" src="@/images/subMenuLine.svg" />
        <div class="div"><div class="navBt">문의사항</div></div>
        <img class="line" src="@/images/subMenuLine.svg" />
        <div class="div">
          <div class="navBt">내 정보</div>
          <div class="navBt">추천 기록</div>
        </div>
      </div>
    </div>
</template>

<script setup>

</script>

<style>
.sub-menu {
  display: flex;
  height: 248px;
  align-items: center;
  justify-content: center;
  position: absolute; top:190px;
  left:50%; transform:translateX(-50%);
  background-color: #ffffff;
  width: 100vw; z-index:2; border-top:3px solid black;
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
}
@media(max-width:1194px){
  .sub-menu{display:none;}
}

.sub-menu .frame {
  display: inline-flex;
  align-items: flex-start;
  position: relative;
  flex: 0 0 auto;
}

.sub-menu .div {
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 200px;
  align-items: center;
  position: relative;
}

.sub-menu a{width:100%;}

.sub-menu .navBt {
  position: relative;
  align-self: stretch;
  font-family: "Inter-Regular", Helvetica;
  font-weight: 400;
  color: #000000;
  font-size: 22px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
  padding:6px 0;
}

.sub-menu .line {
  position: relative;
  width: 1px;
  height: 200px;
  object-fit: cover;
}

.sub-menu .navBt:hover,
.sub-menu .navBt-2:hover{
    background:rgba(0,0,0,0.2);
    cursor:pointer;
}

</style>