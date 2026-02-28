interface TestimonialCardProps {
  quote: string;
  name: string;
  initials: string;
  serviceType: string;
}

export default function TestimonialCard({ quote, name, initials, serviceType }: TestimonialCardProps) {
  return (
    <div style={{
      backgroundColor: "var(--color-blush)",
      borderRadius: "var(--radius-card)",
      padding: "2rem",
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
    }}>
      {/* Stars */}
      <div style={{ display: "flex", gap: "0.25rem" }} aria-label="5 stars">
        {[...Array(5)].map((_, i) => (
          <svg key={i} style={{ width: "1rem", height: "1rem", color: "var(--color-terracotta)", fill: "currentColor" }} viewBox="0 0 20 20" aria-hidden="true">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <blockquote style={{
        fontFamily: "var(--font-serif)",
        fontSize: "auto",
        color: "var(--color-cocoa)",
        lineHeight: 1.7,
        fontStyle: "italic",
        flex: 1,
        margin: 0,
      }}>
        &ldquo;{quote}&rdquo;
      </blockquote>

      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <div style={{
          width: "2.5rem",
          height: "2.5rem",
          borderRadius: "50%",
          backgroundColor: "color-mix(in srgb, var(--color-cocoa) 15%, transparent)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}>
          <span style={{ fontFamily: "var(--font-serif)", fontSize: "0.875rem", fontWeight: 500, color: "var(--color-cocoa)" }}>
            {initials}
          </span>
        </div>
        <div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 500, color: "var(--color-cocoa)", margin: 0 }}>{name}</p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--color-terracotta)", margin: 0 }}>{serviceType}</p>
        </div>
      </div>
    </div>
  );
}
