import jsPDF from "jspdf";
import { sections, getResultTier, TOTAL_POINTS, allQuestions } from "./quiz-data";
import { translations } from "./i18n";

export function generateReport(score: number, answers: Record<string, number>) {
  // Always render PDF in English to avoid CJK font issues with jsPDF builtin fonts.
  const t = translations.en;
  const tier = getResultTier(score);
  const tierData = t.tiers[tier.level];
  const pct = Math.round((score / TOTAL_POINTS) * 100);

  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 48;
  const maxW = pageW - margin * 2;
  let y = margin;

  const ensureSpace = (need: number) => {
    if (y + need > pageH - margin) {
      doc.addPage();
      y = margin;
    }
  };

  const writeWrapped = (
    text: string,
    size: number,
    style: "normal" | "bold" = "normal",
    color: [number, number, number] = [30, 30, 30],
    leading = 1.35
  ) => {
    doc.setFont("helvetica", style);
    doc.setFontSize(size);
    doc.setTextColor(...color);
    const lines = doc.splitTextToSize(text, maxW) as string[];
    const lineH = size * leading;
    for (const line of lines) {
      ensureSpace(lineH);
      doc.text(line, margin, y);
      y += lineH;
    }
  };

  // Header bar
  doc.setFillColor(20, 30, 60);
  doc.rect(0, 0, pageW, 90, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text(t.reportTitle, margin, 50);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(`${t.reportGenerated}: ${new Date().toLocaleString()}`, margin, 70);
  y = 120;

  // Score block
  doc.setFillColor(245, 247, 250);
  doc.roundedRect(margin, y, maxW, 90, 8, 8, "F");
  doc.setTextColor(60, 60, 60);
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.text("Overall Score", margin + 16, y + 24);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  doc.setTextColor(20, 30, 60);
  doc.text(`${score} / ${TOTAL_POINTS}`, margin + 16, y + 58);
  doc.setFontSize(12);
  doc.setTextColor(90, 90, 90);
  doc.text(`${pct}%`, margin + 16, y + 76);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  const tierColor: [number, number, number] =
    tier.level === "strong" ? [22, 130, 80] : tier.level === "moderate" ? [200, 130, 20] : [190, 50, 50];
  doc.setTextColor(...tierColor);
  doc.text(tierData.tier, pageW - margin - 16, y + 30, { align: "right" });
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(80, 80, 80);
  const headlineLines = doc.splitTextToSize(tierData.headline, 240) as string[];
  let hy = y + 50;
  for (const l of headlineLines) {
    doc.text(l, pageW - margin - 16, hy, { align: "right" });
    hy += 13;
  }
  y += 110;

  writeWrapped(tierData.description, 11, "normal", [60, 60, 60]);
  y += 10;

  // Score by domain
  ensureSpace(40);
  writeWrapped(t.scoreByDomain, 14, "bold", [20, 30, 60]);
  y += 4;
  for (const s of sections) {
    const max = s.questions.reduce((a, q) => a + Math.max(...q.options.map((o) => o.value)), 0);
    const got = s.questions.reduce((a, q) => a + (answers[q.id] ?? 0), 0);
    const p = Math.round((got / max) * 100);
    ensureSpace(34);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(40, 40, 40);
    doc.text(s.title, margin, y);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(100, 100, 100);
    doc.text(`${got} / ${max}  (${p}%)`, pageW - margin, y, { align: "right" });
    y += 6;
    doc.setFillColor(230, 232, 238);
    doc.roundedRect(margin, y, maxW, 6, 3, 3, "F");
    doc.setFillColor(60, 110, 220);
    doc.roundedRect(margin, y, (maxW * p) / 100, 6, 3, 3, "F");
    y += 22;
  }
  y += 6;

  // Recommended actions
  ensureSpace(40);
  writeWrapped(t.recommendedActions, 14, "bold", [20, 30, 60]);
  y += 4;
  tierData.actions.forEach((a, i) => {
    writeWrapped(`${i + 1}. ${a}`, 11, "normal", [60, 60, 60]);
    y += 2;
  });
  y += 8;

  // Detailed recommendations
  ensureSpace(40);
  writeWrapped(t.detailedRecommendations, 14, "bold", [20, 30, 60]);
  y += 4;
  tierData.detailed.forEach((d) => {
    ensureSpace(40);
    writeWrapped(d.title, 12, "bold", [30, 30, 30]);
    writeWrapped(d.body, 10.5, "normal", [80, 80, 80]);
    y += 6;
  });

  // Answers appendix
  doc.addPage();
  y = margin;
  writeWrapped("Your Answers", 16, "bold", [20, 30, 60]);
  y += 6;
  allQuestions.forEach((q, i) => {
    const v = answers[q.id];
    const opt = q.options.find((o) => o.value === v);
    writeWrapped(`${i + 1}. ${q.text}`, 10.5, "bold", [40, 40, 40]);
    writeWrapped(`→ ${opt ? opt.label : "—"} (${v ?? 0} pts)`, 10, "normal", [90, 90, 90]);
    y += 4;
  });

  // Footer disclaimer on last page
  ensureSpace(40);
  y += 10;
  writeWrapped(t.disclaimer, 8.5, "normal", [140, 140, 140]);

  doc.save(`cyber-risk-report-${new Date().toISOString().slice(0, 10)}.pdf`);
}
