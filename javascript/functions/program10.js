//Towers of Hanoi

var hanoi = function(discs, source, auxiliary, destination) {
    if (discs > 0) {
        //move all but the largest disc to auxiliary tower, using destination as the auxiliary
        hanoi(discs - 1, source, destination, auxiliary)
        //move the largest disc to the destination
        console.log("Move disc #" + discs + " from " + source +  " to " +  destination)
        //now move all the discs on auxiliary to destination using source as the auxiliary
        hanoi(discs - 1, auxiliary, source, destination) 
    }
}

hanoi(3, "Src", "Aux", "Dst")
