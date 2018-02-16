function toCelsius(){
  var celsius = (document.getelementById("#userInput").value - 32) * 5/9;
  celsius = Math.round(celsius);
  document.getelementById("result").innerHTML = userInputvalue + " Fahrenheit is " + celsius + " Celsius";

}