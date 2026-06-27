const GAME_URL = "https://indno.com/";

const partners = [
  {
    name: "Habanero",
    image: "/images/h.webp",
  },
  {
    name: "JDB",
    image: "/images/jdb.webp",
  },
  {
    name: "PG",
    image: "/images/pg.webp",
  },
  {
    name: "JILI",
    image: "/images/jili.webp",
  },
  {
    name: "M",
    image: "/images/m.webp",
  },
];

export default function TrustPartners() {
  return (
    <section className="relative bg-transparent px-4 pb-5 pt-4">
      <div className="mx-auto w-full max-w-[600px]">
        <div className="flex items-center justify-between gap-3 px-1 sm:gap-5">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={GAME_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={partner.name}
              className="
                group
                flex
                h-[58px]
                min-w-0
                flex-1
                items-center
                justify-center
                transition
                duration-300
                hover:scale-110
              "
            >
              <img
                src={partner.image}
                alt={partner.name}
                loading="lazy"
                className="
                  max-h-[42px]
                  max-w-full
                  object-contain
                  drop-shadow-[0_3px_4px_rgba(0,0,0,0.45)]
                  transition
                  duration-300
                  group-hover:drop-shadow-[0_0_12px_rgba(255,190,0,0.55)]
                  sm:max-h-[48px]
                "
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}