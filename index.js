//播放声音
(async function() {
    // let devices = await navigator.mediaDevices.enumerateDevices();
    // console.log(devices);
    let strem = await navigator.mediaDevices.getUserMedia({video:false,audio:true});
    document.querySelector("audio").srcObject = strem;
})();

