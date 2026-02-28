import type { Metadata } from "next";
import Link from "next/link";
import { LocationStrip, CTASection, StepCard, QuoteBlock } from "@/components/ui";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import FAQAccordion from "@/components/FAQAccordion";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mothering Melanin | Culturally Competent Doula Support in Tampa Bay",
  description:
    "Jazzlyn offers trauma-informed, culturally affirming birth doula support for Black birthing people in Hillsborough, Pinellas, Pasco & surrounding areas.",
};

const services = [
  { icon: "🌿", title: "Birth Doula Support", description: "Continuous, evidence-based labor and birth support — physical comfort, emotional grounding, and unwavering advocacy from early labor through delivery.", forWho: "Pregnant individuals & birthing families" },
  { icon: "🌸", title: "Prenatal Support", description: "Two or more prenatal visits to build your care plan, explore your birth preferences, and prepare your mind, body, and birth team.", forWho: "Any trimester, ideally starting in second or third" },
  { icon: "☀️", title: "Postpartum Support", description: "Follow-up visits and check-ins in the days after birth — newborn care guidance, emotional support, and referrals to trusted local resources.", forWho: "New parents in the fourth trimester" },
  { icon: "💻", title: "Virtual Doula Support", description: "Remote prenatal education, birth preparation coaching, and postpartum check-ins available to families everywhere.", forWho: "Families outside Tampa Bay or with scheduling needs" },
  { icon: "📋", title: "Birth Plan Guidance", description: "Collaborative, informed birth planning that reflects your values, communicates your preferences, and supports your right to informed consent.", forWho: "Any birthing person seeking clarity and advocacy" },
  { icon: "🤝", title: "Partner Support", description: "Your partner or support person is coached and included — learn how to show up, advocate, and bond through the birth experience together.", forWho: "Partners, co-parents, and chosen family" },
];

const steps = [
  { title: "Free Consultation Call", description: "A no-pressure 30-minute call to meet, ask questions, and see if we're the right fit. There's never a commitment required." },
  { title: "Personalized Care Plan", description: "We build your birth preferences together — your values, comfort measures, fears, and hopes — so nothing important gets overlooked." },
  { title: "Prenatal Support + Education", description: "Two or more prenatal visits (in-person or virtual) to educate, prepare, and build trust before your big day." },
  { title: "On-Call & Birth Support", description: "From the moment active labor begins, I'm available 24/7. I join you for continuous support through delivery and the immediate postpartum period." },
  { title: "Postpartum Follow-Up", description: "A postpartum visit to process your birth, check in on your wellbeing, and connect you with any resources you may need." },
];

const testimonials = [
  { quote: "Jazzlyn was so amazing, I never want to give birth without her! Best doula ever!", name: "Ginny Y.", initials: "GY", serviceType: "Birth Doula Support"},
  { quote: "Jazzlyn was an awesome help to me emotionally and physically. She really helped me to not feel alone.", name: "Anonymous.", initials: "Anon", serviceType: "Birth Doula Support"},
  { quote: "Jazzlyn was worth every penny. She supported my wife and I through our first labor and natural, unmedicated childbirth. She was prepared, timely, kind, professional, and put up with us even when we were annoying. She stayed with us for around 16 hours straight including after the birth to help us while we got some rest. We can't say enough good things about her. If you're on the fence about getting a Doula, don't be. You'll need it!", name: "Emma & Dillon M.", initials: "E&D", serviceType: "Birth Doula Support"},
];

const faqs = [
  { question: "What does a doula actually do?", answer: "A doula provides continuous emotional, physical, and informational support before, during, and after birth. Unlike midwives or OBs, doulas don't perform medical tasks — we focus on comfort measures, advocacy, communication with your care team, and making sure you feel informed and supported every step of the way." },
  { question: "When should I hire a doula?", answer: "The earlier, the better — ideally by the second trimester. This gives us time to build a relationship, create your care plan, and prepare thoroughly. That said, I welcome inquiries at any stage of pregnancy." },
  { question: "What's included in your birth support?", answer: "Every package includes prenatal visits, a personalized birth preferences document, on-call availability from 38 weeks, continuous labor support, and a postpartum follow-up visit. Specific packages vary — see the Services page for full details." },
  { question: "Where do you serve?", answer: "I primarily serve Hillsborough, Pinellas, Pasco, and Polk counties in the Tampa Bay area. Virtual support is available nationwide. Reach out if you're unsure whether I cover your location." },
  { question: "Can my partner still be involved?", answer: "Absolutely — partner involvement is encouraged and celebrated. A doula doesn't replace your partner; we work alongside them, helping them feel confident and connected throughout labor and birth." },
  { question: "Do you offer faith-guided support?", answer: "My personal faith informs the compassion and care I bring to this work, but I serve families of all backgrounds and beliefs. I will always follow your lead and respect your values fully." },
  { question: "Are doulas covered by insurance?", answer: "Some insurance plans, FSAs, and HSAs cover doula services. I'm happy to provide documentation to help you submit for reimbursement. Sliding scale and payment plans may be available — just ask." },
  { question: "What if I have a C-section?", answer: "I support all birth experiences, including planned and unplanned cesareans. I'll be there to provide emotional support, help you understand what's happening, and be present for your recovery." },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        position: "relative",
        minHeight: "auto",
        display: "flex",
        alignItems: "center",
        backgroundColor: "var(--color-cream)",
        overflow: "hidden",
        paddingTop: "4rem",
      }}>
        {/* Radial gradient accent */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 70% 70% at 80% 40%, color-mix(in srgb, var(--color-terracotta) 12%, transparent) 0%, transparent 70%)",
        }} aria-hidden="true" />

        <div className="container-wide" style={{ width: "100%", display: "grid", gap: "3rem", alignItems: "center", padding: "2.5rem 0" }}>
          <div style={{ maxWidth: "42rem" }}>
            <span className="section-label" style={{ marginBottom: "1.25rem" }}>Doula & Birth Support</span>

            <h1 className="text-display-xl" style={{ color: "var(--color-cocoa)", marginBottom: "1rem", marginTop: "0.75rem" }}>
              You deserve to feel{" "}
              <em style={{ color: "var(--color-terracotta)", fontStyle: "italic" }}>held</em>,
              <br />heard, and{" "}
              <em style={{ color: "var(--color-terracotta)", fontStyle: "italic" }}>powerful</em>{" "}
              in your birth.
            </h1>

            <p className="text-body-lg" style={{ color: "color-mix(in srgb, var(--color-cocoa) 65%, transparent)", marginBottom: "2rem", maxWidth: "36rem" }}>
              Trauma-informed, culturally competent doula care for Black birthing people and families who refuse to shrink their experience. Serving Tampa Bay and beyond.
            </p>

            {/* Trust chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {["Trauma-informed", "Culturally competent", "Evidence-based support"].map((chip) => (
                <span key={chip} style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  color: "var(--color-cocoa)",
                  backgroundColor: "color-mix(in srgb, var(--color-terracotta) 12%, transparent)",
                  padding: "0.375rem 0.875rem",
                  borderRadius: "9999px",
                }}>
                  {chip}
                </span>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <Link href="/contact#consult" className="btn-terracotta" style={{ fontSize: "1rem", padding: "1rem 2rem" }}>
                Schedule Free Consultation
              </Link>
              <Link href="/services" className="btn-outline" style={{ fontSize: "1rem", padding: "1rem 2rem" }}>
                View Services
              </Link>
            </div>
          </div>

          {/* Floating stat card — visible on larger screens */}
          <div style={{
            backgroundColor: "white",
            borderRadius: "var(--radius-card)",
            boxShadow: "var(--shadow-card)",
            padding: "1.25rem 1.5rem",
            maxWidth: "12rem",
            display: "none",
          }} className="stat-card">
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "color-mix(in srgb, var(--color-cocoa) 60%, transparent)", marginTop: "0.25rem", lineHeight: 1.4, margin: 0 }}>
              Specifically accept Tricare reimbursement
            </p>
          </div>
        </div>

        <div style={{
          position: "absolute",
          right: "1.5rem",
          top: "50%",
          transform: "translateY(-50%)",
          borderRadius: "2rem",
          overflow: "hidden",
          width: "20rem",
          height: "25rem",
        }}>
          <Image
            src="/logos/Jazzlyn.jpeg"
            alt="Jazzlyn, founder of Mothering Melanin"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </div>

        <style>{`
          @media (min-width: 1024px) {
            .hero-img-placeholder { display: block !important; }
            .stat-card { display: block !important; }
          }
        `}</style>
      </section>

      {/* ── LOCATION STRIP ── */}
      <LocationStrip />

      {/* ── VALUES / QUOTE ── */}
      <section className="section-padding" style={{ backgroundColor: "var(--color-warm)" }}>
        <div className="container-wide" style={{ display: "grid", gap: "4rem", alignItems: "center" }}>
          <div>
            <span className="section-label" style={{ marginBottom: "1.5rem" }}>Our Values</span>
            <div style={{ marginTop: "0.5rem" }}>
              <QuoteBlock
                quote="Every birthing person deserves to feel safe, honored, and completely in their power — regardless of their background, their story, or who they're walking into that birth room with."
                attribution="Jazzlyn, Founder of Mothering Melanin"
              />
            </div>
            <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { title: "Culturally Affirming", body: "We center your identity, traditions, and lived experience." },
                { title: "Trauma-Informed", body: "We approach care with sensitivity, patience, and trust." },
                { title: "Patient Advocacy", body: "We help you exercise your rights and voice in any setting." },
                { title: "Informed Consent", body: "You make every decision — fully informed and fully empowered." },
              ].map((v) => (
                <div key={v.title} style={{ padding: "1rem", borderRadius: "0.75rem", backgroundColor: "var(--color-blush)" }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", fontWeight: 500, color: "var(--color-cocoa)", marginBottom: "0.375rem", marginTop: 0 }}>{v.title}</h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "color-mix(in srgb, var(--color-cocoa) 60%, transparent)", lineHeight: 1.6, margin: 0 }}>{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WORK WITH JAZZLYN ── */}
      <section className="section-padding" style={{ backgroundColor: "var(--color-cocoa)" }}>
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <span className="section-label" style={{ color: "var(--color-terracotta-light)", marginBottom: "1rem" }}>Work With Jazzlyn</span>
          <h2 className="text-display-md" style={{ color: "var(--color-cream)", marginBottom: "1.25rem", marginTop: "0.5rem" }}>
            Two ways to begin your journey
          </h2>
          <p className="text-body-lg" style={{ color: "color-mix(in srgb, var(--color-cream) 60%, transparent)", marginBottom: "2.5rem", maxWidth: "36rem", marginLeft: "auto", marginRight: "auto" }}>
            Whether you&apos;re just exploring or ready to book, there&apos;s a next step that feels right for you.
          </p>
          <div style={{ display: "grid", gap: "1.25rem", maxWidth: "36rem", margin: "0 auto" }}>
            {[
              { label: "Start Here", title: "Initial Consultation", subtitle: "Free", body: "A free 30-minute call to meet, ask questions, and see if we're a great fit. Zero commitment.", cta: "Book Free Consult", href: "/contact#consult", primary: true },
              { label: "Full Support", title: "Birth Doula Services", subtitle: "", body: "Comprehensive prenatal, birth, and postpartum support — tailored entirely to you and your family.", cta: "Explore Services", href: "/services", primary: false },
            ].map((card) => (
              <div key={card.title} style={{
                backgroundColor: "color-mix(in srgb, var(--color-cream) 10%, transparent)",
                borderRadius: "var(--radius-card)",
                padding: "2rem",
                textAlign: "left",
              }}>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.625rem", color: card.primary ? "var(--color-terracotta-light)" : "var(--color-sage)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "0.75rem", margin: "0 0 0.75rem" }}>
                  {card.label}
                </p>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.375rem", color: "var(--color-cream)", marginBottom: "0.75rem", marginTop: 0 }}>
                  {card.title} {card.subtitle && <span style={{ color: "var(--color-terracotta-light)", fontSize: "1rem" }}>— {card.subtitle}</span>}
                </h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "color-mix(in srgb, var(--color-cream) 60%, transparent)", lineHeight: 1.7, marginBottom: "1.5rem", marginTop: 0 }}>
                  {card.body}
                </p>
                <Link href={card.href} className={card.primary ? "btn-terracotta" : "btn-outline"}
                  style={card.primary ? {} : { borderColor: "color-mix(in srgb, var(--color-cream) 30%, transparent)", color: "var(--color-cream)", display: "inline-flex", width: "100%", justifyContent: "center" }}>
                  {card.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="section-padding" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="container-wide">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="section-label" style={{ marginBottom: "0.75rem" }}>What I Offer</span>
            <h2 className="text-display-lg" style={{ color: "var(--color-cocoa)", marginTop: "0.5rem" }}>
              Support for every part of your journey
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 20rem), 1fr))", gap: "1.5rem" }}>
            {services.map((s) => <ServiceCard key={s.title} {...s} />)}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/services" className="btn-primary">View All Services & Packages</Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section-padding" style={{ backgroundColor: "var(--color-blush)" }}>
        <div className="container-wide" style={{ display: "grid", gap: "4rem", alignItems: "center" }}>
          <div>
            <span className="section-label" style={{ marginBottom: "1rem" }}>How It Works</span>
            <h2 className="text-display-lg" style={{ color: "var(--color-cocoa)", marginBottom: "1rem", marginTop: "0.5rem" }}>
              From our first call to your fourth trimester
            </h2>
            <p className="text-body-lg" style={{ color: "color-mix(in srgb, var(--color-cocoa) 60%, transparent)", maxWidth: "32rem" }}>
              A clear, caring process designed so you always know what&apos;s next — and always feel supported.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            {steps.map((step, i) => <StepCard key={step.title} number={i + 1} {...step} />)}
          </div>
        </div>
      </section>

      {/* ── MEET JAZZLYN ── */}
      <section className="section-padding" style={{ backgroundColor: "var(--color-warm)" }}>
        <div className="container-wide" style={{ display: "grid", gap: "4rem", alignItems: "center" }}>
          {/* Photo placeholder */}
          <div style={{
            aspectRatio: "3/4",
            borderRadius: "2rem",
            overflow: "hidden",
            position: "relative",
            maxWidth: "24rem",
          }}>
            <Image
              src="/logos/jazzlyn2.jpeg"
              alt="Jazzlyn, founder of Mothering Melanin"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>

          <div>
            <span className="section-label" style={{ marginBottom: "1rem" }}>Meet Jazzlyn</span>
            <h2 className="text-display-md" style={{ color: "var(--color-cocoa)", marginBottom: "1.25rem", marginTop: "0.5rem" }}>
              Your birth support begins with someone who truly gets it.
            </h2>
            <p className="text-body-lg" style={{ color: "color-mix(in srgb, var(--color-cocoa) 65%, transparent)", marginBottom: "1rem" }}>
              Jazzlyn founded Mothering Melanin from a deeply personal place — a belief that Black birthing people deserve care that sees all of them: their strength, their history, their humanity, and their joy.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "color-mix(in srgb, var(--color-cocoa) 60%, transparent)", marginBottom: "2rem", lineHeight: 1.75 }}>
              Trained in evidence-based doula care and steeped in culturally affirming practice, Jazzlyn brings warmth, expertise, and unwavering advocacy to every family she serves.
            </p>
            <Link href="/about" className="btn-primary">Read Jazzlyn&apos;s Full Story</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" className="section-padding" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="container-wide">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="section-label" style={{ marginBottom: "0.75rem" }}>Testimonials</span>
            <h2 className="text-display-lg" style={{ color: "var(--color-cocoa)", marginTop: "0.5rem" }}>
              Families who felt the difference
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 22rem), 1fr))", gap: "1.5rem" }}>
            {testimonials.map((t) => <TestimonialCard key={t.name} {...t} />)}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="section-padding" style={{ backgroundColor: "var(--color-warm)" }}>
        <div className="container-wide" style={{ maxWidth: "56rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="section-label" style={{ marginBottom: "0.75rem" }}>FAQ</span>
            <h2 className="text-display-lg" style={{ color: "var(--color-cocoa)", marginTop: "0.5rem" }}>
              Questions, answered honestly
            </h2>
          </div>
          <FAQAccordion items={faqs} />
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/contact" className="btn-primary">Have more questions? Let&apos;s talk</Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <CTASection dark />
    </>
  );
}
