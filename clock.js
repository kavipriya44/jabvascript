function run()
{
    const date=new Date();
    let hour=date.getHours();
    hour =hour%12 || 12;
    hour=date.getHours().toString().padStart(2,0);
    const val= hour>12 ? "PM" :"AM";
    const min=date.getMinutes().toString().padStart(2,0); 
    const sec=date.getSeconds().toString().padStart(2,0);
    const time=`⏱️${hour}:${min}:${sec} ${val}`;
    document.getElementById("run").textContent=time;
}
run();
setInterval(run,1000);