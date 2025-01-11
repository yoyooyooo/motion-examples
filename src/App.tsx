"use client";

import DarkToggle from "./examples/toggle-theme0";
import DarkToggle2 from "./examples/toggle-theme";

export default function ComponentPreview() {
  return (
    <div className="flex flex-col gap-4">
      <DarkToggle />
      <DarkToggle2 />
    </div>
  );
}
