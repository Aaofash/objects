const _start= document.getElementById('start');
const _stop= document.getElementById('stop');
const _reset= document.getElementById('reset');
let changeHours= document.getElementById('hours');
let changeMinutes= document.getElementById('minutes');
let changeSeconds= document.getElementById('seconds');
let changeTens= document.getElementById('tens');
let hours=00;
let minutes=00;
let seconds=00;
let tens=00;
let _time;
function startTimer() {
    tens++;
    if (tens < 10) {
        changeTens.innerHTML = '0' + tens;
    }
    if (tens > 9) {
        changeTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        changeSeconds.innerHTML = '0' + seconds;
        tens = 00;
        changeTens.innerHTML = '0' + tens;
    }
    if (seconds > 9) {
        changeSeconds.innerHTML = seconds;
    }
    if (seconds > 59) {
        minutes++;
        changeMinutes.innerHTML = '0' + minutes;
        seconds = 00;
        changeSeconds.innerHTML = '0' + seconds;
    }
    if (minutes > 9) {
        changeMinutes.innerHTML = minutes;
    }
    if (minutes > 59){
        hours++;
        changeHours.innerHTML = '0' + hours;
        minutes= 00;
        changeMinutes.innerHTML = '0' + minutes;
    }
    if (hours > 9) {
        changeHours.innerHTML = hours;
    }
}

_start.addEventListener('click', function() {
    clearInterval(_time);
    _time= setInterval(startTimer,10);
});
_stop.addEventListener('click', function() {
    clearInterval(_time);
});
_reset.addEventListener('click', function() {
    clearInterval(_time);
    tens= "00";
    seconds= "00";
    hours= "00";
    minutes= "00";
    changeHours.innerHTML=hours;
    changeMinutes.innerHTML=minutes;
    changeSeconds.innerHTML=seconds;
    changeTens.innerHTML=tens;
});