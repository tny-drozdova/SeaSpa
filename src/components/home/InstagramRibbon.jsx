const hashtags = [
{ tag: "#SeaSpaCruises", url: "https://www.instagram.com/explore/tags/seaspacruises/", featured: false },
{ tag: "#SeaSpaHotTub", url: "https://www.instagram.com/explore/tags/seaspahotub/", featured: true },
{ tag: "#SeaSpaInTheBay", url: "https://www.instagram.com/explore/tags/seaspacinthebay/", featured: false },
{ tag: "#HotTubBoatNJ", url: "https://www.instagram.com/explore/tags/hottubboatnj/", featured: false },
{ tag: "#NJExperiences", url: "https://www.instagram.com/explore/tags/njexperiences/", featured: false }];


const InstagramIcon = () =>
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>;


export default function InstagramRibbon() {
  return (
    <section
      className="bg-deep-atlantic border-t border-b border-border py-5"
      aria-label="Follow us on Instagram">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left: label */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <InstagramIcon />
            <div>
              <p className="font-body font-semibold text-foreground text-sm leading-tight">Tag us on Instagram</p>
              <p className="font-body text-muted-foreground text-xs">Share your Bay moments</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-8 bg-border flex-shrink-0" aria-hidden="true" />

          {/* Right: Hashtag pills */}
          <div className="flex flex-wrap gap-2 justify-end">
            {hashtags.map(({ tag, url, featured }) =>
            <a
              key={tag}
              href={url}
              target="_blank"
              rel="noopener noreferrer" className="bg-transparent text-muted-foreground px-4 py-2 text-xs font-body text-center rounded-full border transition-all duration-200 focus-ring border-border hover:border-sky-horizon hover:text-sky-horizon hover:bg-sky-horizon/10"





              aria-label={`View ${tag} on Instagram (opens in new tab)`}>
              
                {tag}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>);

}