
// let count=0;
// const one= document.getElementById("one");
   

// document.getElementById("ib").onclick=function()
// {
//     count=count+1;
//     one.textContent=count;
// }
// document.getElementById("rb").onclick=function()
// {
//     count=0;
//     one.textContent=count;
// }
// let decrease=()=>{
//     count=count-1;
//     one.textContent=count;
// } 

const sub=document.getElementById("sub");
const visa=document.getElementById("visa");
const master=document.getElementById("master");
const paypal=document.getElementById("paypal");
const submit=document.getElementById("submit");
const subr=document.getElementById("subr");
const payr=document.getElementById("payr");


submit.onclick=function()
{
    if(sub.checked)
   subr.textContent=`you r subscribed`;
   else
   subr.textContent=`you r not subcribed`;
  if(visa.checked)
    payr.textContent=`y payed on visa mode`;
  else if(master.checked)
    payr.textContent=`y payed on master mode`;
 else 
 payr.textContent=`y payed on paypal mode`;


   
}