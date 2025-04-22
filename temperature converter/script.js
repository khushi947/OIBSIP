function convertTemperature() {
    const tempInput = parseFloat(document.getElementById("tempInput").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const resultArea = document.getElementById("result");
  
    if (isNaN(tempInput)) {
      resultArea.innerText = "Please enter a valid temperature!";
      return;
    }
  
    let result;
  
    // Convert to Celsius first
    let tempInCelsius;
  
    if (fromUnit === "celsius") {
      tempInCelsius = tempInput;
    } else if (fromUnit === "fahrenheit") {
      tempInCelsius = (tempInput - 32) * (5 / 9);
    } else if (fromUnit === "kelvin") {
      tempInCelsius = tempInput - 273.15;
    }
  
    // Convert from Celsius to target unit
    if (toUnit === "celsius") {
      result = tempInCelsius;
      resultArea.innerText = `${result.toFixed(2)} °C`;
    } else if (toUnit === "fahrenheit") {
      result = (tempInCelsius * 9/5) + 32;
      resultArea.innerText = `${result.toFixed(2)} °F`;
    } else if (toUnit === "kelvin") {
      result = tempInCelsius + 273.15;
      resultArea.innerText = `${result.toFixed(2)} K`;
    }
  }
  