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

var userSavedNine = $('input[type="text-9"]').show();
var userSavedTen = $('input[type="text-10"]').show();
var userSavedEleven = $('input[type="text-11"]').show();
var userSavedTwelve = $('input[type="text-12"]').show();
var userSavedOne = $('input[type="text-1"]').show();
var userSavedTwo = $('input[type="text-2"]').show();
var userSavedThree = $('input[type="text-3"]').show();
var userSavedFour = $('input[type="text-4"]').show();
var userSavedFive = $('input[type="text-5"]').show();

var userDisplayNine = $(".form-output-9").hide();
var userDisplayTen = $(".form-output-10").hide();
var userDisplayEleven = $(".form-output-11").hide();
var userDisplayTwelve = $(".form-output-12").hide();
var userDisplayOne = $(".form-output-1").hide();
var userDisplayTwo = $(".form-output-2").hide();
var userDisplayThree = $(".form-output-3").hide();
var userDisplayFour= $(".form-output-4").hide();
var userDisplayFive = $(".form-output-5").hide();



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


//----------------------------------------------------------9-o-clock-------------------------------------//
//----Saves user input into local storage




saveNine.on('click', function(event) {
    event.preventDefault();

    $.each(userSavedNine, function() {                               //"#20B2AA"
    userInputNine.push($(this).val())
        localStorage.setItem("saved-9", userInputNine);
            var displayNine = localStorage.getItem("saved-9")
            userDisplayNine.text(displayNine);
        $('.form-output-9').css("background-color", "blue").show();
        $('input[type="text-9"]').hide();

        }
    
    )});

//----------------------------------------------------------10-o-clock------------------------------------//
//----Saves user input into local storage

saveTen.on('click', function(event) {
    event.preventDefault();
    $.each(userSavedTen, function() {
        
        userInputTen.push($(this).val())
        console.log(userInputTen);
        localStorage.setItem("saved-10", userInputTen);
    }
)});

//---------------------------------------------------------11-o-clock-------------------------------------//
//----Saves user input into local storage

saveEleven.on('click', function(event) {
    event.preventDefault();
    $.each(userSavedEleven, function() {
        
        userInputEleven.push($(this).val())
        console.log(userInputEleven);
        localStorage.setItem("saved-11", userInputEleven);
    }
)});

//---------------------------------------------------------12-o-clock-------------------------------------//
//----Saves user input into local storage

saveTwelve.on('click', function(event) {
    event.preventDefault();
    $.each(userSavedTwelve, function() {
        
        userInputTwelve.push($(this).val())
        console.log(userInputTwelve);
        localStorage.setItem("saved-12", userInputTwelve);
    }
)});

//----------------------------------------------------------1-o-clock-------------------------------------//
//----Saves user input into local storage

saveOne.on('click', function(event) {
    event.preventDefault();
    $.each(userSavedOne, function() {
    
    
        userInputOne.push($(this).val())
        console.log(userInputOne);
        localStorage.setItem("saved-1", userInputOne);
    }
)});

//----------------------------------------------------------2-o-clock-------------------------------------//
//----Saves user input into local storage

saveTwo.on('click', function(event) {
    event.preventDefault();
    $.each(userSavedTwo, function() {
        
        userInputTwo.push($(this).val())
        console.log(userInputTwo);
        localStorage.setItem("saved-2", userInputTwo);
    }
)});

//----------------------------------------------------------3-o-clock-------------------------------------//
//----Saves user input into local storage

saveThree.on('click', function(event) {
    event.preventDefault();
    $.each(userSavedTeh , function() {
        
        userInputThree.push($(this).val())
        console.log(userInputThree);
        localStorage.setItem("saved-3", userInputThree);
    }
)});

//----------------------------------------------------------4-o-clock-------------------------------------//
//----Saves user input into local storage

saveFour.on('click', function(event) {
    event.preventDefault();
    $.each(userSavedFour, function() {
        
        userInputFour.push($(this).val())
        console.log(userInputFour);
        localStorage.setItem("saved-4", userInputFour);
    }
)});

//----------------------------------------------------------5-o-clock-------------------------------------//
//----Saves user input into local storage
saveFive.on('click', function(event) {
    event.preventDefault();
    $.each(userSavedFive, function() {
        
        userInputFive.push($(this).val())
        console.log(userInputFive);
        localStorage.setItem("saved-5", userInputFive);
    }
)});


