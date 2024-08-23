"use client";

import { useEffect } from "react";

export default function Calendar() {
  useEffect(() => {
    const div = document.createElement("div");
    // div.setAttribute("name", "termly-embed");
    div.setAttribute("data-url", "https://calendly.com/xeurix/demo");
    // div.setAttribute("data-type", "iframe");

    const policy = document.getElementById("policy");
    if (policy) {
      policy.appendChild(div);
    }

    const scriptId = "termly-jssdk";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
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
    <div>
      <div id="policy" className="calendly-inline-widget"></div>
    </div>
  );
}
