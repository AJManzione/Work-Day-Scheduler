# Work-Day-Scheduler

## [Work Day Scheduler!] ( https://ajmanzione.github.io/Work-Day-Scheduler/ )

## Allows you to log your day and save your schedule!

![Alt Text](/assets/images/website.png)

- The motivation for this project was to create a scheduler that allows the user to take notes during their day and schedule their day hour to hour.
- The project utilizes dynamic styling of elements on the page including real time styling! As well as allows the user to input text on each time block and remains on the users page even after a refresh occurs.
- This application build helped build on my understanding of JavaScript and was solid practice.

![Alt Text](/assets/images/website%20color.png)

## Dynamic with the current hour!

- Every hour, the time blocks on this page change color, as you can see everything before the current hour is gray so the user knows that those time blocks have passed. the curent hour is displayed in red to show importance. and the future hours are displayed in green for potential.
- The method for solving this feature was done using Moment.Js. Being able to grab the current hour of the day is neccissary for solving something like this. I pulled the hour from moment.js in military time and used a for loop to compare the ID of the elements (which were conveniently named between 9 - 17) and compared them against the current time, one by one. the code is as follows.

```
// iterates through all the ID's on the HTML page and compares them to the current time (used military time for ease) stlyes elements 
     for (i = 9; i <= 17; i++) {
        var styling = document.getElementById(i) //gets every id on the html page numbered between 9 and 17 and then asks the following conditionals
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
```

- Next was allowing the users time block information to be saved. This issue was solved using the web API's local storage feature and with a few lines of JavaScript. each block is saved into local storage after the click of the save button. If the user refreshes the page, this is not a problem because the local storage information will still be there and thus still be displayed. The code is as follows.

```
    renderStorage();

    function renderStorage () {
        for (j = 9; j <= 17; j++) {
        var display = localStorage.getItem("save-" + j);   
        document.getElementById(j).value = display;
    };
};

//Upon clicking the save button on the web page, this function is ran which saves all the ID values that the user inputs individually with the same style of iterating through the ID's using the for loop (9 - 17)
    function saveInput () {

        for (b = 9; b <= 17; b++) {
        var input = document.getElementById(b).value
        localStorage.setItem("save-" + b, input) // extremely satisfied by my ability to condense this code down in just under 40 lines..
    };
};     
```

![Alt Text](/assets/images/website%20color%20text.png)


## Conditionals, Prompts, and Functions

  - And that's it! I managed to get this application deployed in under 40 lines of JS code and am very proud of that. As you can see, using the ID names of the numbers 9 - 17 it was very convenient and allowed me to iterate through those numbers with for loops in many different ways including, styling, getting input, saving to local storage, accessing local storage and then, displaying from that local storage!

 ```
        <ul class="container">
          <li class="time-blocks">
            <p>9 AM</p>
            <input id="9"/>
            <button onclick="saveInput()">S</button> <!-- When clicking the save buttons, JavaScript function begins running -->
          </li>
          <li class="time-blocks">
            <p>10 AM</p>
            <input id="10"/>
            <button onclick="saveInput()">S</button>
          </li>
          <li class="time-blocks">
            <p>11 AM</p>
            <input id="11"/>
            <button onclick="saveInput()">S</button>
          </li>
          <li class="time-blocks">
            <p>12 PM</p>
            <input id="12"/>
            <button onclick="saveInput()">S</button>
          </li>
          <li class="time-blocks">
            <p>1 PM</p>
            <input id="13"/>
            <button onclick="saveInput()">S</button>
          </li>
          <li class="time-blocks">
            <p>2 PM</p>
            <input id="14"/>
            <button onclick="saveInput()">S</button>
          </li>
          <li class="time-blocks">
            <p>3 PM</p>
            <input id="15"/>
            <button onclick="saveInput()">S</button>
          </li>
          <li class="time-blocks">
            <p>4 PM</p>
            <input id="16"/>
            <button onclick="saveInput()">S</button>
          </li>
          <li class="time-blocks">
            <p>5 PM</p>
            <input id="17"/>
            <button onclick="saveInput()">S</button>
          </li>
        </ul>
 ```

## License

 -MIT License

 ### Built With

* HTML
* CSS
* JavaScript
* Git & GitHub
* Moment.js


<!-- CONTACT -->
## Contact

Anthony Manzione - [@Instagram Handle](https://www.instagram.com/anthony.manzione/) - 
[@Linkedin](https://www.linkedin.com/in/anthony-manzione-862b44250/)

Project Link: [https://ajmanzione.github.io/Work-Day-Scheduler/]


