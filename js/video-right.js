const videoRight = document.querySelector('.video-right');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play & pause video

function toggleVideoStatus() {
  if (videoRight.paused) {
    videoRight.play();
  } else {
    videoRight.pause();
  }
}

// update play/pause icon
function updatePlayIcon() {
  if (videoRight.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

// Update progress & timestamp
function updateProgress() {
  progress.value = (videoRight.currentTime / video.duration) * 100;

  // Get the minutes
  let mins = Math.floor(videoRight.currentTime / 60);
  if(mins < videoRight.duration){
    mins = '0' + String(mins);
  }

  // Get Seconds
  let secs = Math.floor(videoRight.currentTime % 60);
  if(secs < videoRight.duration){
    secs = '0' + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

// Set video time to progress
function setVideoProgress() {
  videoRight.currentTime = (+progress.value * videoRight.duration) / 100;
}

// Stop video
function stopVideo() {
  videoRight.currentTime = 0;
  videoRight.pause();
}

// Event listeners
videoRight.addEventListener('click', toggleVideoStatus);
videoRight.addEventListener('pause', updatePlayIcon);
videoRight.addEventListener('play', updatePlayIcon);
videoRight.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
