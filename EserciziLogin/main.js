function Registrazione(){
    if(document.getElementById("errori").innerHTML==""){
    }
    else{
        document.getElementById("errori").innerHTML="";
    }
    var form = {
        nome : document.getElementById("nome").value,
        cognome : document.getElementById("cognome").value,
        email : document.getElementById("email").value,
        data : document.getElementById("data").value,
        password : document.getElementById("password1").value,
        password2 : document.getElementById("password2").value
    }
    console.log(form);
    Controlli(form);
    if(document.getElementById("errori").innerHTML==""){
        InserisciInDB(form);
    }
    else{
    }
}

function Login(){
    var utente = undefined;
    var u;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password1").value;
    var errori = document.getElementById("errori");
    for(var i = 0; i < utenti.length; i++) {
        u = utenti[i];
        if(u.mail == email) {
            utente = u;
            if(u.password == password){
                goToPage("home.html");
                return utente;
            }
            else{
                errori.innerHTML = "Password errata";
            }
        }
    }
    if(utente == undefined){
        errori.innerHTML = "Mail non esiste"
    }
}

function Controlli(form){
    var data = new Date(form.data);
    if(data.getTime() >= new Date().getTime()){
        document.getElementById("errori").innerHTML="La data non può esser futura";
    }
    if(form.password == form.password2){
        var passw = /^.*(?=.{10,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;
        var pw = form.password;
        if(pw.match(passw)) { 
            return true;
        }
        else
        { 
            document.getElementById("errori").innerHTML="La password deve contenere una maiuscola, una minuscola, un carattere speciale, un numero e esser lunga 10 caratteri";
            return false;
        }
    }
    else{
        document.getElementById("errori").innerHTML="Le password non corrispondono";
        return false;
    }
}

function CambiaPagina(page){
    window.location.href = page;
}
