import React from 'react';
import { TimelineEvent } from '../types';
import { Clock } from 'lucide-react';

interface TimelineProps {
  title: string;
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ title, events }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <Clock className="text-blue-600" />
        {title}
      </h2>
      <div className="relative border-l-2 border-slate-200 ml-3 space-y-8">
        {events.map((event, index) => (
          <div key={index} className="relative pl-8">
            <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-white bg-blue-600 ring-4 ring-blue-50"></div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <span className="font-mono text-sm font-bold text-blue-600 min-w-[60px]">
                {event.time}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{event.title}</h3>
                <p className="text-slate-600 mt-1 leading-relaxed">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;