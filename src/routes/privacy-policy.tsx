import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  component: Privacy,
});

function Privacy() {
  return null;
}
