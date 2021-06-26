
/*
 * :file description: 
 * :name: /webRTC/src/index.js
 * :author: 张德志
 * :copyright: (c) 2021, Tungee
 * :date created: 2021-06-25 20:35:28
 * :last editor: 张德志
 * :date last edited: 2021-06-26 08:38:58
 */
// (async function(){
//     const video = document.querySelector('video');
//     video.srcObject = await navigator.mediaDevices.getUserMedia({
//         video:true
//     })
// })()
(async function() {
    // let devices = await navigator.mediaDevices.enumerateDevices();
    // console.log(devices);
    let strem = await navigator.mediaDevices.getUserMedia({video:false,audio:true});
    document.querySelector("audio").srcObject = strem;
})();
