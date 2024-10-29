const choices=["ROCK","PAPER","SCISSOR"];
let playerresult=document.getElementById("playerresult");
let computerresult=document.getElementById("computerresult");
let overresult=document.getElementById("overresult");
let ps=0;
let cs=0;
let game=(playerchoice)=>
{
    let result='';
    let computerchoice=choices[Math.floor(Math.random()*3)];
    console.log(computerchoice);
    console.log(playerchoice);
    const playerscore=document.getElementById("playerscore");
    const computerscore=document.getElementById("computerscore");

    


    if(playerchoice === computerchoice)
        result="It is tie";
    else{

        switch(playerchoice)
        {
            case "ROCK":
                result= (computerchoice === "SCISSOR") ? "YOU WIN!🤩":"YOU LOSE😑";
                break;
            case "PAPER":
                result=  (computerchoice === "ROCK") ? "YOU WIN!🤩":"YOU LOSE😑";
                break;
            case "SCISSOR":
                result=(computerchoice === "PAPER") ? "YOU WIN!🤩":"YOU LOSE😑";
                break;

        }
        if(result==="YOU WIN!🤩")
        ps++;
        else
        cs++;
    }
    
    playerresult.textContent=`PLAYER:${playerchoice}`;
        computerresult.textContent=`COMPUTR:${computerchoice}` ;
        overresult.textContent=result;
        playerscore.textContent=`PLAYERSCORE:${ps}`;
        computerscore.textContent=`COMPUTRSCORE:${cs}`;
        overresult.classList.remove("greencolor","redcolor");
        if(result==="YOU WIN!🤩")
        overresult.classList.add("greencolor");
        if(result==="YOU LOSE😑")
        overresult.classList.add("redcolor");




}