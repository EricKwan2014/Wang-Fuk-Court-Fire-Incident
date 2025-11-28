import React, { useState, useEffect } from 'react';
import { contentEN, contentTC } from './data';
import { Language } from './types';
import Header from './components/Header';
import StatGrid from './components/StatGrid';
import Timeline from './components/Timeline';
import AnalysisSection from './components/AnalysisSection';
import MartyrCard from './components/MartyrCard';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const content = lang === 'en' ? contentEN : contentTC;

  // Set font class based on language
  useEffect(() => {
    document.body.className = lang === 'tc' ? 'font-tc' : 'font-sans';
  }, [lang]);

  return (
    <div className="min-h-screen text-slate-800 pb-20">
      <Header lang={lang} setLang={setLang} title={content.title} />

      <main className="max-w-4xl mx-auto px-4 pt-8">
        
        {/* Hero Section */}
        <div className="mb-10 text-center md:text-left">
          <div className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
            {lang === 'en' ? 'Verified Official Report' : '官方核實報告'}
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            {content.title}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            {content.summary}
          </p>
          <p className="text-sm text-slate-400 mt-4 border-t border-slate-200 inline-block pt-2">
            Last Updated: {content.lastUpdated}
          </p>
        </div>

        <StatGrid stats={content.stats} />

        <MartyrCard data={content.martyr} />

        <Timeline title={content.timeline.title} events={content.timeline.events} />

        <AnalysisSection title={content.analysis.title} sections={content.analysis.sections} />

        {/* Fact Check Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <CheckCircle2 className="text-green-600" />
            {content.factCheck.title}
          </h2>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="p-4 text-sm font-semibold text-slate-500 uppercase">{lang === 'en' ? 'Claim' : '聲稱'}</th>
                  <th className="p-4 text-sm font-semibold text-slate-500 uppercase">{lang === 'en' ? 'Status' : '狀態'}</th>
                  <th className="p-4 text-sm font-semibold text-slate-500 uppercase hidden md:table-cell">{lang === 'en' ? 'Evidence' : '證據'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {content.factCheck.items.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="p-4 font-medium text-slate-900">{item.claim}</td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {item.status}
                      </span>
                    </td>
                    <td className="p-4 text-slate-600 text-sm hidden md:table-cell">{item.evidence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Misconceptions */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <AlertCircle className="text-amber-500" />
            {content.misconceptions.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {content.misconceptions.items.map((item, idx) => (
              <div key={idx} className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                <div className="text-amber-800 font-semibold mb-2 flex items-center gap-2">
                   <span className="text-xs bg-amber-200 px-2 py-0.5 rounded text-amber-900">MYTH</span>
                   {item.myth}
                </div>
                <div className="text-slate-800 text-sm leading-relaxed pl-2 border-l-2 border-amber-300">
                  <span className="font-bold mr-1">{lang === 'en' ? 'FACT:' : '事實:'}</span> 
                  {item.correction}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="text-center text-slate-400 text-sm py-12 border-t border-slate-200">
          <p>{content.credits}</p>
          <p className="mt-2 text-xs">This is a web representation of the forensic report.</p>
        </footer>

      </main>
    </div>
  );
};

export default App;