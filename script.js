let searchBtn=document.getElementById("search-button");
let countryinput=document.getElementById("country-name");
searchBtn.addEventListener("click",()=>{
    
    let countryname=countryinput.value;
    while( countryname.at(-1) == ' ' ){
        countryname = countryname.substring(0,countryname.length-1)
    }
    while( countryname.at(0) == ' ' ){
        countryname = countryname.substring(1,countryname.length)
    }

    let finalURL=`https://restcountries.com/v3.1/name/${countryname}?fullText=true`
    console.log(finalURL);
    fetch(finalURL)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
       setCountry(data);
    }).catch(()=>{
        if (countryname.length==0) {
            result.innerHTML=`<h4>The input filled cannot be empty</h4>`
        }
        
        else{
            result.innerHTML=`<h4>Please enter valid country name</h4>`
        }
    })

    function setCountry(countrydata) {
        result.innerHTML=`<img src="${countrydata[0].flags.svg}" class="flag-image">
        <h2>${countrydata[0].name.common}</h2>
        <div class="details">
        <div class="data-details">
        <h3>Continent:</h3>
        <span>${countrydata[0].continents[0]}</span>
        </div>
        <div class="data-details">
        <h3>Capital:</h3>
        <span>${countrydata[0].capital[0]}</span>
        </div>
        <div class="data-details">
        <h3>Population:</h3>
        <span>${countrydata[0].population}</span>
        </div>
        <div class="data-details">
        <h3>Currencey:</h3>
        <span>${countrydata[0].currencies[ Object.keys(countrydata[0].currencies)].name}-${Object.keys(countrydata[0].currencies)[0]}(${countrydata[0].currencies[ Object.keys(countrydata[0].currencies)].symbol})</span>
        </div>
        <div class="data-details">
        <h3>Languages:<h3>
        <span>${Object.values(countrydata[0].languages).toString().split(",").join(",")}</span>
        </div>
        </div>
        `
    }
    
});

