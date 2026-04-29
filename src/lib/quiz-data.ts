export type Option = { label: string; value: number };
export type Question = { id: string; text: string; options: Option[] };
export type Section = { title: string; questions: Question[] };

export const TOTAL_POINTS = 215;

export const sections: Section[] = [
  {
    title: "Policies & Plans",
    questions: [
      {
        id: "p1",
        text: "Do you have a non-IT person or team tasked with cyber security for your organization?",
        options: [
          { label: "Yes", value: 5 },
          { label: "Sort-of", value: 2 },
          { label: "No", value: 0 },
        ],
      },
      {
        id: "p2",
        text: "Do you have a clear picture of your current security posture and how it relates to industry best practices?",
        options: [
          { label: "Yes", value: 5 },
          { label: "No", value: 0 },
        ],
      },
      {
        id: "p3",
        text: "Do you measure your annual losses from fraudulent business transactions?",
        options: [
          { label: "Yes", value: 5 },
          { label: "No", value: 0 },
          { label: "Don't Know", value: 0 },
        ],
      },
      {
        id: "p4",
        text: "Do you have a plan to keep systems running in the event of a disruption or disaster (theft, act of God, ransomware)?",
        options: [
          { label: "Yes", value: 5 },
          { label: "In Process", value: 3 },
          { label: "Sort-of", value: 2 },
          { label: "No", value: 0 },
        ],
      },
      {
        id: "p5",
        text: "Are technology disasters, outages, intrusions, or mishandling of protected data covered in your business or cyber insurance policy?",
        options: [
          { label: "Yes", value: 5 },
          { label: "No", value: 0 },
          { label: "Don't Know", value: 0 },
        ],
      },
      {
        id: "p6",
        text: "Do you have an Incident Response (IR) plan in place to deal with a data breach or ransomware attack?",
        options: [
          { label: "Yes", value: 5 },
          { label: "In Process", value: 2 },
          { label: "No", value: 0 },
        ],
      },
      {
        id: "p7",
        text: "If you have a plan in place, does it specify paying or NOT paying the ransom?",
        options: [
          { label: "Yes", value: 5 },
          { label: "No", value: 0 },
          { label: "Don't Know", value: 0 },
        ],
      },
      {
        id: "p8",
        text: "Do you have remote backup of your files and critical information assets?",
        options: [
          { label: "Yes", value: 5 },
          { label: "No", value: 0 },
          { label: "Don't Know", value: 0 },
        ],
      },
      {
        id: "p9",
        text: "Have you conducted a Business Impact Analysis as it relates to operational and cyber risks?",
        options: [
          { label: "Yes", value: 5 },
          { label: "No", value: 0 },
        ],
      },
      {
        id: "p10",
        text: "Do you have an established process to address computer data breaches when they happen?",
        options: [
          { label: "Yes", value: 5 },
          { label: "No", value: 0 },
        ],
      },
      {
        id: "p11",
        text: "Have you defined data loss prevention policies?",
        options: [
          { label: "Yes", value: 5 },
          { label: "In Process", value: 2 },
          { label: "No", value: 0 },
        ],
      },
    ],
  },
  {
    title: "Framework & Data",
    questions: [
      {
        id: "f1",
        text: "Do you know where all your databases are in the network?",
        options: [
          { label: "Yes", value: 5 },
          { label: "Some", value: 2 },
          { label: "No", value: 0 },
        ],
      },
      {
        id: "f2",
        text: "Does your organization collect or store regulated data such as PII, PCI, PHI, or other sensitive/proprietary information?",
        options: [
          { label: "Yes", value: 5 },
          { label: "No", value: 0 },
          { label: "Don't Know", value: 0 },
        ],
      },
      {
        id: "f3",
        text: "Have you assessed, identified, and documented what you consider to be your most valuable data or IT systems?",
        options: [
          { label: "Yes", value: 5 },
          { label: "In Process", value: 2 },
          { label: "No", value: 0 },
        ],
      },
      {
        id: "f4",
        text: "Do you have a formalized process for receiving and applying intelligence about updates, patches, or known phishing scams?",
        options: [
          { label: "Yes", value: 5 },
          { label: "No", value: 0 },
        ],
      },
    ],
  },
  {
    title: "Technical & Physical",
    questions: [
      {
        id: "t1",
        text: "Do you routinely update and patch your systems and applications?",
        options: [
          { label: "Yes", value: 5 },
          { label: "No", value: 0 },
        ],
      },
      {
        id: "t2",
        text: "Do individuals or third-party organizations/vendors/SaaS have access to your network?",
        options: [
          { label: "No", value: 5 },
          { label: "N/A", value: 0 },
          { label: "Yes", value: 0 },
        ],
      },
      {
        id: "t3",
        text: "Are you able to identify all distributed endpoints (servers, desktops, laptops, smartphones, tablets) and check for rogue assets?",
        options: [
          { label: "Yes", value: 10 },
          { label: "Partially", value: 5 },
          { label: "No", value: 0 },
        ],
      },
      {
        id: "t4",
        text: "Are you able to verify that anti-malware services are installed, running, and up to date on all endpoints, and auto-correct compliance issues?",
        options: [
          { label: "Yes", value: 10 },
          { label: "Somewhat", value: 5 },
          { label: "No", value: 0 },
        ],
      },
      {
        id: "t5",
        text: "Do you have multifactor authentication (MFA) enabled for ALL employees accessing confidential information (in-office and remote)?",
        options: [
          { label: "Yes", value: 10 },
          { label: "Some Data", value: 0 },
          { label: "No", value: 0 },
        ],
      },
    ],
  },
  {
    title: "Assessments & Testing",
    questions: [
      {
        id: "a1",
        text: "Have you conducted, or had a third party perform, a vulnerability assessment (VA) and/or penetration test (PT) against your IT infrastructure?",
        options: [
          { label: "Yes (both)", value: 5 },
          { label: "VA Only", value: 3 },
          { label: "PT Only", value: 3 },
          { label: "No", value: 0 },
        ],
      },
      {
        id: "a2",
        text: "Are you performing in-depth monitoring of what comes in, moves out, and through your network and systems?",
        options: [
          { label: "Yes", value: 5 },
          { label: "Some", value: 2 },
          { label: "No", value: 0 },
        ],
      },
    ],
  },
  {
    title: "Communications & Training",
    questions: [
      {
        id: "c1",
        text: "How technically savvy would you rate your technical organization about cybersecurity?",
        options: [
          { label: "Very", value: 5 },
          { label: "Average", value: 3 },
          { label: "Not Very", value: 2 },
          { label: "Not at all", value: 0 },
        ],
      },
      {
        id: "c2",
        text: "Are you offering ongoing employee information security training to ALL employees?",
        options: [
          { label: "Yes", value: 5 },
          { label: "No", value: 0 },
          { label: "Don't Know", value: 0 },
        ],
      },
      {
        id: "c3",
        text: "Does your board of directors (or senior management) receive information on cybersecurity risk?",
        options: [
          { label: "Yes", value: 5 },
          { label: "No", value: 0 },
          { label: "Don't Know", value: 0 },
        ],
      },
      {
        id: "c4",
        text: "Does your board (or senior management) understand and agree that the measures in place to address risk are in line with your risk appetite?",
        options: [
          { label: "Yes", value: 10 },
          { label: "Somewhat", value: 5 },
          { label: "No", value: 0 },
        ],
      },
    ],
  },
  {
    title: "Security Awareness & Practices",
    questions: [
      {
        id: "s1",
        text: "Do you understand the cybersecurity policies and requirements set by the Hong Kong government for various industries?",
        options: [
          { label: "Fully understand", value: 5 },
          { label: "Basic understanding", value: 3 },
          { label: "Limited understanding", value: 1 },
          { label: "No understanding", value: 0 },
        ],
      },
      {
        id: "s2",
        text: "Are you aware of any cybersecurity standards?",
        options: [
          { label: "Yes", value: 5 },
          { label: "No", value: 0 },
        ],
      },
      {
        id: "s3",
        text: "How many of these security frameworks/standards have you heard of? (NIST, CIS, PCI-DSS, GDPR, ISO/IEC 27001, HIPAA, FISMA)",
        options: [
          { label: "All or most", value: 5 },
          { label: "Some", value: 3 },
          { label: "A few", value: 1 },
          { label: "None", value: 0 },
        ],
      },
      {
        id: "s4",
        text: "Do you encounter suspicious network activity, phishing emails, or security risks at work?",
        options: [
          { label: "Often (and recognize them)", value: 5 },
          { label: "Occasionally", value: 3 },
          { label: "Rarely", value: 2 },
          { label: "Never", value: 0 },
        ],
      },
      {
        id: "s5",
        text: "Does your company have a firewall in place?",
        options: [
          { label: "Yes", value: 5 },
          { label: "No", value: 0 },
          { label: "Don't Know", value: 0 },
        ],
      },
      {
        id: "s6",
        text: "Is the firewall configuration adequate?",
        options: [
          { label: "Adequate", value: 5 },
          { label: "Needs improvement", value: 2 },
          { label: "Don't Know", value: 0 },
        ],
      },
      {
        id: "s7",
        text: "Does your company use a DNS Firewall?",
        options: [
          { label: "Yes", value: 5 },
          { label: "No", value: 0 },
          { label: "Don't Know", value: 0 },
        ],
      },
      {
        id: "s8",
        text: "Are computer operating systems updated regularly?",
        options: [
          { label: "Yes", value: 5 },
          { label: "No", value: 0 },
          { label: "Don't Know", value: 0 },
        ],
      },
      {
        id: "s9",
        text: "Are software and system patches applied regularly?",
        options: [
          { label: "Yes", value: 5 },
          { label: "No", value: 0 },
          { label: "Don't Know", value: 0 },
        ],
      },
      {
        id: "s10",
        text: "Is anti-virus software installed and run for regular scans?",
        options: [
          { label: "Yes", value: 5 },
          { label: "No", value: 0 },
          { label: "Don't Know", value: 0 },
        ],
      },
      {
        id: "s11",
        text: "Do you use a SIEM to monitor internal network security information?",
        options: [
          { label: "Yes", value: 5 },
          { label: "No", value: 0 },
          { label: "Don't Know", value: 0 },
        ],
      },
      {
        id: "s12",
        text: "Do you regularly conduct Penetration Testing?",
        options: [
          { label: "Yes", value: 5 },
          { label: "No", value: 0 },
          { label: "Don't Know", value: 0 },
        ],
      },
      {
        id: "s13",
        text: "Do you perform security scanning and configuration based on CIS standards?",
        options: [
          { label: "Yes", value: 5 },
          { label: "No", value: 0 },
          { label: "Don't Know", value: 0 },
        ],
      },
      {
        id: "s14",
        text: "Do you regularly conduct staff security awareness education?",
        options: [
          { label: "Yes", value: 5 },
          { label: "No", value: 0 },
          { label: "Don't Know", value: 0 },
        ],
      },
      {
        id: "s15",
        text: "Do you think your company's current cybersecurity protection measures are sufficient?",
        options: [
          { label: "Very sufficient", value: 5 },
          { label: "Basically sufficient", value: 3 },
          { label: "Needs strengthening", value: 1 },
          { label: "Very insufficient", value: 0 },
        ],
      },
    ],
  },
];

export const allQuestions: Question[] = sections.flatMap((s) =>
  s.questions.map((q) => ({ ...q, section: s.title } as Question))
);

export function getResultTier(score: number) {
  if (score < 115) {
    return {
      tier: "Attention Required",
      level: "high-risk",
      headline: "Significant Risk of a Security Breach",
      description:
        "Your organization is at significant risk of a security breach. This could lead to data loss, financial damage, and reputational harm.",
      actions: [
        "Schedule a free consultation to develop a personalized security plan.",
        "Use the NIST Cybersecurity Framework (NIST CSF), ISO standards, or CISecurity.org to begin addressing vulnerabilities.",
        "Prioritize quick wins: MFA everywhere, verified backups, and an incident response plan.",
      ],
    };
  }
  if (score <= 112) {
    return {
      tier: "Room for Improvement",
      level: "moderate",
      headline: "Moderate Security Foundation",
      description:
        "Your organization has a moderate security foundation, but some areas require strengthening.",
      actions: [
        "Identify key areas for budget allocation and address critical vulnerabilities.",
        "Use the NIST CSF to pinpoint weaknesses and guide efficient resource allocation.",
        "Create a phased implementation plan that aligns with your budget and team capacity.",
      ],
    };
  }
  return {
    tier: "Good Foundation",
    level: "strong",
    headline: "Strong Security Posture — Keep Going",
    description:
      "Congratulations! Your organization has a good security posture, but continuous improvement is essential.",
    actions: [
      "Consider a third-party security assessment for a deeper evaluation.",
      "Use assessment results to refine practices and close remaining gaps.",
      "Maintain ongoing employee training and tabletop exercises.",
    ],
  };
}
