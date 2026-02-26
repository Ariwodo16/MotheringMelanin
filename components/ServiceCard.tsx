import Link from "next/link";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  forWho: string;
  href?: string;
}

export default function ServiceCard({ icon, title, description, forWho, href = "/services" }: ServiceCardProps) {
  return (
    <div className="card" style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
      <span style={{ fontSize: "1.875rem" }} aria-hidden="true">{icon}</span>
      <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", fontWeight: 500, color: "var(--color-cocoa)", margin: 0 }}>
        {title}
      </h3>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "color-mix(in srgb, var(--color-cocoa) 65%, transparent)", lineHeight: 1.7, flex: 1, margin: 0 }}>
        {description}
      </p>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--color-terracotta)", fontWeight: 500, margin: 0 }}>
        <span style={{ textTransform: "uppercase", letterSpacing: "0.1em" }}>For:</span> {forWho}
      </p>
      <Link href={href} style={{
        fontFamily: "var(--font-sans)",
        fontSize: "0.875rem",
        fontWeight: 500,
        color: "var(--color-cocoa)",
        textDecoration: "underline",
        textDecorationColor: "color-mix(in srgb, var(--color-terracotta) 40%, transparent)",
        textUnderlineOffset: "4px",
        transition: "text-decoration-color 0.2s",
      }}>
        Learn more →
      </Link>
    </div>
  );
}
