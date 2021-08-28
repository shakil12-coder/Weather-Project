const cityName=document.getElementById('cityName');

const submitBtn=document.getElementById('submitBtn');

const city_name=document.getElementById('city_name');

const temp=document.getElementById('temp');



const temp_status=document.getElementById('temp_status')



const getInfo=async (event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    if(cityVal===""){
        city_name.innerText="Plz write the name before search";
  
        temp_status.innerHTML="";
        temp.innerHTML="";
    }else{
     try {
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=44d1863c3d699eab9ef3f7d6e92fda86`
        const response= await fetch(url);
        const data=await response.json();
        const arrData=[data];

        temp.innerText=arrData[0].main.temp;
        const tempMood=arrData[0].weather[0].main;
        city_name.innerText=`${arrData[0].name} ${arrData[0].sys.country}`;

        // condition to check sunny or cloudy
        if (tempMood == "Clear") {
            temp_status.innerHTML =
                "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood == "Clouds") {
            temp_status.innerHTML =
                "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood == "Rain") {
            temp_status.innerHTML =
                "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
            temp_status.innerHTML =
                "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
            }
           

     
     } catch {
        city_name.innerText=`please enter the city name properly`;
    
        temp_status.innerHTML="";
        temp.innerHTML="";
       
     }
     

    }
}

submitBtn.addEventListener('click',getInfo);