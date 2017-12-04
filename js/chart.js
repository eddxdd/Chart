let myChart = document.getElementById('myChart').getContext('2d');

let mainChart = new Chart(myChart, {
  type: 'bar',
  data:{
    labels:['London', 'Toronto', 'Branford', 'Waterloo'],
    datasets:[{
      label:'Population',
      data:[
        617594,
        391045,
        203060,
        256519
      ]
    }]
  },
  options:{}
});
