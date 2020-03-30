function  epch(i){
    let prin = "";
    switch(i){
        case 1:
            prin = '<div itemscope itemtype="https://schema.org/VideoObject"><meta itemprop="uploadDate" content="Mon Mar 23 2020 12:28:10 GMT+0900 (Japan Standard Time)"/><meta itemprop="name" content="Aikotoba"/><meta itemprop="duration" content="PT1M45.094S" /><meta itemprop="thumbnailUrl" content="https://content.jwplatform.com/thumbs/Le5JRHQO-1920.jpg"/><meta itemprop="contentUrl" content="https://content.jwplatform.com/videos/Le5JRHQO-502glJRt.mp4"/><script src="https://cdn.jwplayer.com/players/Le5JRHQO-RmQWQyLb.js"></script></div>';
            break;
        case 2:
            prin = '<div itemscope itemtype="https://schema.org/VideoObject"><meta itemprop="uploadDate" content="Mon Mar 23 2020 12:28:09 GMT+0900 (Japan Standard Time)"/><meta itemprop="name" content="Wrong-as-i-expected"/><meta itemprop="duration" content="PT4M30.851S" /><meta itemprop="thumbnailUrl" content="https://content.jwplatform.com/thumbs/uZTbuZqr-1280.jpg"/><meta itemprop="contentUrl" content="https://content.jwplatform.com/videos/uZTbuZqr-3MW98kcz.mp4"/><script src="https://cdn.jwplayer.com/players/uZTbuZqr-RmQWQyLb.js"></script></div>';
            break;
        case 3:
            prin = '<div itemscope itemtype="https://schema.org/VideoObject"><meta itemprop="uploadDate" content="Mon Mar 23 2020 12:28:08 GMT+0900 (Japan Standard Time)"/><meta itemprop="name" content="Osu! Ngnl"/><meta itemprop="duration" content="PT1M38.349S" /><meta itemprop="thumbnailUrl" content="https://content.jwplatform.com/thumbs/NF1dArub-1920.jpg"/><meta itemprop="contentUrl" content="https://content.jwplatform.com/videos/NF1dArub-502glJRt.mp4"/><script src="https://cdn.jwplayer.com/players/NF1dArub-RmQWQyLb.js"></script></div>';
            break;
        case 4:
            prin = '<div itemscope itemtype="https://schema.org/VideoObject"><meta itemprop="uploadDate" content="Mon Mar 23 2020 12:28:07 GMT+0900 (Japan Standard Time)"/><meta itemprop="name" content="Chiisana"/><meta itemprop="duration" content="PT4M39.583S" /><meta itemprop="thumbnailUrl" content="https://content.jwplatform.com/thumbs/uyEwFWOW-1280.jpg"/><meta itemprop="contentUrl" content="https://content.jwplatform.com/videos/uyEwFWOW-3MW98kcz.mp4"/><script src="https://cdn.jwplayer.com/players/uyEwFWOW-RmQWQyLb.js"></script></div>';
            break;
        case 5:
            prin = '<div itemscope itemtype="https://schema.org/VideoObject"><meta itemprop="uploadDate" content="Sun Mar 22 2020 17:29:07 GMT+0900 (Japan Standard Time)"/><meta itemprop="name" content="A Thousand Miles"/><meta itemprop="duration" content="PT4M2.138S" /><meta itemprop="thumbnailUrl" content="https://content.jwplatform.com/thumbs/LzSne16p-1920.jpg"/><meta itemprop="contentUrl" content="https://content.jwplatform.com/videos/LzSne16p-502glJRt.mp4"/><script src="https://cdn.jwplayer.com/players/LzSne16p-RmQWQyLb.js"></script></div>';
            break;
    }
    document.getElementById("vid").innerHTML = prin;
}