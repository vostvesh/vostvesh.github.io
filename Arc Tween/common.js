window.onload = function () {
  var myDiv = document.getElementsByClassName('myDiv')[0];
  var w = myDiv.offsetWidth / 3 - 30;


  var data = {
    name: 'chart',
    width: w,
    value: 50,
    parentElem: '.myDiv',
    innerCircleWidth: 4,
    outerCircleWidth: w / 10,
    innerColor: 'grey',
    outerColor: 'green',
    textColor: null,
    duration: 3000
  };

  var chart1 = new Chart(data);
  data.value = 90;
  data.outerColor = 'red';
  var chart2 = new Chart(data);
  data.value = 10;
  data.outerColor = 'lightblue';
  var chart3 = new Chart(data);
};
