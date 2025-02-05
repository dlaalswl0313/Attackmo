let data = null;
let set = {};


$(async function(){
    data = await getMovies();
    // console.log(data);

    // let genre = new Set();
    // $.each(data,function(idx, val){
    //     genre.add(val.genre);
    // })
    // console.log(s);

    organize();
    // console.log(set);
    // let keys = Object.keys(set);

    // $.each(set,function(key, val){
    //     $("#res").append(
    //         `
    //             <div style="margin:50px auto; width:600px;">
    //                 <div><b>${key}</b></div>
    //                 <img src="${val.포스터}"></img>
    //                 <div>${val.장르}</div>
    //                 <div>${val.줄거리}</div>
    //                 <div>${val.감독}</div>
    //                 <div>${val.배우}</div>
    //                 <div>${val.개봉일}</div>
    //                 <div>${val.러닝타임}</div>
    //                 <div>${val.예고편영상}</div>
    //                 <div>${val.예고편타이틀}</div>
    //             </div>
    //         `
    //     )
    // })

})


async function getMovies(){
    let url = 'http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&'
    let key = 'ServiceKey=K0B3Y48HAF56XXL0ADR2&';
    let detail = 'detail=Y&'
    // let title = 'title='+encodeURIComponent('오펜하이머')+'&';
    let listCount = 'listCount=1000&'
    let releaseDts = 'releaseDts=20140101&';
    // let releaseDts = `releaseDts=${todayYYYYMMDD()}&`;
    // let releaseDte = 'releaseDte=20241231&';
    // let releaseDts = `releaseDts=${releaseFilter()}&`;
    let releaseDte = `releaseDte=${todayYYYYMMDD()}&`;

    

    var temp = await fetch(url + key + detail + releaseDts + releaseDte + listCount).then(r=>r.json()).then(r=>r);
    return sortIt(filtering(temp.Data[0].Result));
    
    // return temp.Data[0].Result;
}

function organize(dt){
    data.forEach(function(item){

        var y = item.repRlsDate.slice(0, 4)
        var m = item.repRlsDate.slice(4, 6)
        var d = item.repRlsDate.slice(6, 8)

        set[item.title] = new Object();
        set[item.title]['제목'] = item.title;
        set[item.title]['포스터'] = item.posters.split("|")[0];
        set[item.title]['장르'] = item.genre;
        set[item.title]['줄거리'] = item.plots.plot[0].plotText;
        set[item.title]['감독'] = item.staffs.staff[0].staffNm;
        set[item.title]['배우'] = actors(item.actors.actor);
        set[item.title]['러닝타임'] = item.runtime + '분';
        set[item.title]['개봉일'] = `${y}.${m}.${d}`;
        set[item.title]['스틸컷'] = stCuts(item);
        set[item.title]['예고편영상'] = stTrailer(item.vods.vod, false);
        set[item.title]['예고편타이틀'] = stTrailer(item.vods.vod, true);
    })
}

function stTrailer(arr, t){
    var temp = [];
    arr.forEach(function(link){
        if( t == false ) temp.push(link.vodUrl);
        if( t == true ) temp.push(link.vodClass);
    })
    return temp;
}

function stCuts(data){
    var temp = [];
    var arr = data.stlls.split("|");
    arr.forEach(function(link){
        temp.push(link);
    })
    return temp;
}

// function sortIt(data){
//     return data.sort( (a,b) => a['title'].localeCompare(b['title']) )
// }
function sortIt(data){
    return data.sort( (a,b) => a['repRlsDate'] - (b['repRlsDate']) )
}


function filtering(dt){
    return dt.filter(function(item, idx){
        return item.genre != "에로" &&
        item.genre != "뮤직" &&
        item.genre != "인물,뮤직" &&
        item.posters != '' &&
        item.vods.vod.length > 1 ;
    })
}

function actors(item){
    var arr = new Array();
    for(var i in item ){
        arr.push(item[i].actorNm)
    };
    return arr;
}

function todayYYYYMMDD() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1을 해줍니다.
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}${month}${day}`;
}

function releaseFilter(){
    const timeBackNumber = 30
    const currentDate = new Date();
    const yesterday = new Date(currentDate);
    yesterday.setDate(currentDate.getDate() - timeBackNumber);
    console.log(yesterday)
    year = yesterday.getFullYear();
    month = String(yesterday.getMonth() + 1).padStart(2, '0');
    day = String(yesterday.getDate()).padStart(2, '0');
    return `${year}${month}${day}`
}

export {set};