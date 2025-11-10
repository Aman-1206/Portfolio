"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function HashCleaner() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // if URL contains a hash when the page loads (like #about), remove it
      if (window.location.hash) {
        // Use replaceState so the URL changes without reload or history push
        window.history.replaceState(null, "", pathname);
      }
    }
  }, [pathname]);

  return null;
}
