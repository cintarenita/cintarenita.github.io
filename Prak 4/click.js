let sunflower = document.querySelector(".sunflower");
let audio = document.createElement("audio");
audio.src ="assets/jisoo.mp4";

document.body.appendChild(gif);
sunflower.onmouseover = () => {
    audio.play();
}
sunflower.onmouseout = () => {
    audio.pause();
}