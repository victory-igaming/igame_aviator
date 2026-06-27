const GAME_URL = "https://indno.com/";

export default function OnlineUsers() {
  return (
    <section className="relative bg-transparent px-3 pb-0 pt-3 text-center sm:px-5 sm:pt-5">
      <div className="mx-auto w-full max-w-[700px]">
        {/* Online count */}
        <div className="mx-auto flex w-[88%] items-center justify-center gap-3">
          {/* Left white line */}
          <div className="relative h-[2px] flex-1 rounded-full bg-gradient-to-r from-transparent via-white to-white">
            <span className="absolute -right-1 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-white shadow-[0_0_9px_rgba(255,255,255,1)]" />
          </div>

          <p
            className="
              whitespace-nowrap
              text-[clamp(29px,7.5vw,48px)]
              font-black
              leading-none
              tracking-[-0.045em]
              text-transparent
            "
           
            style={{
              WebkitTextStroke: "clamp(1.5px,0.35vw,3px) #6e3500",
              backgroundImage:
                "linear-gradient(180deg,#ffffff 50%,#ffe94a 60%,#e78900 80%,#ffe94a 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              filter:
                "drop-shadow(0 3px 0 #7a2700) drop-shadow(0 6px 0 #501200) drop-shadow(0 9px 9px rgba(0,0,0,0.9))",
            }}

          >
            500,000
          </p>

          {/* Right white line */}
          <div className="relative h-[2px] flex-1 rounded-full bg-gradient-to-l from-transparent via-white to-white">
            <span className="absolute -left-1 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-white shadow-[0_0_9px_rgba(255,255,255,1)]" />
          </div>
        </div>

        {/* People online row */}
        <div className="mx-auto mt-6 flex w-[88%] items-center justify-center gap-2">
          <div className="relative h-[2px] flex-1 rounded-full bg-gradient-to-r from-transparent via-yellow-300 to-yellow-300">
            <span className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-yellow-300 shadow-[0_0_7px_rgba(255,220,0,1)]" />
          </div>

          <p
            className="
              whitespace-nowrap
              text-[clamp(10px,7.5vw,18px)]
              font-black
              uppercase
              leading-none
              tracking-[0.035em]
              text-yellow-100
            "
            style={{
              filter:
                 "linear-gradient(180deg,#ffffff 50%,#ffe94a 60%,#e78900 80%,#ffe94a 100%)",
            }}
          >
            People Online at the Same Time
          </p>

          <div className="relative h-[2px] flex-1 rounded-full bg-gradient-to-l from-transparent via-yellow-300 to-yellow-300">
            <span className="absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-yellow-300 shadow-[0_0_7px_rgba(255,220,0,1)]" />
          </div>
        </div>

        {/* Claim bonus button */}
        <a
          href={GAME_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Click now to receive 500 rupees"
          className="
            group
            relative
            mt-8
            flex
            min-h-[56px]
            w-full
            items-center
            justify-center
            overflow-hidden
            rounded-full
            border-[2px]
            border-[#ffe33c]
            bg-gradient-to-b
            from-[#ff2424]
            via-[#d00000]
            to-[#790000]
            px-3
            shadow-[0_0_13px_rgba(255,35,0,0.82),inset_0_0_16px_rgba(255,220,0,0.15)]
            transition
            duration-300
            hover:scale-[1.012]
            hover:shadow-[0_0_24px_rgba(255,193,7,0.7)]
            sm:min-h-[66px]
          "
        >
          {/* Top glow */}
          <span className="pointer-events-none absolute inset-x-[12%] top-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_12px_3px_rgba(255,255,255,0.9)]" />

          {/* Bottom glow */}
          <span className="pointer-events-none absolute inset-x-[12%] bottom-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-300 to-transparent shadow-[0_0_12px_3px_rgba(255,180,0,0.9)]" />

          <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20" />

          <span
            className="
              relative
              z-10
              whitespace-nowrap
              text-[clamp(17px,4.65vw,29px)]
              font-black
              uppercase
              leading-none
              tracking-[-0.025em]
              text-white
            "
            style={{
              WebkitTextStroke: "0.5px rgba(255,255,255,0.8)",
              filter:
                "drop-shadow(0 2px 0 #850000) drop-shadow(0 4px 4px rgba(0,0,0,0.65))",
            }}
          >
            Click Now to Receive{" "}
            <span
              className="text-transparent"
              style={{
                WebkitTextStroke: "0.7px #fff3a0",
                backgroundImage:
                  "linear-gradient(180deg,#fffbd4 0%,#ffe73c 45%,#f1a000 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              ₹500
            </span>
          </span>
        </a>

        {/* Welcome bonus title */}
        <div className="relative -mx-3 mt-6 overflow-hidden py-5 sm:-mx-5">
          {/* Red top glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-x-[11%] top-0 h-[3px] bg-gradient-to-r from-transparent via-red-400 to-transparent shadow-[0_0_15px_5px_rgba(255,0,0,0.88)]" />

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,0,0.18),transparent_66%)]" />
          </div>

          {/* Left ornament */}
          <div className="pointer-events-none absolute -left-9 top-1/2 z-10 h-[74px] w-[74px] -translate-y-1/2 rotate-12 rounded-full border-[8px] border-yellow-400/60 shadow-[0_0_10px_rgba(255,190,0,0.4)]" />

          <div className="pointer-events-none absolute -left-12 top-1/2 z-10 h-11 w-24 -translate-y-1/2 rotate-12 rounded-[50%] border-[7px] border-orange-500/50" />

          <div className="pointer-events-none absolute left-0 top-1/2 z-10 h-[2px] w-[8%] -translate-y-1/2 bg-gradient-to-r from-yellow-300 to-transparent" />

          {/* Right ornament */}
          <div className="pointer-events-none absolute -right-9 top-1/2 z-10 h-[74px] w-[74px] -translate-y-1/2 -rotate-12 rounded-full border-[8px] border-yellow-400/60 shadow-[0_0_10px_rgba(255,190,0,0.4)]" />

          <div className="pointer-events-none absolute -right-12 top-1/2 z-10 h-11 w-24 -translate-y-1/2 -rotate-12 rounded-[50%] border-[7px] border-orange-500/50" />

          <div className="pointer-events-none absolute right-0 top-1/2 z-10 h-[2px] w-[8%] -translate-y-1/2 bg-gradient-to-l from-yellow-300 to-transparent" />

          <h2
            className="
              relative
              z-20
              mx-auto
              w-fit
              whitespace-nowrap
              px-1
              text-center
              text-[clamp(16px,5.15vw,32px)]
              font-black
              uppercase
              leading-none
              tracking-[-0.03em]
              text-transparent
              sm:px-4
            "
            style={{
              WebkitTextStroke: "1.5px #ff2458",
              backgroundImage:
                "linear-gradient(180deg,#ffffff 0%,#fff8fb 24%,#ffc7da 48%,#ff6c9e 70%,#dc004f 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              filter:
                "drop-shadow(0 2px 0 #8c0028) drop-shadow(0 4px 0 #480014) drop-shadow(0 0 7px rgba(255,45,105,0.65))",
            }}
          >
            New User Welcome Bonus
          </h2>
        </div>
      </div>
    </section>
  );
}