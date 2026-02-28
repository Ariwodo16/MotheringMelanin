import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/ui";

export const metadata: Metadata = {
  title: "Gallery | Mothering Melanin",
  description:
    "Moments from births, prenatal visits, and the families Jazzlyn has had the honor of supporting. Every image is a story of strength.",
};

const photos = [
  { src: "/logos/client1.jpeg", alt: "Client birth moment", caption: "A powerful moment of strength", span: "tall" },
  { src: "/logos/client2.jpeg", alt: "Prenatal visit", caption: "Prenatal support session", span: "normal" },
  /*{ src: "/logos/client1.jpg", alt: "Postpartum visit", caption: "Fourth trimester love", span: "normal" },
  { src: "/logos/client1.jpg", alt: "Labor support", caption: "Continuous labor support", span: "wide" },
  { src: "/logos/client1.jpg", alt: "Birth team", caption: "Every birth team is sacred", span: "normal" },
  { src: "/logos/client1.jpg", alt: "Newborn moment", caption: "First moments of life", span: "tall" },
  { src: "/logos/client1.jpg", alt: "Family support", caption: "Partners welcomed and included", span: "normal" },
  { src: "/logos/client1.jpg", alt: "Postpartum rest", caption: "Rest is sacred too", span: "wide" },*/
];

export default function GalleryPage() {
  return (
    <>
      {/* HEADER */}
      <section
        className="section-padding"
        style={{ paddingTop: "8rem", paddingBottom: "3rem", backgroundColor: "var(--color-cream)" }}
      >
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <span className="section-label" style={{ marginBottom: "1rem" }}>Our Community</span>
          <h1
            className="text-display-lg"
            style={{ color: "var(--color-cocoa)", marginBottom: "1.25rem", marginTop: "0.5rem" }}
          >
            Every birth is a sacred story
          </h1>
          <p
            className="text-body-lg"
            style={{
              color: "color-mix(in srgb, var(--color-cocoa) 60%, transparent)",
              maxWidth: "36rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            These are the families who trusted Jazzlyn with their most vulnerable, powerful moments.
            Shared with love and full permission.
          </p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--color-warm)", paddingTop: "2rem" }}
      >
        <div className="container-wide">
          <style>{`
            .gallery-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 1rem;
            }
            .gallery-item {
              position: relative;
              border-radius: 1rem;
              overflow: hidden;
              cursor: pointer;
            }
            .gallery-item.tall {
              grid-row: span 2;
            }
            .gallery-item.wide {
              grid-column: span 2;
            }
            .gallery-item img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform 0.5s ease;
              display: block;
            }
            .gallery-item:hover img {
              transform: scale(1.04);
            }
            .gallery-caption {
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              padding: 1.5rem 1.25rem 1rem;
              background: linear-gradient(to top, rgba(61,31,15,0.75) 0%, transparent 100%);
              opacity: 0;
              transition: opacity 0.3s ease;
            }
            .gallery-item:hover .gallery-caption {
              opacity: 1;
            }
            .gallery-caption p {
              font-family: var(--font-serif);
              font-size: 0.875rem;
              color: white;
              margin: 0;
              font-style: italic;
            }
            @media (max-width: 768px) {
              .gallery-grid {
                grid-template-columns: repeat(2, 1fr);
              }
              .gallery-item.wide {
                grid-column: span 2;
              }
              .gallery-item.tall {
                grid-row: span 1;
              }
              .gallery-caption {
                opacity: 1;
              }
            }
            @media (max-width: 480px) {
              .gallery-grid {
                grid-template-columns: 1fr;
              }
              .gallery-item.wide,
              .gallery-item.tall {
                grid-column: span 1;
                grid-row: span 1;
              }
            }
          `}</style>

          <div className="gallery-grid">
            {photos.map((photo, i) => (
              <div
                key={i}
                className={`gallery-item ${photo.span}`}
                style={{ aspectRatio: photo.span === "tall" ? "3/4" : photo.span === "wide" ? "16/9" : "1/1" }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="gallery-caption">
                  <p>{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              textAlign: "center",
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              color: "color-mix(in srgb, var(--color-cocoa) 40%, transparent)",
              marginTop: "2rem",
              lineHeight: 1.7,
            }}
          >
            All photos shared with explicit permission from the families featured.
          </p>
        </div>
      </section>

      <CTASection
        headline="Ready to create your own story?"
        sub="Book a free consultation and let Jazzlyn walk this journey with you."
      />
    </>
  );
}
