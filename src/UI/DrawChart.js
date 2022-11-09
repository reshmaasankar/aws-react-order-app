import * as d3 from "d3";
import './Chart.css'

const DrawChart = (element, data) => {
    const colors = ["#05BBD2", "#2070C4", "#EB80F1", "#F5C842", "#37D400"];
    const boxSize = 100;
    d3.select(element).select("svg").remove();

    const svg = d3
        .select(element)
        .append("svg")
        .attr("preserveAspectRatio", "xMidYMid meet")
        .attr("height", "300px")
        .attr("width", "92%")
        .attr("class", "svg-container")
        .attr("viewBox", `0 0 ${boxSize} ${boxSize}`)
        .append("g")
        .attr("transform", `translate(${boxSize / 2}, ${boxSize / 2})`);

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
    console.log('piegen', pieGenerator)

    const arcs = svg.selectAll().data(pieGenerator(data)).enter();
    arcs
        .append("path")
        .attr("d", arcGenerator)
        .style("fill", (d, i) => colors[i % data.length]);
};

export default DrawChart