import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const TimeAreaChart = ({ data }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-80">
    <h3 className="font-bold text-slate-700 mb-4">Volume Analysis</h3>
    <ResponsiveContainer width="100%" height="90%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
        <XAxis dataKey="date" hide />
        <YAxis axisLine={false} tickLine={false} fontSize={12} />
        <Tooltip />
        <Area 
          type="step" 
          dataKey="count" 
          stroke="#10b981" 
          fillOpacity={1} 
          fill="url(#colorCount)" 
          strokeWidth={2}
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);