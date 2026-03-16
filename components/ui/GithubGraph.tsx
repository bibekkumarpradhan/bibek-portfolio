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
    <div className="w-full overflow-x-auto flex justify-center px-2">

      <div className="min-w-[700px] md:min-w-0">

        <GitHubCalendar
          username="bibekkumarpradhan"
          blockSize={12}
          blockMargin={4}
          fontSize={12}
        />

      </div>

    </div>
  );
}