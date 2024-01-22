const stopwatch = document.getElementById('stopwatch');
const playPauseButton = document.getElementById('play-pause');
const secondSphere = document.getElementById('seconds-sphere');

let stopwatchInterval;
let runningTime = 0;

const playPause = () => {
  const isPaused = !playPauseButton.classList.contains('running');
  if (isPaused) {
    playPauseButton.classList.add('running');
    start();
  } else {
    playPauseButton.classList.remove('running');
    pause();
  }
}

const pause = () => {

}


const start = () => {
  secondsSphere.style.animation = 'rotacion 60s linear infinite';
  let startTime = date.now() - runningTime;
  secondsSphere.style.animationPlayState = 'running';
  stopwatchInterval = setInterval( () => {
    runningTime = date.now() - startTime;
    stopwatch.textContent = calculateTime(runningTime);
  },1000)
}