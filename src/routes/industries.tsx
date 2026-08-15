import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/industries")({
  component: Industries,
});

function Industries() {
  return null;
}
