"use client";

import { useState, useEffect } from 'react';

const games = [
  {
    title: "Chicken Road",
    subtitle: "Run, collect coins, and unlock rewards",
    size: "large",
  },
  {
    title: "Cash Prize",
    subtitle: "Fast action challenge",
    size: "small",
  },
  {
    title: "Lucky Spin",
    subtitle: "Spin and collect",
    size: "small",
  },
  {
    title: "Join Free",
    subtitle: "Start your game journey",
    size: "small",
  },
  {
    title: "Chicken Road 2",
    subtitle: "New level unlocked",
    size: "wide",
  },
  {
    title: "Mega Run",
    subtitle: "High speed road adventure",
    size: "large",
  },
];

const promoCards = [
  {
    image: "/images/cashprice.webp",
    alt: "Cash prize awaits you",
  },
  {
    image: "/images/luckysprin.webp",
    alt: "Lucky spin winner",
  },
  {
    image: "/images/joinfree.webp",
    alt: "Join free and start winning",
  },
];

export default function GameSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#1b0000] to-[#320000] px-4 py-8">
      <SectionBadge title="New Games Online" />

      <div className="mt-6 space-y-4">
        <GameBanner image="/images/banner1.webp" alt="Chicken Road banner" />

        <div className="grid grid-cols-3 gap-3">
          {promoCards.map((card) => (
            <GameCard key={card.image} image={card.image} alt={card.alt} />
          ))}
        </div>

        <GameBanner image="/images/banner2.webp" alt="Chicken Road second banner" />
         
      </div>
    </section>
  );
}

function SectionBadge({ title }: { title: string }) {
	

  return (
    <div className="flex items-center justify-center gap-2">
      <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-yellow-500" />
      <div className="rounded-md border border-yellow-300 bg-gradient-to-b from-red-800 to-red-950 px-6 py-2 shadow-[0_0_16px_rgba(255,193,7,0.25)]">
        <p className="text-sm font-black uppercase tracking-widest text-white">
          {title}
        </p>
      </div>
      <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-yellow-500" />
    </div>
  );
}

function GameBanner({
  image = "/images/banner1.png",
  alt = "Chicken Road game banner",
}: {
  image?: string;
  alt?: string;
}) {

	  const [links, setLinks] = useState({ apkUrl: "#", gameUrl: "#" });
  useEffect(() => {
    // This fetches the data from the API route you just created
    fetch('/api/config')
      .then((res) => res.json())
      .then((data) => setLinks(data))
      .catch((err) => console.error("Failed to load links:", err));
  }, []);
  return (
    <a
      href={links.gameUrl}
      className="group relative block aspect-[1536/768] w-full overflow-hidden rounded-xl border border-yellow-300/40 bg-black shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(255,193,7,0.35)]"
    >
      <img
        src={image}
        alt={alt}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-white/5 via-transparent to-black/20" />
    </a>
  );
}

function GameCard({ image, alt }: { image: string; alt: string }) {
  return (
    <a
      href="https://indno.com/"
      className="group relative block aspect-[230/337] overflow-hidden rounded-xl border border-yellow-300/40 bg-black shadow-[0_0_18px_rgba(0,0,0,0.65)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(255,193,7,0.35)]"
    >
      <img
        src={image}
        alt={alt}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-white/10 via-transparent to-black/20" />
    </a>
  );
}