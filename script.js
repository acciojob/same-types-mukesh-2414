function isSameType(value1, value2) {
  //your js code here
  const val1IsNaN = Number.isNaN(value1);
  const val2IsNaN = Number.isNaN(value2);

  if (val1IsNaN && val2IsNaN) {
    return true;
  }
  if (val1IsNaN !== val2IsNaN) {
    return false;
  }
  return typeof value1 === typeof value2;
}


// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

alert(isSameType(value1, value2));

