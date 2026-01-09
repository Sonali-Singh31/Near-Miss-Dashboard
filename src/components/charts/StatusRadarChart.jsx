import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

export const StatusRadarChart = ({ data }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-80">
    <h3 className="font-bold text-slate-700 mb-4">Incident Resolution Status</h3>
    <ResponsiveContainer width="100%" height="90%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid stroke="#e2e8f0" />
        <PolarAngleAxis dataKey="subject" fontSize={12} />
        <PolarRadiusAxis angle={30} domain={[0, 'auto']} fontSize={10} />
        <Radar
          name="Incidents"
          dataKey="A"
          stroke="#3b82f6"
          fill="#3b82f6"
          fillOpacity={0.5}
        />
        <Tooltip />
      </RadarChart>
    </ResponsiveContainer>
  </div>
);