window.onload = function () {
  /*Menu*/
  (function () {

    var headerTop = document.getElementsByClassName('header__top')[0];
    var headerTR = headerTop.getElementsByClassName('header__top-right')[0];
    var headerLR = headerTop.getElementsByClassName('header__top-left')[0];
    var descktopMenu = headerTR.getElementsByClassName('menu')[0];
    var mobileMenu = headerLR.getElementsByClassName('menu')[0];
    var menuBodyD = headerTR.getElementsByClassName('menu-body')[0];
    var menuBodyM = headerLR.getElementsByClassName('menu-body')[0];
    var isMenuVisibleD = false;
    var isMenuVisibleM = false;

    descktopMenu.addEventListener('click', function () {
      if (!isMenuVisibleD) {
        menuBodyD.style.visibility = 'visible';
        menuBodyD.style.height = 1.8 + 'rem';
        isMenuVisibleD = true;
      } else {
        menuBodyD.style.visibility = 'hidden';
        menuBodyD.style.height = 0;
        isMenuVisibleD = false;
      }
    });

    mobileMenu.addEventListener('click', function () {
      if (!isMenuVisibleM) {
        // headerTop.style.position = 'absolute';
        headerTop.style.height = 2.2 + 'rem';
        isMenuVisibleM = true;
      } else {
        // headerTop.style.position = 'static';
        headerTop.style.height = 0.64 + 'rem';
        isMenuVisibleM = false;
      }
    });
  })();

  /*Chatr*/
  (function () {
    /*class Chart - start*/
    var Chart = function Chart(params) {
      this.name = params.name;
      this.width = params.width;
      this.value = params.value;
      this.text = params.text;
      this.textColor = params.textColor;
      this.parentElem = params.parentElem;
      this.innerCircleWidth = params.innerCircleWidth;
      this.outerCircleWidth = params.outerCircleWidth;
      this.innerColor = params.innerColor;
      this.outerColor = params.outerColor;
      this.duration = params.duration;

      var xCenter = this.width / 2,
        yCenter = this.width / 2,
        r = this.width / 2 - this.outerCircleWidth,
        p = Math.PI * 2,
        arcCornerRds = this.outerCircleWidth / 2,
        arcInnerRds = r - this.outerCircleWidth / 2,
        arcOuterRds = r + this.outerCircleWidth / 2,
        arcEndAngle = p * this.value / 100;

      var svg = d3.select(this.parentElem).append('svg');
      svg.attr('height', this.width)
        .attr('width', this.width)
        .attr('class', this.name);

      var arc = d3.arc()
        .cornerRadius(arcCornerRds)
        .innerRadius(arcInnerRds)
        .outerRadius(arcOuterRds)
        .startAngle(15);

      var g = svg.append('g');

      var circle = g.append('circle')
        .style('fill', 'transparent')
        .style('stroke', this.innerColor)
        .style('stroke-width', this.innerCircleWidth)
        .attr('cx', xCenter)
        .attr('cy', yCenter)
        .attr('r', r);
      var txt = g.append('text').text(0)
        .attr('x', xCenter)
        .attr('y', yCenter - this.width / 10)
        .style('text-anchor', 'middle')
        .style('dominant-baseline', 'central')
        .style('fill', this.outerColor || this.textColor)
        .style('font-size', this.width / 4)
        .style('font-family', 'sans-serif')
        .style('font-weight', 'bold');
      var txt2 = g.append('text').text(this.text)
        .attr('x', xCenter)
        .attr('y', yCenter + this.width / 10)
        .style('text-anchor', 'middle')
        .style('dominant-baseline', 'central')
        .style('fill', this.textColor || this.outerColor)
        .style('font-size', this.width / 10)
        .style('font-family', 'sans-serif');
      var path = g.append('path')
        .attr('transform', 'translate(' + xCenter + ', ' + yCenter + ')')
        .style('stroke', this.outerColor)
        .style('fill', this.outerColor)
        .datum({
          endAngle: 15
        })
        .attr('d', arc);

      path.transition()
        .duration(this.duration)
        .attrTween("d", arcTween(arcEndAngle + 15));

      txt.transition()
        .duration(this.duration)
        .tween("text", textTween(this.value));

      function arcTween(newAngle) {
        return function(d) {
          var interpolate = d3.interpolate(d.endAngle, newAngle);
          return function(t) {
            d.endAngle = interpolate(t);
            return arc(d);
          };
        };
      }

      function textTween(newValue) {
        return function() {
          var self = this;
          var lastValue = +self.textContent || 0;
          var i = d3.interpolateRound(lastValue, newValue);
          return function(t) {
            self.textContent = i(t);
          };
        };
      }

    };
    /*class Chart - end*/
    /*Creating and castomize new charts*/
    function createCharts() {
      var charts = document.getElementsByClassName('chart');

      var data = {
        name: 'chart-svg',
        width: 0,
        value: 0,
        text: '0',
        textColor: '#454545',
        parentElem: '',
        innerCircleWidth: 2,
        outerCircleWidth: 4,
        innerColor: '#e5e3e3',
        outerColor: '#f34739',
        duration: 3000
      };

      var values = [50, 35, 80];
      var outColors = ['#f34739', '#009989', '#152b3c'];
      var texts = ['Big Project', 'Clients', 'Month'];

      for (var i = 0; i < charts.length; i++) {
        var chart = charts[i];
        var width = 220;
        data.width = width;
        data.parentElem = charts[i];
        data.outerCircleWidth = 10;
        data.value = values[i];
        data.outerColor = outColors[i];
        data.text = texts[i];
        new Chart(data);
      }
    }
    createCharts();

    // window.addEventListener("orientationchange", function() {
    //   var charts = document.getElementsByClassName('chart');
    //
    //   for (var i = 0; i < charts.length; i++) {
    //     charts[i].removeChild(charts[i].firstChild);
    //   }
    //   createCharts();
    // });

  })();

};
