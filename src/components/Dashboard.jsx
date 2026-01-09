import React from 'react';
import { useNearMissData } from '../hooks/useNearMissData';
import { StatCard } from './StatCard';
import { CategoryBarChart } from './charts/CategoryBarChart';
import { SeverityPieChart } from './charts/SeverityPieChart';
import { TrendLineChart } from './charts/TrendLineChart';
import { StatusRadarChart } from './charts/StatusRadarChart';
import { TimeAreaChart } from './charts/TimeAreaChart';
import { Activity, AlertOctagon, CheckCircle } from 'lucide-react';

export const Dashboard = () => {
  const { stats, loading } = useNearMissData();

  if (loading) return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-screen bg-slate-50">
      <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-slate-500 font-medium">Analyzing 7,836 Safety Records...</p>
    </div>
  );

  return (
    <div className="flex-1 p-8 overflow-y-auto bg-slate-50 h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Safety Analytics Dashboard</h1>
          <p className="text-slate-500">Construction Near-Miss Intelligence Report</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Total Near Misses" value={stats.total} icon={Activity} color="bg-blue-600" />
          <StatCard title="Critical (Lvl 3-4)" value={stats.highPriority} icon={AlertOctagon} color="bg-red-600" />
          <StatCard title="Low Risk (Lvl 0-1)" value={stats.resolvedCases} icon={CheckCircle} color="bg-emerald-600" />
        </div>

        {/* Chart Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CategoryBarChart data={stats.byCategory} />
          <SeverityPieChart data={stats.bySeverity} />
          <TrendLineChart data={stats.trend} />
          <StatusRadarChart data={stats.statusData} />
          <div className="lg:col-span-2">
            <TimeAreaChart data={stats.trend} />
          </div>
        </div>

        <footer className="text-center py-10 text-slate-400 text-xs border-t border-slate-200">
          Data Integrity Verified • Powered by React & Vite • {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
};