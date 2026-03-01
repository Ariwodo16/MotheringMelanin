import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Partners — Mothering Melanin Partnership Directory",
  description:
    "Every family deserves a full circle of support. Meet our trusted partners — chiropractors, midwives, and wellness providers serving Tampa Bay and surrounding areas.",
};

const whySupport = [
  {
    icon: "🤲",
    label: "Physical Support",
    detail:
      "Position ideas, hands-on comfort measures, counter pressure, breathing techniques, and other tools to support labor progress and comfort.",
  },
  {
    icon: "💛",
    label: "Emotional Support",
    detail:
      "Our network helps families feel held and supported, creating space where the hormones of labor can work at their best — medicated or unmedicated, simple or complex.",
  },
  {
    icon: "💑",
    label: "Partner Support",
    detail:
      "Whether it's a partner, friend, or family member, our team supports every birth partner in being as involved as they'd like.",
  },
  {
    icon: "📋",
    label: "Evidence-Based Information",
    detail:
      "Our partners help families connect with evidence-based resources, ask great questions, and advocate for the very best care from their providers.",
  },
];

const partners = [
  { name: "Mothering Melanin", href: "http://www.motheringmelanin.com", featured: true  },
  { name: "Bee Kind Family Chiropractor", href: "https://www.beekindfamilychiropractic.com/", featured: false },
  { name: "Eden Chiropractic", href: "https://www.edenchiropracticfl.com/", featured: false },
  { name: "Jireh Chiropractic", href: "https://www.jirehchiropractic.com", featured: false },
  { name: "Tampa Bay Midwives", href: "https://tampabaymidwives.com/", featured: false },
  { name: "Haven Oasis Wellness Co", href: "https://www.havenoasisco.com/", featured: false },
];

export default function HireADoulaPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="section-padding"
        style={{ paddingTop: "8rem", backgroundColor: "var(--color-cream)" }}
      >
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <span className="section-label" style={{ marginBottom: "1rem" }}>
            Mothering Melanin Partnership Directory
          </span>
          <h1
            className="text-display-lg"
            style={{ color: "var(--color-cocoa)", marginBottom: "1.25rem", marginTop: "0.5rem" }}
          >
            Every Body Deserves Full Circle Support
          </h1>
          <p
            className="text-body-lg"
            style={{
              color: "color-mix(in srgb, var(--color-cocoa) 60%, transparent)",
              maxWidth: "38rem",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "2rem",
            }}
          >
            Birth is just the beginning. Our trusted network of chiropractors, midwives, and
            wellness providers are here to support your whole family — before, during, and after
            your birth journey.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Link href="/contact#consult" className="btn-terracotta">
              Book Mothering Melanin
            </Link>
            <Link href="#directory" className="btn-outline">
              View All Partners
            </Link>
          </div>
        </div>
      </section>

      {/* SCIENCE CALLOUT */}
      <section style={{ padding: "2.5rem 0", backgroundColor: "var(--color-cocoa)" }}>
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.95rem",
              color: "color-mix(in srgb, var(--color-cream) 80%, transparent)",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Countless{" "}
            <a
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6483123/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-cream)", fontWeight: 500 }}
            >
              scientific trials
            </a>{" "}
            examining birth support demonstrate remarkably improved physical and psychological
            outcomes for birthing people and their babies.{" "}
            <strong style={{ color: "var(--color-cream)" }}>
              A strong support network has a positive impact on the well-being of the entire family.
            </strong>
          </p>
        </div>
      </section>

      {/* WHY SUPPORT */}
      <section className="section-padding" style={{ backgroundColor: "var(--color-blush)" }}>
        <div className="container-wide">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label" style={{ marginBottom: "0.75rem" }}>
              Why It Matters
            </span>
            <h2
              className="text-display-md"
              style={{ color: "var(--color-cocoa)", marginTop: "0.5rem" }}
            >
              What our network brings to your birth
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 20rem), 1fr))",
              gap: "1.25rem",
            }}
          >
            {whySupport.map((item) => (
              <div
                key={item.label}
                className="card"
                style={{ padding: "1.75rem", display: "flex", gap: "1.25rem", alignItems: "flex-start" }}
              >
                <span style={{ fontSize: "1.75rem", flexShrink: 0 }} aria-hidden="true">
                  {item.icon}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.125rem",
                      fontWeight: 500,
                      color: "var(--color-cocoa)",
                      marginBottom: "0.5rem",
                      marginTop: 0,
                    }}
                  >
                    {item.label}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.875rem",
                      color: "color-mix(in srgb, var(--color-cocoa) 65%, transparent)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECTORY */}
      <section id="directory" className="section-padding" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="container-wide">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="section-label" style={{ marginBottom: "0.75rem" }}>
              Trusted Partners
            </span>
            <h2
              className="text-display-md"
              style={{ color: "var(--color-cocoa)", marginTop: "0.5rem" }}
            >
              Tampa Bay families — you&apos;re in good hands
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                color: "color-mix(in srgb, var(--color-cocoa) 55%, transparent)",
                maxWidth: "34rem",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "0.75rem",
                lineHeight: 1.7,
              }}
            >
              Every family benefits from a trusted care team. Here are our recommended partners
              serving Tampa, St. Petersburg, and surrounding areas.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 18rem), 1fr))",
              gap: "1rem",
            }}
          >
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                  padding: "1.25rem 1.5rem",
                  borderRadius: "var(--radius-card)",
                  textDecoration: "none",
                  transition: "all 0.2s",
                  backgroundColor: partner.featured ? "var(--color-cocoa)" : "white",
                  boxShadow: partner.featured ? "var(--shadow-card-hover)" : "var(--shadow-card)",
                  outline: partner.featured ? "2px solid var(--color-terracotta)" : "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  {partner.featured && (
                    <span style={{ fontSize: "1.25rem" }} aria-hidden="true">🌿</span>
                  )}
                  <div>
                    {partner.featured && (
                      <span
                        style={{
                          display: "block",
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.6rem",
                          fontWeight: 600,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "var(--color-terracotta)",
                          marginBottom: "0.2rem",
                        }}
                      >
                        You&apos;re here
                      </span>
                    )}
                    <span
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.05rem",
                        fontWeight: 500,
                        color: partner.featured ? "var(--color-cream)" : "var(--color-cocoa)",
                      }}
                    >
                      {partner.name}
                    </span>
                  </div>
                </div>
                <svg
                  style={{
                    width: "1rem",
                    height: "1rem",
                    flexShrink: 0,
                    color: partner.featured
                      ? "color-mix(in srgb, var(--color-cream) 50%, transparent)"
                      : "var(--color-terracotta)",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: 2,
                  }}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
          </div>
      </section>

      {/* DISCLAIMER */}
      <section style={{ padding: "2.5rem 0", backgroundColor: "var(--color-blush)" }}>
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              color: "color-mix(in srgb, var(--color-cocoa) 50%, transparent)",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            <strong style={{ color: "color-mix(in srgb, var(--color-cocoa) 70%, transparent)" }}>
              Please note:
            </strong>{" "}
            Doula services are not medical care and do not replace the services of a licensed
            healthcare provider. Our partners work alongside your OB, midwife, or care team to
            support your experience — not replace it.
          </p>
        </div>
      </section>

      <CTASection
        headline="Ready to have Jazzlyn by your side?"
        sub="Book a free 30-minute consultation and let's talk through your birth goals together."
      />
    </>
  );
}