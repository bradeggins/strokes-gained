import React, { PureComponent } from 'react';
import {
  LineChart, Line, Label, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

export default class RenderLineChart extends PureComponent {

  constructor(props){
    super(props)
  }

  
  render() {
    console.log(this.props.round.items)
    return (
      <ResponsiveContainer width="100%" height="80%">
        <LineChart
          data={this.props.round.items}
          margin={{
            top: 30, right: 30, left: 30, bottom: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hole_number">
            <Label
              value={"Hole"}
              position="bottom"
              style={{ textAnchor: "middle" }}
            />  
          </XAxis>
          <YAxis dataKey="sg">
            <Label
            value={"Strokes Gained"}
            position="left"
            angle={-90}
            style={{ textAnchor: "middle" }}
          />
          </YAxis>
          <Tooltip />
          <Line type="monotone" dataKey="sg" stroke="#008cba" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
