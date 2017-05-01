function setup() {
  createCanvas(400, 400);
  var firstName = "Jin";
  var lastName = "Yoo";
  printName(firstName, lastName);
  printNameInMyWay(firstName, lastName);
  console.log("My Name is " + lastName + " " + firstName);
}

function printName(firstName, lastName) {
  console.log("My Name is " + firstName + " " + lastName);
}

function printNameInMyWay(firstName, lastName) {
  firstName = firstName + " Sung";
  console.log("My Name is " + lastName + " " + firstName);
}
