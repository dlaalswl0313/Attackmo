<template>
    <div id="pc"><img :src="pcPath" alt=""></div>
</template>

<script>
import {ref, onMounted} from 'vue';
export default{
    name:'topAds',
    setup(){
        const pcPath = ref('');
        const tabletPath = ref('');
        const mobilePath = ref('');

        onMounted(()=>{
            const random = Math.floor(Math.random()*5)+1;
            pcPath.value = '/src/images/topAd/topAd'+random+'.png'
        })

        return {pcPath, tabletPath, mobilePath}
    }
}
</script>

<style scoped>
div{
    width:100%;
}
@media(max-width:1194px){
    div{display:none;}
}
img{
    position: relative; left:50%;
    transform:translateX(-50%);
    width:100%;
}
</style>