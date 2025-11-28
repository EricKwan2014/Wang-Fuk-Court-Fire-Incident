export type Language = 'en' | 'tc';

export interface StatItem {
  label: string;
  value: string;
  subtext?: string;
  alert?: boolean;
}

export interface TimelineEvent {
  time: string;
  title: string;
  description: string;
}

export interface FactCheckItem {
  claim: string;
  status: 'Verified' | 'Partially Verified' | 'False';
  evidence: string;
}

export interface ContentSection {
  title: string;
  body: string | string[]; // Can be single paragraph or array of paragraphs
}

export interface PageContent {
  title: string;
  subtitle: string;
  lastUpdated: string;
  summary: string;
  stats: StatItem[];
  timeline: {
    title: string;
    events: TimelineEvent[];
  };
  martyr: {
    title: string;
    name: string;
    rank: string;
    description: string;
  };
  analysis: {
    title: string;
    sections: {
      physics: ContentSection;
      economics: ContentSection;
      regulatory: ContentSection;
    }
  };
  factCheck: {
    title: string;
    items: FactCheckItem[];
  };
  misconceptions: {
    title: string;
    items: { myth: string; correction: string }[];
  };
  credits: string;
}