import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/ui";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Jazzlyn | Meet Your Doula",
  description:
    "Jazzlyn is a trauma-informed, culturally affirming birth doula serving Black birthing people in Tampa Bay. Learn her story, values, and approach.",
};

export default function AboutPage() {
  return (
    <>
      {/* HERO — 2 columns side by side */}
      <section
        className="section-padding"
        style={{ paddingTop: "8rem", paddingBottom: "4rem", backgroundColor: "var(--color-cream)" }}
      >
        <div
          className="container-wide"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          <div>
            <span className="section-label" style={{ marginBottom: "1rem" }}>
              Meet Jazzlyn
            </span>
            <h1
              className="text-display-lg"
              style={{ color: "var(--color-cocoa)", marginBottom: "1.5rem", marginTop: "0.5rem" }}
            >
              Birth support rooted in community, culture & deep care.
            </h1>
            <p
              className="text-body-lg"
              style={{ color: "color-mix(in srgb, var(--color-cocoa) 65%, transparent)", maxWidth: "36rem" }}
            >
              Jazzlyn is a trained, certified birth doula and the founder of Mothering Melanin — a
              practice built on the belief that every Black birthing person deserves to feel
              powerful, informed, and genuinely supported.
            </p>
          </div>

          <div
            style={{
              aspectRatio: "4/5",
              borderRadius: "2rem",
              overflow: "hidden",
              position: "relative",
              width: "100%",
            }}
          >
            <Image
              src="/logos/Jazzlyn2.jpeg"
              alt="Jazzlyn, founder of Mothering Melanin"
              fill
              priority
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
        </div>
      </section>

      {/* STORY */}
      <section
        className="section-padding"
        style={{ paddingTop: "rem", paddingBottom: "3rem", backgroundColor: "var(--color-blush)" }}
      >
        <div className="container-narrow">
          <span className="section-label" style={{ marginBottom: "1.25rem" }}>
            My Story
          </span>
          <p
            className="text-body-lg"
            style={{ color: "color-mix(in srgb, var(--color-cocoa) 70%, transparent)" }}
          >
            I&apos;m genuinely excited to share a bit about myself and why I&apos;m so passionate
            about being a doula. 🌟 My journey in doula work is rooted in a deep commitment to
            providing warm, culturally competent support. I have a special focus on being there for
            Black women/birthing people and their families. Drawing from my own experiences,
            I&apos;ve found a unique wellspring of empathy and understanding that I bring to every
            interaction. I&apos;m dedicated to staying in the know, constantly educating myself on
            the specific needs of the communities I&apos;m here to serve. I&apos;m all about
            openness and zero judgment — a safe and welcoming space where your unique story is not
            just heard but celebrated. While my faith as a believer in Jesus Christ informs who I
            am as a person, I won&apos;t push it on you. Instead, it guides me to approach every
            individual with love, respect, and compassion, regardless of their beliefs. I truly
            believe that my background and perspective can make a meaningful, positive impact on
            the incredible individuals I have the privilege of supporting. I cannot wait to be a
            part of your journey!
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section
        className="section-padding"
        style={{ paddingTop: "3rem", paddingBottom: "3rem", backgroundColor: "var(--color-cream)" }}
      >
        <div className="container-wide">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label" style={{ marginBottom: "0.75rem" }}>
              What I Stand For
            </span>
            <h2 className="text-display-md" style={{ color: "var(--color-cocoa)", marginTop: "0.5rem" }}>
              The values that guide every birth
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 22rem), 1fr))", gap: "1.5rem", alignItems: "stretch" }}>
            {[
              {
                title: "Culturally Affirming",
                description:
                  "Your culture, traditions, and lived experience are welcome — and honored — in your birth space. I center the fullness of who you are.",
              },
              {
                title: "Trauma-Informed Care",
                description:
                  "I approach every person with patience, gentleness, and an awareness that birth can be both healing and vulnerable.",
              },
              {
                title: "Patient Advocacy",
                description:
                  "I help you understand your rights, ask the right questions, and communicate your needs clearly to your healthcare team.",
              },
              {
                title: "Informed Consent",
                description:
                  "You are the decision-maker. I make sure you have the information and the confidence to choose what's right for you.",
              },
            ].map((v) => (
              <div key={v.title} className="card" style={{ padding: "1.5rem" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.125rem",
                    fontWeight: 500,
                    color: "var(--color-cocoa)",
                    marginBottom: "0.625rem",
                    marginTop: 0,
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.875rem",
                    color: "color-mix(in srgb, var(--color-cocoa) 60%, transparent)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKING TOGETHER + FAITH NOTE */}
      <section
        className="section-padding"
        style={{ paddingTop: "3rem", paddingBottom: "3rem", backgroundColor: "var(--color-warm)" }}
      >
        <div
          className="container-wide"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}
        >
          <div>
            <span className="section-label" style={{ marginBottom: "1rem" }}>
              Working Together
            </span>
            <h2
              className="text-display-md"
              style={{ color: "var(--color-cocoa)", marginBottom: "1.5rem", marginTop: "0.5rem" }}
            >
              What you can expect
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                "A relationship built on genuine trust and transparency — never rushed.",
                "Prenatal visits where you set the agenda and your questions always get real answers.",
                "Continuous presence through labor, from the moment you need me.",
                "Advocacy that is firm, respectful, and always centered on your wishes.",
                "Postpartum follow-through — because birth is just the beginning.",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div
                    style={{
                      width: "1.5rem", height: "1.5rem", borderRadius: "50%", flexShrink: 0,
                      marginTop: "2px", display: "flex", alignItems: "center", justifyContent: "center",
                      backgroundColor: "color-mix(in srgb, var(--color-terracotta) 20%, transparent)",
                    }}
                  >
                    <svg style={{ width: "0.75rem", height: "0.75rem", color: "var(--color-terracotta)", fill: "currentColor" }} viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "color-mix(in srgb, var(--color-cocoa) 70%, transparent)", lineHeight: 1.7, margin: 0 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ backgroundColor: "var(--color-blush)", borderRadius: "var(--radius-card)", padding: "2rem" }}>
            <span className="section-label" style={{ marginBottom: "1rem" }}>A Note on Faith</span>
            <blockquote
              style={{
                fontFamily: "var(--font-serif)", fontSize: "1.25rem", color: "var(--color-cocoa)",
                fontStyle: "italic", lineHeight: 1.65, margin: "0.5rem 0 1rem",
              }}
            >
              &ldquo;My faith is the foundation of the compassion I bring to this work.&rdquo;
            </blockquote>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "color-mix(in srgb, var(--color-cocoa) 65%, transparent)", lineHeight: 1.7, margin: 0 }}>
              Jazzlyn&apos;s personal faith grounds the warmth, patience, and steadiness she brings
              to every birth. She serves families of all beliefs and backgrounds with equal care and
              full respect — her spiritual grounding is personal, never prescriptive.
            </p>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section
        className="section-padding"
        style={{ paddingTop: "3rem", paddingBottom: "3rem", backgroundColor: "var(--color-blush)" }}
      >
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <span className="section-label" style={{ marginBottom: "1rem" }}>
            Training & Credentials
          </span>
          <h2
            className="text-display-md"
            style={{ color: "var(--color-cocoa)", marginBottom: "2rem", marginTop: "0.5rem" }}
          >
            Certified, Trained & Committed to ongoing learning
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 14rem), 1fr))",
              gap: "1.25rem",
            }}
          >
            {[
              { label: "Doula Certification", detail: "DONA International", logo: "/logos/dona.jpg" },
              { label: "B.S Psychology",       detail: "Georgia State University", logo: "/logos/gsu.jpg" },
              {
                label: "Evidence Based Birth Member",
                detail: "Committed to helping birthing people make informed decisions grounded in the most current, credible research.",
                logo: "/logos/EBB.jpg",
              },
            ].map((cred) => (
              <div key={cred.label} className="card" style={{ padding: "1.5rem", textAlign: "center" }}>
                <div
                  style={{
                    height: "56px", display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "1rem", backgroundColor: "rgba(255,255,255,0.55)",
                    borderRadius: "0.75rem", padding: "0.5rem 0.75rem",
                  }}
                >
                  <img src={cred.logo} alt={`${cred.detail} logo`} style={{ height: "46px", width: "100%", objectFit: "contain", display: "block" }} />
                </div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", color: "var(--color-cocoa)", marginBottom: "0.5rem", marginTop: 0, fontWeight: 500 }}>
                  {cred.label}
                </h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "color-mix(in srgb, var(--color-cocoa) 50%, transparent)", margin: 0 }}>
                  {cred.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}