//With the given data filter out the restaurants having rating more than 3.5

let data = [
  { name: "food bazar", rating: 4 },
  { name: "burger king", rating: 3.5 },
  { name: "heebee coffee", rating: 4 },
  { name: "mcdonald", rating: 3 },
  { name: "wendy", rating: 3 },
];

let filtered = data.filter((restaurant) => restaurant.rating > 3.5);
console.log("Restaurants with rating > 3.5:");
console.log(filtered);

//With the given data create a new array only storing the restaurant name

let restaurantNames = data.map((restaurant) => restaurant.name);
console.log("Restaurant Names:");
console.log(restaurantNames);
