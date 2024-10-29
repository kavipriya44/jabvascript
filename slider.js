const slides=document.querySelectorAll(".first img");
let slideindex=0;
let inteerval=null;

document.addEventListener("DOMContentLoaded",initializer);

function initializer()
{
     slides[slideindex].classList.add("displayimage");
     inteerval=setInterval(nxtslide,5000);
     console.log(inteerval);
}
function slideshow(index)
{
    if(index >=slides.length){
        slideindex=0;}
    else if(index<0){
    slideindex =slides.length-1;}


    slides.forEach(slide =>
    {
        slide.classList.remove("displayimage");
    });
    slides[slideindex].classList.add("displayimage");
   
  
    

}
function prevslide()
{
    clearInterval(inteerval);
    slideindex-=1;
    slideshow(slideindex);

}
function nxtslide()
{
  slideindex++;
  slideshow(slideindex);
}