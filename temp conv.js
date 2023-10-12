// script.js
const result1 = document.querySelector("#result1");
const result2 = document.querySelector("#result2");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  degree.value = "";
  celsiusElem.innerHTML = "";
});

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelsius();
});

function convertToCelsius() {
  let inputValue = degree.value;

if (tempType.value === "fahrenheit") {
    const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
    const FahrenheitToKelvin =FahrenheitToCelsius + 273.15;
    result1.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;c`;
    result2.innerHTML = `${FahrenheitToKelvin.toFixed(3)} &deg;k`;
  } else if (tempType.value === "kelvin") {
    const KelvinToCelsius = inputValue - 273.15;
    const KelvinToFahrenheit=(9/5)*(inputValue - 273) + 32
    result1.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;c`;
    result2.innerHTML = `${KelvinToFahrenheit.toFixed(3)} &deg;F`;

  } else if (tempType.value === "celsius") {
    const CelciustoKelvin= (inputValue + 273.15);
    const CelciustoFahrenheit = (inputValue * 9/5) + 32;
    result1.innerHTML = `${CelciustoFahrenheit.toFixed(3)} &deg;F`;
    result2.innerHTML=`${CelciustoKelvin.toFixed(3)} &deg;k`;

  }
}