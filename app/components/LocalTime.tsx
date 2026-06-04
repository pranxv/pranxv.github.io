"use client";

import { useEffect, useState } from "react";

/** Current Bengaluru (IST) time, formatted HH:MM:SS. */
function blrTime() {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
}

/**
 * Live Bengaluru clock for the foot of the page. Renders a placeholder
 * until mounted so the server and first client render stay in sync.
 */
export default function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(blrTime());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <p className="font-mono text-muted">
      BLR {time ?? "--:--:--"}
    </p>
  );
}
