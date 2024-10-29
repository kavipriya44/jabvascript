async function fetchdata()
{


     try{
          const pokimonname=document.getElementById("pokimonname").value.toLowerCase();

          let response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokimonname}`);

          if(!response.ok)
            console.error("no data found")
          else
          {
                const data= await response.json();

               const pokemonlink=data.sprites.front_default;
               const pokimonimage=document.getElementById("pokimonimage");
               pokimonimage.src=pokemonlink;
               pokimonimage.style.display="block";
          }
     }
     catch(error)
     {
     console.error(error)}
     
}
