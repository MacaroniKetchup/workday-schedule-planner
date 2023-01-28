// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

  // Displays the current Date and Time
  var today = dayjs();
  $('#currentDay').text(today.format('MMMM D, YYYY h:mm:ss a '));


  // Displays the current day of the week
  var dayWeek = today.format('[Today is] dddd');
  $('#weekDay').text(dayWeek);

  function hourTracker() {
    //get current number of hours.
    var currentHour = moment().hour(); // use of moment.js

    // loop over time blocks
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("hour")[1]);
      console.log(blockHour, currentHour)

      //check if we've moved past this time, click into css/html given classes of past, present, or future
      if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      }
      else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    })

    hourTracker();

  }

  

})


var textInput = document.querySelector(".description");
var hourBlock = document.querySelector(".hour");
var saveBtn = document.querySelector(".saveBtn");

var timeBlocks = localStorage.getItem(".description",".hour");

renderTimeBlocks();

function renderTimeBlocks() {
  var text = localStorage.getItem(".desctiption");
  var hour = localStorage.getItem(".hour");

  if (!textInput || !hourBlock) {
    return;
  }

//  descriptionTextArea.textContent = text;

}

saveBtn.addEventListener("click", function(event) {
  event.displayText;

  var text = document.querySelector(".description").value;

  localStorage.setItem(".description", text);
  localStorage.setItem(".hour", hour);
  renderTimeBlocks();
});





// Reference code:
// var emailInput = document.querySelector("#email");
// var passwordInput = document.querySelector("#password");
// var signUpButton = document.querySelector("#sign-up");
// var msgDiv = document.querySelector("#msg");
// var userEmailSpan = document.querySelector("#user-email");
// var userPasswordSpan = document.querySelector("#user-password");


// renderLastRegistered();

// function displayMessage(type, message) {
//   msgDiv.textContent = message;
//   msgDiv.setAttribute("class", type);
// }

// function renderLastRegistered() {
//   var email = localStorage.getItem("email");
//   var password = localStorage.getItem("password");

//   if (!email || !password) {
//     return;
//   }

//   userEmailSpan.textContent = email;
//   userPasswordSpan.textContent = password;
// }

// signUpButton.addEventListener("click", function(event) {
//   event.preventDefault();

//   var email = document.querySelector("#email").value;
//   var password = document.querySelector("#password").value;

//   if (email === "") {
//     displayMessage("error", "Email cannot be blank");
//   } else if (password === "") {
//     displayMessage("error", "Password cannot be blank");
//   } else {
//     displayMessage("success", "Registered successfully");

//     localStorage.setItem("email", email);
//     localStorage.setItem("password", password);
//     renderLastRegistered();
//   }
// });


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
 
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


