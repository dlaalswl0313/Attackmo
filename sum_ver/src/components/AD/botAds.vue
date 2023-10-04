<template>
    <div id="pc"><img :src="pcPath" alt=""></div>
    <div id="tablet"><img :src="tabletPath" alt=""></div>
    <div id="mobile"><img :src="mobilePath" alt=""></div>
</template>

<script>
import {ref, onMounted} from 'vue';
export default{
    name:'botAds',
    setup(){
        const pcPath = ref('');
        const tabletPath = ref('');
        const mobilePath = ref('');

        onMounted(()=>{
            const random = Math.floor(Math.random()*4)+1;
            pcPath.value = '/src/images/botAd/botAd'+random+'.png'
            tabletPath.value = '/src/images/botAd/botAd'+random+'.png'
            mobilePath.value = '/src/images/botAd/botAd'+random+'.png'
        })

        return {pcPath, tabletPath, mobilePath}
    }
}
</script>
<style scoped>
img{
    position: relative; left:50%;
    transform:translateX(-50%);
    width:100%;
}

div{
    width:100%; height:fit-content;
    margin-bottom:-4px;
}

@media(min-width:1194px){
    #pc{ display:block; }
    #tablet{ display:none;}
    #mobile{ display:none; }
}

@media(max-width:1194px){
    #pc{ display:none; }
    #tablet{ display:block;}
    #mobile{ display:none; }
}

@media(max-width:490px){
    #pc{ display:none; }
    #tablet{ display:none;}
    #mobile{ display:block; }
}
</style>