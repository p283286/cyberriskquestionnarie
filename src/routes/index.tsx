import { createFileRoute } from "@tanstack/react-router";
import { Quiz } from "@/components/Quiz";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Is Your Business Exposed? — Information Security & Risk Quiz" },
      {
        name: "description",
        content:
          "A confidential 28-question self-assessment to gauge your organization's information security posture and data vulnerability.",
      },
      { property: "og:title", content: "Is Your Business Exposed? — Security Risk Quiz" },
      {
        property: "og:description",
        content: "5-minute confidential cybersecurity self-assessment for executives.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <Quiz />;
}
