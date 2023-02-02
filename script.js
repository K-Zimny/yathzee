"use strict"
//----------------------------------------------------------------------------------------------//
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

//-------------------------------------------//

//on click, move 1 space through the array. 
//add all the scores for a upper section total

onesBox.addEventListener("click", function(){
    onesArrayPosition = plusOneArray(onesBox, onesArray, onesArrayPosition);
    addUpperScore();
});

twosBox.addEventListener("click", function(){
    twosArrayPosition = plusOneArray(twosBox, twosArray, twosArrayPosition);
    addUpperScore();
});

threesBox.addEventListener("click", function(){
    threesArrayPosition = plusOneArray(threesBox, threesArray, threesArrayPosition);
    addUpperScore();
});

foursBox.addEventListener("click", function(){
    foursArrayPosition = plusOneArray(foursBox, foursArray, foursArrayPosition);
    addUpperScore();
});

fivesBox.addEventListener("click", function(){
    fivesArrayPosition = plusOneArray(fivesBox, fivesArray, fivesArrayPosition);
    addUpperScore();
});

sixesBox.addEventListener("click", function(){
    sixesArrayPosition = plusOneArray(sixesBox, sixesArray, sixesArrayPosition);
    addUpperScore();
});

function plusOneArray(box, array, arrayPosition) {
    box.innerHTML = array[arrayPosition]
    arrayPosition++;
    if(arrayPosition > array.length - 1 ) {
        arrayPosition = 0;
    }
    return arrayPosition;
}

//add upper scores and display as total

let topScoreDisplay = document.getElementById("topScoreDisplay")

function addUpperScore(){
    topScoreDisplay.innerHTML = parseInt(onesBox.innerHTML) + parseInt(twosBox.innerHTML) + parseInt(threesBox.innerHTML) + parseInt(foursBox.innerHTML) + parseInt(fivesBox.innerHTML) + parseInt(sixesBox.innerHTML)
}

//----------------------------------------------------------------------------------------------//

