"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

export default function GithubGraph() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center overflow-x-auto">
      <GitHubCalendar
        username="bibekkumarpradhan"
        blockSize={15}
        blockMargin={5}
        fontSize={14}
      />
    </div>
  );
}