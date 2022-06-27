
const start = document.getElementById('start');
const split = document.getElementById('split');
const _stop = document.getElementById('stop');
const reset = document.getElementById('reset');
let timer = document.getElementById('timer')
let changeHours = document.getElementById('hours');
let changeMinutes = document.getElementById('minutes');
let changeSeconds = document.getElementById('seconds');
let changeTens = document.getElementById('tens');
let hours=00;
let minutes=00;
let seconds=00;
let tens=00;

let _time;
start.addEventListener('click', function(){
    
    clearInterval(_time);
    _time= setInterval(startTimer,10);

});
split.addEventListener('click', function(){

});
_stop.addEventListener('click', function(){
    clearInterval(_time);
});
reset.addEventListener('click', function(){
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

function startTimer(){
    tens++;
    if(tens <10){
        changeTens.innerHTML = "0" + tens;
    }
    if(tens > 9){
        changeTens.innerHTML = tens;
    }
    if(tens > 99){
        seconds++;
        changeSeconds.innerHTML = "0" + seconds;
        tens=0;
        changeTens.innerHTML = "0" + 0;
    }
    if(seconds > 9){
        changeSeconds.innerHTML = seconds;
    }
    if(seconds > 59){
        minutes++;
        changeMinutes.innerHTML = "0" + minutes;
        tens=0;
        seconds=0;
        changeTens.innerHTML = "0" + 0;
        changeSeconds.innerHTML = "0" + 0;
    }
    if(minutes > 9){
        changeMinutes.innerHTML = minutes;
    }
    if(minutes > 59){
        hours++;
        changeHours.innerHTML = "0" + hours;
        tens=0;
        seconds=0;
        minutes=0;
        changeTens.innerHTML = "0" + 0;
        changeSeconds.innerHTML = "0" + 0;
        changeMinutes.innerHTML = "0" + 0;
    }

}