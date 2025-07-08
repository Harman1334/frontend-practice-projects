//create a function which prints a number  multiply by 3, call this function three times with different numbers.

function multi(num) {
   console.log(num * 3);
 }
 multi(2);
 multi(5);
 multi(10);  

//Create an arrow function which takes two arguments and perform multiplication on these numbers.
var multiply = (a, b) => {
   console.log(a*b);  
}
 multiply(2,5);
 multiply(3,2);

//Create an arrow function which takes username as argument,if no value is passed in argument then it must print"Hello players".

const fun = (username = "player") => {
  console.log(`Hello ${username}`);
};
fun("Harman");
fun();  // uses default parameter


//Create an arrow function to print date and month.
var d = () => {
  let now = new Date();
  console.log("Date is", now.getDate());
  console.log("Month is", now.getMonth() + 1);
};
d();  // Call the function707


//Using interval create a timer which shows seconds and milliseconds.
setInterval(() => {
  let d = new Date();
  console.log(`${d.getSeconds()} sec : ${d.getMilliseconds()} ms`);
}, 1000);


//Create a countdown timer starting from 1 and goes like 1,2,3..using setinterval,displaying each second.

let count = 1;
setInterval(() => {
  console.log(count);
  count++;
}, 1000);


//log "Boom!" after a 3 second of delay.

setTimeout(() => {
  console.log("Boom!");
}, 3000);

//Create a function that simulates rolling a six-sided die and returns a random number between 1 to 6.

function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}
console.log("Dice roll:", rollDie());


//Build a simple digital clock that updates the current hour, minute and second every second.

setInterval(() => {
  let d = new Date();
  let hour = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();
  console.log("Time is", hour,":",min,":",sec);
}, 1000);
