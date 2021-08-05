//Fahrenheit to  Celcius */
function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}
var givenFahrenheight = fahrenheitToCelsius(100);
console.log("Celsius is:", givenFahrenheight, "C");

/*Celsius to Fahrenheit*/
function celsiusToFahrenheit(celcius) {
    var fahrenheit = (celcius * 9 / 5) + 32;
    return fahrenheit;

}
var givenCelcius = celsiusToFahrenheit(41);
console.log("Fahrenheit is:", givenCelcius, "F");