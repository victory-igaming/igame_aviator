
"use client";

import { useState, useEffect } from 'react';

export default function Header() {
  const [links, setLinks] = useState({ apkUrl: "#", gameUrl: "#" });
  useEffect(() => {
    // This fetches the data from the API route you just created
    fetch('/api/config')
      .then((res) => res.json())
      .then((data) => setLinks(data))
      .catch((err) => console.error("Failed to load links:", err));
  }, []);
  return (
    <header className="fixed inset-x-0 top-0 z-[9999] h-[100px]">
      {/* Keep header aligned with the 700px page */}
      <div className="relative mx-auto h-full w-full max-w-[700px] overflow-hidden border-b border-black/30 bg-[#000000]/95 shadow-[0_8px_22px_rgba(0,0,0,0.55)] backdrop-blur-md">
        
        {/* Header background */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,27,27,0.34),transparent_45%),linear-gradient(90deg,#120000_0%,#000000%,#150000_100%)]" />

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,transparent_42%,rgba(255,255,255,0.18)_43%,transparent_44%,transparent_100%)]" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent shadow-[0_0_10px_rgba(250,204,21,0.8)]" />

        <div className="relative z-10 flex h-full items-center justify-between gap-3 px-3">
          {/* Logo */}
          <a
            href={links.gameUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="INDNO1 home"
            className="flex h-full w-[105px] shrink-0 items-center justify-start sm:w-[115px]"
          >
            <img
              src="/images/logo1.webp"
              alt="INDNO1"
              className="h-[70px] w-auto object-contain drop-shadow-[0_0_14px_rgba(255,193,7,0.45)] sm:h-[75px]"
            />
          </a>

          {/* Download button */}
          <a
            href={links.apkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              h-[50px]
              min-w-0
              max-w-[350px]
              flex-1
              items-center
              justify-center
              rounded-xl
              border
              border-yellow-300
              bg-gradient-to-b
              from-yellow-300
              via-orange-400
              to-orange-600
              px-3
              text-center
              text-[19px]
              font-black
              uppercase
              tracking-wide
              text-[#3b1100]
              shadow-[inset_0_2px_0_rgba(255,255,255,0.55),0_0_22px_rgba(255,191,0,0.55)]
              transition
              duration-200
              hover:scale-[1.02]
              active:scale-95
              sm:h-[60px]
              sm:rounded-2xl
              sm:px-5
              sm:text-[30px]
            "
          >
            Download Now
          </a>
        </div>
      </div>
    </header>
  );
}