const weatherform=document.querySelector(".first");
const city=document.querySelector(".city");

const main=document.querySelector(".main");
const api= "8b4a6c2c9b67322282292f6213f8ae35";


weatherform.addEventListener("submit",async event=>{
    event.preventDefault();
    const cityy=city.value;
    if(cityy)
    {
          try
          {
                  const data=await getweatherinfo(cityy);
                  displayweatherinfo(data);
          }
          catch(error)
          {
            console.log(error);
            displayerror(error);
          }
    }
    else
    displayerror("Enter the city");

}
)

async function getweatherinfo(cityy)
{
   const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${cityy}&appid=${api}`;
   const response = await fetch(apiurl);
   console.log(response);
   if(!response.ok)
    throw new error("could not fetch weather data");
  
   return await response.json();

}
 function displayweatherinfo(data)
{
    console.log(data);
    const {name : city,
        main: {temp ,humidity},
        weather:[{description,id}]}=data;
        main.textContent="";
        main.style.display="flex";


    const cityname=document.createElement("h1");
    const temperature=document.createElement("p");
    const humidityy=document.createElement("p");
    const descriptionn=document.createElement("p");
    const emoji=document.createElement("p");

    cityname.textContent=city;
    temperature.textContent=`${((temp -273.15)*(9/5)+32).toFixed(1)}°F`;
    humidityy.textContent=`Humidity : ${humidity}`;
    descriptionn.textContent=description;
    emoji.textContent=getweatheremoji(id);



    cityname.classList.add("cityy");
    temperature.classList.add("temperature");
    humidityy.classList.add("humidity");
    descriptionn.classList.add("description");
    emoji.classList.add("emoji");

    main.appendChild(cityname);
    main.appendChild(temperature);
    main.appendChild(humidityy);
    main.appendChild(descriptionn);
    main.appendChild(emoji);
    

}
function getweatheremoji(id)
{
    switch(true)
    {
        case (id>=200  && id<300):
        return "🌩️";
        case (id>=300  && id<400):
        return "⛈️";
        case (id>=500  && id<600):
        return "🌧️";
        case (id>=600  && id<700):
        return "☁️";
        case (id>=700  && id<810):
        return "☀️";
        default: 
        return "❓"
    }
     
}

function displayerror(message)
{
    const error=document.createElement("p");
    error.textContent=message;
    error.classList.add("error");
    main.style.display="flex";
    main.appendChild(error)

    
}




