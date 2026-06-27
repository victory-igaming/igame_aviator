export default function RatingFooter() {
  return (
    <footer className="relative bg-transparent px-3 pb-14 pt-3 sm:px-4 sm:pb-16 sm:pt-4">
      <div className="relative z-10 mx-auto w-full max-w-[600px] text-center">
        <h2
          className="
            text-[clamp(22px,5.8vw,32px)]
            font-black
            uppercase
            leading-[1.08]
            tracking-[-0.025em]
            text-transparent
          "
          style={{
            WebkitTextStroke: "1px #8a3f00",
            backgroundImage:
               "linear-gradient(0deg, #fffbd6 0%, #fff56a 14%, #ffe32b 32%, #ffc400 52%, #f39a00 72%, #bd5200 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            filter:
              "drop-shadow(0 2px 0 #7a2600) drop-shadow(0 4px 0 #531400) drop-shadow(0 6px 7px rgba(0,0,0,0.7))",
          }}
        >
          <span className="block">More Than 2000+</span>          
        </h2>

        <h2
          className="
            text-[clamp(22px,5.8vw,30px)]
            font-black
            uppercase
            leading-[1.08]
            tracking-[-0.025em]
            text-transparent
          "
          style={{
            WebkitTextStroke: "1px #8a3f00",
            backgroundImage:
               "linear-gradient(0deg, #fffbd6 0%, #fff56a 14%, #ffe32b 32%, #ffc400 52%, #f39a00 72%, #bd5200 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            filter:
              "drop-shadow(0 2px 0 #7a2600) drop-shadow(0 4px 0 #531400) drop-shadow(0 6px 7px rgba(0,0,0,0.7))",
          }}
        >
           

          <span className="mt-1 block whitespace-nowrap">
            Games for Your Entertainment
          </span>
        </h2>
      </div>
    </footer>
  );
}