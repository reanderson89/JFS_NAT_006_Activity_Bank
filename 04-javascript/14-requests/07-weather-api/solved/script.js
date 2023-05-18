// DOM VARIABLES
const weatherDiv = document.getElementById("weather")
const cityForm = document.getElementById("city-form")

// Step-1: hard code a fetch() request to make sure that I am hitting the correct API endpoint (url that returns specific data), log it to the console
// fetch("https://api.weatherapi.com/v1/current.json?key=46e1df487c204aaea80231816211312&q=Seattle&aqi=no")
// .then(response => {
//     console.log(response)
//     return response.json()
// }).then(weatherData => {
//     // Step-2: Display current weather from city requested on the screen
//     weatherDiv.innerHTML += `<h1>${weatherData.location.name} ${weatherData.location.region}</h1>`
//     weatherDiv.innerHTML += `<h3>${weatherData.current.temp_f}</h3>`
//     weatherDiv.innerHTML += `<h3>${weatherData.current.condition.text}</h3>`
//     weatherDiv.innerHTML += `<img src="${weatherData.current.condition.icon}" alt="${weatherData.current.condition.text}">`
//     console.log(weatherData)
// })

const getWeather = async function(city){
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=46e1df487c204aaea80231816211312&q=${city}&aqi=no`)
    const weatherData = await response.json()
    return weatherData
}

const displayCurrentWeather = async function(city){
    const weatherData = await getWeather(city)

    weatherDiv.innerHTML = `<h1>${weatherData.location.name} ${weatherData.location.region}</h1>`
    weatherDiv.innerHTML += `<h3>${weatherData.current.temp_f}</h3>`
    weatherDiv.innerHTML += `<h3>${weatherData.current.condition.text}</h3>`
    weatherDiv.innerHTML += `<img src="${weatherData.current.condition.icon}" alt="${weatherData.current.condition.text}">`
}

// Step-3: take user input from the html and search for the city requested
cityForm.addEventListener("submit", function(event){
    event.preventDefault()
    const userCity = document.getElementById("city").value
    displayCurrentWeather(userCity)
})






// Step-4: Store searched cities in localStorage
























// {
//     "location": {
//         "name": "London",
//         "region": "City of London, Greater London",
//         "country": "United Kingdom",
//         "lat": 51.52,
//         "lon": -0.11,
//         "tz_id": "Europe/London",
//         "localtime_epoch": 1684424209,
//         "localtime": "2023-05-18 16:36"
//     },
//     "current": {
//         "last_updated_epoch": 1684423800,
//         "last_updated": "2023-05-18 16:30",
//         "temp_c": 20,
//         "temp_f": 68,
//         "is_day": 1,
//         "condition": {
//             "text": "Sunny",
//             "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
//             "code": 1000
//         },
//         "wind_mph": 6.9,
//         "wind_kph": 11.2,
//         "wind_degree": 50,
//         "wind_dir": "NE",
//         "pressure_mb": 1026,
//         "pressure_in": 30.3,
//         "precip_mm": 0.1,
//         "precip_in": 0,
//         "humidity": 40,
//         "cloud": 0,
//         "feelslike_c": 20,
//         "feelslike_f": 68,
//         "vis_km": 10,
//         "vis_miles": 6,
//         "uv": 4,
//         "gust_mph": 9.2,
//         "gust_kph": 14.8
//     }
// }