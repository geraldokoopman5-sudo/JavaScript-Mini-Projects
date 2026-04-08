const numBox = document.getElementById("numBox");
const ToFairh = document.getElementById("ToFairh");
const ToCel = document.getElementById("ToCel");
const result = document.getElementById("result");


function convert(){
    if(ToFairh.checked){

        temp = Number(numBox.value);
        temp = temp * 9/5 + 32;
        result.textContent = temp.toFixed(1) + "F";     

    }
    else if(ToCel.checked){
        temp = Number(numBox.value);
        temp = temp(-32) * (5/9);
        result.textContent = temp.toFixed(1) + "⋄C";   
    }
    else{
        result.textContent ="Please enter a unit";
    }
};