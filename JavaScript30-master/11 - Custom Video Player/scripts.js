const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

//此處設定目標物播放問題
function togglePlay() {
    const method = video.paused ? "play" : "pause";
    video[method]();
}

//此處再做得是當播放影片，按鍵得圖示會跳轉
function updateButton() {
    const icon = this.paused ? "►" : "❚ ❚";
    toggle.textContent = icon;
}



//這邊做得事，點擊不論影片或是按鈕都會暫停影片
video.addEventListener("click", togglePlay);
//這個是建立土泡方法，當播放，影片按件圖案會改變 updateButton func
video.addEventListener("play", togglePlay);
video.addEventListener("pause", togglePlay);

toggle.addEventListener("click", togglePlay);
skipButtons;
