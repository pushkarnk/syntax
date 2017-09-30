//Callbacks

function addAndProcess(a, b, func) {
    func(a+b)
}

//print the sum of two numbers
addAndProcess(129, 381, function(number) { console.log(number) }) 

//print the square root of the sum of two numbers
addAndProcess(414, 819, function(number) { console.log(Math.sqrt(number)) })
