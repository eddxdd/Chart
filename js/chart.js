let myChart = document.getElementById('myChart').getContext('2d');

let mainChart = new Chart(myChart, {
  type: 'bar',
  data:{
    labels:['London', 'Kitchener', 'Windsor', 'Waterloo'],
    datasets:[{
      label:'Population',
      data:[
        388.615,
        204.668,
        218.270,
        104.986
      ]
    }]
  },
  options:{}
});
