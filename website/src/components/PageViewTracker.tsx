"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;

    const key = `pv:${pathname}`;
    if (sessionStorage.getItem(key)) return;

    sessionStorage.setItem(key, "1");

    fetch("/api/pageview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        page: pathname,
        referrer: document.referrer || null,
        userAgent: navigator.userAgent,
      }),
    }).catch(() => {
      // silent fail – analytics should never break the site
    });
  }, [pathname]);

  return null;
}
