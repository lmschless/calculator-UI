var add = function(number1, number2) {
    return number1 + number2;
  };
  
var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function(){
  $("#add").submit(function(){
    var number1 = parseInt($("#add1").val());
  console.log(number1)
  var number2 = parseInt($("#add2").val());
  if (number1 != NaN && number2 != NaN) {
    alert(add(number1, number2));
  }
  })

});
