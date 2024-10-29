let cf=document.getElementById("cf");
let fc=document.getElementById("fc"); 
let r=document.getElementById("r");
let temp=document.getElementById("temp");
let tem;

function convert()
{
    if(cf.checked)
    {
        tem = Number(temp.value);
       tem = tem * 9 / 5 + 32;
       r.textContent=tem + "°f"
    }
    else if(fc.checked)
        {
            tem=Number(temp.value);
           tem=tem*9  / 5 + 32;
           r.textContent=tem + "°c"
        }
    else{
            r.textContent="select a unit"
        }
}

