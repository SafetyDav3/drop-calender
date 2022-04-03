// ←←← Save text field to local storage →→→
// ←←← Display current day at the top of the time-blocks →→→

var nowDate = moment().format("MMMM Do, YYYY");

console.log(nowDate);




$("#currentDay").text(nowDate)