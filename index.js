// Getting Elements

// Get the element by ID
let firstButton = document.getElementById("myBtn");
let secondBtn = document.getElementById("secondBtn");
let divToShowChanges = document.getElementById("divToShowChanges");

// Get the element by class name
let myButtons = document.getElementsByClassName("button");

// Get the element by tag name
let myDivs = document.getElementsByTagName("div");

let form = document.getElementById("myForm");
const log = document.getElementById("log");

function submitForm(event) {
  log.textContent = `Form Submitted! Timestamp: ${
    Math.round(event.timeStamp * 100) / 100
  }`;
  event.preventDefault();
}

form.addEventListener("submit", submitForm);

window.addEventListener("load", () => console.log("Window Loaded"));
