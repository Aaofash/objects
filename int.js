const _start= document.getElementById('start');
const _split= document.getElementById('split');
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
let changeHours1= document.getElementById('hours1');
let changeMinutes1= document.getElementById('minutes1');
let changeSeconds1= document.getElementById('seconds1');
let changeTens1= document.getElementById('tens1');
let hours1=00;
let minutes1=00;
let seconds1=00;
let tens1=00;
let _time1;
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
function startTimer1() {
    tens1++;
    if (tens1 < 10) {
        changeTens1.innerHTML = '0' + tens1;
    }
    if (tens1 > 9) {
        changeTens1.innerHTML = tens1;
    }
    if (tens1 > 99) {
        seconds1++;
        changeSeconds1.innerHTML = '0' + seconds1;
        tens1 = 00;
        changeTens1.innerHTML = '0' + tens1;
    }
    if (seconds1 > 9) {
        changeSeconds1.innerHTML = seconds1;
    }
    if (seconds1 > 59) {
        minutes1++;
        changeMinutes1.innerHTML = '0' + minutes1;
        seconds1 = 00;
        changeSeconds1.innerHTML = '0' + seconds1;
    }
    if (minutes1> 9) {
        changeMinutes1.innerHTML = minutes1;
    }
    if (minutes1 > 59){
        hours1++;
        changeHours1.innerHTML = '0' + hours1;
        minutes1= 00;
        changeMinutes1.innerHTML = '0' + minutes1;
    }
    if (hours1 > 9) {
        changeHours1.innerHTML = hours1;
    }
}

_start.addEventListener('click', function() {
    clearInterval(_time);
    _time= setInterval(startTimer,10);
});
_split.addEventListener('click', function() {
    clearInterval(_time);
    _time1= setInterval(startTimer1,10);
});
_stop.addEventListener('click', function() {
    clearInterval(_time);
    clearInterval(_time1);
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

    clearInterval(_time1);
    tens1= "00";
    seconds1= "00";
    hours1= "00";
    minutes1= "00";
    changeHours1.innerHTML=hours1;
    changeMinutes1.innerHTML=minutes1;
    changeSeconds1.innerHTML=seconds;
    changeTens1.innerHTML=tens1;
    
});