$(document).ready(function(){
    //stores the input from user
    var input=[""];
    //String to store the current inputstring
    var totalString;
    var operators1 = ["+","-","/","*"];
    var operators2 = ["."];
    var nums=[0,1,2,3,4,5,6,7,8,9]

    function getVal(input){

    }
    function update(){
        totalString = input.join("");
        $("#steps").html(totalString);
    }
    function getTotal(){
       totalString = input.join("");
       $("#steps").html(eval(totalString));
    }
    $("a").on("click",function(){
        if(this.id==="deleteAll"){
            
        }
    });
});
