import { createContext, useContext } from "react";

export type Lang = "en" | "zh" | "ja";

export const LANGS: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "zh", label: "中文", short: "中" },
  { code: "ja", label: "日本語", short: "日" },
];

type UI = {
  badge: string;
  heroTitle1: string;
  heroTitle2: string;
  heroDesc: string;
  start: string;
  features: { title: string; desc: string }[];
  back: string;
  next: string;
  seeScore: string;
  yourResult: string;
  scoreByDomain: string;
  recommendedActions: string;
  detailedRecommendations: string;
  retake: string;
  downloadReport: string;
  reportTitle: string;
  reportGenerated: string;
  disclaimer: string;
  language: string;
  sectionTitles: Record<string, string>;
  optionLabels: Record<string, string>;
  questions: Record<string, string>;
  tiers: {
    [key: string]: {
      tier: string;
      headline: string;
      description: string;
      actions: string[];
      detailed: { title: string; body: string }[];
    };
  };
};

const optionKeys = {
  Yes: "Yes",
  No: "No",
  "Sort-of": "Sort-of",
  "Don't Know": "Don't Know",
  "In Process": "In Process",
  Some: "Some",
  Partially: "Partially",
  Somewhat: "Somewhat",
  "Some Data": "Some Data",
  "N/A": "N/A",
  "Yes (both)": "Yes (both)",
  "VA Only": "VA Only",
  "PT Only": "PT Only",
  Very: "Very",
  Average: "Average",
  "Not Very": "Not Very",
  "Not at all": "Not at all",
};

const en: UI = {
  badge: "Cyber Risk Questionnarie",
  heroTitle1: "Is Your Business",
  heroTitle2: "Exposed?",
  heroDesc:
    "A 28-question self-assessment to gauge your organization's data vulnerability. Built for non-technical executives. Confidential. Takes about 5 minutes.",
  start: "Start the Assessment",
  features: [
    { title: "Confidential", desc: "Nothing is sent or stored. Your answers stay in your browser." },
    { title: "Honest scoring", desc: "Out of 140 points across 5 critical domains." },
    { title: "Actionable", desc: "Get tailored recommendations based on your posture." },
  ],
  back: "Back",
  next: "Next",
  seeScore: "See My Score",
  yourResult: "Your Result",
  scoreByDomain: "Score by Domain",
  recommendedActions: "Recommended Actions",
  detailedRecommendations: "Detailed Recommendations",
  retake: "Retake Assessment",
  downloadReport: "Download PDF Report",
  reportTitle: "Cyber Risk Assessment Report",
  reportGenerated: "Generated",
  disclaimer:
    "Disclaimer: This information is for general awareness only and does not constitute professional security advice. Consult with qualified professionals for tailored recommendations.",
  language: "Language",
  sectionTitles: {
    "Policies & Plans": "Policies & Plans",
    "Framework & Data": "Framework & Data",
    "Technical & Physical": "Technical & Physical",
    "Assessments & Testing": "Assessments & Testing",
    "Communications & Training": "Communications & Training",
  },
  optionLabels: optionKeys,
  questions: {
    p1: "Do you have a non-IT person or team tasked with cyber security for your organization?",
    p2: "Do you have a clear picture of your current security posture and how it relates to industry best practices?",
    p3: "Do you measure your annual losses from fraudulent business transactions?",
    p4: "Do you have a plan to keep systems running in the event of a disruption or disaster (theft, act of God, ransomware)?",
    p5: "Are technology disasters, outages, intrusions, or mishandling of protected data covered in your business or cyber insurance policy?",
    p6: "Do you have an Incident Response (IR) plan in place to deal with a data breach or ransomware attack?",
    p7: "If you have a plan in place, does it specify paying or NOT paying the ransom?",
    p8: "Do you have remote backup of your files and critical information assets?",
    p9: "Have you conducted a Business Impact Analysis as it relates to operational and cyber risks?",
    p10: "Do you have an established process to address computer data breaches when they happen?",
    p11: "Have you defined data loss prevention policies?",
    f1: "Do you know where all your databases are in the network?",
    f2: "Does your organization collect or store regulated data such as PII, PCI, PHI, or other sensitive/proprietary information?",
    f3: "Have you assessed, identified, and documented what you consider to be your most valuable data or IT systems?",
    f4: "Do you have a formalized process for receiving and applying intelligence about updates, patches, or known phishing scams?",
    t1: "Do you routinely update and patch your systems and applications?",
    t2: "Do individuals or third-party organizations/vendors/SaaS have access to your network?",
    t3: "Are you able to identify all distributed endpoints (servers, desktops, laptops, smartphones, tablets) and check for rogue assets?",
    t4: "Are you able to verify that anti-malware services are installed, running, and up to date on all endpoints, and auto-correct compliance issues?",
    t5: "Do you have multifactor authentication (MFA) enabled for ALL employees accessing confidential information (in-office and remote)?",
    a1: "Have you conducted, or had a third party perform, a vulnerability assessment (VA) and/or penetration test (PT) against your IT infrastructure?",
    a2: "Are you performing in-depth monitoring of what comes in, moves out, and through your network and systems?",
    c1: "How technically savvy would you rate your technical organization about cybersecurity?",
    c2: "Are you offering ongoing employee information security training to ALL employees?",
    c3: "Does your board of directors (or senior management) receive information on cybersecurity risk?",
    c4: "Does your board (or senior management) understand and agree that the measures in place to address risk are in line with your risk appetite?",
  },
  tiers: {
    "high-risk": {
      tier: "Attention Required",
      headline: "Significant Risk of a Security Breach",
      description:
        "Your organization is at significant risk of a security breach. This could lead to data loss, financial damage, and reputational harm.",
      actions: [
        "Schedule a free consultation to develop a personalized security plan.",
        "Use the NIST Cybersecurity Framework (NIST CSF), ISO standards, or CISecurity.org to begin addressing vulnerabilities.",
        "Prioritize quick wins: MFA everywhere, verified backups, and an incident response plan.",
      ],
      detailed: [
        {
          title: "1. Assign accountability for cybersecurity",
          body: "Designate a named owner — even part-time — responsible for security. Without clear ownership, gaps remain invisible. If you can't hire internally, engage a virtual CISO (vCISO).",
        },
        {
          title: "2. Enable Multi-Factor Authentication (MFA) everywhere",
          body: "Roll out MFA on email, VPN, admin consoles, financial systems, and SaaS apps within 30 days. MFA blocks 99% of automated account takeover attacks.",
        },
        {
          title: "3. Implement and test backups (3-2-1 rule)",
          body: "Keep 3 copies of data on 2 different media with 1 off-site/immutable copy. Test restoration quarterly. Untested backups frequently fail when ransomware hits.",
        },
        {
          title: "4. Build an Incident Response (IR) plan",
          body: "Document who calls who, what to disconnect, legal/PR contacts, and your stance on ransom payments. Keep printed copies — your network may be down during an incident.",
        },
        {
          title: "5. Patch operating systems and applications",
          body: "Enable automatic updates for OS, browsers, and key apps. Most breaches exploit vulnerabilities patched 6+ months ago.",
        },
        {
          title: "6. Train every employee — quarterly",
          body: "Phishing simulations and short, frequent micro-trainings outperform annual one-hour sessions. People are your largest attack surface.",
        },
        {
          title: "7. Get cyber insurance reviewed",
          body: "Confirm your policy covers ransomware, business interruption, regulatory fines, and forensic response. Many older policies exclude these.",
        },
      ],
    },
    moderate: {
      tier: "Room for Improvement",
      headline: "Moderate Security Foundation",
      description:
        "Your organization has a moderate security foundation, but some areas require strengthening.",
      actions: [
        "Identify key areas for budget allocation and address critical vulnerabilities.",
        "Use the NIST CSF to pinpoint weaknesses and guide efficient resource allocation.",
        "Create a phased implementation plan that aligns with your budget and team capacity.",
      ],
      detailed: [
        {
          title: "1. Map and classify your data assets",
          body: "Build (or refresh) an inventory of databases, file shares, and SaaS platforms holding sensitive data. Classify by sensitivity so controls can be applied proportionally.",
        },
        {
          title: "2. Strengthen endpoint visibility",
          body: "Deploy an EDR (Endpoint Detection & Response) solution. Verify anti-malware coverage automatically — manual audits miss devices.",
        },
        {
          title: "3. Run a vulnerability assessment & penetration test",
          body: "Schedule an external VA quarterly and a third-party penetration test annually. Track remediation with deadlines and ownership.",
        },
        {
          title: "4. Tighten third-party / vendor risk",
          body: "Inventory all vendors with network or data access. Require security questionnaires, SOC 2 reports, or equivalent. Limit access to least privilege.",
        },
        {
          title: "5. Formalize patch & configuration management",
          body: "Define SLAs (e.g., critical patches within 7 days). Use a config baseline (CIS Benchmarks) and monitor drift.",
        },
        {
          title: "6. Brief the board quarterly",
          body: "Translate technical risk into business terms: financial exposure, regulatory impact, customer trust. Use a simple dashboard the board can understand.",
        },
        {
          title: "7. Run a tabletop exercise",
          body: "Simulate a ransomware scenario with execs, IT, legal, and comms. Surfaces decision gaps before a real incident.",
        },
      ],
    },
    strong: {
      tier: "Good Foundation",
      headline: "Strong Security Posture — Keep Going",
      description:
        "Congratulations! Your organization has a good security posture, but continuous improvement is essential.",
      actions: [
        "Consider a third-party security assessment for a deeper evaluation.",
        "Use assessment results to refine practices and close remaining gaps.",
        "Maintain ongoing employee training and tabletop exercises.",
      ],
      detailed: [
        {
          title: "1. Pursue a recognized certification",
          body: "Consider ISO 27001, SOC 2 Type II, or alignment with NIST CSF / CIS Controls. Certifications validate maturity to customers and regulators.",
        },
        {
          title: "2. Move toward Zero Trust architecture",
          body: "Eliminate implicit trust on the internal network. Verify every user, device, and request — segment networks and apply least-privilege access.",
        },
        {
          title: "3. Mature threat detection (SIEM/SOC)",
          body: "Centralize logs, correlate events, and ensure 24/7 monitoring (in-house or MDR). Mean Time to Detect (MTTD) is a top maturity metric.",
        },
        {
          title: "4. Red team & purple team exercises",
          body: "Beyond pen tests, simulate adversaries with red team engagements and collaborate with defenders (purple) to improve detection.",
        },
        {
          title: "5. Supply chain security",
          body: "Apply your standards upstream. Require SBOMs, secure development practices, and incident notification clauses in vendor contracts.",
        },
        {
          title: "6. Data Loss Prevention (DLP) and encryption",
          body: "Deploy DLP for email/cloud, enforce encryption at rest and in transit, and monitor data egress.",
        },
        {
          title: "7. Continuous improvement & metrics",
          body: "Track KPIs: patching SLA compliance, phishing click rate, MFA coverage, MTTD/MTTR. Review quarterly with leadership.",
        },
      ],
    },
  },
};

const zh: UI = {
  badge: "网络风险问卷",
  heroTitle1: "您的企业",
  heroTitle2: "是否暴露在风险中?",
  heroDesc:
    "一份包含 28 个问题的自我评估,用于衡量贵组织的数据脆弱性。专为非技术高管设计。保密。约需 5 分钟。",
  start: "开始评估",
  features: [
    { title: "保密", desc: "数据不会发送或存储。您的答案仅保留在您的浏览器中。" },
    { title: "客观评分", desc: "5 个关键领域共 140 分。" },
    { title: "可行建议", desc: "根据您的安全态势获取量身定制的建议。" },
  ],
  back: "上一题",
  next: "下一题",
  seeScore: "查看我的得分",
  yourResult: "您的结果",
  scoreByDomain: "各领域得分",
  recommendedActions: "建议行动",
  detailedRecommendations: "详细建议",
  retake: "重新测试",
  downloadReport: "下载 PDF 报告",
  reportTitle: "网络风险评估报告",
  reportGenerated: "生成时间",
  disclaimer:
    "免责声明:本信息仅供一般了解,不构成专业安全建议。请咨询合格的专业人员以获取量身定制的建议。",
  language: "语言",
  sectionTitles: {
    "Policies & Plans": "政策与计划",
    "Framework & Data": "框架与数据",
    "Technical & Physical": "技术与物理",
    "Assessments & Testing": "评估与测试",
    "Communications & Training": "沟通与培训",
  },
  optionLabels: {
    Yes: "是",
    No: "否",
    "Sort-of": "部分是",
    "Don't Know": "不知道",
    "In Process": "进行中",
    Some: "部分",
    Partially: "部分",
    Somewhat: "有一些",
    "Some Data": "部分数据",
    "N/A": "不适用",
    "Yes (both)": "是(两者)",
    "VA Only": "仅漏洞评估",
    "PT Only": "仅渗透测试",
    Very: "非常",
    Average: "一般",
    "Not Very": "不太",
    "Not at all": "完全不",
  },
  questions: {
    p1: "贵组织是否有非 IT 人员或团队负责网络安全?",
    p2: "您是否清楚了解当前的安全态势及其与行业最佳实践的关系?",
    p3: "您是否衡量每年因欺诈性商业交易造成的损失?",
    p4: "您是否有计划在中断或灾难(盗窃、不可抗力、勒索软件)发生时维持系统运行?",
    p5: "您的商业或网络保险是否涵盖技术灾难、中断、入侵或受保护数据处理不当?",
    p6: "您是否有事件响应(IR)计划来应对数据泄露或勒索软件攻击?",
    p7: "如果有计划,是否明确指定支付或不支付赎金?",
    p8: "您是否对文件和关键信息资产进行远程备份?",
    p9: "您是否进行了与运营和网络风险相关的业务影响分析?",
    p10: "您是否有既定流程来应对计算机数据泄露事件?",
    p11: "您是否定义了数据丢失防护策略?",
    f1: "您是否知道网络中所有数据库的位置?",
    f2: "贵组织是否收集或存储 PII、PCI、PHI 等受监管数据或其他敏感/专有信息?",
    f3: "您是否评估、识别并记录了您认为最有价值的数据或 IT 系统?",
    f4: "您是否有正式流程来接收和应用关于更新、补丁或已知钓鱼攻击的情报?",
    t1: "您是否定期更新和修补系统和应用程序?",
    t2: "个人或第三方组织/供应商/SaaS 是否可以访问您的网络?",
    t3: "您是否能够识别所有分布式端点(服务器、台式机、笔记本电脑、智能手机、平板电脑)并检查恶意资产?",
    t4: "您是否能够验证所有端点上的反恶意软件服务已安装、运行且为最新,并自动纠正合规问题?",
    t5: "您是否为所有访问机密信息的员工(办公室和远程)启用了多因素身份验证(MFA)?",
    a1: "您是否进行过(或由第三方进行)针对 IT 基础架构的漏洞评估(VA)和/或渗透测试(PT)?",
    a2: "您是否对进出网络和系统的内容进行深入监控?",
    c1: "您如何评价贵技术组织在网络安全方面的技术水平?",
    c2: "您是否为所有员工提供持续的信息安全培训?",
    c3: "您的董事会(或高级管理层)是否收到有关网络安全风险的信息?",
    c4: "董事会(或高级管理层)是否理解并同意应对风险的措施符合您的风险偏好?",
  },
  tiers: {
    "high-risk": {
      tier: "需要关注",
      headline: "存在重大安全漏洞风险",
      description: "贵组织面临重大安全漏洞风险。这可能导致数据丢失、财务损失和声誉损害。",
      actions: [
        "安排免费咨询以制定个性化的安全计划。",
        "使用 NIST 网络安全框架(NIST CSF)、ISO 标准或 CISecurity.org 开始解决漏洞。",
        "优先实施快速见效的措施:全面 MFA、经过验证的备份和事件响应计划。",
      ],
      detailed: [
        { title: "1. 明确网络安全责任人", body: "指定一位明确的负责人(可兼职)负责安全工作。没有明确的责任人,漏洞将无法被发现。如无法内部招聘,可聘请虚拟 CISO(vCISO)。" },
        { title: "2. 全面启用多因素身份验证 (MFA)", body: "在 30 天内为电子邮件、VPN、管理控制台、财务系统和 SaaS 应用部署 MFA。MFA 可阻止 99% 的自动账户接管攻击。" },
        { title: "3. 实施并测试备份(3-2-1 原则)", body: "在 2 种不同介质上保留 3 份数据副本,其中 1 份异地存储/不可变。每季度测试恢复。未经测试的备份在勒索软件攻击时常常失效。" },
        { title: "4. 建立事件响应(IR)计划", body: "记录联络人、隔离步骤、法律/公关联系人以及关于支付赎金的立场。准备纸质副本——事件期间网络可能瘫痪。" },
        { title: "5. 修补操作系统和应用程序", body: "为操作系统、浏览器和关键应用启用自动更新。大多数漏洞利用攻击针对 6 个月前已修补的漏洞。" },
        { title: "6. 每季度培训所有员工", body: "钓鱼模拟和频繁的简短微培训比每年一小时的培训更有效。员工是最大的攻击面。" },
        { title: "7. 审查网络保险", body: "确认您的保单涵盖勒索软件、业务中断、监管罚款和取证响应。许多旧保单不包括这些。" },
      ],
    },
    moderate: {
      tier: "尚有改进空间",
      headline: "中等水平的安全基础",
      description: "贵组织拥有中等水平的安全基础,但某些领域需要加强。",
      actions: [
        "确定预算分配的关键领域并解决关键漏洞。",
        "使用 NIST CSF 找出薄弱环节并指导高效的资源分配。",
        "制定与预算和团队能力相符的分阶段实施计划。",
      ],
      detailed: [
        { title: "1. 数据资产盘点与分类", body: "建立(或更新)包含敏感数据的数据库、文件共享和 SaaS 平台的清单。按敏感度分类以便按比例应用控制措施。" },
        { title: "2. 加强端点可见性", body: "部署 EDR(端点检测与响应)解决方案。自动验证反恶意软件覆盖范围——手动审计会遗漏设备。" },
        { title: "3. 进行漏洞评估和渗透测试", body: "每季度安排外部 VA,每年进行第三方渗透测试。跟踪修复进度,设定截止日期和责任人。" },
        { title: "4. 加强第三方/供应商风险", body: "盘点所有可访问网络或数据的供应商。要求安全问卷、SOC 2 报告或同等文件。最小权限访问。" },
        { title: "5. 规范补丁与配置管理", body: "定义 SLA(例如,关键补丁 7 天内安装)。使用配置基线(CIS Benchmarks)并监控偏差。" },
        { title: "6. 每季度向董事会汇报", body: "将技术风险转化为业务术语:财务敞口、监管影响、客户信任。使用董事会能理解的简单仪表板。" },
        { title: "7. 进行桌面演练", body: "与高管、IT、法律和传播部门一起模拟勒索软件场景。在真实事件发生前发现决策漏洞。" },
      ],
    },
    strong: {
      tier: "良好基础",
      headline: "强大的安全态势——继续努力",
      description: "恭喜!贵组织拥有良好的安全态势,但持续改进至关重要。",
      actions: [
        "考虑由第三方进行更深入的安全评估。",
        "使用评估结果完善实践并弥补剩余差距。",
        "持续开展员工培训和桌面演练。",
      ],
      detailed: [
        { title: "1. 申请认可的认证", body: "考虑 ISO 27001、SOC 2 Type II 或符合 NIST CSF / CIS Controls。认证可向客户和监管机构验证成熟度。" },
        { title: "2. 迈向零信任架构", body: "消除内部网络的隐式信任。验证每个用户、设备和请求——划分网络并实施最小权限访问。" },
        { title: "3. 提升威胁检测能力 (SIEM/SOC)", body: "集中日志、关联事件并确保 24/7 监控(自有或 MDR)。平均检测时间(MTTD)是关键的成熟度指标。" },
        { title: "4. 红队和紫队演练", body: "除渗透测试外,通过红队演练模拟对手并与防御方(紫队)协作以改进检测。" },
        { title: "5. 供应链安全", body: "向上游应用您的标准。要求 SBOM、安全开发实践和供应商合同中的事件通知条款。" },
        { title: "6. 数据丢失防护 (DLP) 和加密", body: "为电子邮件/云部署 DLP,强制传输和静态加密,并监控数据外发。" },
        { title: "7. 持续改进与指标", body: "跟踪 KPI:补丁 SLA 合规、钓鱼点击率、MFA 覆盖率、MTTD/MTTR。每季度与领导层审查。" },
      ],
    },
  },
};

const ja: UI = {
  badge: "サイバーリスク アンケート",
  heroTitle1: "あなたのビジネスは",
  heroTitle2: "リスクにさらされていますか?",
  heroDesc:
    "組織のデータ脆弱性を評価するための28問のセルフアセスメント。技術者でない経営層向けに設計。機密保持。所要時間は約5分。",
  start: "アセスメントを開始",
  features: [
    { title: "機密性", desc: "データは送信も保存もされません。回答はブラウザ内に留まります。" },
    { title: "公正な採点", desc: "5つの重要領域、合計140点。" },
    { title: "実行可能な助言", desc: "セキュリティ態勢に応じた具体的な推奨事項を提供。" },
  ],
  back: "戻る",
  next: "次へ",
  seeScore: "スコアを見る",
  yourResult: "あなたの結果",
  scoreByDomain: "領域別スコア",
  recommendedActions: "推奨アクション",
  detailedRecommendations: "詳細な推奨事項",
  retake: "もう一度受ける",
  disclaimer:
    "免責事項:本情報は一般的な認識のためのみであり、専門的なセキュリティ助言を構成するものではありません。個別の推奨事項については資格のある専門家にご相談ください。",
  language: "言語",
  sectionTitles: {
    "Policies & Plans": "ポリシーと計画",
    "Framework & Data": "フレームワークとデータ",
    "Technical & Physical": "技術と物理",
    "Assessments & Testing": "評価とテスト",
    "Communications & Training": "コミュニケーションと教育",
  },
  optionLabels: {
    Yes: "はい",
    No: "いいえ",
    "Sort-of": "ある程度",
    "Don't Know": "わからない",
    "In Process": "進行中",
    Some: "一部",
    Partially: "部分的に",
    Somewhat: "ある程度",
    "Some Data": "一部のデータ",
    "N/A": "該当なし",
    "Yes (both)": "はい(両方)",
    "VA Only": "脆弱性評価のみ",
    "PT Only": "ペネトレーションテストのみ",
    Very: "非常に",
    Average: "平均的",
    "Not Very": "あまり",
    "Not at all": "全く",
  },
  questions: {
    p1: "組織のサイバーセキュリティを担当する非IT担当者またはチームはいますか?",
    p2: "現在のセキュリティ態勢と業界のベストプラクティスとの関係を明確に把握していますか?",
    p3: "不正な商取引による年間損失を測定していますか?",
    p4: "中断や災害(盗難、不可抗力、ランサムウェア)発生時にシステムを稼働させ続ける計画はありますか?",
    p5: "技術的災害、停止、侵入、保護データの不適切な取扱いは事業またはサイバー保険でカバーされていますか?",
    p6: "データ侵害やランサムウェア攻撃に対処するインシデント対応(IR)計画はありますか?",
    p7: "計画がある場合、身代金の支払い・不払いを明記していますか?",
    p8: "ファイルや重要な情報資産のリモートバックアップはありますか?",
    p9: "運用およびサイバーリスクに関するビジネスインパクト分析を実施しましたか?",
    p10: "コンピュータデータ侵害が発生した際に対処する確立されたプロセスはありますか?",
    p11: "データ損失防止ポリシーを定義していますか?",
    f1: "ネットワーク内のすべてのデータベースの所在を把握していますか?",
    f2: "組織はPII、PCI、PHIなどの規制対象データやその他の機密/専有情報を収集または保存していますか?",
    f3: "最も価値があると考えるデータやITシステムを評価、識別、文書化していますか?",
    f4: "更新、パッチ、既知のフィッシング詐欺に関する情報を受信し適用する正式なプロセスはありますか?",
    t1: "システムやアプリケーションを定期的に更新・パッチ適用していますか?",
    t2: "個人や第三者の組織/ベンダー/SaaSがネットワークにアクセスできますか?",
    t3: "すべての分散エンドポイント(サーバー、デスクトップ、ノートPC、スマートフォン、タブレット)を識別し、不正な資産を確認できますか?",
    t4: "すべてのエンドポイントでマルウェア対策サービスがインストール・実行・最新であることを検証し、コンプライアンス問題を自動修正できますか?",
    t5: "機密情報にアクセスするすべての従業員(オフィス・リモート)に多要素認証(MFA)を有効にしていますか?",
    a1: "ITインフラに対して脆弱性評価(VA)やペネトレーションテスト(PT)を実施(または第三者に依頼)しましたか?",
    a2: "ネットワークやシステムを通じて出入りするものを詳細に監視していますか?",
    c1: "貴社の技術組織のサイバーセキュリティに関する技術力をどう評価しますか?",
    c2: "全従業員に対し継続的な情報セキュリティ教育を提供していますか?",
    c3: "取締役会(または上級管理職)はサイバーセキュリティリスクに関する情報を受け取っていますか?",
    c4: "取締役会(または上級管理職)はリスク対応策がリスク許容度と整合していることを理解・同意していますか?",
  },
  tiers: {
    "high-risk": {
      tier: "要対応",
      headline: "重大なセキュリティ侵害リスク",
      description: "貴組織は重大なセキュリティ侵害リスクにさらされています。データ損失、財務的損害、評判の毀損につながる可能性があります。",
      actions: [
        "個別のセキュリティ計画策定のため無料相談を予約してください。",
        "NIST CSF、ISO 規格、または CISecurity.org を活用して脆弱性に対処を始めてください。",
        "クイックウィンを優先:全面的な MFA、検証済みバックアップ、インシデント対応計画。",
      ],
      detailed: [
        { title: "1. サイバーセキュリティの責任者を任命", body: "セキュリティの明確な責任者を(兼任でも)指名してください。責任者がいなければ、ギャップは見えません。社内採用が難しい場合は、バーチャル CISO(vCISO)を活用しましょう。" },
        { title: "2. 多要素認証(MFA)を全面導入", body: "メール、VPN、管理コンソール、財務システム、SaaS アプリに 30 日以内に MFA を展開。MFA は自動アカウント乗っ取り攻撃の 99% を防ぎます。" },
        { title: "3. バックアップを実装してテスト(3-2-1 原則)", body: "2 種類のメディアに 3 部のデータコピーを保持し、1 部はオフサイト/不変保存。四半期ごとに復元テスト。テストされていないバックアップはランサムウェア時に失敗しがちです。" },
        { title: "4. インシデント対応(IR)計画を策定", body: "誰が誰に連絡するか、何を切断するか、法務/PR連絡先、身代金支払いの方針を文書化。ネットワーク停止に備え印刷版も保管。" },
        { title: "5. OS とアプリのパッチ適用", body: "OS、ブラウザ、主要アプリの自動更新を有効化。多くの侵害は 6 ヶ月以上前に修正済みの脆弱性を悪用しています。" },
        { title: "6. 全従業員の四半期教育", body: "フィッシング模擬と短く頻繁なマイクロトレーニングは年 1 時間の研修より効果的。従業員は最大の攻撃面です。" },
        { title: "7. サイバー保険の見直し", body: "ランサムウェア、業務中断、規制罰金、フォレンジック対応がカバーされているか確認。古い保険は除外していることが多いです。" },
      ],
    },
    moderate: {
      tier: "改善の余地あり",
      headline: "中程度のセキュリティ基盤",
      description: "貴組織は中程度のセキュリティ基盤を持っていますが、強化が必要な領域があります。",
      actions: [
        "予算配分の重点領域を特定し、重要な脆弱性に対処してください。",
        "NIST CSF を使用して弱点を特定し、効率的なリソース配分を導いてください。",
        "予算とチーム能力に合った段階的実施計画を作成してください。",
      ],
      detailed: [
        { title: "1. データ資産のマッピングと分類", body: "機密データを保持するDB、ファイル共有、SaaSプラットフォームのインベントリを作成・更新。機密度別に分類し統制を比例適用。" },
        { title: "2. エンドポイントの可視性強化", body: "EDR(エンドポイント検知・対応)を導入。マルウェア対策のカバレッジを自動検証——手動監査では機器を見落とします。" },
        { title: "3. 脆弱性評価とペネトレーションテストの実施", body: "外部 VA を四半期ごと、第三者によるペネトレーションテストを年次で実施。期限と責任者を明示し是正を追跡。" },
        { title: "4. サードパーティ/ベンダーリスクの強化", body: "ネットワーク・データにアクセスする全ベンダーを棚卸し。セキュリティ調査票、SOC 2 報告などを要求。最小権限アクセス。" },
        { title: "5. パッチと構成管理の正式化", body: "SLA 定義(例:重要パッチは 7 日以内)。構成ベースライン(CIS Benchmarks)を使用し逸脱を監視。" },
        { title: "6. 取締役会への四半期報告", body: "技術リスクをビジネス用語に翻訳:財務エクスポージャー、規制影響、顧客信頼。理解しやすいダッシュボードで。" },
        { title: "7. 机上演習の実施", body: "経営陣、IT、法務、広報でランサムウェアシナリオを模擬。実インシデント前に意思決定の隙間を発見。" },
      ],
    },
    strong: {
      tier: "良好な基盤",
      headline: "強固なセキュリティ態勢——継続を",
      description: "おめでとうございます!貴組織は良好なセキュリティ態勢を持っていますが、継続的な改善が不可欠です。",
      actions: [
        "より深い評価のため第三者によるセキュリティ評価を検討してください。",
        "評価結果を活用して実践を洗練し、残るギャップを埋めてください。",
        "継続的な従業員教育と机上演習を維持してください。",
      ],
      detailed: [
        { title: "1. 認知された認証の取得", body: "ISO 27001、SOC 2 Type II、または NIST CSF / CIS Controls との整合を検討。認証は顧客・規制当局に成熟度を証明します。" },
        { title: "2. ゼロトラストアーキテクチャへの移行", body: "内部ネットワークの暗黙の信頼を排除。すべてのユーザー・デバイス・リクエストを検証——ネットワークを分割し最小権限を適用。" },
        { title: "3. 脅威検知の成熟化(SIEM/SOC)", body: "ログを集約しイベントを相関、24/7 監視を確保(自社または MDR)。MTTD は重要な成熟度指標です。" },
        { title: "4. レッドチーム/パープルチーム演習", body: "ペネトレーションテストを超え、レッドチーム演習で攻撃者を模擬し、防御側(パープル)と協力して検知を改善。" },
        { title: "5. サプライチェーンセキュリティ", body: "上流に基準を適用。SBOM、安全な開発実践、ベンダー契約のインシデント通知条項を要求。" },
        { title: "6. データ損失防止(DLP)と暗号化", body: "メール/クラウドに DLP を導入、保存・通信中の暗号化を強制し、データ流出を監視。" },
        { title: "7. 継続的改善と指標", body: "KPI を追跡:パッチ SLA 遵守、フィッシングクリック率、MFA カバレッジ、MTTD/MTTR。四半期ごとに経営層と確認。" },
      ],
    },
  },
};

export const translations: Record<Lang, UI> = { en, zh, ja };

export const I18nContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: UI }>({
  lang: "en",
  setLang: () => {},
  t: en,
});

export const useI18n = () => useContext(I18nContext);
