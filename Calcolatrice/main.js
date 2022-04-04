var num1 = 0;
var op = "";
var num2 = 0;
var conta = 0;
var ris = 0;

function func(dato){
   document.getElementById("errori").innerHTML = "";
   document.getElementById("operazioni").value += dato;
   num1 = parseFloat(document.getElementById("operazioni").value) ;
   attiva(0);
}

function operando(dato){ 
    if(conta >0)
        calcolo();
    op = document.getElementById(dato).value;
    num2 = parseFloat(document.getElementById("operazioni").value);
    document.getElementById("operazioni").value = "";
    conta++;
}

function operazione() {
    var prova = Number(document.getElementById("operazioni").value);
    if(isNaN(prova)){
        document.getElementById("operazioni").value = eval(document.getElementById("operazioni").value)
    }
    else{
        switch(op){
            case "+":
                if(ris == 0){
                    document.getElementById("operazioni").value = num1 + num2; 
                }
                else{
                    document.getElementById("operazioni").value = num1 + ris;
                }
                break;
            case "-":
                if(ris == 0){
                    document.getElementById("operazioni").value = num2 - num1; 
                }
                else{
                    document.getElementById("operazioni").value = ris - num1;
                }
                break;
            case "/":
                if(num1 == 0){  
                    document.getElementById("errori").innerHTML = "Non si può dividere per 0";
                    cancella();
                }
                else if(ris == 0){
                    document.getElementById("operazioni").value = num2 - num1; 
                }
                else{
                    document.getElementById("operazioni").value = ris / num1 ;
                }
                break;
            case "*":
                if(ris == 0){
                    document.getElementById("operazioni").value = num2 - num1; 
                }
                else{
                    document.getElementById("operazioni").value = ris * num1;
                }   
                break;
        };
    } 
}
function punt(){
    document.getElementById("operazioni").value += ".";
}

function calcolo(){ 
    switch(op){
        case "+":
            ris = num2 + num1;
            break;
        case "-":
            ris = num2 - num1;
            break;
        case "/":
            if(num1 == 0){  
                document.getElementById("errori").innerHTML = "Non si può dividere per 0";
                cancella();
            }
            ris = num2 / num1;
            break;
        case "*":
            ris = num2 * num1;
            break;
    }; 
}

function cancella() { 
 document.getElementById("operazioni").value = "";  
 num1 = 0;
 op = "";
 num2 = 0;
 conta = 0;
 attiva(1);
 document.getElementById("operazioni").value = "";
}

function attiva(controllo){
    if(controllo == 0){
        document.getElementById("/").disabled = false;
        document.getElementById("*").disabled = false;
        document.getElementById("-").disabled = false;
        document.getElementById("+").disabled = false;
        document.getElementById("radc").disabled = false;
        document.getElementById("radq").disabled = false;
        document.getElementById("x2").disabled = false;
        document.getElementById("x3").disabled = false;    
    }
    else{
        document.getElementById("/").disabled = true;
        document.getElementById("*").disabled = true;
        document.getElementById("-").disabled = true;
        document.getElementById("+").disabled = true;
        document.getElementById("radc").disabled = true;
        document.getElementById("radq").disabled = true;
        document.getElementById("x2").disabled = true;
        document.getElementById("x3").disabled = true
    }
}

function risultato(){
    document.getElementById("operazioni").value = eval(document.getElementById("operazioni").value);
}

function quad(dato){
    var numero =  parseFloat(document.getElementById("operazioni").value);
    switch(dato){
        case "x2":
            document.getElementById("operazioni").value = Math.pow(numero,2);
            break;
        case "x3":
            document.getElementById("operazioni").value = Math.pow(numero,3);
            break;
        case "radq":
            document.getElementById("operazioni").value = Math.sqrt(numero);
            break;
        case "radc":
            document.getElementById("operazioni").value = Math.cbrt(numero);
            break;
            break;
    }; 
}