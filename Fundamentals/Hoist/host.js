

// 1
console.log(hello);
var hello = 'world';
// undefined

// 2
var needle = 'haystack';
test();
function test() {
    let needle = 'magnet';
    console.log(needle);
}
// magnet


// 3
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// super cool

// 4
var food = 'chicken';
console.log(food);
eat();
function eat() {
    // food = 'half-chicken';
    // console.log(food);
    let food = 'gone';
}
// chicken
// ERROR

// 5
// mean();
// console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
// console.log(food);
// ERROR food not defined!

// 6
console.log(genre);
var genre = "disco";
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
// ERROR: undefined genre


// Bonus ES6: const
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;

    if (dojo.students > 50) {
        dojo.hiring = true;
    } else if (dojo.students <= 0) {
        dojo.hiring = "closed for now";
    }
    return dojo;
}
// cannot change Constant variable