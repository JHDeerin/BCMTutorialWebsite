// Show we can define variables, make comments, print to console, define functions
// ALSO: Note that by default, it will just start running this script from the top-down as soon as it's loaded

const PI = 3.2;  // There is nothing wrong with this in Indiana in 1897
let circleRadius = 2*PI;

console.log("Radius: " + circleRadius);

function circle_area(radius, isFromIndiana) {
    const THE_ONCE_AND_FUTURE_PI = 3.1415926;
    if (isFromIndiana) {
        return radius*radius * PI;
    } else {    // Else is optional here, but it's more explicit
        return radius*radius * THE_ONCE_AND_FUTURE_PI;
    }
}

console.log("Area: " + circle_area(circleRadius, false));

for (let radius = 1; radius < 5; radius++) {
    console.log("Indiana Area: " + circle_area(radius, true));
}

//==============================================================================
// ACTUAL STUFF (bring up why defer statement was needed in the HTML when we first refer to an HTML element, so that all the elements load before we try to get them)

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
        LAUREL_QUOTE.innerText = "It is not hot";
    } else {
        TEMPERATURE_TEXT.classList.remove("cold-text");
        TEMPERATURE_TEXT.classList.add("hot-text");
        LAUREL_QUOTE.innerText = "It is hot";
    }
}

// David's Dojo stuff (shows moving elements, array/JSON notation)
const DAVID_HEAD = document.getElementById("david-dojo-david");
const OPPONENT_HEAD = document.getElementById("david-dojo-opponent");

const JIGGLE_ELEMENTS = [
    {
        "element": DAVID_HEAD,
        "original_left": -1,
        "original_top": -1,
        "jiggle_amount": 20
    },
    {
        "element": OPPONENT_HEAD,
        "original_left": -1,
        "original_top": -1,
        "jiggle_amount": 20
    }
]

// Set original position coordinates
for (let i=0; i < JIGGLE_ELEMENTS.length; i++) {
    JIGGLE_ELEMENTS[i].original_left = JIGGLE_ELEMENTS[i].element.offsetLeft;
    JIGGLE_ELEMENTS[i].original_top = JIGGLE_ELEMENTS[i].element.offsetTop;
}

console.log(JIGGLE_ELEMENTS);

// Don't go into details on async function, just explain that it means other stuff can run/it won't block BUT we can't depend on anything outside it being run in a certain order after it's called
// Actually, I've chosen not to make this async for clarity's sake
function jiggle_elements() {
    JIGGLE_ELEMENTS.forEach((jiggleEl) => {
        jiggleEl.element.style.left = `${jiggleEl.original_left
            + Math.random()*jiggleEl.jiggle_amount}px`;
        jiggleEl.element.style.top = `${jiggleEl.original_top
            + Math.random()*jiggleEl.jiggle_amount}px`;
    });
    // NOTE: This is not the proper way of doing animations
    setTimeout(jiggle_elements, 10);
}

jiggle_elements();

// finally, introduce arrow functions as a shorthand
const FIGHT_BUTTON = document.getElementById("david-dojo-fight");
FIGHT_BUTTON.addEventListener("click", () => {JIGGLE_ELEMENTS[0].jiggle_amount = 200});
