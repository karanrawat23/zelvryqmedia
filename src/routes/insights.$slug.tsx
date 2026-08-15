import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/insights/$slug")({
  component: InsightDetail,
});

function InsightDetail() {
  return null;
}
