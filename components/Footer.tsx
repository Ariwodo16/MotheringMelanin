'use client';

import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-cocoa)", color: "color-mix(in srgb, var(--color-cream) 80%, transparent)" }}>
      <div className="container-wide" style={{ padding: "4rem 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "3rem" }}>

          {/* Brand */}
          <div>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", color: "var(--color-cream)", fontWeight: 500, marginBottom: "0.75rem" }}>
              Mothering Melanin
            </h3>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", lineHeight: 1.7, color: "color-mix(in srgb, var(--color-cream) 65%, transparent)", marginBottom: "1.5rem", maxWidth: "28ch" }}>
              Trauma-informed, culturally competent doula support for Black birthing people and families in Tampa Bay and beyond.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              {[
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "color-mix(in srgb, var(--color-cream) 50%, transparent)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--color-terracotta-light)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "color-mix(in srgb, var(--color-cream) 50%, transparent)")}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "0.625rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-terracotta-light)", marginBottom: "1rem" }}>
              Navigate
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {[
                { label: "Services", href: "/services" },
                { label: "About Jazzlyn", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
                { label: "FAQ", href: "/#faq" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "color-mix(in srgb, var(--color-cream) 65%, transparent)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--color-cream)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "color-mix(in srgb, var(--color-cream) 65%, transparent)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "0.625rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-terracotta-light)", marginBottom: "1rem" }}>
              Now Serving
            </h4>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "color-mix(in srgb, var(--color-cream) 65%, transparent)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Hillsborough • Pinellas • Pasco<br />
              Polk •<br />
              Virtual support available nationwide.
            </p>
            <Link href="/contact#consult" className="btn-terracotta" style={{ fontSize: "0.8rem", padding: "0.6rem 1.25rem" }}>
              Schedule Free Consult
            </Link>
          </div>
        </div>

        <div style={{
          marginTop: "3.5rem",
          paddingTop: "1.5rem",
          borderTop: "1px solid color-mix(in srgb, var(--color-cream) 10%, transparent)",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          fontSize: "0.75rem",
          color: "color-mix(in srgb, var(--color-cream) 35%, transparent)",
          fontFamily: "var(--font-sans)",
        }}>
          <p>© {new Date().getFullYear()} Mothering Melanin. All rights reserved.</p>
          <p>Doula support is not a substitute for medical care. We work alongside your healthcare team.</p>
        </div>
      </div>
    </footer>
  );
}
