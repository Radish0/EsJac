
var num1 = 0;
var op = "";
var num2 = 0;

function func(dato){ 
   document.getElementById("operazioni").value = "";
   document.getElementById("operazioni").value = dato;
   num2 = parseFloat(document.getElementById("operazioni").value);
}

function operando(dato){ 
    calcolo(dato);
    op = document.getElementById(dato).value;
    num2 = parseFloat(document.getElementById("operazioni").value);
 }

function operazione() { 
    switch(op){
        case "+":
            document.getElementById("operazioni").value = num2 + num1;
            break;
        case "-":
            document.getElementById("operazioni").value = num2 - parseFloat(document.getElementById("operazioni").value);
            break;
        case "/":
            document.getElementById("operazioni").value = num2 / parseFloat(document.getElementById("operazioni").value);
            break;
        case "*":
            document.getElementById("operazioni").value = num2 * parseFloat(document.getElementById("operazioni").value);
            break;
    }; 
}
function punt(){
    document.getElementById("operazioni").value += ".";
}

function calcolo(dato){ 
    switch(dato){
        case "+":
            num1 += parseFloat(document.getElementById("operazioni").value);
            break;
        case "-":
            num1 -= parseFloat(document.getElementById("operazioni").value);
            break;
        case "/":
            num1 /= parseFloat(document.getElementById("operazioni").value);
            break;
        case "*":
            num1 *= parseFloat(document.getElementById("operazioni").value);
            break;
    }; 
}

function cancella() { 
 document.getElementById("operazioni").value = ""; 
 num1 = 0;
 op = "";
 num2 = 0;
}