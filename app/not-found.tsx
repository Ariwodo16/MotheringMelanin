import Link from "next/link";

export default function NotFound() {
  return (
    <section style={{ minHeight: "100svh", backgroundColor: "var(--color-cream)", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "5rem" }}>
      <div className="container-narrow" style={{ textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontSize: "6rem", color: "color-mix(in srgb, var(--color-terracotta) 30%, transparent)", fontWeight: 300, lineHeight: 1, margin: "0 0 1.5rem" }}>
          404
        </p>
        <h1 className="text-display-md" style={{ color: "var(--color-cocoa)", marginBottom: "1rem" }}>Page not found</h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "color-mix(in srgb, var(--color-cocoa) 60%, transparent)", marginBottom: "2rem" }}>
          This page doesn&apos;t exist — but your support does. Let&apos;s get you back on track.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
          <Link href="/" className="btn-primary">Back to Home</Link>
          <Link href="/contact" className="btn-outline">Contact Jazzlyn</Link>
        </div>
      </div>
    </section>
  );
}
