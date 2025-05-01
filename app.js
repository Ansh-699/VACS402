// console.log("Hello, World!");

// function demo () {
//   console.log("This is a demo function.");
//   console.log(typeof (demo));
// }

// demo();

//arrow function demo 
// const arrowDemo = () => {
//   console.log("This is an arrow function demo.");
//   console.log(typeof (arrowDemo));
// }
// arrowDemo();

// let add = (a, b) => {
//     return a + b;
//     }

// console.log(add(5, 10));


// let mul = function (){
//     let c = 5;
//     let d = 10;
//     console.log(c * d);
// }
// mul();


// let div = function (a, b) {
//     console.log( a / b);
// }
// div(10, 5);

// (
//     function demo() {
//         console.log("This is a demo function.");
//     }
// )();


// function add(a, b) {
//    let sum = a + b;
//    console.log("Sum is: " + sum);
//    return function (c) {
//        console.log("Sum + c is: " + (sum + c));
//    }
// }
// add(5, 10)(15); // Output: Sum is: 15, Sum + c is: 30


//callback function
//  function greet(name1) {
//      console.log("Hello, " + name + "!");
//  }  

// function calulate(a,b){
//     return a + b;
// }

// function displayResult(result){
//     console.log("The result is: " + result);
// }

// let result = calulate(5, 10);
// displayResult(result);
// function A(){
//     console.log("This is function A.");
    
// }

// function B(){
//     console.log("This is function B.");
    
// }
// function C(){
//     console.log("This is function C.");
    
// }
// A();
// //set timeout arrow function
// setTimeout(() => {console.log("This is an arrow function inside setTimeout.");}, 2000);
// setTimeout(B, 1000);
// C();


//rest parameter
// function add(c,d,...numbers) {
//     console.log("The value is : " + (c + d));
//     console.log("The numbers are: " + numbers);
//     let sum = 0;
//     for (let i of numbers) {
//         sum += i;
//     }
//     console.log("The sum is: " + sum);
//     return sum;
// }
// add(5, 10, 15, 20, 25, 30, 35, 40, 45, 50);

// const url = "https://api.github.com/users/mojombo";
// const options = {};
// const pr = fetch(url, options);

// const successCB = (response) => {
//     console.log("Success: ", response);
//     return response.json();
// }
// const errorCB = (error) => {
//     console.log("Error: ", error);
// }
// pr.then(successCB).catch(errorCB);



const apiKey = '6e2c953210574eac8cc93632250105';
const city = 'New Delhi';

async function getWeather(city) {
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`Weather in ${data.location.name}, ${data.location.country}`);
    console.log(`Temperature: ${data.current.temp_c}°C`);
    console.log(`Condition: ${data.current.condition.text}`);
    console.log(`Humidity: ${data.current.humidity}%`);
    console.log(`Wind Speed: ${data.forcast.wind_kph} kph`);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

getWeather(city);

