import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Label, Legend, ReferenceLine, ResponsiveContainer,
} from 'recharts';



export default class AnalyseChart extends PureComponent {
    constructor(props){
        super(props)
    }

  render() {
      console.log(this.props.items);
    return (
      <ResponsiveContainer width="95%" height={400}>
        <BarChart
          data={this.props.items}
          margin={{
            top: 5, right: 30, left: 20, bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis />
          <YAxis>
          <Label
            value={"Strokes Gained"}
            position="left"
            angle={-90}
            style={{ textAnchor: "middle" }}
          />
          </YAxis>
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
      </ResponsiveContainer>
    );
  }
}
