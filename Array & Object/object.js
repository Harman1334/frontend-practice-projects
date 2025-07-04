//Create an object named employee with keys employee name, department and salary.
//  Perform following operations: 
//Object Part
let employee = {
  employee_name: "harman",
  department: "IT",
  salary: 50000
};

// Print the object and its type
console.log("Employee Object:", employee);
console.log("Type of employee:", typeof employee);

// Delete department
delete employee.department;
console.log("After deleting department:", employee);

// Add a new key named joinYear
employee.joinYear = 2024;
console.log("After adding joinYear:", employee);

// Replace the employee_name with Elon_Musk
employee.employee_name = "Elon_Musk";
console.log("After replacing employee name:", employee);


//Create an object called book with title, author, and pages. Write a function that adds a new property genre to it.

let book = {
  title: "My days",
  author: "R.K.Narayan",
  pages: 200
};

function addGenre(bookObj, genre) {
  bookObj.genre = genre;
}
// Add genre
addGenre(book, "Biography");
console.log(book);


//Write a function that accepts an object with keys name and city, and returns a greeting message using those values.
function greet(person) {
  console.log(`Hello, ${person.name} from ${person.city}!`);
}

greet({ name: "Harman", city: "Jalandhar" });

