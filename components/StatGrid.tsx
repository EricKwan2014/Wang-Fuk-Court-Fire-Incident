import React from 'react';
import { StatItem } from '../types';

interface StatGridProps {
  stats: StatItem[];
}

const StatGrid: React.FC<StatGridProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className={`p-4 rounded-lg border ${stat.alert ? 'bg-red-50 border-red-200' : 'bg-white border-slate-200 shadow-sm'}`}
        >
          <div className={`text-sm font-semibold uppercase tracking-wider mb-1 ${stat.alert ? 'text-red-800' : 'text-slate-500'}`}>
            {stat.label}
          </div>
          <div className={`text-3xl font-bold mb-1 ${stat.alert ? 'text-red-600' : 'text-slate-900'}`}>
            {stat.value}
          </div>
          {stat.subtext && (
            <div className={`text-xs ${stat.alert ? 'text-red-700/70' : 'text-slate-400'}`}>
              {stat.subtext}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StatGrid;