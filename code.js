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