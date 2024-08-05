import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="custom-tooltip" style={{
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
      }}>
        <p className="label">{`Time: ${data.time}`}</p>
        <p className="intro" style={{ color: '#8884d8' }}>{`Open: ${data.open}`}</p>
        <p className="intro" style={{ color: '#82ca9d' }}>{`Close: ${data.close}`}</p>
        <p className="intro" style={{ color: '#ffc658' }}>{`Low: ${data.low}`}</p>
        <p className="intro" style={{ color: '#ff7300' }}>{`High: ${data.high}`}</p>
      </div>
    );
  }

  return null;
};

const SensexValue = ({ value }) => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <AreaChart
        data={value}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis
          dataKey="time"
          tick={{ angle: -45, textAnchor: 'end', fontSize: 12 }}
          height={70}
          tickLine={false}
          axisLine={{ stroke: '#ccc' }}
        />
        <YAxis
          tick={{ fontSize: 12 }}
          tickLine={false}
          axisLine={{ stroke: '#ccc' }}
          tickCount={10}  // Ensure a decent number of ticks
          domain={['auto', 'auto']} // Automatically adjust the domain
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          verticalAlign="top"
          height={36}
          iconType="circle"
          iconSize={10}
          wrapperStyle={{ fontSize: '12px', fontWeight: 'bold' }}
        />
        <Area
          type="monotone"
          dataKey="open"
          stroke="#facc02"
          strokeWidth={2}
          fillOpacity={0.3}
          fill="url(#colorOpen)"
        />
        <defs>
          <linearGradient id="colorOpen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#facc02" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#facc02" stopOpacity={0} />
          </linearGradient>
        </defs>
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SensexValue;
