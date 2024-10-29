
let rollnumber=document.getElementById("rollnumber");
let diceresult=document.getElementById("diceresult");
let diceimage=document.getElementById("diceimage");
let values=[];
let image=[];
function rolldice()
{
    for(let i=0;i<rollnumber.value;i++)
    {
       const value=Math.floor(Math.random()*6)+1;
       console.log(value);
       values.push(value);
       image.push(`<img src="images/${value}.png">`);

    }
   diceresult.textContent =`dice : ${values.join(', ')}`;
   diceimage.innerHTML = image.join('  ');
}