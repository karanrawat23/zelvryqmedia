import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services/$slug")({
  component: ServiceDetail,
});

function ServiceDetail() {
  return null;
}
