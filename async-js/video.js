const video = document.getElementById("video");
const playPause = document.getElementById("play-pause");

const forward = document.getElementById("forward");

video.playbackRate = 4 ;

forward.addEventListener("click", () => {
    video.currentTime += 2 ;
})

playPause.addEventListener("click", () => {
    const currentValue = playPause.innerText ;
    if(currentValue === "play"){
        video.play();
    }
    else {
        video.pause();
    }
    playPause.innerText = currentValue === "play" ? "pause" : "play"
});
