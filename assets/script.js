// Displays the current time in the format of day of the week, month and day of the month, and year
$("#date-my").text(moment().format("dddd, MMMM Do YYYY"));

// Gets the current hour in military time - - - 
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
        };
    };

    renderStorage();

    function renderStorage () {
        for (j = 9; j <= 17; j++) {
        var display = localStorage.getItem("save-" + j);   
        document.getElementById(j).value = display;
    };
};

    function saveInput () {

        for (b = 9; b <= 17; b++) {
        var input = document.getElementById(b).value
        localStorage.setItem("save-" + b, input)
    };
};

