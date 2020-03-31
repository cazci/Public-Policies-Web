import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3'
import { dataSource as DataSource } from './temp.data'

interface KeyElementValues {
  date: string
  value: number
}

interface LineElement {
  key: string
  values: Array<KeyElementValues>
}

interface DataSource extends Array<LineElement> {}

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  data = DataSource
  chartHeight = 500
  chartWidth = 500
  margin = { top: 20, right: 30, bottom: 30, left: 60 }

  constructor() {}

  ngOnInit() {
    this.createGraph(this.data, `${new Date().toDateString()}`)
    // this._createGraph(this.data, 30)
  }

  createGraph(dataSource: DataSource, breakPoint: string) {
    console.log(dataSource);

    const svgElement = d3
      .select('.line-chart')
      .attr('width', '100%')
      .attr('height', '500px')
    // .attr('viewbox', `0 0 ${this.chartWidth} ${this.chartHeight}`)

    const parseDate = d3.utcParse('%Y-%m-%d')

    const dates: Array<Date> = Object.assign([], ...dataSource.map(d => d.values.map(d2 => new Date(d2.date))))

    const values: Array<number> = Object.assign([], ...dataSource.map(d => d.values.map(d2 => d2.value)))

    const names: Array<string> = dataSource.map(d => d.key)

    const convertedDatasource = dataSource.map(d => {
      return {
        key: d.key,
        values: d.values.map(d2 => {
          return { date: new Date(d2.date), value: d2.value }
        })
      }
    })

    const x = d3
      .scaleUtc()
      .domain(d3.extent(dates, d => d))
      .range([this.margin.left, this.chartWidth - this.margin.right])

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(values, d => d)])
      .nice()
      .range([this.chartHeight - this.margin.bottom, this.margin.top])

    const z = d3.scaleOrdinal(d3.schemeCategory10).domain(names)

    const xAxis = (g: d3.Selection<SVGGElement, unknown, HTMLElement, any>, ...args: any[]) =>
      g.attr('transform', `translate(0,${this.chartHeight - this.margin.bottom})`).call(
        d3
          .axisBottom(x)
          .ticks(this.chartWidth / 80)
          .tickSizeOuter(0)
      )

    const yAxis = (g: d3.Selection<SVGGElement, unknown, HTMLElement, any>, ...args: any[]) =>
      g
        .attr('transform', `translate(${this.margin.left},0)`)
        .call(d3.axisLeft(y))
        .call(g => g.select('.domain').remove())
        .call(g =>
          g
            .select('.tick:last-of-type text')
            .clone()
            .attr('x', 3)
            .attr('text-anchor', 'start')
            .attr('font-weight', 'bold')
            .text('Close')
        )

    const line = d3
      .line()
      .defined((d: any) => !isNaN(d.value))
      .x((d: any) => x(d.date))
      .y((d: any) => y(d.value))

    svgElement.append('g').call(xAxis)

    svgElement.append('g').call(yAxis)

    // svgElement
    //   .append('g')
    //   .append('line')
    //   .attr('y1', 0)
    //   .attr('y2', this.chartHeight - this.margin.bottom)
    //   .attr('x1', x(new Date(breakPoint)))
    //   .attr('x2', x(new Date(breakPoint)))
    //   .attr('stroke', 'black')

    // svgElement
    //   .append('text')
    //   .attr('stroke-width', 3)
    //   .attr('x', x(new Date(breakPoint))+3)
    //   .attr('dy', '0.35em')
    //   .attr('style', 'font: bold 10px sans-serif;')
    //   .attr('y', 10)
    //   .text('Break point')

    const serie = svgElement
      .append('g')
      .style('font', 'bold 10px sans-serif')
      .selectAll('g')
      .data(convertedDatasource)
      .join('g')

    serie
      .append('path')
      .attr('fill', 'none')
      .attr('stroke-width', 1.5)
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round')
      .attr('stroke', d => z(d.key))
      .attr('d', (d: any) => line(d.values))

    serie
      .append('text')
      .datum(d => ({ key: d.key, value: d.values[d.values.length - 1].value }))
      .attr('fill', 'none')
      .attr('stroke', 'white')
      .attr('stroke-width', 3)
      .attr('x', x.range()[1] + 3)
      .attr('y', d => y(d.value))
      .attr('dy', '0.35em')
      .text(d => d.key)
      .clone(true)
      .attr('fill', d => z(d.key))
      .attr('stroke', null)

    svgElement.node()
  }

  _createGraph(dataSource: any, breakPoint: number) {
    const svgElement = d3
      .select('svg')
      .attr('width', '100%')
      .attr('height', `${this.chartHeight}px`)
    .attr('viewbox', `0 0 ${this.chartWidth} ${this.chartHeight}`)

    const parseDate = d3.utcParse('%Y-%m-%d')

    const dates: Array<number> = Object.assign([], ...dataSource.map(d => d.values.map(d2 => d2.date)))

    const values: Array<number> = Object.assign([], ...dataSource.map(d => d.values.map(d2 => d2.value)))

    const names: Array<string> = dataSource.map(d => d.key)

    const convertedDatasource = dataSource.map(d => {
      return {
        key: d.key,
        values: d.values.map(d2 => {
          return { date: new Date(d2.date), value: d2.value }
        })
      }
    })

    const x = d3
      .scaleLinear()
      .domain(d3.extent(dates, d => d))
      .range([this.margin.left, this.chartWidth - this.margin.right])

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(values, d => d)])
      .nice()
      .range([this.chartHeight - this.margin.bottom, this.margin.top])

    const z = d3.scaleOrdinal(d3.schemeCategory10).domain(names)

    const xAxis = (g: d3.Selection<SVGGElement, unknown, HTMLElement, any>, ...args: any[]) =>
      g.attr('transform', `translate(0,${this.chartHeight - this.margin.bottom})`).call(
        d3
          .axisBottom(x)
          .ticks(this.chartWidth / 80)
          .tickSizeOuter(0)
      )

    const yAxis = (g: d3.Selection<SVGGElement, unknown, HTMLElement, any>, ...args: any[]) =>
      g
        .attr('transform', `translate(${this.margin.left},0)`)
        .call(d3.axisLeft(y))
        .call(g => g.select('.domain').remove())
        .call(g =>
          g
            .select('.tick:last-of-type text')
            .clone()
            .attr('x', 3)
            .attr('text-anchor', 'start')
            .attr('font-weight', 'bold')
            .text('Infected count')
        )

    const line = d3
      .line()
      .defined((d: any) => !isNaN(d.value))
      .x((d: any) => x(d.date))
      .y((d: any) => y(d.value))

    svgElement.append('g').call(xAxis)

    svgElement.append('g').call(yAxis)

    svgElement
      .append('g')
      .append('line')
      .attr('y1', 0)
      .attr('y2', this.chartHeight - this.margin.bottom)
      .attr('x1', x(breakPoint))
      .attr('x2', x(breakPoint))
      .attr('stroke', 'black')

    svgElement
      .append('text')
      .attr('stroke-width', 3)
      .attr('x', x(breakPoint))
      .attr('dy', '0.35em')
      .attr('style', 'font: bold 10px sans-serif;')
      .attr('y', 10)
      .text('Break point')

    const serie = svgElement
      .append('g')
      .style('font', 'bold 10px sans-serif')
      .selectAll('g')
      .data(convertedDatasource)
      .join('g')

    serie
      .append('path')
      .attr('fill', 'none')
      .attr('stroke-width', 1.5)
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round')
      .attr('stroke', (d:any) => z(d.key))
      .attr('d', (d:any) => line(d.values))

    serie
      .append('text')
      .datum((d:any) => ({ key: d.key, value: d.values[d.values.length - 1].value }))
      .attr('fill', 'none')
      .attr('stroke', 'white')
      .attr('stroke-width', 3)
      .attr('x', x.range()[1] + 3)
      .attr('y', d => y(d.value))
      .attr('dy', '0.35em')
      .text(d => d.key)
      .clone(true)
      .attr('fill', d => z(d.key))
      .attr('stroke', null)

    svgElement.node()
  }
}
