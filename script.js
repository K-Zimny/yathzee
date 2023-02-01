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

onesBox.addEventListener("click", function(){
    onesBox.innerHTML = onesArray[onesArrayPosition];
    onesArrayPosition++;
    if (onesArrayPosition > onesArray.length - 1) {
        onesArrayPosition = 0;
    } 
    addUpperScore();

});

twosBox.addEventListener("click", function(){
    twosBox.innerHTML = twosArray[twosArrayPosition];
    twosArrayPosition++;
    if (twosArrayPosition > twosArray.length - 1) {
        twosArrayPosition = 0;
    } 
    addUpperScore();

});

threesBox.addEventListener("click", function(){
    threesBox.innerHTML = threesArray[threesArrayPosition];
    threesArrayPosition++;
    if (threesArrayPosition > threesArray.length - 1) {
        threesArrayPosition = 0;
    } 
    addUpperScore();

});

foursBox.addEventListener("click", function(){
    foursBox.innerHTML = foursArray[foursArrayPosition];
    foursArrayPosition++;
    if (foursArrayPosition > foursArray.length - 1) {
        foursArrayPosition = 0;
    } 
    addUpperScore();

});

fivesBox.addEventListener("click", function(){
    fivesBox.innerHTML = fivesArray[fivesArrayPosition];
    fivesArrayPosition++;
    if (fivesArrayPosition > fivesArray.length - 1) {
        fivesArrayPosition = 0;
    } 
    addUpperScore();

});

sixesBox.addEventListener("click", function(){
    sixesBox.innerHTML = sixesArray[sixesArrayPosition];
    sixesArrayPosition++;
    if (sixesArrayPosition > sixesArray.length - 1) {
        sixesArrayPosition = 0;
    } 
    addUpperScore();
});

//----------------------------------------------------------------------------------------------//
//uppersection

let upperScoreTotal = 0;

function addUpperScore() {
    upperScoreTotal = parseInt(onesBox.innerHTML) + parseInt(twosBox.innerHTML) + parseInt(threesBox.innerHTML) + parseInt(foursBox.innerHTML) + parseInt(fivesBox.innerHTML) + parseInt (sixesBox.innerHTML)
    let topScoreDisplay = document.getElementById("topScoreDisplay")
    if(upperScoreTotal >= 63){
        upperScoreTotal += 35
    } else{}
    topScoreDisplay.innerHTML = upperScoreTotal

    console.log(upperScoreTotal)
}



//----------------------------------------------------------------------------------------------//
//lower section

let threeOfKind = document.getElementById("threeOfKind");

threeOfKind.addEventListener("input", function(){
    addLowerScore();
})

let fullHouseDisplay = document.getElementById("fullHouse");
fullHouseDisplay.addEventListener("click", function(){
    if (fullHouseDisplay.innerHTML == 0) {
        fullHouseDisplay.innerHTML = 25
    } else {
        fullHouseDisplay.innerHTML = 0;
    }
    addLowerScore();
})

let smallStraight = document.getElementById("smStraight");
smallStraight.addEventListener("click", function() {
    if (smallStraight.innerHTML == 0) {
        smallStraight.innerHTML = 30
    } else {
        smallStraight.innerHTML = 0;
    }
    addLowerScore();
})




let bottomScoreDisplay = document.getElementById("bottomScoreDisplay")
bottomScoreTotal = 0;

function addLowerScore() {
    bottomScoreTotal = parseInt(threeOfKind.value) + parseInt(fullHouseDisplay.innerHTML)
    console.log(bottomScoreTotal)
}


