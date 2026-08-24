function checkF() {}

let a = document.getElementById("registration-form");
a.onsubmit = checkF;

// Traditional DOM Event handlers
var el = document.getElementById("change-bg1");
el.onclick = changeBackground;

var el2 = document.getElementById("removeBgh3");
el2.onmouseover = removeBackground;

// Change background color to Red
function changeBackground() {
  document.body.style.backgroundColor = "#f56a79";
}
// Remove background color from the body
function removeBackground() {
  document.body.style.backgroundColor = "";
}

var el = document.getElementById("change-bg-listener");
el.addEventListener("click", changeBackground);

// // Change to night mode
var el = document.getElementById("nightmode");
// console.log(el);
el.addEventListener("click", nightmode);

function nightmode() {
  let el = document.getElementsByTagName("body");
  el[0].classList.add("nightmode");
}


var el = document.getElementById("registration-form");
el.onsubmit = formSubmitChecker;

function formSubmitChecker(e) {
  
  var errors = [];
  var elErrorsDisplay = document.getElementById("errorsDisplay");
  elErrorsDisplay.innerHTML = "";

  var elFirstName = document.getElementsByName("first-name");

  var elPassword = document.getElementsByName("password");
  // Get their values
  var elFirstNameValue = elFirstName[0].value;
  var elPasswordValue = elPassword[0].value;

  if (!elFirstNameValue) {
    errors.push("First name field is required");
  }
  if (!elPasswordValue) {
    errors.push("Password is empty");
  } else if (elPasswordValue.length < 5) {
    errors.push("Password not strong enough");
  } else {
  }
  // if (elPasswordValue.length < 5) {
  //   errors.push("Password is empty or not strong enough");
  // }
  // console.log(errors);
  if (errors.length > 0) {
    e.preventDefault(); // Stops the form from submitting
    elErrorsDisplay.style.display = "block";
    for (var i = 0; i < errors.length; i++) {
      elErrorsDisplay.innerHTML += errors[i] + "<br>";
    }
  } else {
    alert("Submitted");
  }
}

/* Form checker first name on blur */
var elFirstName = document.getElementsByName("first-name");
var elFirstNameElement = elFirstName[0];
elFirstNameElement.onblur = checkIfNameIsEmpty;

/* Form checker password on blur */
var elPassword = document.getElementsByName("password");
var elPasswordElement = elPassword[0];
elPasswordElement.onblur = checkIfPasswordQualifies;

function checkIfNameIsEmpty() {
  var elErrorsDisplay = document.getElementById("errorsDisplay");
  var elFirstName = document.getElementsByName("first-name");
  var elFirstNameElement = elFirstName[0];
  var elFirstNameElementValue = checkIfNameIsEmpty.value;
  if (!elFirstNameElementValue) {
    elErrorsDisplay.style.display = "block";
    elErrorsDisplay.innerHTML += "First name field is required <br>";
    elFirstNameElement.style.border = "1px solid pink";
  }
}

function checkIfPasswordQualifies() {
  var elErrorsDisplay = document.getElementById("errorsDisplay");
  var elPassword = document.getElementsByName("password");
  console.log(elPassword);

  var elPasswordElement = elPassword[0];
  var elPasswordValue = elPassword[0].value;
  if (elPasswordValue.length < 5) {
    elErrorsDisplay.style.display = "block";
    elErrorsDisplay.innerHTML += "Password is empty or not strong enough <br>";
    elPasswordElement.style.border = "1px solid pink";
  }
}
