//Safe square root - we dont return a NaN

function safe_square_root(x) {
    if (x < 0) {
        throw {
            name: "NegativeIntegerError",
            message: x + " is a negative integer"
         }
     }
     return Math.sqrt(x)
}

try { 
    console.log(safe_square_root(18))
} catch (e) {
    console.log(e)
}

try {
    console.log(safe_square_root(-29))
} catch (e) {
    console.log(e)
}
