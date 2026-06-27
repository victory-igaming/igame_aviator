export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div
        className="
          relative
          aspect-[646/727]
          w-full
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('/images/topimage.jpg')",
        }}
      >
        {/* Soft top shadow */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[18%] bg-gradient-to-b from-black/45 to-transparent" />

        {/* Bottom blend into the page background */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[27%] bg-gradient-to-t from-[#780000] via-[#780000]/35 to-transparent" />

        {/* Price overlay */}
        <div className="absolute inset-x-0 bottom-[2.5%] z-10 flex justify-center px-2">
          <p
            className="
              whitespace-nowrap
              text-center
              text-[clamp(47px,12vw,92px)]
              font-black
              leading-[0.9]
              tracking-[-0.065em]
              text-transparent
            "
            style={{
              WebkitTextStroke: "clamp(1.5px,0.35vw,3px) #6e3500",
              backgroundImage:
                "linear-gradient(180deg,#ffffff 0%,#ffe94a 50%,#000000 60%,#e78900 80%,#9b3f00 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              filter:
                "drop-shadow(0 3px 0 #7a2700) drop-shadow(0 6px 0 #501200) drop-shadow(0 9px 9px rgba(0,0,0,0.9))",
            }}
          >
            ₹1,000,000<span className="ml-[0.03em]">+</span>
                 
          </p>
        </div>
      </div>
    </section>
  );
}