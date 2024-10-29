let display=document.getElementById("display");
let starttime=0;
let elapsedtime=0;
let running=false;
let timer=null;

function start()
{
    if(!running)
    {
        starttime=Date.now() - elapsedtime;
        timer=setInterval(update,10);
        running=true;
       
    }
   
}
function stop()
{
   if(running)
   {
    clearInterval(timer);
    elapsedtime=Date.now() - starttime;
    running=false;
   }
}
function reset()
{
    clearInterval(timer);
    starttime=0;
    elapsedtime=0;
    running=false;
    display.textContent="00:00:00:00";

}
function update()
{
    const currentime=Date.now();
    elapsedtime=currentime-starttime;
    let hour= Math.floor(elapsedtime/(1000 * 60 * 60));
    let minute=Math.floor(elapsedtime/(1000*60)%60);
    let second=Math.floor(elapsedtime/1000%60);
    let millisecond=Math.floor(elapsedtime % 1000 / 10);

    hour=String(hour).padStart(2,"0");
    minute=String(minute).padStart(2,"0");
    second=String(second).padStart(2,"0");
    millisecond=String(millisecond).padStart(2,"0");

    display.textContent=`${hour}:${minute}:${second}:${millisecond}`;
}