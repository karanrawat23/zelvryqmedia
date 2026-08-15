import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/packages")({
  component: Packages,
});

function Packages() {
  return null;
}
