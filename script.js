vid = document.querySelector("#vid");

function playVideo() {
    vid.play();
}
function pauseVideo() {
    vid.pause ();
}
function stopVideo() {
    vid.load();
}
function startoverVideo() {
    vid.currentTime = 0;
}