
// BASICS

var getElementValue = function(elementID){
  // TODO : write function that returns the 'Value' of a specific element
  return document.getElementById(elementID).value;
};

var setElementValue = function(elementID, text){
  // TODO : write a funcition that sets the text 'Value' of a specific element
  document.getElementById(elementID).value = text;
}

var setElementText = function(elementID, text){
  // TODO : write a function that sets the text of a specified element
  document.getElementById(elementID).innerHTML = text;
};

var convertStringToNumber = function(str){
  // TODO : write a function that takes a String and returns a Number
}

var calculate = function(){
  // TODO : use the above utility functions to get the
};



// EXTRA CREDIT

var evaluateExpression = function(stringExpression){
  // TODO : write a function that parses a string and runs that expression
  // Example : given '1+2' it should return 3
};