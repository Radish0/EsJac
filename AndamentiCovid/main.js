var dataInizio=new Date("2020-02-24")
var dataFine=new Date("2020-03-01")
var indiceDati = 0
var myChart = undefined

function prendiDati(){
    var settimana = DATI.slice(indiceDati,indiceDati+7)
    var labels=[]
    var contagi=[]
    for(var i=0;i<7;i++){
        var data=settimana[i].data
        data=data.slice(0,10)
        labels.push(data)
        contagi.push(settimana[i].nuovi_positivi)
    }
    printDate();
    printChart(labels,contagi)

}
function goToSettimana(indice){
    if(indice == +1){
        if(indiceDati+14>=DATI.length){
            printError("Non ci sono settimane successive disponibili")
            return;
        }
        dataInizio = new Date(dataInizio.getTime()+(1000*60*60*24*7))
        dataFine = new Date(dataFine.getTime()+(1000*60*60*24*7))
        indiceDati=indiceDati+7
    }
    else if(indice == -1){
        if(indiceDati == 0){
            printError("Non ci sono settimane precedenti disponibili")
            return;
        }
        dataInizio = new Date(dataInizio.getTime()-(1000*60*60*24*7))
        dataFine = new Date(dataFine.getTime()-(1000*60*60*24*7))
        indiceDati=indiceDati-7
    }
    prendiDati()
}

function printError(errore){
    var erroriBox = document.getElementById("erroriBox")
    erroriBox.innerHTML=""
    erroriBox.innerHTML=errore
}

function printDate(){
    var dataBox = document.getElementById("dataBox")
    var inizio = dataInizio.toISOString().slice(0,10)
    var fine = dataFine.toISOString().slice(0,10)
    inizio=inizio.replaceAll("-","/")
    fine=fine.replaceAll("-","/")
    dataBox.innerHTML=inizio+" - "+fine
}
prendiDati();


function printChart(labels,contagi) {

const ctx = document.getElementById('myChart').getContext("2d");
//ctx.destroy();
if(myChart!=undefined)
    myChart.destroy()

myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Contagi Giornalieri',
            data: contagi,
            backgroundColor: [
                'rgba(255, 55, 55, 0.8)',
            ],
            borderColor: [
                'rgba(255, 55, 55, 0.8)',
            ],
            borderWidth: 1
        }]
    },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}