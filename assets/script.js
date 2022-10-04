$("#date-my").text(moment().format("dddd, MMMM Do YYYY"));

var saveNine = $('.save-nine');
var saveTen = $('.save-ten');
var saveEleven = $('.save-eleven');
var saveTwelve = $('.save-twelve');
var saveOne = $('.save-one');
var saveTwo = $('.save-two');
var saveThree = $('.save-three');
var saveFour = $('.save-four');
var saveFive = $('.save-five');

var userSavedNine = $('input[type="text-9"]');
var userSavedTen = $('input[type="text"]');
var userSavedEleven = $('input[type="text"]');
var userSavedTwelve = $('input[type="text"]');
var userSavedOne = $('input[type="text"]');
var userSavedTwo = $('input[type="text"]');
var userSavedThree = $('input[type="text"]');
var userSavedFour = $('input[type="text"]');
var userSavedFive = $('input[type="text"]');

var userInputNine = [];
var userInputTen = [];
var userInputEleven = [];
var userInputTwelve = [];
var userInputOne = [];
var userInputTwo = [];
var userInputThree = [];
var userInputFour = [];
var userInputFive = [];

// work out the clock that changes the color of the elements in html

saveNine.on('click', function() {
    
    $.each(userSavedNine, function() {
        
        userInputNine.push($(this).val())
        console.log(userInputNine);
    }
)});
// save user text input as local storage