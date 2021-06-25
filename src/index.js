
/*
 * :file description: 
 * :name: /webRTC/src/index.js
 * :author: 张德志
 * :copyright: (c) 2021, Tungee
 * :date created: 2021-06-25 20:35:28
 * :last editor: 张德志
 * :date last edited: 2021-06-25 21:13:35
 */
(async function(){
    const video = document.querySelector('video');
    video.srcObject = await navigator.mediaDevices.getUserMedia({
        video:true
    })
})()