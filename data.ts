import { PageContent } from './types';

export const contentEN: PageContent = {
  title: "Wang Fuk Court Fire Incident: Official Fact Sheet",
  subtitle: "Forensic Investigation & Incident Report",
  lastUpdated: "November 27, 2025",
  summary: "On November 26, 2025, a catastrophic Grade 5 fire occurred at Wang Fuk Court in Tai Po. The blaze, fueled by non-fire-retardant scaffolding nets, affected seven residential towers. This report consolidates verified data regarding casualties, systemic regulatory failures, and the 'Fire Dragon' phenomenon.",
  stats: [
    { label: "Fatalities", value: "44", alert: true, subtext: "Including 1 Senior Firefighter" },
    { label: "Missing", value: "279", alert: true, subtext: "Search ongoing" },
    { label: "Personnel Deployed", value: "767", subtext: "Firefighters & Paramedics" },
    { label: "Appliances", value: "128", subtext: "Fire engines & Ambulances" },
  ],
  timeline: {
    title: "Incident Timeline (Nov 26, 2025)",
    events: [
      { time: "14:51", title: "Fire Outbreak", description: "Fire starts at Wang Cheong House renovation scaffolding." },
      { time: "15:01", title: "SFF Ho Wai-ho Enters", description: "Senior Firefighter Ho enters Ground Zero for rescue operations." },
      { time: "15:30", title: "Loss of Contact", description: "Communication lost with SFF Ho Wai-ho approximately 29 minutes into operation." },
      { time: "16:01", title: "Martyr Found", description: "SFF Ho found unconscious near the elevator lobby." },
      { time: "16:45", title: "Fatality Confirmed", description: "SFF Ho declared deceased at Prince of Wales Hospital." },
    ]
  },
  martyr: {
    title: "In Memoriam",
    name: "Ho Wai-ho (37)",
    rank: "Senior Firefighter, Sha Tin Fire Station",
    description: "Served for 9 years. He made the ultimate sacrifice during the rescue operation in zero-visibility conditions."
  },
  analysis: {
    title: "Forensic Analysis of Causes",
    sections: {
      physics: {
        title: "The 'Fire Dragon' (Vertical Spread)",
        body: [
          "The rapid spread was caused by the 'Chimney Effect' within the gap between the building facade and scaffolding.",
          "The primary accelerant was non-fire-retardant nylon mesh. Upon ignition, this mesh melts into flaming liquid, dripping downwards while flames travel upwards, creating a multi-directional fire front impossible to contain with standard tactics."
        ]
      },
      economics: {
        title: "Bid-Rigging & Cost Cutting",
        body: [
          "Investigation suggests a bid-rigging syndicate ('Pig-Pen' bidding) inflated project costs to HK$330 million.",
          "To recoup bribe costs, contractors used ordinary nets (HK$50) instead of required fire-retardant nets (HK$90). This 80% price difference incentivized the use of unsafe materials."
        ]
      },
      regulatory: {
        title: "Systemic Regulatory Gap",
        body: [
          "A fatal disconnect exists between the Buildings Department (BD) and Labour Department (LD).",
          "BD requires fire-retardant materials for structure safety, while LD focuses on fall protection. Contractors exploited this by installing nets that satisfied fall safety but failed fire safety standards, relying on the 'gambler's mentality' to avoid detection."
        ]
      }
    }
  },
  factCheck: {
    title: "Fact Verification Matrix",
    items: [
      { claim: "Fire started Nov 26, ~14:51", status: "Verified", evidence: "Consistent with FSD mobilization logs." },
      { claim: "Nets were non-fire-retardant", status: "Verified", evidence: "Forensic analysis confirms nylon mesh acted as a fuse." },
      { claim: "Contractor license expired", status: "Verified", evidence: "Wang Yip Construction license expired March 8, 2024." },
      { claim: "Breathing apparatus weighed >9kg", status: "Verified", evidence: "Standard Draeger PSS 7000 sets weigh 11-13kg fully charged." }
    ]
  },
  misconceptions: {
    title: "Common Misconceptions",
    items: [
      { myth: "The nets were just old.", correction: "False. The nets were specifically non-compliant 'ordinary' nylon used to cut costs, not merely aged." },
      { myth: "It was an accident.", correction: "While the ignition may have been accidental, the spread was a result of criminal negligence and bid-rigging." }
    ]
  },
  credits: "Compiled by Independent Forensic Analysis Team based on Witness Statements and Official Reports."
};

export const contentTC: PageContent = {
  title: "宏福苑五級火警事故：官方情況通報",
  subtitle: "法證調查及事故報告",
  lastUpdated: "2025年11月27日",
  summary: "2025年11月26日，大埔宏福苑發生災難性五級大火。火勢由不具阻燃規格的棚架圍網引發，波及七座住宅大廈。本報告整合了傷亡數字、制度監管缺失以及「火龍」現象的已核實資料。",
  stats: [
    { label: "確認死亡", value: "44", alert: true, subtext: "包括1名高級消防員" },
    { label: "失聯人數", value: "279", alert: true, subtext: "搜救進行中" },
    { label: "出動人員", value: "767", subtext: "消防及救護人員" },
    { label: "救援車輛", value: "128", subtext: "消防車及救護車" },
  ],
  timeline: {
    title: "事故時間軸 (2025年11月26日)",
    events: [
      { time: "14:51", title: "火警發生", description: "宏昌閣外牆維修棚架起火。" },
      { time: "15:01", title: "何偉豪進入火場", description: "高級消防員何偉豪進入核心區域進行搜救。" },
      { time: "15:30", title: "失去聯絡", description: "行動約29分鐘後，與何偉豪失去無線電聯絡。" },
      { time: "16:01", title: "發現傷者", description: "於電梯大堂附近發現何偉豪陷入昏迷。" },
      { time: "16:45", title: "宣告不治", description: "何偉豪於威爾斯親王醫院被宣告英勇殉職。" },
    ]
  },
  martyr: {
    title: "沉痛悼念",
    name: "何偉豪 (37歲)",
    rank: "沙田消防局 高級消防員",
    description: "服務消防處9年。在零能見度的惡劣環境下，為拯救市民獻出了寶貴生命。"
  },
  analysis: {
    title: "事故成因法證分析",
    sections: {
      physics: {
        title: "「火龍」現象 (垂直蔓延)",
        body: [
          "火勢透過大廈外牆與棚架之間的空隙產生的「煙囪效應」迅速向上蔓延。",
          "主要助燃劑為不具阻燃規格的尼龍網。點燃後，尼龍網熔化成燃燒的液體向下滴落，同時火焰向上升騰，形成標準救援戰術無法控制的多向火鋒。"
        ]
      },
      economics: {
        title: "圍標與偷工減料",
        body: [
          "調查顯示涉及圍標集團（俗稱「豬仔標」），將工程造價抬高至3.3億港元。",
          "為彌補賄賂成本，承建商使用每張約50港元的普通網，而非規定的90港元阻燃網。這80%的價差成為使用不安全物料的經濟誘因。"
        ]
      },
      regulatory: {
        title: "制度性監管漏洞",
        body: [
          "屋宇署（BD）與勞工處（LD）之間存在致命的監管斷層。",
          "屋宇署要求結構安全（需阻燃），勞工處關注防墮安全（只需圍網）。承建商利用此灰色地帶，安裝僅符合防墮要求但不防火的圍網，並抱持「博僥倖」心態以規避檢查。"
        ]
      }
    }
  },
  factCheck: {
    title: "事實核查矩陣",
    items: [
      { claim: "火警發生於11月26日約14:51", status: "Verified", evidence: "與消防處調派紀錄吻合。" },
      { claim: "圍網不具阻燃性", status: "Verified", evidence: "法證分析確認尼龍網如引線般助長火勢。" },
      { claim: "承建商牌照已過期", status: "Verified", evidence: "宏業建築工程之牌照已於2024年3月8日過期。" },
      { claim: "呼吸器裝備重逾9公斤", status: "Verified", evidence: "標準Draeger PSS 7000裝備充滿氣時重約11-13公斤。" }
    ]
  },
  misconceptions: {
    title: "常見誤解與澄清",
    items: [
      { myth: "圍網只是因為舊了才易燃。", correction: "錯誤。是因為使用了不合規的廉價「普通」尼龍網，而非老化問題。" },
      { myth: "這純屬意外。", correction: "雖然起火可能為意外，但火勢失控蔓延是嚴重疏忽、圍標及監管失敗的直接後果。" }
    ]
  },
  credits: "內容由獨立法證分析小組根據目擊者供詞及官方報告彙編。"
};