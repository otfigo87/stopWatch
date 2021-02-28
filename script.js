const secondsShowed = document.getElementById("seconds");
const tensShowed = document.getElementById("tens");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let seconds = 00;
let tens = 00;
let interval;

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);

function timer(){
    tens++;
    if ( tens < 10){
        tensShowed.innerHTML = "0" + tens;
    } else if ( tens < 100) {
        tensShowed.innerHTML = tens;
    } else {
        seconds++;
        tens = 00;
        if (seconds < 10){
        secondsShowed.innerHTML = "0" + seconds;
        } else { secondsShowed.innerHTML = seconds }
    }
    
}

function startTimer(){
    interval = setInterval(timer, 10);
    start.disabled = true;
}

function stopTimer(){
    clearInterval(interval);
    start.disabled = false;
}

function resetTimer(){
    clearInterval(interval);
    tens = 00;
    seconds = 00;
    secondsShowed.innerHTML = "00";
    tensShowed.innerHTML = "00";
    start.disabled = false;
}