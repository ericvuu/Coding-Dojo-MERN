// 1
console.log(hello);
var hello = "world";

// var hello;
// console.log(hello) will log undefined
// hello = "world"

// 2
var needle = "haystack";
test();
function test() {
  var needle = "magnet";
  console.log(needle);
}

// var needle;
// test gets hoisted to the top
// needle = "magnet";
// test is called, needle is reassigned to "magnet", logs needle

// 3
var brendan = "super cool";
function print() {
  brendan = "only okay";
  console.log(brendan);
}
console.log(brendan);

// var brendan;
// print gets hoisted to the top
// brendan = "super cool";
// logs "super cool"

// 4
var food = "chicken";
console.log(food);
eat();
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";
}

// var food;
// eat function is hoisted
// food = "chicken";
// logs "chicken"
// eat is invoked, food is reassigned to "half-chicken", logs "half-chicken"


// 5
mean();
console.log(food);
var mean = function () {
  food = "chicken";
  console.log(food);
  var food = "fish";
  console.log(food);
};

// will return an error, mean is not a function

// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
  genre = "rock";
  console.log(genre);
  var genre = "r&b";
  console.log(genre);
}
console.log(genre);

// var genre;
// rewind function is hoisted
// logs undefined
// genre = "disco"
// rewind is called, logs rock then logs r&b
// logs disco


// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
  dojo = "seattle";
  console.log(dojo);
  var dojo = "burbank";
  console.log(dojo);
}
console.log(dojo);

// dojo = "san jose"
// learn function is hoisted
// logs dojo
// learn is invoked, dojo is reassigned to "seattle", logs seattle, dojo is reassigned to "burbank", logs burbank
// logs san jose

// 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}

// makeDojo is hoisted
// invokes makeDojo with the arguments of "Chicago" and 65
// logs {name:"Chicago", students: 65, hiring: true"}
// logs TypeError
