import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/work/$slug")({
  component: WorkDetail,
});

function WorkDetail() {
  return null;
}
