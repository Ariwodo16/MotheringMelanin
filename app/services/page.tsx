"use client";

import { useState } from "react";
import Link from "next/link";
import { CTASection } from "@/components/ui";

const packages = [
  {
    id: "blessed-beginnings",
    name: "Blessed Beginnings",
    tagline: "A prayer-filled start for new families seeking holistic support",
    includes: [
      "3 prenatal meetings — birth plan, coping skills & relationship building",
      "Unlimited text & phone support from moment of hire",
      "Full, continuous labor & childbirth support",
      "Immediate postpartum support up to 1 hour after birth or first feeding",
      "2 one-hour postpartum visits — processing, referrals & practical support",
    ],
    onCall: "On-call from 38 weeks",
    price: "$1,750",
    priceNum: 1750,
    priceNote: "flat fee",
    highlight: true,
    badge: "Most Popular",
  },
  {
    id: "faithful-foundations",
    name: "Faithful Foundations",
    tagline: "Build your birth story on a foundation of prayer",
    includes: [
      "2 prenatal meetings — birth plan, coping skills & relationship building",
      "Unlimited text & phone support from moment of hire",
      "Full, continuous labor & childbirth support",
      "Immediate postpartum support up to 1 hour after birth or first feeding",
      "1 one-hour postpartum visit — processing, referrals & practical support",
    ],
    onCall: "On-call from 38 weeks",
    price: "$1,500",
    priceNum: 1500,
    priceNote: "flat fee",
    highlight: false,
    badge: null,
  },
  {
    id: "grace-renewal",
    name: "Grace Renewal",
    tagline: "A fresh outpouring of grace for returning parents welcoming their newest addition",
    includes: [
      "1 prenatal meeting — refresh our relationship, birth plan & coping review",
      "Unlimited text & phone support from moment of hire",
      "Full, continuous labor & childbirth support",
      "Immediate postpartum support up to 1 hour after birth or first feeding",
      "1 one-hour postpartum visit — processing, referrals & practical support",
    ],
    onCall: "On-call from 38 weeks",
    price: "$1,350",
    priceNum: 1350,
    priceNote: "repeat clients",
    highlight: false,
    badge: "Returning Clients",
  },
];

const included = [
  { icon: "📚", label: "Prenatal Education",  detail: "Evidence-based education tailored to your birth goals" },
  { icon: "📋", label: "Birth Plan Support",   detail: "Collaborative, values-driven birth preferences document" },
  { icon: "🛡️", label: "Advocacy & Comfort",  detail: "Active advocacy + comfort measures during labor" },
  { icon: "💑", label: "Partner Support",      detail: "Your support person is coached and included" },
  { icon: "🌱", label: "Postpartum Check-In",  detail: "Follow-up care for the transition into new parenthood" },
  { icon: "📞", label: "24/7 Availability",    detail: "On-call when labor begins — day or night" },
];

const CONDITIONS = [
  "Diabetes", "Hypertension", "Gestational Diabetes", "Gestational Hypertension",
  "Hyperthyroidism", "Hypothyroidism", "Asthma", "Epilepsy", "Multiple Sclerosis",
  "STI's/HIV", "Back Condition/Injury", "Hip Injury",
];

const HISTORY_OF_ABUSE = ["Sexual Assault", "Physical Abuse", "Emotional Abuse"];

const PRONOUNS = ["she/her", "he/him", "they/them"];

const REFERRAL_OPTIONS = [
  "Instagram", "Facebook", "TikTok", "Google Search",
  "Referral from Friend or Family", "Provider Referral",
  "Community Event", "Other",
];

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY","DC",
];

interface AddressData {
  country: string;
  line1: string;
  line2: string;
  city: string;
  state: string;
  zip: string;
}

const emptyAddress: AddressData = { country: "US", line1: "", line2: "", city: "", state: "", zip: "" };

interface IntakeData {
  // Birthing person
  firstName: string;
  lastName: string;
  age: string;
  pronouns: string;
  // Support person
  supportFirstName: string;
  supportLastName: string;
  supportPronouns: string;
  // Contact
  email: string;
  phone: string;
  dueDate: string;
  // Provider
  providerFirstName: string;
  providerLastName: string;
  // Home address
  homeAddress: AddressData;
  // Birthing location
  birthingAddress: AddressData;
  // Health
  conditions: string[];
  abuseHistory: string[];
  tokophobia: string;
  // Other
  additionalInfo: string;
  referral: string;
}

const emptyIntake: IntakeData = {
  firstName: "", lastName: "", age: "", pronouns: "",
  supportFirstName: "", supportLastName: "", supportPronouns: "",
  email: "", phone: "", dueDate: "",
  providerFirstName: "", providerLastName: "",
  homeAddress: { ...emptyAddress },
  birthingAddress: { ...emptyAddress },
  conditions: [], abuseHistory: [], tokophobia: "",
  additionalInfo: "", referral: "",
};

type ModalStep = "intake" | "checkout" | "success";
type ActivePackage = typeof packages[number] | null;

export default function ServicesPage() {
  const [activePkg, setActivePkg] = useState<ActivePackage>(null);
  const [step, setStep]           = useState<ModalStep>("intake");
  const [intake, setIntake]       = useState<IntakeData>(emptyIntake);

  function openModal(pkg: typeof packages[number]) {
    setActivePkg(pkg);
    setStep("intake");
    setIntake(emptyIntake);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setActivePkg(null);
    document.body.style.overflow = "";
  }

  function update(field: keyof IntakeData, value: string) {
    setIntake((prev) => ({ ...prev, [field]: value }));
  }

  function updateAddress(section: "homeAddress" | "birthingAddress", field: keyof AddressData, value: string) {
    setIntake((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  }

  function toggleCondition(condition: string) {
    setIntake((prev) => ({
      ...prev,
      conditions: prev.conditions.includes(condition)
        ? prev.conditions.filter((c) => c !== condition)
        : [...prev.conditions, condition],
    }));
  }

  function toggleAbuse(item: string) {
    setIntake((prev) => ({
      ...prev,
      abuseHistory: prev.abuseHistory.includes(item)
        ? prev.abuseHistory.filter((a) => a !== item)
        : [...prev.abuseHistory, item],
    }));
  }

  function validateIntake() {
    if (!intake.firstName.trim() || !intake.lastName.trim()) {
      alert("Please enter the birthing person's first and last name."); return false;
    }
    if (!intake.age.trim()) {
      alert("Please enter the birthing person's age."); return false;
    }
    if (!intake.email.trim() || !intake.email.includes("@")) {
      alert("Please enter a valid email address."); return false;
    }
    if (!intake.phone.trim()) {
      alert("Please enter a phone number."); return false;
    }
    if (!intake.dueDate) {
      alert("Please enter an estimated due date."); return false;
    }
    if (!intake.providerFirstName.trim() || !intake.providerLastName.trim()) {
      alert("Please enter your health care provider's name."); return false;
    }
    if (!intake.homeAddress.line1.trim() || !intake.homeAddress.city.trim() || !intake.homeAddress.state || !intake.homeAddress.zip.trim()) {
      alert("Please complete your home address."); return false;
    }
    if (!intake.birthingAddress.line1.trim() || !intake.birthingAddress.city.trim() || !intake.birthingAddress.state || !intake.birthingAddress.zip.trim()) {
      alert("Please complete your birthing location address."); return false;
    }
    return true;
  }

  function handlePayPal() {
    if (!activePkg) return;
    // ── Replace YOURPAYPALHANDLE with your PayPal.me username ──
    const url = `https://www.paypal.com/paypalme/YOURPAYPALHANDLE/${activePkg.priceNum}USD`;
    window.open(url, "_blank");
    setTimeout(() => setStep("success"), 1200);
  }

  // ── Shared styles (matching your existing site) ──
  const inp: React.CSSProperties = {
    width: "100%", padding: "0.75rem 1rem",
    border: "1px solid color-mix(in srgb, var(--color-cocoa) 15%, transparent)",
    borderRadius: "0.75rem", fontFamily: "var(--font-sans)", fontSize: "0.875rem",
    backgroundColor: "white", color: "var(--color-cocoa)", outline: "none",
    transition: "border-color 0.2s", boxSizing: "border-box" as const,
  };

  const lbl: React.CSSProperties = {
    display: "block", fontFamily: "var(--font-sans)", fontSize: "0.875rem",
    fontWeight: 500, color: "var(--color-cocoa)", marginBottom: "0.375rem",
  };

  const sectionHeading: React.CSSProperties = {
    fontFamily: "var(--font-serif)", fontSize: "1.125rem", fontWeight: 500,
    color: "var(--color-cocoa)", margin: "0 0 1rem",
    paddingBottom: "0.5rem",
    borderBottom: "1px solid color-mix(in srgb, var(--color-cocoa) 10%, transparent)",
  };

  const req = <span style={{ color: "var(--color-terracotta)" }}>*</span>;

  function Field({ label, required, hint, children }: { label: string; required?: boolean; hint?: string; children: React.ReactNode }) {
    return (
      <div>
        <label style={lbl}>{label} {required && req}</label>
        {hint && <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "color-mix(in srgb, var(--color-cocoa) 50%, transparent)", margin: "0 0 0.375rem", lineHeight: 1.5 }}>{hint}</p>}
        {children}
      </div>
    );
  }

  function AddressBlock({ section, label, hint }: { section: "homeAddress" | "birthingAddress"; label: string; hint?: string }) {
    const addr = intake[section];
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
        <h4 style={sectionHeading}>{label}</h4>
        {hint && <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "color-mix(in srgb, var(--color-cocoa) 50%, transparent)", margin: "-0.5rem 0 0", lineHeight: 1.5 }}>{hint}</p>}
        <Field label="Country">
          <select style={inp} value={addr.country} onChange={(e) => updateAddress(section, "country", e.target.value)}>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="GB">United Kingdom</option>
            <option value="other">Other</option>
          </select>
        </Field>
        <Field label="Address Line 1" required>
          <input style={inp} value={addr.line1} onChange={(e) => updateAddress(section, "line1", e.target.value)} placeholder="Street address" />
        </Field>
        <Field label="Address Line 2">
          <input style={inp} value={addr.line2} onChange={(e) => updateAddress(section, "line2", e.target.value)} placeholder="Apt, suite, unit (optional)" />
        </Field>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem" }}>
          <Field label="City" required>
            <input style={inp} value={addr.city} onChange={(e) => updateAddress(section, "city", e.target.value)} placeholder="City" />
          </Field>
          <Field label="State" required>
            <select style={inp} value={addr.state} onChange={(e) => updateAddress(section, "state", e.target.value)}>
              <option value="">Select state...</option>
              {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </Field>
        </div>
        <Field label="ZIP Code" required>
          <input style={inp} value={addr.zip} onChange={(e) => updateAddress(section, "zip", e.target.value)} placeholder="ZIP code" />
        </Field>
      </div>
    );
  }

  return (
    <>
      {/* HERO */}
      <section className="section-padding" style={{ paddingTop: "8rem", backgroundColor: "var(--color-cream)" }}>
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <span className="section-label" style={{ marginBottom: "1rem" }}>Doula Services</span>
          <h1 className="text-display-lg" style={{ color: "var(--color-cocoa)", marginBottom: "1.25rem", marginTop: "0.5rem" }}>
            Support that stays with you through it all
          </h1>
          <p className="text-body-lg" style={{ color: "color-mix(in srgb, var(--color-cocoa) 60%, transparent)", maxWidth: "36rem", marginLeft: "auto", marginRight: "auto", marginBottom: "2rem" }}>
            Every package is built around one idea: that you should never have to navigate your birth experience alone, unseen, or unheard.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Link href="/contact#consult" className="btn-terracotta">Schedule Free Consultation</Link>
            <Link href="#packages" className="btn-outline">View Packages</Link>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="section-padding" style={{ backgroundColor: "var(--color-blush)" }}>
        <div className="container-wide">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label" style={{ marginBottom: "0.75rem" }}>What You Get</span>
            <h2 className="text-display-md" style={{ color: "var(--color-cocoa)", marginTop: "0.5rem" }}>Across every package</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 18rem), 1fr))", gap: "1.25rem" }}>
            {included.map((item) => (
              <div key={item.label} className="card" style={{ padding: "1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }} aria-hidden="true">{item.icon}</span>
                <div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", fontWeight: 500, color: "var(--color-cocoa)", marginBottom: "0.375rem", marginTop: 0 }}>{item.label}</h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "color-mix(in srgb, var(--color-cocoa) 60%, transparent)", lineHeight: 1.6, margin: 0 }}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="section-padding" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="container-wide">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="section-label" style={{ marginBottom: "0.75rem" }}>Packages</span>
            <h2 className="text-display-md" style={{ color: "var(--color-cocoa)", marginTop: "0.5rem" }}>
              Choose the support that fits your journey
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 22rem), 1fr))", gap: "1.5rem" }}>
            {packages.map((pkg) => (
              <div key={pkg.name} style={{
                borderRadius: "var(--radius-card)", padding: "2rem",
                display: "flex", flexDirection: "column", gap: "1.25rem",
                position: "relative",
                backgroundColor: pkg.highlight ? "var(--color-cocoa)" : "white",
                boxShadow: pkg.highlight ? "var(--shadow-card-hover)" : "var(--shadow-card)",
                outline: pkg.highlight ? "2px solid var(--color-terracotta)" : "none",
              }}>
                {pkg.badge && (
                  <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)" }}>
                    <span style={{
                      backgroundColor: pkg.highlight ? "var(--color-terracotta)" : "color-mix(in srgb, var(--color-cocoa) 12%, transparent)",
                      color: pkg.highlight ? "white" : "var(--color-cocoa)",
                      fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 500,
                      padding: "0.25rem 1rem", borderRadius: "9999px", whiteSpace: "nowrap",
                    }}>{pkg.badge}</span>
                  </div>
                )}
                <div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.375rem", fontWeight: 500, color: pkg.highlight ? "var(--color-cream)" : "var(--color-cocoa)", margin: "0 0 0.25rem" }}>{pkg.name}</h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontStyle: "italic", color: pkg.highlight ? "color-mix(in srgb, var(--color-cream) 60%, transparent)" : "color-mix(in srgb, var(--color-cocoa) 50%, transparent)", margin: 0 }}>{pkg.tagline}</p>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem", flex: 1 }}>
                  {pkg.includes.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                      <svg style={{ width: "1rem", height: "1rem", flexShrink: 0, marginTop: "2px", color: pkg.highlight ? "var(--color-terracotta-light)" : "var(--color-terracotta)", fill: "currentColor" }} viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", lineHeight: 1.6, color: pkg.highlight ? "color-mix(in srgb, var(--color-cream) 80%, transparent)" : "color-mix(in srgb, var(--color-cocoa) 70%, transparent)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: pkg.highlight ? "color-mix(in srgb, var(--color-cream) 50%, transparent)" : "color-mix(in srgb, var(--color-cocoa) 40%, transparent)", margin: 0 }}>On-call: {pkg.onCall}</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.375rem" }}>
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.75rem", fontWeight: 300, color: pkg.highlight ? "var(--color-cream)" : "var(--color-cocoa)" }}>{pkg.price}</span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", letterSpacing: "0.08em", textTransform: "uppercase" as const, color: pkg.highlight ? "color-mix(in srgb, var(--color-cream) 50%, transparent)" : "color-mix(in srgb, var(--color-cocoa) 40%, transparent)" }}>{pkg.priceNote}</span>
                </div>
                <button
                  onClick={() => openModal(pkg)}
                  className={pkg.highlight ? "btn-terracotta" : "btn-outline"}
                  style={{ justifyContent: "center", width: "100%", cursor: "pointer" }}
                >
                  Book This Package
                </button>
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "color-mix(in srgb, var(--color-cocoa) 40%, transparent)", marginTop: "2rem", maxWidth: "36rem", marginLeft: "auto", marginRight: "auto" }}>
            Payment plans may be available — please ask during your free consultation. Grace Renewal is exclusively for returning clients.
          </p>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section style={{ padding: "2.5rem 0", backgroundColor: "var(--color-blush)" }}>
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "color-mix(in srgb, var(--color-cocoa) 50%, transparent)", lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: "color-mix(in srgb, var(--color-cocoa) 70%, transparent)" }}>Please note:</strong> Doula services are not medical care and do not replace the services of a licensed healthcare provider. Mothering Melanin works alongside your OB, midwife, or care team to support your experience — not replace it.
          </p>
        </div>
      </section>

      <CTASection headline="Ready to find the right package for you?" sub="Let's talk through your due date, goals, and questions in a free 30-minute consultation." />

      {/* ════════════════ MODAL ════════════════ */}
      {activePkg && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
          style={{ position: "fixed", inset: 0, zIndex: 999, backgroundColor: "rgba(30,14,8,0.75)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.25rem" }}
        >
          <div style={{ backgroundColor: "white", borderRadius: "1rem", width: "100%", maxWidth: "620px", maxHeight: "92vh", overflowY: "auto", position: "relative", boxShadow: "0 32px 80px rgba(30,14,8,0.3)" }}>

            {/* Close */}
            <button onClick={closeModal} style={{ position: "sticky", top: "1rem", float: "right", marginRight: "1rem", marginTop: "1rem", width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "color-mix(in srgb, var(--color-cocoa) 8%, white)", border: "none", cursor: "pointer", fontSize: "1rem", color: "var(--color-cocoa)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}>✕</button>

            <div style={{ padding: "1rem 2.5rem 2.5rem", clear: "both" }}>

              {/* Package bar */}
              <div style={{ backgroundColor: "var(--color-cocoa)", borderRadius: "0.75rem", padding: "1rem 1.5rem", marginBottom: "1.75rem", marginTop: "0.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", color: "white" }}>{activePkg.name}</span>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontWeight: 300, color: "#F5D98C" }}>{activePkg.price}</span>
              </div>

              {/* ══ INTAKE STEP ══ */}
              {step === "intake" && (
                <>
                  <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", color: "var(--color-cocoa)", marginBottom: "0.25rem", marginTop: 0 }}>Client Intake Form</h2>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "color-mix(in srgb, var(--color-cocoa) 55%, transparent)", marginBottom: "2rem", marginTop: 0, lineHeight: 1.7 }}>
                    This information helps Jazzlyn show up fully prepared and provide the most personalized care possible. Fields marked <span style={{ color: "var(--color-terracotta)" }}>*</span> are required.
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>

                    {/* ── BIRTHING PERSON ── */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                      <h3 style={sectionHeading}>Birthing Person</h3>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem" }}>
                        <Field label="First Name" required><input style={inp} value={intake.firstName} onChange={(e) => update("firstName", e.target.value)} placeholder="First name" /></Field>
                        <Field label="Last Name" required><input style={inp} value={intake.lastName} onChange={(e) => update("lastName", e.target.value)} placeholder="Last name" /></Field>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem" }}>
                        <Field label="Age" required><input style={inp} type="number" min="0" max="99" value={intake.age} onChange={(e) => update("age", e.target.value)} placeholder="Age" /></Field>
                        <Field label="Pronouns">
                          <select style={inp} value={intake.pronouns} onChange={(e) => update("pronouns", e.target.value)}>
                            <option value="">Select an option</option>
                            {PRONOUNS.map((p) => <option key={p} value={p}>{p}</option>)}
                          </select>
                        </Field>
                      </div>
                    </div>

                    {/* ── SUPPORT PERSON ── */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                      <h3 style={sectionHeading}>Birthing Partner / Support Person</h3>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem" }}>
                        <Field label="First Name"><input style={inp} value={intake.supportFirstName} onChange={(e) => update("supportFirstName", e.target.value)} placeholder="First name" /></Field>
                        <Field label="Last Name"><input style={inp} value={intake.supportLastName} onChange={(e) => update("supportLastName", e.target.value)} placeholder="Last name" /></Field>
                      </div>
                      <Field label="Pronouns">
                        <select style={inp} value={intake.supportPronouns} onChange={(e) => update("supportPronouns", e.target.value)}>
                          <option value="">Select an option</option>
                          {PRONOUNS.map((p) => <option key={p} value={p}>{p}</option>)}
                        </select>
                      </Field>
                    </div>

                    {/* ── CONTACT INFO ── */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                      <h3 style={sectionHeading}>Contact Information</h3>
                      <Field label="Email Address" required><input style={inp} type="email" value={intake.email} onChange={(e) => update("email", e.target.value)} placeholder="your@email.com" /></Field>
                      <Field label="Phone Number" required><input style={inp} type="tel" value={intake.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(813) 000-0000" /></Field>
                      <Field label="Estimated Due Date" required><input style={inp} type="date" value={intake.dueDate} onChange={(e) => update("dueDate", e.target.value)} /></Field>
                    </div>

                    {/* ── HEALTH CARE PROVIDER ── */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                      <h3 style={sectionHeading}>Health Care Provider</h3>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem" }}>
                        <Field label="First Name" required><input style={inp} value={intake.providerFirstName} onChange={(e) => update("providerFirstName", e.target.value)} placeholder="First name" /></Field>
                        <Field label="Last Name" required><input style={inp} value={intake.providerLastName} onChange={(e) => update("providerLastName", e.target.value)} placeholder="Last name" /></Field>
                      </div>
                    </div>

                    {/* ── HOME ADDRESS ── */}
                    <AddressBlock section="homeAddress" label="Home Address" hint="This is for prenatal and postpartum appointments." />

                    {/* ── BIRTHING LOCATION ── */}
                    <AddressBlock section="birthingAddress" label="Birthing Location" />

                    {/* ── PRE-EXISTING CONDITIONS ── */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                      <h3 style={sectionHeading}>Pre-existing Conditions / Injuries</h3>
                      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "color-mix(in srgb, var(--color-cocoa) 50%, transparent)", margin: "-0.25rem 0 0", lineHeight: 1.5 }}>
                        Select all that apply. This information is kept strictly confidential.
                      </p>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                        {CONDITIONS.map((condition) => (
                          <label key={condition} style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "color-mix(in srgb, var(--color-cocoa) 75%, transparent)" }}>
                            <input
                              type="checkbox"
                              checked={intake.conditions.includes(condition)}
                              onChange={() => toggleCondition(condition)}
                              style={{ accentColor: "var(--color-terracotta)", width: "16px", height: "16px", flexShrink: 0 }}
                            />
                            {condition}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* ── HISTORY OF ABUSE ── */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                      <h3 style={sectionHeading}>History of Abuse</h3>
                      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "color-mix(in srgb, var(--color-cocoa) 50%, transparent)", margin: "-0.25rem 0 0", lineHeight: 1.5 }}>
                        Select all that apply. This is shared so Jazzlyn can provide the most informed and sensitive support possible.
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        {HISTORY_OF_ABUSE.map((item) => (
                          <label key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "color-mix(in srgb, var(--color-cocoa) 75%, transparent)" }}>
                            <input
                              type="checkbox"
                              checked={intake.abuseHistory.includes(item)}
                              onChange={() => toggleAbuse(item)}
                              style={{ accentColor: "var(--color-terracotta)", width: "16px", height: "16px", flexShrink: 0 }}
                            />
                            {item}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* ── TOKOPHOBIA ── */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                      <h3 style={sectionHeading}>Fear of Childbirth</h3>
                      <Field label="Do you have tokophobia / fear of childbirth?">
                        <div style={{ display: "flex", gap: "1.5rem" }}>
                          {["Yes", "No"].map((opt) => (
                            <label key={opt} style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "color-mix(in srgb, var(--color-cocoa) 75%, transparent)" }}>
                              <input
                                type="radio"
                                name="tokophobia"
                                value={opt}
                                checked={intake.tokophobia === opt}
                                onChange={() => update("tokophobia", opt)}
                                style={{ accentColor: "var(--color-terracotta)", width: "16px", height: "16px" }}
                              />
                              {opt}
                            </label>
                          ))}
                        </div>
                      </Field>
                    </div>

                    {/* ── ADDITIONAL INFO ── */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                      <h3 style={sectionHeading}>Anything Else?</h3>
                      <Field label="Anything else you would like me to know?">
                        <textarea rows={4} style={{ ...inp, resize: "none" }} value={intake.additionalInfo} onChange={(e) => update("additionalInfo", e.target.value)} placeholder="Share anything else that would help Jazzlyn support you best..." />
                      </Field>
                    </div>

                    {/* ── REFERRAL ── */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                      <h3 style={sectionHeading}>How Did You Find Us?</h3>
                      <Field label="How did you hear about Mothering Melanin?">
                        <select style={inp} value={intake.referral} onChange={(e) => update("referral", e.target.value)}>
                          <option value="">Select an option</option>
                          {REFERRAL_OPTIONS.map((r) => <option key={r} value={r}>{r}</option>)}
                        </select>
                      </Field>
                    </div>

                    <button
                      onClick={() => { if (validateIntake()) setStep("checkout"); }}
                      className="btn-terracotta"
                      style={{ justifyContent: "center", fontSize: "1rem", padding: "1rem" }}
                    >
                      Continue to Checkout →
                    </button>

                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "color-mix(in srgb, var(--color-cocoa) 40%, transparent)", textAlign: "center", margin: 0, lineHeight: 1.6 }}>
                      Your information is private and will never be shared outside of your care.
                    </p>
                  </div>
                </>
              )}

              {/* ══ CHECKOUT STEP ══ */}
              {step === "checkout" && (
                <>
                  <button onClick={() => setStep("intake")} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "color-mix(in srgb, var(--color-cocoa) 55%, transparent)", display: "flex", alignItems: "center", gap: "6px", marginBottom: "1.25rem", padding: 0 }}>
                    ← Back
                  </button>
                  <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", color: "var(--color-cocoa)", marginBottom: "0.375rem", marginTop: 0 }}>Complete Your Booking</h2>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "color-mix(in srgb, var(--color-cocoa) 60%, transparent)", marginBottom: "1.5rem", marginTop: 0, lineHeight: 1.7 }}>
                    Review your order and pay securely through PayPal.
                  </p>
                  <div style={{ backgroundColor: "color-mix(in srgb, var(--color-cocoa) 5%, white)", borderRadius: "0.75rem", padding: "1.25rem 1.5rem", marginBottom: "1.5rem" }}>
                    <p style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", color: "var(--color-cocoa)", marginBottom: "0.875rem", marginTop: 0 }}>Order Summary</p>
                    {[
                      [activePkg.name, activePkg.price],
                      ["Initial Consultation", "Included"],
                      ["Unlimited Phone & Text Support", "Included"],
                    ].map(([label, val]) => (
                      <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "color-mix(in srgb, var(--color-cocoa) 70%, transparent)", padding: "0.5rem 0", borderBottom: "1px solid color-mix(in srgb, var(--color-cocoa) 8%, transparent)" }}>
                        <span>{label}</span>
                        <span style={{ fontFamily: "var(--font-serif)", color: "var(--color-cocoa)" }}>{val}</span>
                      </div>
                    ))}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "0.75rem", marginTop: "0.25rem" }}>
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 600, color: "var(--color-cocoa)" }}>Total Due Today</span>
                      <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 300, color: "var(--color-terracotta)" }}>{activePkg.price}</span>
                    </div>
                  </div>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "color-mix(in srgb, var(--color-cocoa) 55%, transparent)", textAlign: "center", marginBottom: "1rem", lineHeight: 1.6 }}>
                    You&apos;ll be securely redirected to <strong style={{ color: "var(--color-cocoa)" }}>PayPal</strong> to complete your payment.
                  </p>
                  <button
                    onClick={handlePayPal}
                    style={{ width: "100%", backgroundColor: "#0070BA", color: "white", border: "none", borderRadius: "0.75rem", padding: "1rem", fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "1rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.625rem" }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#005ea6")}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0070BA")}
                  >
                    <span style={{ fontStyle: "italic", fontWeight: 700 }}>Pay<span style={{ color: "#FFD700" }}>Pal</span></span>
                    Pay Securely with PayPal
                  </button>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "color-mix(in srgb, var(--color-cocoa) 40%, transparent)", textAlign: "center", margin: "0.625rem 0 0", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.375rem" }}>
                    🔒 Payments processed securely by PayPal
                  </p>
                </>
              )}

              {/* ══ SUCCESS STEP ══ */}
              {step === "success" && (
                <div style={{ padding: "2rem 0", textAlign: "center" }}>
                  <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🌸</div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", color: "var(--color-cocoa)", marginBottom: "0.5rem", marginTop: 0 }}>Booking Confirmed!</h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "color-mix(in srgb, var(--color-cocoa) 65%, transparent)", lineHeight: 1.7 }}>
                    Thank you for choosing Mothering Melanin! Once your PayPal payment is confirmed, Jazzlyn will reach out within 1–2 business days to schedule your first prenatal meeting. We&apos;re so honored to walk this journey with you. 🌿
                  </p>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </>
  );
}