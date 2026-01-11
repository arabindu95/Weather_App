const button = document.getElementById("search-button")
const input = document.getElementById("input")

const cityName = document.getElementById("location-name")
const cityTime = document.getElementById("location-time")
const cityTemp = document.getElementById("location-temp")
const myname = document.getElementById("aro")

cityName.style.fontWeight = "bold";
cityTime.style.fontWeight = "bold";
cityTemp.style.fontWeight = "bold";


document.getElementById("location-name").style.fontSize = "20px";
document.getElementById("location-name").style.color = "blue";
document.getElementById("location-time").style.fontSize = "20px";
document.getElementById("location-temp").style.fontSize = "20px";
document.getElementById("aro").style.color = "blue";


async function getData(cityname){
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=ec3a34e9ab80439e89c151318250502&q=${cityname}&aqi=yes`
        );
        return await promise.json();
    }

button.addEventListener("click",async()=>{
    let value = input.value;
    let result = await getData(value);

    if(value ===""){
        alert("please enter a valid location")
    }

    cityName.innerText=`City-Name: ${result.location.name}`
    cityTime.innerText=`City-Time: ${result.location.localtime}`  
    cityTemp.innerText=`City-Temp: ${result.current.temp_c}`
    myname.innerText= `Arabindu Chakraborty`

})
