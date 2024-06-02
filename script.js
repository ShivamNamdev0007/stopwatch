
let displayTime = document.querySelector(".display");
let reset = document.querySelector(".reset");
let play = document.querySelector(".play");
let stop = document.querySelector(".stop");
let timer = null;
let [seconds, minutes, hours] = [0, 0, 0];
play.addEventListener("click", watchStart);
reset.addEventListener("click", watchReset);
stop.addEventListener("click", watchStop);

function updateDisplay() {
    let formattedTime = 
        String(hours).padStart(2, '0') + ":" + 
        String(minutes).padStart(2, '0') + ":" + 
        String(seconds).padStart(2, '0');
    displayTime.innerHTML = formattedTime;
}
function timing() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    updateDisplay();
}
function watchStart() {
    if (timer != null) {
        clearInterval(timer);
    }
    timer = setInterval(timing, 1000);
}
function watchStop() {
    if (timer != null) {
        clearInterval(timer);
        timer = null;
    }
}
function watchReset() {
    clearInterval(timer);
    timer = null;
    [seconds, minutes, hours] = [0, 0, 0];
    updateDisplay();
}