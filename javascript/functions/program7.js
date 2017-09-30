//Simulating a varargs function

//Function to calculate the average of a variable number of arguments

var average = function() {
    var sum = 0
    var count = arguments.length   //the argument array is a special array, it only has the length property and lacks other array methods
    for (i=0; i<count; i++) {
        sum += arguments[i]
    }
    return sum/count
}

console.log(average())
console.log(average(67))
console.log(average(10, 12))
console.log(average(90, 91, 13, 67, 12))
