var add = function (a, b) {
    return a + b;
};
var substract = function (a, b) {
    return a - b;
};
// function declaration
function multiply(a, b) {
    return a * b;
}
// anonymous function
var divide = function (a, b) {
    return a / b;
};
var logger = function (message) {
    console.log(message);
    return null;
    // if return type is void 
    // then it can return "null" and "undefined"
};
var throwError = function (message) {
    throw new Error(message);
    // return 'asdf';
    // if return type is never
    // it can not return anything
};
var throwError2 = function (message) {
    if (!message) {
        throw new Error(message);
    }
};
var todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};
var logWeather = function (forcasts) {
    console.log(forcasts.date);
    console.log(forcasts.weather);
};
logWeather(todaysWeather);
// ES2015/ ES6 destructuring
var logWeather2 = function (_a) {
    var date = _a.date, weather = _a.weather;
    console.log(date);
    console.log(weather);
};
logWeather2(todaysWeather);
