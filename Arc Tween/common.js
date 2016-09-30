window.onload = function () {
  var myDiv = document.getElementsByClassName('myDiv')[0];
  var w = myDiv.offsetWidth / 3 - 30;

  var data = {
    name: 'chart',
    width: w,
    value: 50,
    text: 'Big Project',
    textColor: '#454545',
    parentElem: '.myDiv',
    innerCircleWidth: 4,
    outerCircleWidth: w / 10,
    innerColor: '#e5e3e3',
    outerColor: '#f34739',
    duration: 3000
  };

  var chart1 = new Chart(data);
  data.value = 35;
  data.outerColor = '#009989';
  data.text = 'Clients';
  var chart2 = new Chart(data);
  data.value = 80;
  data.outerColor = '#152b3c';
  data.text = 'Month';
  var chart3 = new Chart(data);

  window.onresize = function () {
    var myDiv = document.getElementsByClassName('myDiv')[0];
    var w = myDiv.offsetWidth / 3 - 30;
    var scale = w / data.width;

    var charts = document.getElementsByClassName('chart');

    for (var i = 0; i < charts.length; i++) {
      var chart = charts[i];
      var g = chart.firstElementChild;
      g.style.transform = 'scale(' + scale + ')';
      chart.setAttribute('width', w);
      chart.setAttribute('height', w);
    }
  };
};
