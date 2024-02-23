//it will make the number display on the input field
const insertVal = (val) => {
  var display = document.getElementById("display");
  display.value += val;
  console.log(val);
};

//assigning variables to store the values and the operands later
var oper = null,
  val1 = null,
  val2 = null;

//After inserting any of the operands, this function will save the operand and empty the display
const insertOper = (op) => {
  var display = document.getElementById("display");
  oper = op;
  val1 = parseInt(display.value);
  // console.log(val1);
  console.log(op);
  clearDisplay(); //clear the display after entering the operand
};

//once we have both the values and operand this function will do the calclation part
const calculation = () => {
  if (oper === "+") {
    return val1 + val2;
  } else if (oper === "-") {
    return val1 - val2;
  } else if (oper === "*") {
    return val1 * val2;
  } else if (oper === "/") {
    return val1 / val2;
  }
};

//when we hit the "=" this function will get triggerred
const result = () => {
  var display = document.getElementById("display");
  val2 = parseInt(display.value);
  // console.log(val2);
  display.value = calculation();
  console.log(display.value);
};

//this will clear the display. used on "AC" button
const clearDisplay = () => {
  var display = document.getElementById("display");
  display.value = "";
};

// LIVE LINK
// https://65d82db9b65ad8981a43e228--extraordinary-cactus-565186.netlify.app/
