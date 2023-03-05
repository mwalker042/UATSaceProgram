//-------------------------------------
// Script to get and display local time
//-------------------------------------

function time(){
    // Get the current date/time and get the time hours, minutes, and seconds from that object
    let currentDate = new Date();
    let currentHours = currentDate.getHours();
    let currentMinutes = currentDate.getMinutes();
    let currentSeconds = currentDate.getSeconds();

    // Keep the formatting by adding a zero if hours/seconds/minutes are a single digit
    if (currentHours < 10)
    {
        currentHours = '0' + currentHours;
    }

    if (currentMinutes < 10)
    {
        currentMinutes = '0' + currentMinutes;
    }

    if (currentSeconds < 10)
    {
        currentSeconds = '0' + currentSeconds;
    }

    let time = currentHours + ":" + currentMinutes + ":" + currentSeconds;

    // Print the time to the document through id localTime
    document.getElementById("localTime").innerHTML = time;
}

// Call the time function with setInterval every 1000ms
setInterval(time, 1000);


//-----------------------------
// Script for the login methods
//-----------------------------

// Loop control variables
var validName = false;
var validBadge = false;

function isNumeric(num) {
    // Returns the opposite of what isNaN to maintain the logic of isNumeric
    return !isNaN(num);
}

while (!validName) {
    // Show prompts for first and last name
    let firstName = prompt("Enter first name:");
    let lastName = prompt("Enter last name:");

    // Concatenate first and last name
    var employeeName = firstName + " " + lastName;

    // Get string length of employeeName
    var nameLength = employeeName.length;

    // Check whether name is no more than 20 characters
    if (nameLength < 21 && nameLength > 0) {
        // Set validName to true and break while loop
        validName = true;
    } else {
        // Error message
        alert("First and last name must be no more than 20 characters!");
    }
}

while (!validBadge) {
    // Show prompt for badge number
    var badgeNumber = prompt("Badge number (no more than 3 digits)");
    // Boolean that checks whether badgeNumber is a number
    var isNumber = isNumeric(badgeNumber);

    // Used this to debut isNumeric and determine the value the function returned
    console.log(isNumber);

    // Tests whether the badge number is the appropriate number of digits.
    if (isNumber) {
        if (badgeNumber > 0 && badgeNumber < 1000) {
            // Set validBadge to true and break the while loop
            validBadge = true;
        } else {
            // Error message
            alert("Badge number must be no more than 3 digits!");
        }
    } else {
        // Error message
        alert("Badge number must only contain numbers!");
    }
}

document.getElementById("name").innerHTML = employeeName;

//-------------------------------
// Script for background audio
//-------------------------------

var audio = new Audio('us-lab-background.mp3');

function startButton()
{
    // Disables and lowers the opacity of the start button
    document.getElementById("start").disabled = true;
    document.getElementById("start").style.opacity = "0.7";

    // Enables and raises the opacity of the stop button
    document.getElementById("stop").disabled = false;
    document.getElementById("stop").style.opacity = "1";

    audio.loop = true;
    audio.play();
}

function stopButton()
{
    // Enables and raises the opacity of the start button
    document.getElementById("start").disabled = false;
    document.getElementById("start").style.opacity = "1";

    // Disables and lowers the opacity of the stop button
    document.getElementById("stop").disabled = true;
    document.getElementById("stop").style.opacity = "0.7";

    audio.pause();
}

// Add event listeners for the start and stop buttons
document.getElementById("start").addEventListener("click", startButton);
document.getElementById("stop").addEventListener("click", stopButton);

//-------------------------------
// Script for countdown functions
//-------------------------------

/*
// Variable to store interval ID
let intervalID;
let countdown = 10;

function beginCountdown()
{
    // Check if an interval has already been set up
    if (!intervalID)
    {
        intervalID = setInterval(countdownFunc, 1000);
    }
}

function countdownFunc()
{
    if (countdown < 5)  // Run the following when countdown is less than 5 seconds from blastoff
    {
        document.getElementById("DisplayCountdown").innerHTML = "<span id='warning'>Warning!</span> Less than half way to launch: " + countdown + " seconds";
        countdown--;
    }
    else                // Run the following when countdown is not less than 5 seconds from blastoff
    {
        document.getElementById("DisplayCountdown").innerHTML = countdown + " seconds";
        countdown--
    }

    if (countdown < -1) // Clear the intervalID and display Blastoff! when countdown reaches 0
    {
        clearInterval(intervalID);
        intervalID = null;

        document.getElementById("DisplayCountdown").innerHTML = "Blastoff!";
    }
}

function stopCountdown()
{
    clearInterval(intervalID);
    // Release interval ID from variable
    intervalID = null;

    // Print halt message and reset countdown to 10
    document.getElementById("DisplayCountdown").innerHTML = "Countdown halted!";
    countdown = 10;
}
*/