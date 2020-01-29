import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const DisplayChart = props => {
  const history = [];
  props.history &&
    Object.entries(props.history).forEach(([key, value]) => {
      history.push({ date: key, amount: value });
    });

  return (
    <React.Fragment>
      <div className="coin">
        <span>
          {" "}
          Powered by{" "}
          <a
            className="link"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.coindesk.com/price/"
          >
            CoinDesk
          </a>
          .{" "}
        </span>
      </div>
      <AreaChart
        width={800}
        height={500}
        data={history}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="amount"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>
    </React.Fragment>
  );
};

export default DisplayChart;
