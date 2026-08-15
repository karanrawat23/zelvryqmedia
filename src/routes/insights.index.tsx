import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/insights/")({
  component: InsightsIndex,
});

function InsightsIndex() {
  return null;
}
