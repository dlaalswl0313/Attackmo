<template>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <section id="section">
    <div id="wrap">
            <p id="title">공지사항</p>
        <div class="main">
            <table id="list">
              <thead>
                <tr>
                    <td class="n">번호</td>
                    <td class="t">제목</td>
                    <td class="w">작성자</td>
                    <td class="d">날짜</td>
                </tr>
              </thead>
            <tbody class="con">
                <tr v-for="(value,i) in visiblePosts" :key="value.id" >
                    <td class="n">{{ i + 1 }}</td>
                    <td class="t" @click="gonote">{{ value.title }}</td>
                    <td class="w">{{ value.writer }}</td>
                    <td class="d">{{ getCurrentDate()}}</td>
                </tr>
            </tbody>
          </table>
        </div>
            <div id="totalPage">
                <i @click="before()" class="bi bi-chevron-bar-left"></i>   
                <i @click="before()" class="bi bi-chevron-compact-left"></i>
                    <div id="page">
                        <button id="pgnum" v-for="block in blocks" :key="block" @click="changePage(block)">{{ block }}</button>
                    </div>
                <i @click="next()" class="bi bi-chevron-compact-right"></i>  
                <i @click="next()" class="bi bi-chevron-bar-right"></i>
            </div>

        </div>
 </section>
</template>
<script>
import data from '../data/notice.js'

export default {
    name: 'Read',
    data() {
        return {
            data: data,
            itemsPerPage: 10, //목록 몇개까지 표시할것인가
            currentPage: 1, //페이지 이동 수 
        }
    },
    computed: {
        sortedData() {
            return this.data.slice().sort((a, b) => {
                // 날짜를 기준으로 내림차순 정렬
                return new Date(b.Date) - new Date(a.Date);
            });
        }, 
        totalPage() {//하단목록숫자표시
            return Math.ceil(this.data.length / this.itemsPerPage);
        }, 
        visiblePosts() { //작성폼에서 작성해서 저장하면 목록에 추가해줌
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.sortedData.slice(start, end);
        }, 
        blocks() { //페이지 이동
            const blocks = [];
            for (let i = 1; i <= this.totalPage; i++) {
                blocks.push(i);
        }
         return blocks;
        },
  },
    methods: {
        getCurrentDate() { //날짜 형식 YYYY-MM-DD
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1).padStart(2, '0');
            const day = String(currentDate.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        },
        gonote(){
           //alert("클릭미");
            this.$router.push({path:"/notice"});
        },
        changePage(page) {
            this.currentPage = page;
        },
        before(){
            //alert("이전");
            if(this.currentPage>1){
                this.currentPage--; 
            }
        },
        next(){
            //alert("다음");
            if(this.currentPage < this.totalPage){
                this.currentPage++;
            }
        }
    },
}
</script>
<style scoped>
*{padding:0;margin:0; box-sizing: border-box;}
#section{
    width:1000px;
    margin:50px auto;
    position:relative;
}
#title{
    font-size:23px;
    font-weight:700;
    margin-bottom:50px;
}
#write{
    width:30px;
    height:30px;
    background:#F9C041;
    position:absolute;
    border-radius: 50px;
    font-size: 20px;
    text-align: center;
    line-height: 30px;
    top:210px;
    right:390px;
}
.main{
    display:flex;
    flex-direction: column;
} 
.list{
    width:100%;
    border-radius:10px;
    border-collapse:collapse;
}
.n{width:10%;}.t{width:60%;}.w{width:15%;}.d{width:15%;}
.n,.w,.d{
    text-align:center;
}
.t{
    text-decoration: none;
    color:#000;
}
thead tr{
    text-align:center;
    height:60px;
    border-bottom:3px double #000;
}
.con{
    width:1000px;
}
.con tr{
    height:50px;
    border-bottom:1px solid #000;
}
#totalPage{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
}
#page{
    list-style-type: none;
    display: inline-flex;
    height: 40px;
    padding: 0px 30px;
    align-items: center;
    flex-shrink: 0;
    gap:25px;
}
#pgnum{
    border:none;
    background: white;
}
@media (max-width:1194px) {
    #section{width:100vw; font-size: 17px;;}
    #wrap{width:90%;margin: 0 auto;}
    #write{top:70px;right:10px;}
    .main{width:100%;align-items:flex-start;}
    #search{font-size: 17px;;}

}
@media (max-width:490px) {
    #section{
        width:90%;
    }
    .main{
        width:100%;
        font-size:12px;
    }
    #write{
        width:25px;
        height:25px;
        line-height:25px;
        font-size:15px;
        top:70px;
        right:0;
    }
}
</style>