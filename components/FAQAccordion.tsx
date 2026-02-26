"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid color-mix(in srgb, var(--color-cocoa) 10%, transparent)" }}>
      {items.map((item, i) => (
        <div key={i} style={{ borderBottom: "1px solid color-mix(in srgb, var(--color-cocoa) 10%, transparent)", padding: "1.25rem 0" }}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "1rem",
              textAlign: "left",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
            aria-expanded={openIndex === i}
          >
            <span style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.125rem",
              color: "var(--color-cocoa)",
              transition: "color 0.2s",
            }}>
              {item.question}
            </span>
            <span style={{
              marginTop: "2px",
              flexShrink: 0,
              width: "1.5rem",
              height: "1.5rem",
              borderRadius: "50%",
              border: "1px solid color-mix(in srgb, var(--color-cocoa) 25%, transparent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "color-mix(in srgb, var(--color-cocoa) 60%, transparent)",
              fontSize: "1rem",
              transform: openIndex === i ? "rotate(45deg)" : "none",
              transition: "transform 0.3s ease",
            }} aria-hidden="true">
              +
            </span>
          </button>

          <div style={{
            overflow: "hidden",
            maxHeight: openIndex === i ? "500px" : "0",
            transition: "max-height 0.35s ease",
            marginTop: openIndex === i ? "0.75rem" : "0",
          }}>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.875rem",
              color: "color-mix(in srgb, var(--color-cocoa) 70%, transparent)",
              lineHeight: 1.75,
              paddingRight: "2.5rem",
              margin: 0,
            }}>
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
