const myChart = document.getElementById("myChart");

let chart;

const data = {
  labels: [],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

const config = {
    type: 'line',
    data: data,
 
  };
// Function to add random data
        function addData() {
            const newData = Math.random() * 100; // Generate random data
            chart.data.labels.push(chart.data.labels.length);
            console.log(chart.data.labels);
            chart.data.datasets[0].data.push(newData);
            chart.update(); // Update the chart
        }

        // Add data at regular intervals (e.g., every 1 second)
        setInterval(addData, 2000);


 chart = new Chart(myChart,config);
