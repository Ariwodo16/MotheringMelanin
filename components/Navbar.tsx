'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
    { label: "Hire a Partner",  href: "/hire-a-doula"  }, 
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Gallery", href: "/#gallery" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        backgroundColor: scrolled ? "color-mix(in srgb, var(--color-cream) 95%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        boxShadow: scrolled ? "0 1px 0 color-mix(in srgb, var(--color-cocoa) 8%, transparent)" : "none",
        padding: scrolled ? "0.75rem 0" : "1.25rem 0",
      }}
    >
      <div className="container-wide" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <Image
            src="/logos/logo.png"
            alt="Mothering Melanin"
            width={100}
            height={30}
            priority
            style={{ objectFit: "contain", height: "auto" }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "1.75rem" }} className="hidden-mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.0rem",
                color: "color-mix(in srgb, var(--color-cocoa) 75%, transparent)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--color-cocoa)")}
              onMouseLeave={e => (e.currentTarget.style.color = "color-mix(in srgb, var(--color-cocoa) 75%, transparent)")}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact#consult" className="btn-terracotta" style={{ fontSize: "0.8rem", padding: "0.6rem 1.25rem" }}>
            Schedule Free Consultation
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          style={{ display: "flex", flexDirection: "column", gap: "5px", padding: "8px", background: "none", border: "none", cursor: "pointer" }}
          className="show-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                backgroundColor: "var(--color-cocoa)",
                borderRadius: "2px",
                transition: "all 0.3s ease",
                transform: menuOpen
                  ? i === 0 ? "rotate(45deg) translate(5px, 5px)"
                  : i === 1 ? "scaleX(0)"
                  : "rotate(-45deg) translate(5px, -5px)"
                  : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          backgroundColor: "var(--color-cream)",
          borderTop: "1px solid color-mix(in srgb, var(--color-cocoa) 10%, transparent)",
          padding: "1.5rem 1.25rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1rem",
                color: "var(--color-cocoa)",
                padding: "0.25rem 0",
                borderBottom: "1px solid color-mix(in srgb, var(--color-cocoa) 5%, transparent)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact#consult"
            onClick={() => setMenuOpen(false)}
            className="btn-terracotta"
            style={{ marginTop: "0.5rem", textAlign: "center", justifyContent: "center" }}
          >
            Schedule Free Consultation
          </Link>
        </div>
      )}

      <style>{`
        nav.hidden-mobile { display: none !important; }
        button.show-mobile { display: flex !important; }
        @media (min-width: 1024px) {
        nav.hidden-mobile { display: flex !important; }
        button.show-mobile { display: none !important; }
      `}</style>
    </header>
  );
}