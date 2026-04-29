import { useMemo, useState } from "react";
import { allQuestions, getResultTier, sections, TOTAL_POINTS } from "@/lib/quiz-data";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ShieldCheck, ShieldAlert, ShieldHalf, ArrowRight, ArrowLeft, RotateCcw, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

type Stage = "intro" | "quiz" | "result";

export function Quiz() {
  const [stage, setStage] = useState<Stage>("intro");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const question = allQuestions[index];
  const total = allQuestions.length;
  const progress = ((index + (answers[question?.id] !== undefined ? 1 : 0)) / total) * 100;

  const score = useMemo(
    () => Object.values(answers).reduce((a, b) => a + b, 0),
    [answers]
  );

  const sectionLabel = useMemo(() => {
    let count = 0;
    for (const s of sections) {
      count += s.questions.length;
      if (index < count) return s.title;
    }
    return "";
  }, [index]);

  function selectAnswer(value: number) {
    setAnswers((p) => ({ ...p, [question.id]: value }));
  }

  function next() {
    if (index < total - 1) setIndex(index + 1);
    else setStage("result");
  }

  function reset() {
    setAnswers({});
    setIndex(0);
    setStage("intro");
  }

  if (stage === "intro") return <Intro onStart={() => setStage("quiz")} />;
  if (stage === "result")
    return <Result score={score} answers={answers} onRestart={reset} />;

  const selected = answers[question.id];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        <div className="mb-8 flex items-center justify-between text-sm">
          <span className="font-display tracking-widest uppercase text-primary">
            {sectionLabel}
          </span>
          <span className="text-muted-foreground tabular-nums">
            {index + 1} / {total}
          </span>
        </div>

        <Progress value={progress} className="mb-10 h-1.5" />

        <div className="rounded-2xl border border-border bg-[var(--gradient-card)] p-8 md:p-10 shadow-[var(--shadow-elegant)]">
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-8">
            {question.text}
          </h2>

          <div className="space-y-3">
            {question.options.map((opt) => {
              const isSelected = selected === opt.value && answers[question.id] !== undefined;
              return (
                <button
                  key={opt.label}
                  onClick={() => selectAnswer(opt.value)}
                  className={cn(
                    "w-full text-left rounded-xl border px-5 py-4 transition-all duration-200",
                    "hover:border-primary/60 hover:bg-primary/5",
                    isSelected
                      ? "border-primary bg-primary/10 shadow-[var(--shadow-glow)]"
                      : "border-border bg-card/40"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{opt.label}</span>
                    <span
                      className={cn(
                        "h-5 w-5 rounded-full border-2 transition-colors",
                        isSelected ? "border-primary bg-primary" : "border-muted-foreground/40"
                      )}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => setIndex(Math.max(0, index - 1))}
            disabled={index === 0}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <Button
            onClick={next}
            disabled={selected === undefined}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
          >
            {index === total - 1 ? "See My Score" : "Next"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

function Intro({ onStart }: { onStart: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs font-medium text-muted-foreground mb-8 backdrop-blur">
          <Lock className="h-3.5 w-3.5 text-primary" />
          Information Security & Risk Outlook
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Is Your Business
          <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Exposed?
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          A 28-question self-assessment to gauge your organization's data
          vulnerability. Built for non-technical executives. Confidential. Takes
          about 5 minutes.
        </p>

        <Button
          size="lg"
          onClick={onStart}
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-8 py-6 rounded-xl shadow-[var(--shadow-glow)]"
        >
          Start the Assessment
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 text-left">
          {[
            { icon: ShieldCheck, title: "Confidential", desc: "Nothing is sent or stored. Your answers stay in your browser." },
            { icon: ShieldHalf, title: "Honest scoring", desc: "Out of 140 points across 5 critical domains." },
            { icon: ShieldAlert, title: "Actionable", desc: "Get tailored recommendations based on your posture." },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-border bg-card/40 p-5 backdrop-blur">
              <f.icon className="h-5 w-5 text-primary mb-3" />
              <h3 className="font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Result({
  score,
  answers,
  onRestart,
}: {
  score: number;
  answers: Record<string, number>;
  onRestart: () => void;
}) {
  const result = getResultTier(score);
  const percentage = Math.round((score / TOTAL_POINTS) * 100);

  const sectionScores = sections.map((s) => {
    const max = s.questions.reduce((a, q) => a + Math.max(...q.options.map((o) => o.value)), 0);
    const got = s.questions.reduce((a, q) => a + (answers[q.id] ?? 0), 0);
    return { title: s.title, got, max, pct: Math.round((got / max) * 100) };
  });

  const tierColor =
    result.level === "strong"
      ? "text-success"
      : result.level === "moderate"
      ? "text-warning"
      : "text-destructive";

  const TierIcon =
    result.level === "strong" ? ShieldCheck : result.level === "moderate" ? ShieldHalf : ShieldAlert;

  return (
    <div className="min-h-screen px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <TierIcon className={cn("h-14 w-14 mx-auto mb-6", tierColor)} />
          <p className="font-display tracking-widest uppercase text-sm text-muted-foreground mb-3">
            Your Result
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className={tierColor}>{score}</span>
            <span className="text-muted-foreground/50 text-3xl"> / {TOTAL_POINTS}</span>
          </h1>
          <div className={cn("inline-block px-4 py-1 rounded-full border text-sm font-semibold mb-4",
            result.level === "strong" && "border-success/40 text-success bg-success/10",
            result.level === "moderate" && "border-warning/40 text-warning bg-warning/10",
            result.level === "high-risk" && "border-destructive/40 text-destructive bg-destructive/10"
          )}>
            {result.tier} · {percentage}%
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mt-4">{result.headline}</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto leading-relaxed">
            {result.description}
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-[var(--gradient-card)] p-6 md:p-8 mb-6">
          <h3 className="font-display text-xl font-semibold mb-5">Score by Domain</h3>
          <div className="space-y-4">
            {sectionScores.map((s) => (
              <div key={s.title}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-medium">{s.title}</span>
                  <span className="text-muted-foreground tabular-nums">
                    {s.got} / {s.max}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent transition-all"
                    style={{ width: `${s.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-[var(--gradient-card)] p-6 md:p-8 mb-8">
          <h3 className="font-display text-xl font-semibold mb-5">Recommended Actions</h3>
          <ul className="space-y-3">
            {result.actions.map((a, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1 h-6 w-6 shrink-0 rounded-full bg-primary/15 text-primary flex items-center justify-center text-xs font-bold">
                  {i + 1}
                </span>
                <span className="text-muted-foreground leading-relaxed">{a}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={onRestart} variant="outline" size="lg">
            <RotateCcw className="mr-2 h-4 w-4" /> Retake Assessment
          </Button>
        </div>

        <p className="text-xs text-muted-foreground/70 text-center mt-12 max-w-xl mx-auto">
          Disclaimer: This information is for general awareness only and does not
          constitute professional security advice. Consult with qualified
          professionals for tailored recommendations.
        </p>
      </div>
    </div>
  );
}
