import React from 'react';
import { ContentSection } from '../types';
import { Search, TrendingUp, AlertTriangle } from 'lucide-react';

interface AnalysisProps {
  title: string;
  sections: {
    physics: ContentSection;
    economics: ContentSection;
    regulatory: ContentSection;
  };
}

const AnalysisSection: React.FC<AnalysisProps> = ({ title, sections }) => {
  const renderBody = (body: string | string[]) => {
    if (Array.isArray(body)) {
      return body.map((p, i) => <p key={i} className="mb-2 text-slate-700">{p}</p>);
    }
    return <p className="text-slate-700">{body}</p>;
  };

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-2">{title}</h2>
      <div className="grid md:grid-cols-1 gap-6">
        
        {/* Physics */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-orange-100 rounded-lg text-orange-600">
              <TrendingUp size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{sections.physics.title}</h3>
              <div className="prose prose-slate leading-relaxed">
                {renderBody(sections.physics.body)}
              </div>
            </div>
          </div>
        </div>

        {/* Economics */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
           <div className="flex items-start gap-4">
            <div className="p-3 bg-green-100 rounded-lg text-green-600">
              <Search size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{sections.economics.title}</h3>
               <div className="prose prose-slate leading-relaxed">
                {renderBody(sections.economics.body)}
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
           <div className="flex items-start gap-4">
            <div className="p-3 bg-red-100 rounded-lg text-red-600">
              <AlertTriangle size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{sections.regulatory.title}</h3>
               <div className="prose prose-slate leading-relaxed">
                {renderBody(sections.regulatory.body)}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AnalysisSection;