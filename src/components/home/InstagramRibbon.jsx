const hashtags = [
  { tag: "#SeaSpaCruises", url: "https://www.instagram.com/explore/tags/seaspacruises/" },
  { tag: "#SeaSpaHotTub", url: "https://www.instagram.com/explore/tags/seaspahotub/" },
  { tag: "#SeaSpaInTheBay", url: "https://www.instagram.com/explore/tags/seaspacinthebay/" },
  { tag: "#HotTubBoatNJ", url: "https://www.instagram.com/explore/tags/hottubboatnj/" },
  { tag: "#NJExperiences", url: "https://www.instagram.com/explore/tags/njexperiences/" },
];

export default function InstagramRibbon() {
  return (
    <section
      className="bg-sky-horizon py-8 md:py-10"
      aria-label="Instagram hashtags"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {hashtags.map(({ tag, url }) => (
            <a
              key={tag}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-semibold text-deep-atlantic text-sm md:text-base tracking-wide hover:scale-105 transition-transform duration-200 focus-ring rounded-sm px-3 py-2"
              aria-label={`View ${tag} on Instagram`}
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}