import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/ui";

export const metadata: Metadata = {
  title: "Hire a Doula — Tampa Bay Birth Doula Directory",
  description:
    "Every woman deserves a doula. Learn why doula support matters and find trusted birth doulas serving Tampa, St. Petersburg, and surrounding areas.",
};

const whyDoula = [
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
      "Doulas help families feel held and supported, creating space where the hormones of labor can work at their best — medicated or unmedicated, simple or complex.",
  },
  {
    icon: "💑",
    label: "Partner Support",
    detail:
      "Whether it's a partner, friend, or family member, our doulas support every birth partner in being as involved as they'd like.",
  },
  {
    icon: "📋",
    label: "Evidence-Based Information",
    detail:
      "Doulas help families connect with evidence-based resources, ask great questions, and advocate for the very best care from their providers.",
  },
];

const doulas = [
  { name: "Mothering Melanin",       href: "http://www.motheringmelanin.com",      featured: true  },
  { name: "3 Gems Birth Services",   href: "http://3gemsbirthservices.com",         featured: false },
  { name: "Better Together Birthing",href: "http://www.bettertogetherbirthing.com", featured: false },
  { name: "Buddha Belly",            href: "https://buddhabellybirth.com",          featured: false },
  { name: "Doula Hive",              href: "https://doulahive.com",                 featured: false },
  { name: "Empowered Birth",         href: "https://doulaempoweredbirth.wixsite.com/erika", featured: false },
  { name: "Hypnotherapy Mind",       href: "http://www.hypnotherapymind.com",       featured: false },
  { name: "One Love",                href: "https://www.onelovedoula.com",          featured: false },
  { name: "The Mindful Doula",       href: "https://www.instagram.com/themindfuldoula_tampabay/", featured: false },
  { name: "Yolanda Corteo",          href: "https://www.yolandacorteo.com",         featured: false },
  { name: "Your Call Doula",         href: "https://www.facebook.com/yourcalldoula", featured: false },
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
            Tampa Bay Doula Directory
          </span>
          <h1
            className="text-display-lg"
            style={{ color: "var(--color-cocoa)", marginBottom: "1.25rem", marginTop: "0.5rem" }}
          >
            Every Woman Deserves a Doula
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
            A doula is a trained professional who provides continuous physical, emotional, and
            informational support before, during, and shortly after childbirth — helping you
            achieve the healthiest, most satisfying experience possible.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Link href="/contact#consult" className="btn-terracotta">
              Book Mothering Melanin
            </Link>
            <Link href="#directory" className="btn-outline">
              View All Doulas
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
            examining doula care demonstrate remarkably improved physical and psychological
            outcomes for birthing people and their babies.{" "}
            <strong style={{ color: "var(--color-cream)" }}>
              Doulas have a positive impact on the well-being of the entire family.
            </strong>
          </p>
        </div>
      </section>

      {/* WHY A DOULA */}
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
              What a doula brings to your birth
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 20rem), 1fr))",
              gap: "1.25rem",
            }}
          >
            {whyDoula.map((item) => (
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
              Recommended Doulas
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
              All families benefit with a birth doula on their team. Here are some we recommend
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
            {doulas.map((doula) => (
              <a
                key={doula.name}
                href={doula.href}
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
                  backgroundColor: doula.featured ? "var(--color-cocoa)" : "white",
                  boxShadow: doula.featured ? "var(--shadow-card-hover)" : "var(--shadow-card)",
                  outline: doula.featured ? "2px solid var(--color-terracotta)" : "none",
                }}

              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  {doula.featured && (
                    <span style={{ fontSize: "1.25rem" }} aria-hidden="true">🌿</span>
                  )}
                  <div>
                    {doula.featured && (
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
                        color: doula.featured
                          ? "var(--color-cream)"
                          : "var(--color-cocoa)",
                      }}
                    >
                      {doula.name}
                    </span>
                  </div>
                </div>
                <svg
                  style={{
                    width: "1rem",
                    height: "1rem",
                    flexShrink: 0,
                    color: doula.featured
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

          <p
            style={{
              textAlign: "center",
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              color: "color-mix(in srgb, var(--color-cocoa) 40%, transparent)",
              marginTop: "2.5rem",
              lineHeight: 1.7,
            }}
          >
            This directory is maintained in partnership with{" "}
            <a
              href="https://tampabaymidwives.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-terracotta)", textDecoration: "none" }}
            >
              Tampa Bay Midwives
            </a>
            . Know a doula who should be listed?{" "}
            <Link href="/contact" style={{ color: "var(--color-terracotta)", textDecoration: "none" }}>
              Get in touch.
            </Link>
          </p>
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
            healthcare provider. Doulas work alongside your OB, midwife, or care team to support
            your experience — not replace it.
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