const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function test(name, testFunction) {
  console.group(name);
  testFunction();
  console.groupEnd();
}

function equal(expected, actual, message) {
    if (expected === actual) {
      const defaultMessage = `Expected ${expected} and received ${actual}`;
      console.info("Pass: " + (message || defaultMessage));
    } else {
      const defaultMessage = `Expected ${expected} but received ${actual} instead`;
      console.error("Fail: " + (message || defaultMessage));
    }
  }


  
  // test("Correctly add integers", () => {
  //   equal(calculate(1,"+",2), 3);
  // });

   
  // test("Correctly subtract integers", () => {
  //   equal(calculate(1,"-",2), -1);
  // });

  // test("Correctly multiply integers", () => {
  //   equal(calculate(1,"*",2), 2);
  // });

  // test("Correctly divide integers", () => {
  //   equal(calculate(1,"/",2), 0.5);
  // });

  // test("Calculate with string", () => {
  //   equal(calculate("1","+","2"), 3);
  // });

  // test("correct sign", () => {
  //   equal(calculate("1","%","2"), "Please enter a valid sign (+, -, *, /)");
  // });

function calculate(a, sign, b) {
  switch (sign) {
    case "+":
      results.value = add(parseInt(a), parseInt(b));
      return add(parseInt(a), parseInt(b));
    case "-":
      results.value = subtract(parseInt(a), parseInt(b))
      return subtract(parseInt(a), parseInt(b));
    case "*":
      results.value = multiply(parseInt(a), parseInt(b));
      return multiply(parseInt(a), parseInt(b));
    case "/":
      results.value = divide(parseInt(a), parseInt(b));
      return divide(parseInt(a), parseInt(b));
    default:
      return "Please enter a valid sign (+, -, *, /)";
  }
}


// const a = document.querySelector("#a");
// const b = document.querySelector("#b");
// const sign = document.querySelector("#sign")

const form = document.querySelector("form");
const data = new FormData(form);
const a = document.querySelector("#a");
const b = document.querySelector("#b");
const sign = document.querySelector("#sign")
const button = document.querySelector("#button")
const results = document.querySelector("#results")


button.addEventListener("click", function(){
  event.preventDefault()
  if(sign.value == "+"){
      test("Dom addition", () => {
       calculate(a.value,sign.value,b.value);
       equal(parseInt(results.value),3)
      });
    } else if(sign.value == "-"){
      test("Dom subtraction", () => {
        calculate(a.value,sign.value,b.value);
       equal(parseInt(results.value),-1)
      });
    }
    else if(sign.value == "*"){
      test("Dom Multiplication", () => {
        calculate(a.value,sign.value,b.value);
       equal(parseInt(results.value),2)
      });
    }
    else if(sign.value == "/"){
      test("Dom Division", () => {
        calculate(a.value,sign.value,b.value);
       equal(parseInt(results.value),0.5)
      });
    }
    // else if(sign.value = "-"){
    //   test("Dom subtraction", () => {
    //     equal(calculate(a.value,sign.value,b.value), -1);
    //   });
    // } 
    // else if(sign.value = "*"){
    //   test("Dom multiplication", () => {
    //     equal(calculate(a.value,sign.value,b.value), 2);
    //   });
      
    // } 
    // else if(sign.value = "/"){
    //   test("Dom division", () => {
    //     equal(calculate(a.value,sign.value,b.value), 0.5);
    //   });
    // }
})