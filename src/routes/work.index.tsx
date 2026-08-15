import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/work/")({
  component: WorkIndex,
});

function WorkIndex() {
  return null;
}
