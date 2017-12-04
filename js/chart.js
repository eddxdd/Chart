let myChart = document.getElementById('myChart').getContext('2d');

let mainChart = new Chart(myChart, {
  type: 'bar',
  data:{
    labels:['London', 'Toronto', 'Branford', 'Waterloo'],
    datasets:[{
      label:'Population',
      data:[
        617594,
        191045,
        153060,
        106519
      ]
    }]
  },
  options:{}
});
