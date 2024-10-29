const result=document.getElementById("display");
const append=(input)=>
{
    if(result.value!=0)
     result.value +=input;
    else
    result.value=input;
}
const  calculate=()=>
{
    try
    {
        result.value=eval(result.value);

    }
    catch(error)
    {
       result.value="invalid input";
    }
}
const clear1=()=>
{
     result.value =0;
}