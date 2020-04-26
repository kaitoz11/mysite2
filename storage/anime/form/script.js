/* 
 * insert information
 */
let inf = {
    AnimeName: '*Tên Anime*',
    fansubname: "",
    linkDownload: "",
    episodeLim: 12,

}
/* 
 * Hooker
 */
//Anime's info
document.title = inf.AnimeName;
document.getElementById('ttle').innerHTML = inf.AnimeName;
document.getElementById('fansub').innerHTML = inf.fansubname;
document.getElementById('linkd').innerHTML = '<a href="'+inf.linkDownload+'">LINK</a>'
//server1
document.getElementById('svname1').innerHTML = '*Tên server*:';
document.getElementById('sev1').innerHTML = epcepmenu(inf.episodeLim);
//functions
function epcepmenu(N) {
    let i, Epssss = '', eptmp=0;
    for(i=0;i<N;i++){
        eptmp++;
        Epssss = Epssss + '<a class="button" href="S1E'+eptmp+'.html">ep'+eptmp+'</a> ';
    }
    return Epssss;
}

/* 
 *  add
 */
document.getElementById('navi').innerHTML = '<nav style="text-align: center; font-size: 16px; font-weight: bold;"><a class="button" style="border-radius: 14px" href="../../Anime.html">BACK</a></nav>';