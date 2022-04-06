// ←←← Display current day at the top of the time-blocks →→→
var nowDate = moment().format("MMMM Do, YYYY");
$("#currentDay").text(nowDate);

// Create click event the takes the text-block area and sets into local storage based on the time-blocks time id
$(".saveBtn").on("click", function () {
  var divId = $(this).parent().attr("id");
  var textValue = $(this).siblings(".user-text-entry").val();

  localStorage.setItem(divId, textValue);
});

var currentHour = moment().hours();
$(".hour-block").each(function () {
  var hourBlock = $(this).attr("id");
  if (currentHour > hourBlock) {
    $(this).removeClass("present future");
    $(this).addClass("past");
  }

  if (currentHour == hourBlock) {
    $(this).removeClass("past future");
    $(this).addClass("present");
  }

  if (currentHour < hourBlock) {
    $(this).removeClass("present past");
    $(this).addClass("future");
  }
});

// On page load data from local storage to element by id
$("#9 .user-text-entry").val(localStorage.getItem("9"));
$("#10 .user-text-entry").val(localStorage.getItem("10"));
$("#11 .user-text-entry").val(localStorage.getItem("11"));
$("#12 .user-text-entry").val(localStorage.getItem("12"));
$("#13 .user-text-entry").val(localStorage.getItem("13"));
$("#14 .user-text-entry").val(localStorage.getItem("14"));
$("#15 .user-text-entry").val(localStorage.getItem("15"));
$("#16 .user-text-entry").val(localStorage.getItem("16"));
$("#17 .user-text-entry").val(localStorage.getItem("17"));
