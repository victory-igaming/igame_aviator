import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OnlineUsers from "@/components/OnlineUsers";
import PromoCardsSection from "@/components/PromoCardsSection";
import TrustPartners from "@/components/TrustPartners";
import RatingFooter from "@/components/RatingFooter";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#1d1a1d] text-white">
      <div
        className="
          relative
          mx-auto
          min-h-screen
          w-full
          max-w-[700px]
          bg-[#500000]
          shadow-[0_0_45px_rgba(0,0,0,0.9)]
        "
      >
        {/* Fixed header — render only once */}
        <Header />

        {/* Page starts below the fixed 100px header */}
        <div className="relative pt-[100px]">
          <HeroSection />

          {/* Continuous background for everything below the hero */}
          <div className="relative overflow-hidden">
            {/* Shared poster background */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
              {/* Main burgundy gradient */}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,#8b0000_0%,#720000_12%,#5a0000_34%,#430000_67%,#300000_100%)]" />

              {/* Upper bright-red glow */}
              <div className="absolute left-1/2 top-[-40px] h-[430px] w-[115%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,30,0,0.32)_0%,rgba(190,0,0,0.16)_42%,transparent_72%)]" />

              {/* Middle red lighting */}
              <div className="absolute left-1/2 top-[28%] h-[800px] w-[125%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(180,0,0,0.2)_0%,transparent_68%)]" />

              {/* Bottom red glow */}
              <div className="absolute bottom-[-120px] left-1/2 h-[700px] w-[125%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(120,0,0,0.28)_0%,transparent_70%)]" />

              {/* Upper-left curved pattern */}
              <div
                className="
                  absolute
                  -left-24
                  top-[10%]
                  h-52
                  w-72
                  rotate-[-17deg]
                  rounded-[50%]
                  border-[28px]
                  border-[#7f0808]/25
                "
              />

              {/* Upper-right curved pattern */}
              <div
                className="
                  absolute
                  -right-28
                  top-[23%]
                  h-64
                  w-80
                  rotate-[18deg]
                  rounded-[50%]
                  border-[34px]
                  border-[#7b0606]/20
                "
              />

              {/* Middle-left curved pattern */}
              <div
                className="
                  absolute
                  -left-32
                  top-[42%]
                  h-72
                  w-96
                  rotate-[-14deg]
                  rounded-[50%]
                  border-[38px]
                  border-[#760505]/25
                "
              />

              {/* Middle-right curved pattern */}
              <div
                className="
                  absolute
                  -right-36
                  top-[58%]
                  h-80
                  w-[430px]
                  rotate-[14deg]
                  rounded-[50%]
                  border-[42px]
                  border-[#710404]/20
                "
              />

              {/* Partner/footer patterns */}
              <div
                className="
                  absolute
                  -left-16
                  bottom-[180px]
                  h-36
                  w-56
                  rotate-[-18deg]
                  rounded-[50%]
                  border-[20px]
                  border-[#800606]/25
                "
              />

              <div
                className="
                  absolute
                  -right-14
                  bottom-[-20px]
                  h-52
                  w-64
                  rotate-[10deg]
                  rounded-[50%]
                  border-[28px]
                  border-[#750505]/25
                "
              />

              {/* Soft dark diagonal shapes */}
              <div className="absolute -left-28 top-[49%] h-20 w-[470px] rotate-[-19deg] rounded-full bg-black/10 blur-xl" />

              <div className="absolute -right-32 bottom-[12%] h-24 w-[480px] rotate-[17deg] rounded-full bg-black/10 blur-xl" />

              {/* Additional subtle lighting */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_15%_18%,rgba(255,95,20,0.15),transparent_22%),radial-gradient(circle_at_82%_54%,rgba(255,30,20,0.12),transparent_26%),radial-gradient(circle_at_35%_86%,rgba(160,0,0,0.18),transparent_27%)]" />

              {/* Gentle lower darkening */}
              <div className="absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t from-[#280000]/75 to-transparent" />
            </div>

            {/* All components share the background above */}
            <div className="relative z-10">
              <OnlineUsers />
              <PromoCardsSection />
              <TrustPartners />
              <RatingFooter />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}