let onesBox = document.getElementById("ones");
let onesArray = [1,2,3,4,5,0];
let onesArrayPosition = 0;

let twosBox = document.getElementById("twos");
let twosArray = [2,4,6,8,10,0];
let twosArrayPosition = 0;

let threesBox = document.getElementById("threes");
let threesArray = [3,6,9,12,15,0];
let threesArrayPosition = 0;

let foursBox = document.getElementById("fours");
let foursArray = [4,8,12,16,20,0];
let foursArrayPosition = 0;

let fivesBox = document.getElementById("fives");
let fivesArray = [5,10,15,20,25,0];
let fivesArrayPosition = 0;

let sixesBox = document.getElementById("sixes");
let sixesArray = [6,12,18,24,30,0];
let sixesArrayPosition = 0;

//----------------------------------------------------------------------------------------------//

//on click, move 1 space in the array

onesBox.addEventListener("click", function(){
    plusOneArray(onesBox, onesArray, onesArrayPosition)
});

function plusOneArray(box, array, arrayPosition) {
    box.innerHTML = array[arrayPosition]
    arrayPosition++;
    return arrayPosition;
}
