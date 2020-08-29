import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

export default class RenderLineChart extends PureComponent {

  constructor(props){
    super(props)
  }

  
  render() {
    console.log(this.props.round.items)
    return (
      <ResponsiveContainer width={700} height="80%">
        <LineChart
          data={this.props.round.items}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hole_number" />
          <YAxis dataKey="sg"/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sg" stroke="#008cba" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
