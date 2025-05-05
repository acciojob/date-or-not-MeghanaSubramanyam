var isDate = function (input) {
  if (input instanceof Date && !isNaN(input.getTime())) return true;
  const date = new Date(input);
  return !isNaN(date.getTime());
};

// Always convert to string for alert
const input = prompt("Enter Date.");
alert(String(isDate(input)));
