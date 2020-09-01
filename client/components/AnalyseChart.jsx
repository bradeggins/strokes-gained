import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';



export default class AnalyseChart extends PureComponent {
    constructor(props){
        super(props)
    }

  render() {
      console.log(this.props.items);
    return (
      <BarChart
        width={800}
        height={500}
        data={this.props.items}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="sgt" barSize={50} fill="#008CBA" />
        <Bar dataKey="sgott" barSize={50} fill="#00729F" />
        <Bar dataKey="sga" barSize={50} fill="#002C53" />
        <Bar dataKey="sgt2g" barSize={50} fill="#00193B" />
        <Bar dataKey="sgp" barSize={50} fill="#000225" />
        <Bar dataKey="sgatg" barSize={50} fill="#00010E" />

      </BarChart>
    );
  }
}
