var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;
var hourHeading = document.getElementById('hour');
var minHeading = document.getElementById('min');
var secHeading = document.getElementById('sec');
var msecHeading = document.getElementById('msec');
var interval;

function timer() {
    msec++
    msecHeading.innerHTML = "<h2>"+msec+"</h2>";
    if(msec >= 100) {
        sec++
        secHeading.innerHTML = "<h2>"+sec+"</h2>"
        msec = 0
    }
    else if (sec >= 60) {
        min++
        sec = 0
        minHeading.innerHTML = "<h2>"+min+"</h2>"
    }
    else if (min >= 60) {
        hour++
        min = 0
        hourHeading.innerHTML = "<h2>"+hour+"</h2>"
    }
}

function start() {
    interval = setInterval(timer, 10)
}
function stop() {
    clearInterval(interval);
}
function reset() {
    hour = 0;
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = "<h2>"+min+"</h2>"
    hourHeading.innerHTML = "<h2>"+hour+"</h2>"
    secHeading.innerHTML = "<h2>"+sec+"</h2>"
    msecHeading.innerHTML = "<h2>"+msec+"</h2>";
    stop()
}