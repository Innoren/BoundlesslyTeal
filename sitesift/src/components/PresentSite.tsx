import type { GeneratedSite } from "@/lib/types";
import { googleFontsHref } from "@/lib/generator";

interface Props {
  site: GeneratedSite;
}

export function PresentSite({ site }: Props) {
  const { business, theme, copy } = site;
  const c = theme.colors;
  const tel = business.phone?.replace(/[^\d+]/g, "");
  const mapsQuery = encodeURIComponent(
    [business.name, business.address, business.city, business.state]
      .filter(Boolean)
      .join(", "),
  );
  const mapsHref =
    business.googleMapsUri ||
    `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

  return (
    <>
      <link rel="stylesheet" href={googleFontsHref(theme)} />
      <style>{`
        .present-root {
          --ink: ${c.ink};
          --paper: ${c.paper};
          --accent: ${c.accent};
          --accent-soft: ${c.accentSoft};
          --muted: ${c.muted};
          --wash: ${c.wash};
          --display: "${theme.fontDisplay}", Georgia, serif;
          --body: "${theme.fontBody}", system-ui, sans-serif;
          color: var(--ink);
          background: var(--paper);
          font-family: var(--body);
        }
        .present-root * { box-sizing: border-box; }
        .present-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.5rem 1.5rem 3.5rem;
          background: ${theme.heroGradient};
          color: #f7f3ee;
          overflow: hidden;
        }
        @media (min-width: 768px) {
          .present-hero { padding: 2rem 3.5rem 4.5rem; }
        }
        .present-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: ${
            theme.pattern === "lines"
              ? `repeating-linear-gradient(-12deg, transparent, transparent 18px, rgba(255,255,255,0.04) 18px, rgba(255,255,255,0.04) 19px)`
              : theme.pattern === "dots"
                ? `radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)`
                : `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E")`
          };
          background-size: ${theme.pattern === "dots" ? "16px 16px" : "auto"};
          opacity: ${theme.pattern === "grain" ? "0.22" : "1"};
          pointer-events: none;
          animation: presentWash 14s ease-in-out infinite alternate;
        }
        .present-hero::after {
          content: "";
          position: absolute;
          inset: auto 0 0 0;
          height: 45%;
          background: linear-gradient(to top, rgba(0,0,0,0.45), transparent);
          pointer-events: none;
        }
        @keyframes presentWash {
          from { transform: scale(1); }
          to { transform: scale(1.06); }
        }
        @keyframes presentRise {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .present-brand {
          position: relative;
          z-index: 1;
          font-family: var(--display);
          font-size: clamp(2.8rem, 9vw, 5.5rem);
          line-height: 0.95;
          letter-spacing: -0.02em;
          max-width: 12ch;
          animation: presentRise 0.9s ease both;
        }
        .present-headline {
          position: relative;
          z-index: 1;
          margin-top: 1.25rem;
          max-width: 22ch;
          font-size: clamp(1.15rem, 2.4vw, 1.55rem);
          font-weight: 500;
          line-height: 1.35;
          color: rgba(247,243,238,0.92);
          animation: presentRise 0.9s ease 0.12s both;
        }
        .present-support {
          position: relative;
          z-index: 1;
          margin-top: 0.85rem;
          max-width: 36rem;
          font-size: 1rem;
          line-height: 1.55;
          color: rgba(247,243,238,0.78);
          animation: presentRise 0.9s ease 0.22s both;
        }
        .present-ctas {
          position: relative;
          z-index: 1;
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 1.75rem;
          animation: presentRise 0.9s ease 0.32s both;
        }
        .present-cta-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.9rem 1.35rem;
          border-radius: 999px;
          background: #f7f3ee;
          color: var(--ink);
          font-weight: 700;
          text-decoration: none;
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .present-cta-primary:hover { transform: translateY(-2px); background: #fff; }
        .present-cta-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.9rem 1.35rem;
          border-radius: 999px;
          border: 1px solid rgba(247,243,238,0.45);
          color: #f7f3ee;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .present-cta-secondary:hover {
          background: rgba(255,255,255,0.08);
          transform: translateY(-2px);
        }
        .present-section {
          padding: 4.5rem 1.5rem;
          max-width: 72rem;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .present-section { padding: 5.5rem 3.5rem; }
        }
        .present-section h2 {
          font-family: var(--display);
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          line-height: 1.1;
          margin: 0 0 1rem;
        }
        .present-section p {
          margin: 0;
          color: var(--muted);
          line-height: 1.65;
          max-width: 40rem;
          font-size: 1.05rem;
        }
        .present-services {
          display: grid;
          gap: 1.75rem;
          margin-top: 2rem;
        }
        @media (min-width: 768px) {
          .present-services { grid-template-columns: repeat(3, 1fr); gap: 2rem; }
        }
        .present-services h3 {
          font-family: var(--display);
          font-size: 1.25rem;
          margin: 0 0 0.5rem;
        }
        .present-services p { font-size: 0.98rem; }
        .present-trust {
          background: var(--wash);
        }
        .present-contact {
          display: grid;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .present-contact { grid-template-columns: 1.2fr 1fr; align-items: end; }
        }
        .present-meta {
          display: grid;
          gap: 0.65rem;
          font-size: 1rem;
        }
        .present-meta a {
          color: var(--accent);
          font-weight: 700;
          text-decoration: none;
        }
        .present-meta a:hover { text-decoration: underline; }
        .present-footer {
          padding: 1.5rem;
          text-align: center;
          font-size: 0.8rem;
          color: var(--muted);
          border-top: 1px solid color-mix(in srgb, var(--ink) 10%, transparent);
        }
      `}</style>

      <div className="present-root">
        <section className="present-hero" aria-label="Hero">
          <p
            style={{
              position: "relative",
              zIndex: 1,
              margin: 0,
              marginBottom: "0.75rem",
              fontSize: "0.8rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: "rgba(247,243,238,0.7)",
              animation: "presentRise 0.9s ease both",
            }}
          >
            {copy.tagline}
          </p>
          <h1 className="present-brand">{business.name}</h1>
          <p className="present-headline">{copy.headline}</p>
          <p className="present-support">{copy.supporting}</p>
          <div className="present-ctas">
            {business.phone && tel ? (
              <a className="present-cta-primary" href={`tel:${tel}`}>
                {copy.ctaPrimary}
              </a>
            ) : (
              <a className="present-cta-primary" href={mapsHref} target="_blank" rel="noreferrer">
                {copy.ctaPrimary}
              </a>
            )}
            <a className="present-cta-secondary" href="#contact">
              {copy.ctaSecondary}
            </a>
          </div>
        </section>

        <section className="present-section" aria-label="About">
          <h2>{copy.aboutTitle}</h2>
          <p>{copy.aboutBody}</p>
        </section>

        <section
          className="present-section"
          style={{ paddingTop: 0 }}
          aria-label="Services"
        >
          <h2>{copy.servicesTitle}</h2>
          <div className="present-services">
            {copy.services.map((s) => (
              <div key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="present-trust" aria-label="Trust">
          <div className="present-section">
            <h2>{copy.trustTitle}</h2>
            <p>{copy.trustBody}</p>
          </div>
        </section>

        <section id="contact" className="present-section" aria-label="Contact">
          <div className="present-contact">
            <div>
              <h2>{copy.contactTitle}</h2>
              <p style={{ marginTop: "1rem" }}>{copy.contactBody}</p>
            </div>
            <div className="present-meta">
              <div>
                {[business.address, business.city, business.state]
                  .filter(Boolean)
                  .join(", ")}
              </div>
              {business.phone ? (
                <a href={`tel:${tel}`}>{business.phone}</a>
              ) : null}
              {business.hours ? <div>{business.hours}</div> : null}
              <a href={mapsHref} target="_blank" rel="noreferrer">
                Open in Google Maps
              </a>
            </div>
          </div>
        </section>

        <footer className="present-footer">
          Draft site designed with SiteSift · Theme “{theme.label}”
        </footer>
      </div>
    </>
  );
}
