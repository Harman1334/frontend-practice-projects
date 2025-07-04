//Create an array named friends with five of your friends name and perform the following:
// Print the array and its length
var friends=["harman","nisha","bhavleen","nitika","bhavna"]
console.log(friends);
//length of the array
console.log(friends.length);

//Print friend at position 3
console.log(friends[2]);

//Add a new Friend name BillGATES at first position
friends.unshift("BillGATES");
console.log("After adding BillGATES at first position:", friends);

// Delete friend from last position
friends.pop();
console.log("After deleting last friend:", friends);

// Traverse each friend name
for ( let i in friends){
    console.log(friends[i]);
}

//Create a function that takes an array of numbers and returns their average.
function getAverage(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  let avg = sum / arr.length;
  return avg;
}

console.log(getAverage([10, 20, 30])); 


//Create an array of integers and write a function that doubles each element and prints the result.

function double(arr) {
  for (let num of arr) {
    console.log(num * 2);
  }
}
double([1, 2, 5, 8]); 



//Create an array of number using for in print each number multiplied by 2
let numbers = [1, 2, 3, 4, 5];

for (let i in numbers) {
  console.log(numbers[i] * 2);
}
