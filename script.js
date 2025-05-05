var isDate = function (input) {
  if (input instanceof Date && !isNaN(input)) {
    // Valid Date object
    return true;
  }
  if (typeof input === "string" || typeof input === "number") {
    const date = new Date(input);
    return !isNaN(date.getTime()); // Check if valid date
  }
  return false; // All other types are not dates
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));

