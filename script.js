"use strict"
//----------------------------------------------------------------------------------------------//

// upper section

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
    totalGameScore()
});

twosBox.addEventListener("click", function(){
    twosArrayPosition = plusOneArray(twosBox, twosArray, twosArrayPosition);
    addUpperScore();
    totalGameScore()
});

threesBox.addEventListener("click", function(){
    threesArrayPosition = plusOneArray(threesBox, threesArray, threesArrayPosition);
    addUpperScore();
    totalGameScore()
});

foursBox.addEventListener("click", function(){
    foursArrayPosition = plusOneArray(foursBox, foursArray, foursArrayPosition);
    addUpperScore();
    totalGameScore()
});

fivesBox.addEventListener("click", function(){
    fivesArrayPosition = plusOneArray(fivesBox, fivesArray, fivesArrayPosition);
    addUpperScore();
    totalGameScore()
});

sixesBox.addEventListener("click", function(){
    sixesArrayPosition = plusOneArray(sixesBox, sixesArray, sixesArrayPosition);
    addUpperScore();
    totalGameScore()
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
    if(topScoreDisplay.innerHTML >= 63) {
        topScoreDisplay.innerHTML = parseInt(topScoreDisplay.innerHTML) +  35
    }
}

//----------------------------------------------------------------------------------------------//

// Lower Section 

const threeOfKind = document.getElementById("threeOfKind");
threeOfKind.addEventListener("click", function(){
    threeOfKind.select();
})
threeOfKind.addEventListener("input", function(){
    addLowerScore();
    totalGameScore()
})

const fourOfKind = document.getElementById("fourOfKind");
fourOfKind.addEventListener("click", function(){
    fourOfKind.select();
})
fourOfKind.addEventListener("input", function(){
    addLowerScore();
})

const fullHouse = document.getElementById("fullHouse");
fullHouse.addEventListener("click", function(){
    displayScore(fullHouse, 25)
    addLowerScore();
    totalGameScore()
})

const smStraight = document.getElementById("smStraight");
smStraight.addEventListener("click", function(){
    displayScore(smStraight, 30)
    addLowerScore();
    totalGameScore()
})

const lgStraight = document.getElementById("lgStraight");
lgStraight.addEventListener("click", function(){
    displayScore(lgStraight, 40)
    addLowerScore();
    totalGameScore()
})

const yahtzee = document.getElementById("yahtzee");
yahtzee.addEventListener("click", function(){
    displayScore(yahtzee, 50)
    addLowerScore();
    totalGameScore()
})

const yahtzeeBonus = document.getElementById("yahtzeeBonus");
yahtzeeBonus.addEventListener("click", function(){
    displayScore(yahtzeeBonus, 100)
    addLowerScore();
    totalGameScore()
})

const chance = document.getElementById("chance");
chance.addEventListener("click", function(){
    chance.select();
})
chance.addEventListener("input", function(){
    addLowerScore();
    totalGameScore()
})

function displayScore(display, scoreValue){
    if (display.innerHTML == 0) {
        display.innerHTML = scoreValue
    } else {
        display.innerHTML = 0;
    }
}

//add lower scores and display as total 

let bottomScoreDisplay = document.getElementById("bottomScoreDisplay");

function addLowerScore() {
    bottomScoreDisplay.innerHTML = parseInt(threeOfKind.value) + parseInt(fourOfKind.value) + parseInt(fullHouse.innerHTML) + parseInt(smStraight.innerHTML) + parseInt(lgStraight.innerHTML) + parseInt(yahtzee.innerHTML) + parseInt(yahtzeeBonus.innerHTML) + parseInt(chance.value)
}

//----------------------------------------------------------------------------------------------//

//total game score

const totalGameScoreDisplay = document.getElementById("totalGameScore")
function totalGameScore() {
    totalGameScoreDisplay.innerHTML = parseInt(bottomScoreDisplay.innerHTML) + parseInt(topScoreDisplay.innerHTML);
}

