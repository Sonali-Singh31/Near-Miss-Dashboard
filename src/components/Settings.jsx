import React from 'react';
import { Save, Bell, Shield, User } from 'lucide-react';

export const Settings = () => (
  <div className="p-8 overflow-y-auto h-full bg-slate-50">
    <div className="max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-black text-slate-900">System Settings</h1>
        <p className="text-slate-500">Manage your safety dashboard configurations and alert thresholds.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Navigation Tabs (Visual only) */}
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-slate-200 text-orange-600 font-bold">
            <Shield size={20} /> General
          </div>
          <div className="flex items-center gap-3 p-3 text-slate-500 hover:bg-white rounded-xl transition cursor-pointer">
            <Bell size={20} /> Notifications
          </div>
          <div className="flex items-center gap-3 p-3 text-slate-500 hover:bg-white rounded-xl transition cursor-pointer">
            <User size={20} /> User Access
          </div>
        </div>

        {/* Right Content Area */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold mb-6 text-slate-800">Dashboard Configuration</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Project Environment Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition" 
                  defaultValue="Safety Analytics Dashboard 2026" 
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Default Alert Threshold</label>
                <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none cursor-pointer">
                  <option>Severity Level 4 (Critical Only)</option>
                  <option>Severity Level 3 & Above (High Risk)</option>
                  <option selected>Severity Level 2 & Above (Moderate)</option>
                  <option>All Levels</option>
                </select>
                <p className="mt-2 text-xs text-slate-400 italic">This affects which incidents trigger "Critical/High" KPI alerts.</p>
              </div>

              <div className="pt-4 flex gap-4">
                <button className="flex-1 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition flex items-center justify-center gap-2">
                  <Save size={18} /> Save Settings
                </button>
                <button className="px-6 py-3 border border-slate-200 text-slate-600 rounded-xl font-bold hover:bg-slate-100 transition">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);