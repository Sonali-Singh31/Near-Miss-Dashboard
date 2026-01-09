import React from 'react';
import { useNearMissData } from '../hooks/useNearMissData';

export const Reports = () => {
  const { rawData, loading } = useNearMissData();

  if (loading) return <div className="p-8 text-center text-slate-500">Loading Records...</div>;

  return (
    <div className="p-8 overflow-y-auto h-full">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-black text-slate-900">Incident Logs</h1>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="p-4 text-slate-600 font-bold uppercase text-xs">Incident ID</th>
                <th className="p-4 text-slate-600 font-bold uppercase text-xs">Category</th>
                <th className="p-4 text-slate-600 font-bold uppercase text-xs">Severity</th>
                <th className="p-4 text-slate-600 font-bold uppercase text-xs">Location</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rawData.slice(0, 50).map((item, index) => (
                <tr key={index} className="hover:bg-slate-50 transition">
                  <td className="p-4 text-slate-600 font-medium">#{item.incident_number}</td>
                  <td className="p-4 text-slate-600">{item.primary_category || "N/A"}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-md text-xs font-bold ${
                      item.severity_level >= 3 ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                    }`}>
                      Level {item.severity_level}
                    </span>
                  </td>
                  <td className="p-4 text-slate-600">{item.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};