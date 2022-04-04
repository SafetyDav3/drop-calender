// ←←← Save text field to local storage →→→
var userData = [{
    "t-9": "",
    "t-10": "",
    "t-11": "",
    "t-12": "",
    "t-13": "",
    "t-14": "",
    "t-15": "",
    "t-16": "",
    "t-17": "",
}]

console.log(userData)
// $("#save-9").on('click', function())

// ←←← Display current day at the top of the time-blocks →→→
var nowDate = moment().format("MMMM Do, YYYY");
$("#currentDay").text(nowDate)


