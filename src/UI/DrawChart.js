import * as d3 from 'd3';
import './Chart.css';

const DrawChart = (element, data) => {
  const colors = ['#05BBD2', '#2070C4'];
  const boxSize = 100;
  d3.select(element).select('svg').remove();

  const svg = d3
    .select(element)
    .append('svg')
    .attr('preserveAspectRatio', 'xMidYMid meet')
    .attr('height', '300px')
    .attr('width', '92%')
    .attr('class', 'svg-container')
    .attr('viewBox', `0 0 ${boxSize} ${boxSize}`)
    .append('g')
    .attr('transform', `translate(${boxSize / 2}, ${boxSize / 2})`);

  // let pie = d3.pie()
  //     .value(d => d.value)
  // let data_ready = pie(data)
  // svg
  //     .selectAll('whatever')
  //     .data(data_ready)
  //     .enter()
  //     .append('path')
  //     .attr('d', d3.arc()
  //         .innerRadius(6 / 1.75)  // This is the size of the donut hole
  //         .outerRadius(6)
  //     )
  //     .attr('fill', (d) => colors[d.index])
  //     .attr("stroke", "#fff")
  //     .style("stroke-width", "2")
  //     .style("opacity", "0.8")

  const arcGenerator = d3.arc().innerRadius(20).outerRadius(40);
  const pieGenerator = d3.pie().value((d) => d.value);

  const arcs = svg.selectAll().data(pieGenerator(data)).enter();
  arcs
    .append('path')
    .attr('d', arcGenerator)
    .style('fill', (d, i) => colors[i % data.length]);

  var legend = svg
    .append('g')
    .attr('font-family', 'sans-serif')
    .attr('font-size', 13)
    .selectAll('g')
    .data(Object.keys(data))
    .enter()
    .append('g')
    .attr('transform', function (d, i) {
      return 'translate(' + -40 + ',' + -155 + ')';
    });
  // 70 + "," + -218
  legend
    .append('circle')
    .attr('cx', 2)
    .attr('cy', function (d, i) {
      return 100 + i * 12;
    })
    .attr('r', 3)
    .style('fill', function (d, i) {
      return colors[i % data.length];
    });

  legend
    .append('text')
    .attr('x', 10)
    .attr('y', function (d, i) {
      return 100 + i * 12;
    })
    .style('fill', function (d, i) {
      return colors[i % data.length];
    })
    .text(function (d, i) {
      return data[i].month;
    })
    .attr('text-anchor', 'left')
    .style('font-size', 5)
    .style('alignment-baseline', 'middle');
};

export default DrawChart;
