import React from 'react';
import { Award } from 'lucide-react';

interface MartyrProps {
  data: {
    title: string;
    name: string;
    rank: string;
    description: string;
  };
}

const MartyrCard: React.FC<MartyrProps> = ({ data }) => {
  return (
    <div className="mb-12 bg-slate-900 text-white p-8 rounded-xl shadow-lg border-l-8 border-yellow-500">
      <div className="flex items-start gap-4">
        <Award className="text-yellow-500 mt-1 flex-shrink-0" size={32} />
        <div>
          <h3 className="text-yellow-500 font-bold tracking-widest uppercase text-sm mb-2">{data.title}</h3>
          <h2 className="text-3xl font-bold mb-1">{data.name}</h2>
          <p className="text-slate-400 font-medium mb-4">{data.rank}</p>
          <p className="text-slate-300 leading-relaxed max-w-2xl">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MartyrCard;