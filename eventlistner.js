const divs=document.getElementById("one");
const b=document.getElementById("two");
const main=document.getElementById("main");
const totalmove=10;
const hide=document.getElementById("hide");
let x=0;
let y=0;

b.addEventListener("mouseover",event=>
{
    divs.style.backgroundColor="yellow";
    divs.textContent="hiiiii";
}
)

b.addEventListener("mouseout",event=>
{
    divs.style.backgroundColor="lightblue";
    divs.textContent="click me😊";
}
)
b.addEventListener("click",event=>
    {
        divs.style.backgroundColor="green";
        divs.textContent="😊";
    }
    );
    document.addEventListener("keyup",event=>
        {
            divs.textContent="😊";
        }
        
        );

document.addEventListener("keydown",event=>
        {
            divs.textContent="☹️";
        }
        
        );
document.addEventListener("keydown",event=>
{
   if (event.key.startsWith("Arrow"))
   {
    switch(event.key)
    {
        case "ArrowUp":
            y-=totalmove;
            break;
        case "ArrowDown":
           y+=totalmove;
           break;
        case"ArrowLeft":
          x-=totalmove;
          break;
       case "ArrowRight":
           x+=totalmove;
           break;

    }
    main.style.top= `${y}px`;
    main.style.left= `${x}px`;

   }
}
);

// hide.addEventListener("click",event=>
// {
//      if(main.style.display==="none")
//        {main.style.display="block";
//     hide.textContent="hide";}

//     else    
//    { main.style.display="none";
//     hide.textContent="show";}
// }
// );
hide.addEventListener("click",event=>
    {
         if(main.style.visibility==="hidden")
           {main.style.visibility="visible";
        hide.textContent="hide";}
    
        else    
       { main.style.visibility="hidden";
        hide.textContent="show";}
    }
    );



