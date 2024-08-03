import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const SensexValue = ({value}) => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <AreaChart
        data={value}
        margin={{
          top: 10,
          right: 30,
          left: 30,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" tick={{ angle: -45, textAnchor: 'end' }} height={70} />
        <YAxis />
        <Tooltip contentStyle={{ backgroundColor: '#f5f5f5', border: '1px solid #ccc' }} />
        <Legend verticalAlign="top" height={36}/>
        <Area type="monotone" dataKey="open" stroke="#8884d8" fillOpacity={0.3} fill="#8884d8" />
        <Area type="monotone" dataKey="close" stroke="#82ca9d" fillOpacity={0.5} fill="#82ca9d" />
        <Area type="monotone" dataKey="low" stroke="#ffc658" fillOpacity={0.1} fill="#ffc658" />
        <Area type="monotone" dataKey="high" stroke="#ff7300" fillOpacity={0.3} fill="#ff7300" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SensexValue;
