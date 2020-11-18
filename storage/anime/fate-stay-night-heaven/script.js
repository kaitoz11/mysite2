/* 
 * insert information
 */
let inf = {
    AnimeName: 'Fate Stay Night - Heaven Feel',
    fansubname: "VNFS",
    linkDownload: "https://vnfs-team.com/",
    episodeLim: 3,
    embedLink: [
        '<div itemscope itemtype="https://schema.org/VideoObject"><meta itemprop="uploadDate" content="Wed Nov 18 2020 22:15:53 GMT+0700 (Indochina Time)"/><meta itemprop="name" content="[Knfs] Fate／stay Night Heavens Feel I - Presage Flower [Bdrip][hardsub]"/><meta itemprop="duration" content="PT2H35.55S" /><meta itemprop="thumbnailUrl" content="https://content.jwplatform.com/thumbs/6ZBuVtMl-1920.jpg"/><meta itemprop="contentUrl" content="https://content.jwplatform.com/videos/6ZBuVtMl-eBgucp0M.mp4"/><div style="position:relative; overflow:hidden; padding-bottom:56.25%"> <iframe src="https://cdn.jwplayer.com/players/6ZBuVtMl-hyiwVmuN.html" width="100%" height="100%" frameborder="0" scrolling="auto" title="[Knfs] Fate／stay Night Heavens Feel I - Presage Flower [Bdrip][hardsub]" style="position:absolute;" allowfullscreen></iframe> </div></div>',
        '<div itemscope itemtype="https://schema.org/VideoObject"><meta itemprop="uploadDate" content="Wed Nov 18 2020 22:18:54 GMT+0700 (Indochina Time)"/><meta itemprop="name" content="[Knfs] Fate ⁄ Stay Night Heaven&#x27;s Feel Ii - Lost Butterfly [Bdrip][hardsub]"/><meta itemprop="duration" content="PT1H57M8.1S" /><meta itemprop="thumbnailUrl" content="https://content.jwplatform.com/thumbs/q9QhgGAu-1920.jpg"/><meta itemprop="contentUrl" content="https://content.jwplatform.com/videos/q9QhgGAu-eBgucp0M.mp4"/><div style="position:relative; overflow:hidden; padding-bottom:56.25%"> <iframe src="https://cdn.jwplayer.com/players/q9QhgGAu-hyiwVmuN.html" width="100%" height="100%" frameborder="0" scrolling="auto" title="[Knfs] Fate ⁄ Stay Night Heaven&#x27;s Feel Ii - Lost Butterfly [Bdrip][hardsub]" style="position:absolute;" allowfullscreen></iframe> </div></div>',
        '<div itemscope itemtype="https://schema.org/VideoObject"><meta itemprop="uploadDate" content="Wed Nov 18 2020 23:48:38 GMT+0700 (Indochina Time)"/><meta itemprop="name" content="【学力テスト】夏色まつりのIq調査（文系編）"/><meta itemprop="duration" content="PT59M6.9S" /><meta itemprop="thumbnailUrl" content="https://content.jwplatform.com/thumbs/qWTI8RtI-960.jpg"/><meta itemprop="contentUrl" content="https://content.jwplatform.com/videos/qWTI8RtI-52ipAGGS.mp4"/><div style="position:relative; overflow:hidden; padding-bottom:56.25%"> <iframe src="https://cdn.jwplayer.com/players/qWTI8RtI-hyiwVmuN.html" width="100%" height="100%" frameborder="0" scrolling="auto" title="【学力テスト】夏色まつりのIq調査（文系編）" style="position:absolute;" allowfullscreen></iframe> </div></div>'
    ]
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
document.getElementById('svname1').innerHTML = 'Server 1:';
document.getElementById('sev1').innerHTML = epcepmenu(inf.episodeLim);
//functions
function epcepmenu(N) {
    let i, Epssss = '', eptmp=0;
    for(i=0;i<N;i++){
        eptmp++;
        Epssss += '<span class="button" onclick="toEpisode('+i+')">ep'+eptmp+'</span> ';
    }
    return Epssss;
}
function toEpisode(ep){
    document.getElementById('vid').innerHTML = inf.embedLink[ep];
    document.getElementById('epnum').innerHTML = 'Tập '+(ep+1);
}
/* 
 *  add
 */
document.getElementById('navi').innerHTML = '<nav style="text-align: center; font-size: 16px; font-weight: bold;"><a class="button" style="border-radius: 14px" href="../../Anime.html">BACK</a></nav>';