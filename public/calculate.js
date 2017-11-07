

var runningTotal, leftNum, rightNum;


function Addition(num1, num2)
{
    return num1 + num2;
}

function Subtraction(num1, num2)
{
    return num1 - num2;
}

function Division(num1 , num2)
{
    return num1 / num2;
}

function Multiplication(num1 , num2)
{
    return num1 * num2;
}

function calculate(num1, num2)
{

}

function calculatorBox() {
  //  document.getElementById('inputBox').value=''
} 

function add_field()
{
  var total_text=document.getElementsByClassName("input_text");
  total_text=total_text.length+1;
  document.getElementById("field_div").innerHTML=document.getElementById("field_div").innerHTML+
  "<p id='input_text"+total_text+"_wrapper'><input type='text' class='input_text' id='input_text"+total_text+"' placeholder='Enter Text'><input type='button' value='Remove' onclick=remove_field('input_text"+total_text+"');></p>";
}
function remove_field(id)
{
  document.getElementById(id+"_wrapper").innerHTML="";
}