const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
//此處選取任何有data-skip得button
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

// 此處是作skip 功能<檢查html DOM 裡面data-*
function skip() {
    console.log(this.dataset.skip);
    video.currenTime += parseFloat(this.dataset.skip);
}

//此處要處理音量以及影片播放速度
function handleRangeUpdate() {
    video[this.name] = this.value;
}

//此處最後 調整影片播放條
function handleProgress() {
    const percent = (video.currenTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

//這邊做得事，點擊不論影片或是按鈕都會暫停影片
video.addEventListener("click", togglePlay);
//這個是建立土泡方法，當播放，影片按件圖案會改變 updateButton func
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);
skipButtons.forEach((button) => button.addEventListener("click", skip));
ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) => range.addEventListener("mousemove", handleRangeUpdate));
