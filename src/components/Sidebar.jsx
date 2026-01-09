import React from 'react';
import { LayoutDashboard, ShieldAlert, Settings, FileText } from 'lucide-react';

export const Sidebar = ({ activePage, setActivePage }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen p-6 hidden lg:block">
      <h2 className="text-xl font-black mb-10 flex items-center gap-2 text-orange-500">
        <ShieldAlert /> SAFETY.IO
      </h2>
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActivePage(item.id)}
            className={`w-full flex items-center gap-3 p-3 rounded-lg transition cursor-pointer ${
              activePage === item.id ? 'bg-orange-500 text-white' : 'text-slate-400 hover:bg-slate-800'
            }`}
          >
            <item.icon size={20} /> {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
};