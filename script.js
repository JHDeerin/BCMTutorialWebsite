// Show we can define variables, make comments, print to console, define functions
// ALSO: Note that by default, it will just start running this script from the top-down as soon as it's loaded
const PI = 3.2;  // There is nothing wrong with this in Indiana in 1897
let circleRadius = 2*PI;

console.log("Radius: " + circleRadius);

function circle_area(radius, isFromIndiana) {
    const THE_ONCE_AND_FUTURE_PI = 3.1415926;
    if (isFromIndiana) {
        return radius*radius * PI;
    } else {    // Remove else after doing this to remind people it isn't necessary, because of the return
        return radius*radius * THE_ONCE_AND_FUTURE_PI;
    }
}

console.log("Area: " + circle_area(circleRadius, false));

for (radius = 1; radius < 5; radius++) {
    console.log("Indiana Area: " + circle_area(radius, true));
}

//==============================================================================
// ACTUAL STUFF (bring up why defer statement was needed when we first refer to an HTML element)

let temperature = 85;

const TEMPERATURE_TEXT = document.getElementById("degrees");
TEMPERATURE_TEXT.innerText = temperature;

const LAUREL_QUOTE = document.getElementById("laurel-quote");

const DECREASE_TEMP_BUTTON = document.getElementById("weather-left");
const INCREASE_TEMP_BUTTON = document.getElementById("weather-right");

DECREASE_TEMP_BUTTON.addEventListener("click", decrease_temperature);
INCREASE_TEMP_BUTTON.addEventListener("click", increase_temperature);

function increase_temperature() {
    temperature++;
    update_temperature_text();
}

function decrease_temperature() {
    temperature--;
    update_temperature_text();
}

function update_temperature_text() {
    TEMPERATURE_TEXT.innerText = temperature;

    // Only add this next part after explaining/showing the buttons
    if (temperature < 80) {
        TEMPERATURE_TEXT.classList.remove("hot-text");
        TEMPERATURE_TEXT.classList.add("cold-text");
        LAUREL_QUOTE.innerText = "This is not hot";
    } else {
        TEMPERATURE_TEXT.classList.remove("cold-text");
        TEMPERATURE_TEXT.classList.add("hot-text");
        LAUREL_QUOTE.innerText = "This is hot";
    }
}
