const ctx = document.getElementById("BarChart");

new Chart(ctx, {
    type: "bar",
    data: {
        labels: ['Zadronga','Pesnikan','Doan-Mpaow'],
        datasets: [{
            label: 'Deaths in the 2nd Paola War (Millions)',
            data: [0.1, 0.5, 3],
            borderWidth: 1,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})