const myChart = document.getElementById("myChart");
const para =document.querySelector('#para');

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
            // console.log(chart.data.labels);
            chart.data.datasets[0].data.push(newData);
            chart.update(); // Update the chart
            
anime({
  targets: para,
  innerHTML: [0, newData],
  easing: 'linear',
  round: 10 // Will round the animated value to 1 decimal
});
        }

        // Add data at regular intervals (e.g., every 1 second)
        setInterval(addData, 2000);


 chart = new Chart(myChart,config);



//  btn.addEventListener("click",()=>{

  

//  }
 
//  )
