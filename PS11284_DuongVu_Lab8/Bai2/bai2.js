var playPauseBtn = document.querySelector('.play-pause-btn');
var openBtn = document.querySelector('.redirect-btn');

var clock = null;

function time() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var clockElement = document.querySelector('.time');
    clockElement.innerHTML = `<p class="clock">${hour}:${minute}:${second}</p>`;
}

function playPause() {
    console.log(clock)
    if (clock == null) {
        clock = setInterval('time()', 1000);
    } else {
        clearInterval(clock);
        clock = null;
    }

    if (playPauseBtn.innerHTML == "Pause") {
        playPauseBtn.innerHTML = 'Play'
    } else {
        playPauseBtn.innerHTML = 'Pause'
    }
}

clock = setInterval('time()', 1000);