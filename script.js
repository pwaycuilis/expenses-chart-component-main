const data = fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return data;
    })
    .catch(error => console.log(error));


const chartContainer = document.querySelector('.chart-container');

data.then(data => {
    data.forEach(item => {
        let chart = document.createElement('div');
        chart.classList.add('chart');
        chart.innerHTML = `
        <div class="chart-wrapper">
        
        <div class="chart-value ${item.day}" style="--height:${item.amount}%"></div>
        <div class="chart-amount" id="chart-amount">$${item.amount}</div>
        </div>
        <div class="chart-title">${item.day}</div>
        `;
        chartContainer.appendChild(chart);

    })
})

