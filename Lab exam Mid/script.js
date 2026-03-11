function press(val){
document.getElementById("display").value += val;
}

function calculate(){
try{
document.getElementById("display").value =
eval(document.getElementById("display").value);
}
catch{
alert("Invalid Input");
}
}

function clearDisplay(){
document.getElementById("display").value = "";
}

function deleteDigit(){
let current = document.getElementById("display").value;
document.getElementById("display").value =
current.slice(0, -1);
}