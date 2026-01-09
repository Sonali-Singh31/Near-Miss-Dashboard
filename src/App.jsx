import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { Reports } from './components/Reports';
import { Settings } from './components/Settings';

function App() {
  const [activePage, setActivePage] = useState('dashboard');

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {activePage === 'dashboard' && <Dashboard />}
        {activePage === 'reports' && <Reports />}
        {activePage === 'settings' && <Settings />}
      </main>
    </div>
  );
}

export default App;