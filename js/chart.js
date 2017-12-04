let myChart = document.getElementById('myChart').getContext('2d');

let mainChart = new Chart(myChart, {
  type: 'bar',
  data:{
    labels:['Toronto', 'London', 'Branford', 'Waterloo'],
    datasets:[{
      label:'Population',
      data:[
        617594,
        491045,
        253060,
        356519
      ]
    }]
  },
  options:{}
});
