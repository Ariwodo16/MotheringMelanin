import Link from "next/link";

interface CTASectionProps {
  headline?: string;
  sub?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  dark?: boolean;
}

export function CTASection({
  headline = "Ready to feel supported and seen?",
  sub = "Your birth experience deserves care that honors who you are. Let's talk — the first conversation is always free.",
  primaryLabel = "Schedule Free Consultation",
  primaryHref = "/contact#consult",
  secondaryLabel = "View Services",
  secondaryHref = "/services",
  dark = false,
}: CTASectionProps) {
  return (
    <section className="section-padding" style={{ backgroundColor: dark ? "var(--color-cocoa)" : "var(--color-blush)" }}>
      <div className="container-narrow" style={{ textAlign: "center" }}>
        <span className="section-label" style={{ color: dark ? "var(--color-terracotta-light)" : "var(--color-terracotta)", marginBottom: "1rem" }}>
          Let&apos;s connect
        </span>
        <h2 className="text-display-md" style={{ color: dark ? "var(--color-cream)" : "var(--color-cocoa)", marginBottom: "1.25rem", marginTop: "0.5rem" }}>
          {headline}
        </h2>
        <p className="text-body-lg" style={{ color: dark ? "color-mix(in srgb, var(--color-cream) 65%, transparent)" : "color-mix(in srgb, var(--color-cocoa) 65%, transparent)", marginBottom: "2.5rem", maxWidth: "36rem", marginLeft: "auto", marginRight: "auto" }}>
          {sub}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center", justifyContent: "center" }}>
          <Link href={primaryHref} className={dark ? "btn-terracotta" : "btn-primary"}>
            {primaryLabel}
          </Link>
          {secondaryLabel && (
            <Link href={secondaryHref || "/"} className="btn-outline" style={dark ? { borderColor: "color-mix(in srgb, var(--color-cream) 40%, transparent)", color: "var(--color-cream)" } : {}}>
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

export function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
      <div style={{
        flexShrink: 0,
        width: "2.5rem",
        height: "2.5rem",
        borderRadius: "50%",
        backgroundColor: "color-mix(in srgb, var(--color-terracotta) 15%, transparent)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <span style={{ fontFamily: "var(--font-serif)", color: "var(--color-cocoa)", fontWeight: 500, fontSize: "0.875rem" }}>
          {String(number).padStart(2, "0")}
        </span>
      </div>
      <div>
        <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.125rem", color: "var(--color-cocoa)", fontWeight: 500, marginBottom: "0.375rem", marginTop: 0 }}>
          {title}
        </h3>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "color-mix(in srgb, var(--color-cocoa) 65%, transparent)", lineHeight: 1.7, margin: 0 }}>
          {description}
        </p>
      </div>
    </div>
  );
}

export function LocationStrip() {
  const areas = ["Hillsborough", "Pinellas", "Pasco", "Polk", "Manatee", "Virtual Nationwide"];
  return (
    <div style={{
      backgroundColor: "color-mix(in srgb, var(--color-cocoa) 5%, transparent)",
      borderTop: "1px solid color-mix(in srgb, var(--color-cocoa) 8%, transparent)",
      borderBottom: "1px solid color-mix(in srgb, var(--color-cocoa) 8%, transparent)",
      padding: "1rem 0",
    }}>
      <div className="container-wide">
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1.25rem 1.5rem", justifyContent: "center" }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--color-terracotta)", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", flexShrink: 0 }}>
            Now Serving →
          </span>
          {areas.map((area, i) => (
            <span key={i} style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "color-mix(in srgb, var(--color-cocoa) 75%, transparent)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              {area}
              {i < areas.length - 1 && <span style={{ color: "color-mix(in srgb, var(--color-terracotta) 50%, transparent)" }} aria-hidden="true">•</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

interface QuoteBlockProps {
  quote: string;
  attribution?: string;
}

export function QuoteBlock({ quote, attribution }: QuoteBlockProps) {
  return (
    <div style={{ position: "relative", paddingLeft: "2rem", paddingTop: "0.5rem", paddingBottom: "0.5rem" }}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "4px", backgroundColor: "var(--color-terracotta)", borderRadius: "4px" }} aria-hidden="true" />
      <blockquote className="text-display-md" style={{ fontStyle: "italic", color: "var(--color-cocoa)", margin: 0 }}>
        &ldquo;{quote}&rdquo;
      </blockquote>
      {attribution && (
        <cite style={{ display: "block", marginTop: "1rem", fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "var(--color-terracotta)", fontStyle: "normal", fontWeight: 500 }}>
          — {attribution}
        </cite>
      )}
    </div>
  );
}
