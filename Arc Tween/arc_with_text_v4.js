var Chart = function Chart(params) {
  this.name = params.name;
  this.width = params.width;
  this.value = params.value;
  this.parentElem = params.parentElem;
  this.innerCircleWidth = params.innerCircleWidth;
  this.outerCircleWidth = params.outerCircleWidth;
  this.innerColor = params.innerColor;
  this.outerColor = params.outerColor;
  this.textColor = params.textColor;
  this.duration = params.duration;

  var xCenter = this.width / 2,
      yCenter = this.width / 2,
      r = this.width / 2 - this.outerCircleWidth / 2,
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
    .startAngle(0);

  var g = svg.append('g');

  g.append('circle')
    .style('fill', 'transparent')
    .style('stroke', this.innerColor)
    .style('stroke-width', this.innerCircleWidth)
    .attr('cx', xCenter)
    .attr('cy', yCenter)
    .attr('r', r);
  g.append('text').text(this.value)
    .attr('x', xCenter)
    .attr('y', yCenter)
    .style('text-anchor', 'middle')
    .style('dominant-baseline', 'central')
    .style('fill', this.textColor || this.outerColor)
    .style('font-size', this.width / 4)
    .style('font-family', 'sans-serif')
    .style('font-weight', 'bold');
var path = g.append('path')
    .attr('transform', 'translate(' + xCenter + ', ' + yCenter + ')')
    .style('stroke', this.outerColor)
    .style('fill', this.outerColor)
    .datum({endAngle: 0})
    .attr('d', arc)
    ;
    path.transition()
        .duration(this.duration)
        .attrTween("d", arcTween(arcEndAngle));

  function arcTween(newAngle) {
    return function(d) {
      var interpolate = d3.interpolate(d.endAngle, newAngle);
      return function(t) {
        d.endAngle = interpolate(t);
        return arc(d);
      };
    };
  }
};