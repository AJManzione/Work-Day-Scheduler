
$("#date-my").text(moment().format("dddd, MMMM Do YYYY"));

// Save buttons Linked
var saveNine = $('#save-nine');
var saveTen = $('#save-ten');
var saveEleven = $('#save-eleven');
var saveTwelve = $('#save-twelve');
var saveOne = $('#save-one');
var saveTwo = $('#save-two');
var saveThree = $('#save-three');
var saveFour = $('#save-four');
var saveFive = $('#save-five');


var userSavedNine = $('input[type="text-9"]');
var userSavedTen = $('input[type="text-10"]');
var userSavedEleven = $('input[type="text-11"]');
var userSavedTwelve = $('input[type="text-12"]');
var userSavedOne = $('input[type="text-1"]');
var userSavedTwo = $('input[type="text-2"]');
var userSavedThree = $('input[type="text-3"]');
var userSavedFour = $('input[type="text-4"]');
var userSavedFive = $('input[type="text-5"]');


    var time = moment().format("H")


     for (i = 9; i <= 17; i++) {
        var styling = document.getElementById(i) 
        if (i < time) {
            styling.setAttribute("style", "background-color: lightgray;")
            //change style to gray
        } else if ( i > time) {
            styling.setAttribute("style", "background-color: lightseagreen;")
            // change style to green 

        }  else { i == time 
            styling.setAttribute("style", "background-color: #e06666;")
            // change style to lightred
        }
    };


    saveInput()


    function saveInput () {
        var nine = document.getElementById("9").value
        localStorage.setItem("save-9", nine)
        if (nine) {
            var displayNine = localStorage.getItem("save-9");
            console.log(displayNine);
        }
    }
        
        
        

