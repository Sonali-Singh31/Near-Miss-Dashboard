import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export const TrendLineChart = ({ data }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-80">
    <h3 className="font-bold text-slate-700 mb-4">Incident Trends Over Time</h3>
    <ResponsiveContainer width="100%" height="90%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
        <XAxis 
          dataKey="date" 
          axisLine={false} 
          tickLine={false} 
          fontSize={12} 
          tickMargin={10}
        />
        <YAxis axisLine={false} tickLine={false} fontSize={12} />
        <Tooltip 
          contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} 
        />
        <Line 
          type="monotone" 
          dataKey="count" 
          stroke="#f97316" 
          strokeWidth={3} 
          dot={{ r: 4, fill: '#f97316' }} 
          activeDot={{ r: 6 }} 
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);