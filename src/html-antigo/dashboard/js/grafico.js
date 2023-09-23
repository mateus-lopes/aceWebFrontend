// -------------------- grafico ---------------------- 

var ctx = document.getElementsByClassName("line-chart");

// Type, Data e options
var chartGraph = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [{
            label: ' Vendas Efetuadas em 2020 ',
            data : [10,12,24,14,35,16,17,18,19,50,61],
            borderWidth: 6,
            borderColor: '#004badb4',
            backgroundColor: 'transparent',
            
        },
        {
            label: ' Vendas Efetuadas em 2019 ',
            data : [2,14,6,8,10,40,14,16,18,20,35],
            borderWidth: 6,
            borderColor: '#23ad00b4',
            backgroundColor: 'transparent',
            
        },
        {
            label: ' Vendas Efetuadas em 2018 ',
            data : [1,13,5,7,11,13,17,30,23,27,15],
            borderWidth: 6,
            borderColor: '#7806adb4',
            backgroundColor: 'transparent',
        }]
    },
    options: {
        maintainAspectRatio: false
    }
});

