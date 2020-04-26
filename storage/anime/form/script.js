/* 
 * insert information
 */
let inf = {
    AnimeName: '*Tên Anime*',
    fansubname: "",
    linkDownload: "",

}
//server1 ep switcher
let ep = [
    '<a class="button" href="S1E1.html">ep1</a> ',
    '<a class="button" href="S1E2.html">ep2</a> ',
    '<a class="button" href="S1E3.html">ep3</a> ',
    '<a class="button" href="S1E4.html">ep4</a> ',
    '<a class="button" href="S1E5.html">ep5</a> ',
    '<a class="button" href="S1E6.html">ep6</a> ',
    '<a class="button" href="S1E7.html">ep7</a> ',
    '<a class="button" href="S1E8.html">ep8</a> ',
    '<a class="button" href="S1E9.html">ep9</a> ',
    '<a class="button" href="S1E10.html">ep10</a> ',
    '<a class="button" href="S1E11.html">ep11</a> ',
    '<a class="button" href="S1E12.html">ep12</a> ',
    '<a class="button" href="S1E13.html">ep13</a> ',
    '<a class="button" href="S1E14.html">ep14</a> ',
    '<a class="button" href="S1E15.html">ep15</a> ',
    '<a class="button" href="S1E16.html">ep16</a> ',
    '<a class="button" href="S1E17.html">ep17</a> ',
    '<a class="button" href="S1E18.html">ep18</a> ',
    '<a class="button" href="S1E19.html">ep19</a> ',
    '<a class="button" href="S1E20.html">ep20</a> ',
    '<a class="button" href="S1E21.html">ep21</a> ',
    '<a class="button" href="S1E22.html">ep22</a> ',
    '<a class="button" href="S1E23.html">ep23</a> ',
    '<a class="button" href="S1E24.html">ep24</a> ',
];

/* 
 * Hooker
 */
//Anime's info
document.getElementById('ttle').innerHTML = inf.AnimeName;
document.getElementById('fansub').innerHTML = inf.fansubname;
document.getElementById('linkd').innerHTML = '<a href="'+inf.linkDownload+'">LINK</a>'
//server1
document.getElementById('svname1').innerHTML = '*Tên server*:';
document.getElementById('sev1').innerHTML = epcepmenu(12);
//functions
function epcepmenu(N) {
    let i; Epssss = '';
    for(i=0;i<N;i++){
        Epssss = Epssss + ep[i];
    }
    return Epssss;
}

/* 
 *  add
 */
document.getElementById('navi').innerHTML = '<nav style="text-align: center; font-size: 16px; font-weight: bold;"><a class="button" style="border-radius: 14px" href="../../Anime.html">BACK</a></nav>';