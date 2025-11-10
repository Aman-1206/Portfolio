"use client";
import React from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(undefined);

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 764);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
};

export default useIsMobile;
