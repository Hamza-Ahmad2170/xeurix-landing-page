"use client";

import { useEffect } from "react";
// import Script from "next/script";

function CookiePolicy() {
  useEffect(() => {
    const div = document.createElement("div");
    div.setAttribute("name", "termly-embed");
    div.setAttribute("data-id", "875bd76c-0397-4e4c-9693-c45f9f633e0c");
    div.setAttribute("data-type", "iframe");

    const policy = document.getElementById("policy");
    if (policy) {
      policy.appendChild(div);
    }

    const scriptId = "termly-jssdk";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://app.termly.io/embed-policy.min.js";
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      // Clean up script and div on component unmount
      if (document.getElementById(scriptId)) {
        document.getElementById(scriptId)?.remove();
      }
      if (div.parentNode) {
        div.parentNode.removeChild(div);
      }
    };
  }, []);

  return (
    <div className="container py-10">
      <div className="min-h-dvh" id="policy"></div>
    </div>
  );
}

export default CookiePolicy;
