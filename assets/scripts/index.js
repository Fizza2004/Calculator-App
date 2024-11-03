const displayInputWrapper = document.querySelector("#display");
const calcBtns = document.querySelectorAll('.calc-btn');
const clearAllBtn = document.querySelector('.clear-button');
const calculateBtn = document.querySelector('.equal-button');

//---CHECKS IF CHAR IS ANY MATH OPERATOR---
//--------------------------------------------------------------------
const isMathOperator = (char) => ['.','*','/','-','+'].includes(char);
//if there is any error in my calculation
let hasError = false;
//--------------------------------------------------------------------

//----DISPLAY LOGIC WHEN CLICK TO BUTTONS----
//---------------------------------------------------------------------------------------------------------------------------------------------
calcBtns.forEach((calcBtn)=>{
  calcBtn.addEventListener('click',()=>{
    let btnStrValue = calcBtn.textContent;
    let displayValue = displayInputWrapper.value;
    let lastValue = displayValue.charAt(displayValue.length-1); //shows last char of input string
    //-----If there is an error in my calculator, just don't write anything after error!!!------
    if(hasError){
      return; //stops the click function
    }

    //1st if condition explanation(LEFT): ---You cannot start calculation with operations!!!---
    //2nd if condition explanation(RIGHT): ---You cannot add two operations after one another(SIDE BY SIDE)!!!---
    if((isMathOperator(btnStrValue) && displayValue == "") || (isMathOperator(btnStrValue) && isMathOperator(lastValue) && displayValue!=="")){
      displayInputWrapper.value += "";
    } else{
      //-----Other cases, you should display button values in display!!!----
      displayInputWrapper.value += calcBtn.textContent;
    }
  })
})
//---------------------------------------------------------------------------------------------------------------------------------------------

//-----CLEAR DISPLAY WHEN CLICK TO 'C' BUTTON----
//-----------------------------------------------
clearAllBtn.addEventListener('click',()=>{
  displayInputWrapper.value="";
  hasError=false;
})
//-----------------------------------------------


//----CALCULATE RESULT WHEN CLICK TO EQUAL BUTTON----
//---------------------------------------------------
calculateBtn.addEventListener('click',()=>{
  let str = displayInputWrapper.value;
  try{
    const result = math.evaluate(str);
    displayInputWrapper.value = result;
    hasError = false;
  }
  catch{
    displayInputWrapper.value = "Error..."; 
    hasError = true;
  }
})
//---------------------------------------------------