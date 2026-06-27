const GAME_URL = "https://indno1.com/";

type PromoCardProps = {
  image: string;
  alt: string;
  eyebrow: string;
  amount: string;
  suffix?: string;
  subheading?: string;
  description?: string;
  type: "register" | "deposit" | "vip";
};

const promoCards: PromoCardProps[] = [
  {
    image: "/images/cashprice.jpg",
    alt: "New players get 50% cash back.",
    eyebrow: "New players get",
    amount: "50%",
    description: "cash back.",
    type: "register",
  },
  {
    image: "/images/luckysprin.jpg",
    alt: "First deposit bonus",
    eyebrow: "Get up to",
    amount: "100%",
    suffix: "bonus",
    description: "on your first deposit",
    type: "deposit",
  },
  {
    image: "/images/joinfree.jpg",
    alt: "VIP feedback bonus",
    eyebrow: "Share Your Feedback",
    subheading: "Bonus up to",
    amount: "₹8000",
    description: "24-hour online customer service",
    type: "vip",
  },
];

export default function PromoCardsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#520000] via-[#360000] to-[#210000] px-3 pb-8 pt-3 sm:px-4">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.16),transparent_60%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[700px] space-y-4">
        {promoCards.map((card) => (
          <PromoCard key={card.image} {...card} />
        ))}
      </div>
    </section>
  );
}

export function PromoCard({
  image,
  alt,
  eyebrow,
  amount,
  suffix,
  subheading,
  description,
  type,
}: PromoCardProps) {
  return (
    <a
      href={GAME_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={alt}
      className="
        group
        relative
        block
        min-h-[188px]
        w-full
        overflow-hidden
        rounded-[18px]
        border-[2px]
        border-[#f5cf50]
        bg-[#720000]
        shadow-[0_8px_22px_rgba(0,0,0,0.5),inset_0_0_18px_rgba(255,190,0,0.08)]
        transition
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_0_27px_rgba(255,193,7,0.38)]
        sm:min-h-[214px]
        sm:rounded-[21px]
      "
    >
      {/* Full background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#3d0000] via-[#8e0000] to-[#620000]" />

      {/* Left image */}
      <div className="absolute inset-y-0 left-0 w-[45%] overflow-hidden">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="
            h-full
            w-full
            object-cover
            object-center
            transition
            duration-500
            group-hover:scale-105
          "
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#3d0000]/15" />
      </div>

      {/* S-shaped red cover and gold divider */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 h-full w-full"
      >
        <defs>
          <linearGradient
            id={`card-red-${type}`}
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop offset="0%" stopColor="#720000" />
            <stop offset="48%" stopColor="#960000" />
            <stop offset="100%" stopColor="#650000" />
          </linearGradient>

          <filter
            id={`gold-glow-${type}`}
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feGaussianBlur stdDeviation="0.25" result="blur" />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Red area covering the right side of the image */}
        <path
          d="
            M 34 0
            C 35 7, 39 10, 40 18
            C 42 29, 39 39, 37 49
            C 35 60, 35 72, 37 84
            C 38 92, 40 97, 43 100
            L 100 100
            L 100 0
            Z
          "
          fill={`url(#card-red-${type})`}
        />

        {/* Gold S-shaped divider */}
        <path
          d="
            M 34 0
            C 35 7, 39 10, 40 18
            C 42 29, 39 39, 37 49
            C 35 60, 35 72, 37 84
            C 38 92, 40 97, 43 100
          "
          fill="none"
          stroke="#f5cf50"
          strokeWidth="0.38"
          vectorEffect="non-scaling-stroke"
          filter={`url(#gold-glow-${type})`}
        />
      </svg>

      {/* Text content */}
      <div
        className="
          relative
          z-30
          ml-[41%]
          flex
          min-h-[188px]
          flex-col
          justify-center
          py-3
          pl-4
          pr-3
          text-left
          sm:min-h-[214px]
          sm:py-4
          sm:pl-6
          sm:pr-5
        "
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,45,45,0.28),transparent_60%)]" />

        <div className="relative z-10">
          <p
            className={`
              font-black
              leading-[1.05]
              drop-shadow-[0_2px_0_rgba(75,0,0,0.9)]
              ${
                type === "vip"
                  ? "text-[clamp(15px,3.8vw,25px)] text-white"
                  : "text-[clamp(16px,4vw,28px)] uppercase text-[#ff145a]"
              }
            `}
          >
            {eyebrow}
          </p>

          {subheading ? (
            <p className="mt-1 text-[clamp(14px,3.6vw,24px)] font-black leading-tight text-[#ffd834]">
              {subheading}
            </p>
          ) : null}

          <div className="mt-2 flex min-w-0 flex-wrap items-end gap-x-2 gap-y-1">
            <p
              className="
                whitespace-nowrap
                text-[clamp(40px,9.5vw,72px)]
                font-black
                leading-[0.88]
                tracking-[-0.055em]
                text-transparent
              "
              style={{
                WebkitTextStroke: "1px #864000",
                backgroundImage:
                  "linear-gradient(180deg,#fff8a4 0%,#ffe42e 28%,#f5ab00 62%,#c76400 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                filter:
                  "drop-shadow(0 3px 0 #671d00) drop-shadow(0 5px 6px rgba(0,0,0,0.6))",
              }}
            >
              {amount}
            </p>

            {suffix ? (
              <span className="pb-1 text-[clamp(14px,3.5vw,23px)] font-black leading-none text-yellow-200">
                {suffix}
              </span>
            ) : null}
          </div>

          {description ? (
            <p
              className={`
                mt-3
                text-[clamp(11px,2.8vw,17px)]
                font-medium
                leading-tight
                ${
                  type === "vip"
                    ? "text-[#ed2853]"
                    : "text-yellow-100/90"
                }
              `}
            >
              {description}
            </p>
          ) : null}
        </div>
      </div>

      {/* Surface shine */}
      <div className="pointer-events-none absolute inset-x-[5%] top-0 z-40 h-px bg-gradient-to-r from-transparent via-yellow-100 to-transparent" />

      <div className="pointer-events-none absolute inset-0 z-40 rounded-[18px] bg-gradient-to-b from-white/[0.035] via-transparent to-black/10 sm:rounded-[21px]" />
    </a>
  );
}