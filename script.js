const ctrlBtn = document.querySelector(".ctrlBtn");

let progress = document.querySelector(".progress");
let song = document.querySelector(".song");
let ctrl = document.querySelector(".ctrl");
let ctrlForward = document.querySelector(".ctrl-forward");
let ctrlBackward = document.querySelector(".ctrl-backward");
let timeForward = 10;

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function playPause() {
  if (ctrl.classList.contains("fa-pause")) {
    song.pause();
    ctrl.classList.remove("fa-pause");
    ctrl.classList.add("fa-play");
  } else {
    song.play();
    ctrl.classList.add("fa-pause");
    ctrl.classList.remove("fa-play");
  }
}

function songPlay() {
  if (song.play()) {
    setInterval(() => {
      progress.value = song.currentTime;
    }, 500);
  }
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  ctrl.classList.add("fa-pause");
  ctrl.classList.remove("fa-play");
};

ctrlBtn.addEventListener("click", () => {
  playPause();
});

document.addEventListener('keydown', (event)=> {
  if (event.key === "Enter") {
    playPause();
  }
})

/* 

  function forWard() {
  if (song.currentTime === '') {
    setInterval(()=> {
      timeForward++
    }, 10)
  }
}

ctrlForward.onclick = (forWard)=> {
  setInterval(()=> {
    playPause();
  }, 10)
};

*/