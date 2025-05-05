
var isDate = function (input) {
  if (input instanceof Date && !isNaN(input.getTime())) {
    return true;
  }
  const date = new Date(input);
  return !isNaN(date.getTime());
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(String(isDate(input))); // Always a string for alert
