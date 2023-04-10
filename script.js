
let play=document.querySelector('#play');
let replay=document.querySelector('#replay');


let seconds=0;
let minutes=0;
let hours=0;

let leadingSeconds=0;
let leadingMinutes=0;
let leadingHours=0;


function stopWatch()
{

    seconds++;
    if(seconds/60 ===1)
    {
        seconds=0;
        minutes=1;
    }
    if(minutes/60 ===1)
    {
        minutes=0;
        hours=1;
    }

    if(seconds< 10)
    {
        leadingSeconds="0"+ seconds.toString();
    }
    else{
        leadingSeconds=seconds;
    }

    if(minutes< 10)
    {
        leadingMinutes="0"+ minutes.toString();
    }
    else{
        leadingMinutes=minutes;
    }


    if(hours< 10)
    {
        leadingHours="0"+ hours.toString();
    }
    else{
        leadingHours=hours;
    }


    let displayTimer=document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
    

};


let timeInterval=null;
let timerStatus="stopped";

play.addEventListener("click",function()
{
    if(timerStatus==="stopped")
    {
        timeInterval=window.setInterval(stopWatch,1000);
        timerStatus="started";

    }
    else
    {
        window.clearInterval(timeInterval);
        timerStatus="stopped";
    }

});


reset.addEventListener("click",function()
{

    window.clearInterval(timeInterval);
    seconds=0;
    minutes=0;
    hours=0;

    document.getElementById('timer').innerText="00:00:00";

}
);

