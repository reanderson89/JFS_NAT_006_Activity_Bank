// DOM VARIABLES
const weatherDiv = document.getElementById("weather");
const cityForm = document.getElementById("city-form");
const bonusBtnsDiv = document.getElementById("bonus-buttons");

const getWeather = async function (city) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=46e1df487c204aaea80231816211312&q=${city}&aqi=no`
    );
    if (!response.ok) {
      throw new Error(``);
    }
    const weatherData = await response.json();
    return weatherData;
  } catch (err) {
    WeatherError.displayWeatherError();
    console.err(err);
  }
};

const setCurrentCity = function (city) {
  localStorage.setItem("current-city", city);
};

const loadCurrentCity = function () {
  let currentCity = localStorage.getItem("current-city");
  // checks to see if currentCity exists, if it does, display it.
  if (currentCity) {
    displayCurrentWeather(currentCity);
  }
};

const setAllCities = function (city) {
  // We need to JSON.parse() what is coming out of localStorage (what we are getting from localStorage)
  let cityArr = JSON.parse(localStorage.getItem("cities")) || [];
  cityArr.push(city);
  // We need to JSON.stringify what we are putting into localStorage.
  localStorage.setItem("cities", JSON.stringify(cityArr));
};

const loadCityBtns = function () {
  let cityArr = JSON.parse(localStorage.getItem("cities"));
  // checks to see if currentCity exists, if it does, display it.
  if (cityArr) {
    cityArr.forEach((city) => {
      createCityBtn(city);
    });
  }
};

const createCityBtn = function (city) {
  let cityBtn = document.createElement("button");
  cityBtn.textContent = city;
  // the below code successfully adds an event listener to each button that displays the weather to the page when clicked.
  // cityBtn.addEventListener("click", function(){
  //     displayCurrentWeather(cityBtn.innerText)
  // })
  bonusBtnsDiv.append(cityBtn);
};

const displayCurrentWeather = async function (weatherData) {

  weatherDiv.innerHTML = `<h1>${weatherData.location.name} ${weatherData.location.region}</h1>`;
  weatherDiv.innerHTML += `<h3>${weatherData.current.temp_f}</h3>`;
  weatherDiv.innerHTML += `<h3>${weatherData.current.condition.text}</h3>`;
  weatherDiv.innerHTML += `<img src="${weatherData.current.condition.icon}" alt="${weatherData.current.condition.text}">`;
};

class WeatherError extends Error {
  constructor() {
    let name = "Weather Error";
  }
  static displayWeatherError() {
    window.location.href = "https://www.youtube.com/watch?v=xvFZjo5PgG0";
  }
}

// Step-3: take user input from the html and search for the city requested
cityForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  const userCity = document.getElementById("city").value.trim();
  const containsHTML = /<[a-z][\s\S]*>/i.test(userCity);
  if (containsHTML) {
    alert("Please do not enter any HTML as an input");
    return;
  }
  if (userCity) {
    let weatherData = await getWeather(userCity)
    if(weatherData){
      displayCurrentWeather(weatherData);
      setCurrentCity(userCity);
      setAllCities(userCity);
      createCityBtn(userCity);
    }

  }
});

bonusBtnsDiv.addEventListener("click", async function (event) {
  if (event.target.localName === "button") {
    let weatherData = await getWeather(event.target.innerText)
    if(weatherData){
      displayCurrentWeather(weatherData);
    }
  }
});

loadCurrentCity();
loadCityBtns();

// the below was a demo about how local storage stores values and returns them.
// const setAllCities = function(city){
//     let myArr = ["this", "is", "an", "array"]
//     // JSON.stringify() the array before putting it in local storage
//     let stringifiedArr = JSON.stringify(myArr)
//     localStorage.setItem("testArr", stringifiedArr)

//     let arrFromLocal = localStorage.getItem("testArr")
//     // JSON.parse() the array when it comes out of localStorage so that you get it back in a format that you can work with.
//     let parsedArr = JSON.parse(arrFromLocal)
//     console.log(typeof arrFromLocal, arrFromLocal)
//     console.log(typeof parsedArr, parsedArr)

//     // let cityArr = localStorage.getItem("cities") || []
//     // cityArr.push(city)
//     // localStorage.setItem("cities", cityArr)
// }
