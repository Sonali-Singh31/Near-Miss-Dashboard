import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const COLORS = ['#ef4444', '#f97316', '#3b82f6', '#10b981'];

export const SeverityPieChart = ({ data }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-80">
    <h3 className="font-bold text-slate-700 mb-4">Severity Breakdown</h3>
    <ResponsiveContainer width="100%" height="90%">
      <PieChart>
        <Pie data={data} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
          {data.map((_, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
        </Pie>
        <Tooltip />
        <Legend iconType="circle" verticalAlign="bottom" />
      </PieChart>
    </ResponsiveContainer>
  </div>
);