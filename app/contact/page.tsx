"use client";

import { useState } from "react";

// ── Package data ──────────────────────────────────────────────────────────────
interface Package {
  id: string;
  name: string;
  tagline: string;
  price: number;
  priceDisplay: string;
  isFree: boolean;
  badge?: string;
  includes: string[];
}

const PACKAGES: Package[] = [
    {
    id: "consultation",
    name: "Initial Consultation",
    tagline: "Let's connect to see if we're a good fit — no commitment required",
    price: 0, priceDisplay: "Free", isFree: true,
    includes: [
      "30-minute discovery call",
      "Get to know each other",
      "Discuss your needs & preferences",
      "Find the perfect fit for your journey",
    ],
  },
  {
    id: "blessed-beginnings",
    name: "Blessed Beginnings",
    tagline: "A prayer-filled start for new families seeking holistic support",
    price: 1750, priceDisplay: "$1,750", isFree: false, badge: "Most Popular",
    includes: [
      "3 prenatal meetings — birth plan, coping skills & relationship building",
      "Unlimited text & phone support from moment of hire",
      "Full, continuous labor & childbirth support",
      "Immediate postpartum support up to 1 hour after birth or first feeding",
      "2 one-hour postpartum visits — processing, referrals & practical support",
    ],
  },
  {
    id: "faithful-foundations",
    name: "Faithful Foundations",
    tagline: "Build your birth story on a foundation of prayer",
    price: 1500, priceDisplay: "$1,500", isFree: false,
    includes: [
      "2 prenatal meetings — birth plan, coping skills & relationship building",
      "Unlimited text & phone support from moment of hire",
      "Full, continuous labor & childbirth support",
      "Immediate postpartum support up to 1 hour after birth or first feeding",
      "1 one-hour postpartum visit — processing, referrals & practical support",
    ],
  },
  {
    id: "grace-renewal",
    name: "Grace Renewal",
    tagline: "A fresh outpouring of God's grace for returning parents welcoming their newest addition",
    price: 1350, priceDisplay: "$1,350", isFree: false, badge: "Returning Clients",
    includes: [
      "1 prenatal meeting — refresh our relationship, birth plan & coping review",
      "Unlimited text & phone support from moment of hire",
      "Full, continuous labor & childbirth support",
      "Immediate postpartum support up to 1 hour after birth or first feeding",
      "1 one-hour postpartum visit — processing, referrals & practical support",
    ],
  },
];

// ── Intake form data ──────────────────────────────────────────────────────────
const CONDITIONS = [
  "Diabetes", "Hypertension", "Gestational Diabetes", "Gestational Hypertension",
  "Hyperthyroidism", "Hypothyroidism", "Asthma", "Epilepsy", "Multiple Sclerosis",
  "STI's/HIV", "Back Condition/Injury", "Hip Injury",
];

const HISTORY_OF_ABUSE = ["Sexual Assault", "Physical Abuse", "Emotional Abuse"];
const PRONOUNS = ["she/her", "he/him", "they/them"];
const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY","DC",
];
const REFERRAL_OPTIONS = [
  "Instagram","Facebook","TikTok","Google Search",
  "Referral from Friend or Family","Provider Referral","Community Event","Other",
];

interface AddressData {
  country: string; line1: string; line2: string;
  city: string; state: string; zip: string;
}
const emptyAddress: AddressData = { country: "US", line1: "", line2: "", city: "", state: "", zip: "" };

interface IntakeData {
  firstName: string; lastName: string; age: string; pronouns: string;
  supportFirstName: string; supportLastName: string; supportPronouns: string;
  email: string; phone: string; dueDate: string;
  providerFirstName: string; providerLastName: string;
  homeAddress: AddressData;
  birthingAddress: AddressData;
  conditions: string[]; abuseHistory: string[]; tokophobia: string;
  additionalInfo: string; referral: string;
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

type Step = "select" | "intake" | "checkout" | "success";

// ── Component ─────────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [selected, setSelected] = useState<Package | null>(null);
  const [step, setStep]         = useState<Step>("select");
  const [intake, setIntake]     = useState<IntakeData>(emptyIntake);

  function update(field: keyof IntakeData, value: string) {
    setIntake((prev) => ({ ...prev, [field]: value }));
  }

  function updateAddress(section: "homeAddress" | "birthingAddress", field: keyof AddressData, value: string) {
    setIntake((prev) => ({ ...prev, [section]: { ...prev[section], [field]: value } }));
  }

  function toggleCondition(c: string) {
    setIntake((prev) => ({
      ...prev,
      conditions: prev.conditions.includes(c) ? prev.conditions.filter((x) => x !== c) : [...prev.conditions, c],
    }));
  }

  function toggleAbuse(a: string) {
    setIntake((prev) => ({
      ...prev,
      abuseHistory: prev.abuseHistory.includes(a) ? prev.abuseHistory.filter((x) => x !== a) : [...prev.abuseHistory, a],
    }));
  }

  function validateIntake() {
    if (!intake.firstName.trim() || !intake.lastName.trim()) { alert("Please enter the birthing person's first and last name."); return false; }
    if (!intake.age.trim()) { alert("Please enter the birthing person's age."); return false; }
    if (!intake.email.trim() || !intake.email.includes("@")) { alert("Please enter a valid email address."); return false; }
    if (!intake.phone.trim()) { alert("Please enter a phone number."); return false; }
    if (!intake.dueDate) { alert("Please enter an estimated due date."); return false; }
    if (!intake.providerFirstName.trim() || !intake.providerLastName.trim()) { alert("Please enter your health care provider's name."); return false; }
    if (!intake.homeAddress.line1.trim() || !intake.homeAddress.city.trim() || !intake.homeAddress.state || !intake.homeAddress.zip.trim()) { alert("Please complete your home address."); return false; }
    if (!intake.birthingAddress.line1.trim() || !intake.birthingAddress.city.trim() || !intake.birthingAddress.state || !intake.birthingAddress.zip.trim()) { alert("Please complete your birthing location address."); return false; }
    return true;
  }

  function handlePayPal() {
    if (!selected) return;
    // ── Replace YOURPAYPALHANDLE with your PayPal.me username ──
    const url = `https://www.paypal.com/paypalme/YOURPAYPALHANDLE/${selected.price}USD`;
    window.open(url, "_blank");
    setTimeout(() => setStep("success"), 1200);
  }

  // ── Shared styles ──
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

  const isFree = selected?.isFree ?? false;

  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="section-padding" style={{ paddingTop: "8rem", backgroundColor: "var(--color-cream)" }}>
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <span className="section-label" style={{ marginBottom: "1rem" }}>Book Your Package</span>
          <h1 className="text-display-lg" style={{ color: "var(--color-cocoa)", marginBottom: "1.25rem", marginTop: "0.5rem" }}>
            Let&apos;s start the conversation
          </h1>
          <p className="text-body-lg" style={{ color: "color-mix(in srgb, var(--color-cocoa) 60%, transparent)", maxWidth: "36rem", marginLeft: "auto", marginRight: "auto" }}>
            Choose a package below and complete your intake — or use Calendly on the right to book a free discovery call first.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="section-padding" style={{ backgroundColor: "var(--color-warm)" }}>
        <div className="container-wide" style={{ display: "grid", gap: "3rem", alignItems: "start" }}>

          {/* ════ LEFT: CHECKOUT FLOW ════ */}
          <div id="consult" className="card" style={{ padding: "2.5rem" }}>

            {/* ── STEP: SELECT PACKAGE ── */}
            {step === "select" && (
              <>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", color: "var(--color-cocoa)", marginBottom: "0.5rem", marginTop: 0 }}>
                  Choose Your Package
                </h2>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "color-mix(in srgb, var(--color-cocoa) 60%, transparent)", marginBottom: "1.75rem", marginTop: 0, lineHeight: 1.7 }}>
                  Select the package that feels right for your family. Not sure? Book a free consultation using Calendly on the right.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "1.75rem" }}>
                  {PACKAGES.map((pkg) => (
                    <div
                      key={pkg.id}
                      onClick={() => setSelected(pkg)}
                      style={{
                      borderWidth: selected?.id === pkg.id ? "2px" : "1px",
                      borderStyle: pkg.isFree
                        ? (selected?.id === pkg.id ? "solid" : "dashed")
                        : "solid",
                      borderColor: selected?.id === pkg.id
                        ? (pkg.isFree ? "#7A8C6E" : "var(--color-terracotta)")
                        : "color-mix(in srgb, var(--color-cocoa) 12%, transparent)",

                      borderRadius: "0.75rem",
                      padding: "1.25rem 1.5rem",
                      cursor: "pointer",
                      backgroundColor: selected?.id === pkg.id
                        ? "white"
                        : "color-mix(in srgb, var(--color-cream) 60%, white)",
                      transition: "all 0.2s",
                      position: "relative",
                    }}
                    >
                      {/* Selected indicator */}
                      <div style={{
                        position: "absolute", top: "1rem", right: "1rem",
                        width: "20px", height: "20px", borderRadius: "50%",
                        backgroundColor: selected?.id === pkg.id ? (pkg.isFree ? "#7A8C6E" : "var(--color-terracotta)") : "transparent",
                        border: `2px solid ${selected?.id === pkg.id ? (pkg.isFree ? "#7A8C6E" : "var(--color-terracotta)") : "color-mix(in srgb, var(--color-cocoa) 20%, transparent)"}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "0.65rem", color: "white", transition: "all 0.2s",
                      }}>
                        {selected?.id === pkg.id && "✓"}
                      </div>

                      {pkg.badge && (
                        <span style={{
                          display: "inline-block", marginBottom: "0.375rem",
                          backgroundColor: "var(--color-amber, #D4913A)", color: "var(--color-cocoa)",
                          fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.12em",
                          textTransform: "uppercase", padding: "3px 8px", borderRadius: "100px",
                          fontFamily: "var(--font-sans)",
                        }}>
                          {pkg.badge}
                        </span>
                      )}

                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", paddingRight: "2rem", marginBottom: "0.375rem" }}>
                        <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.125rem", color: "var(--color-cocoa)", fontWeight: 400 }}>
                          {pkg.name}
                        </span>
                        <span style={{
                          fontFamily: "var(--font-serif)", fontSize: "1.25rem", fontWeight: 300, whiteSpace: "nowrap",
                          color: pkg.isFree ? "#7A8C6E" : "var(--color-terracotta)",
                        }}>
                          {pkg.priceDisplay}
                        </span>
                      </div>
                      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", fontStyle: "italic", color: "color-mix(in srgb, var(--color-cocoa) 55%, transparent)", margin: "0 0 0.5rem", lineHeight: 1.5 }}>
                        {pkg.tagline}
                      </p>
                      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "color-mix(in srgb, var(--color-cocoa) 50%, transparent)", margin: 0, lineHeight: 1.6 }}>
                        {pkg.includes.slice(0, 2).join(" · ")}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  disabled={!selected}
                  onClick={() => setStep("intake")}
                  className="btn-terracotta"
                  style={{ justifyContent: "center", fontSize: "1rem", padding: "1rem", width: "100%", opacity: !selected ? 0.4 : 1, cursor: !selected ? "not-allowed" : "pointer" }}
                >
                  Continue to Intake Form →
                </button>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "color-mix(in srgb, var(--color-cocoa) 40%, transparent)", textAlign: "center", margin: "0.875rem 0 0" }}>
                  Or use Calendly on the right to book a free discovery call directly.
                </p>
              </>
            )}

            {/* ── STEP: INTAKE FORM ── */}
            {step === "intake" && selected && (
              <>
                <button
                  onClick={() => setStep("select")}
                  style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "color-mix(in srgb, var(--color-cocoa) 55%, transparent)", display: "flex", alignItems: "center", gap: "6px", marginBottom: "1.25rem", padding: 0 }}
                >
                  ← Back to Packages
                </button>

                {/* Package summary bar */}
                <div style={{ backgroundColor: "var(--color-cocoa)", borderRadius: "0.75rem", padding: "1rem 1.5rem", marginBottom: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", color: "white" }}>{selected.name}</span>
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontWeight: 300, color: "#F5D98C" }}>{selected.priceDisplay}</span>
                </div>

                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", color: "var(--color-cocoa)", marginBottom: "0.25rem", marginTop: 0 }}>
                  Client Intake Form
                </h2>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "color-mix(in srgb, var(--color-cocoa) 55%, transparent)", marginBottom: "2rem", marginTop: 0, lineHeight: 1.7 }}>
                  This information helps Jazzlyn show up fully prepared and provide the most personalized care possible. Fields marked <span style={{ color: "var(--color-terracotta)" }}>*</span> are required.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>

                  {/* Birthing Person */}
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

                  {/* Support Person */}
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

                  {/* Contact Info */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                    <h3 style={sectionHeading}>Contact Information</h3>
                    <Field label="Email Address" required><input style={inp} type="email" value={intake.email} onChange={(e) => update("email", e.target.value)} placeholder="your@email.com" /></Field>
                    <Field label="Phone Number" required><input style={inp} type="tel" value={intake.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(813) 000-0000" /></Field>
                    <Field label="Estimated Due Date" required><input style={inp} type="date" value={intake.dueDate} onChange={(e) => update("dueDate", e.target.value)} /></Field>
                  </div>

                  {/* Health Care Provider */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                    <h3 style={sectionHeading}>Health Care Provider</h3>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem" }}>
                      <Field label="First Name" required><input style={inp} value={intake.providerFirstName} onChange={(e) => update("providerFirstName", e.target.value)} placeholder="First name" /></Field>
                      <Field label="Last Name" required><input style={inp} value={intake.providerLastName} onChange={(e) => update("providerLastName", e.target.value)} placeholder="Last name" /></Field>
                    </div>
                  </div>

                  {/* Home Address */}
                  <AddressBlock section="homeAddress" label="Home Address" hint="This is for prenatal and postpartum appointments." />

                  {/* Birthing Location */}
                  <AddressBlock section="birthingAddress" label="Birthing Location" />

                  {/* Pre-existing Conditions */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                    <h3 style={sectionHeading}>Pre-existing Conditions / Injuries</h3>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "color-mix(in srgb, var(--color-cocoa) 50%, transparent)", margin: "-0.25rem 0 0", lineHeight: 1.5 }}>
                      Select all that apply. This information is kept strictly confidential.
                    </p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                      {CONDITIONS.map((condition) => (
                        <label key={condition} style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "color-mix(in srgb, var(--color-cocoa) 75%, transparent)" }}>
                          <input type="checkbox" checked={intake.conditions.includes(condition)} onChange={() => toggleCondition(condition)} style={{ accentColor: "var(--color-terracotta)", width: "16px", height: "16px", flexShrink: 0 }} />
                          {condition}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* History of Abuse */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                    <h3 style={sectionHeading}>History of Abuse</h3>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "color-mix(in srgb, var(--color-cocoa) 50%, transparent)", margin: "-0.25rem 0 0", lineHeight: 1.5 }}>
                      Select all that apply. This is shared so Jazzlyn can provide the most informed and sensitive support possible.
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {HISTORY_OF_ABUSE.map((item) => (
                        <label key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "color-mix(in srgb, var(--color-cocoa) 75%, transparent)" }}>
                          <input type="checkbox" checked={intake.abuseHistory.includes(item)} onChange={() => toggleAbuse(item)} style={{ accentColor: "var(--color-terracotta)", width: "16px", height: "16px", flexShrink: 0 }} />
                          {item}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Tokophobia */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                    <h3 style={sectionHeading}>Fear of Childbirth</h3>
                    <Field label="Do you have tokophobia / fear of childbirth?">
                      <div style={{ display: "flex", gap: "1.5rem" }}>
                        {["Yes", "No"].map((opt) => (
                          <label key={opt} style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "color-mix(in srgb, var(--color-cocoa) 75%, transparent)" }}>
                            <input type="radio" name="tokophobia" value={opt} checked={intake.tokophobia === opt} onChange={() => update("tokophobia", opt)} style={{ accentColor: "var(--color-terracotta)", width: "16px", height: "16px" }} />
                            {opt}
                          </label>
                        ))}
                      </div>
                    </Field>
                  </div>

                  {/* Additional Info */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                    <h3 style={sectionHeading}>Anything Else?</h3>
                    <Field label="Anything else you would like me to know?">
                      <textarea rows={4} style={{ ...inp, resize: "none" }} value={intake.additionalInfo} onChange={(e) => update("additionalInfo", e.target.value)} placeholder="Share anything else that would help Jazzlyn support you best..." />
                    </Field>
                  </div>

                  {/* Referral */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                    <h3 style={sectionHeading}>How Did You Find Us?</h3>
                    <Field label="How did you hear about Mothering Melanin?">
                      <select style={inp} value={intake.referral} onChange={(e) => update("referral", e.target.value)}>
                        <option value="">Select an option</option>
                        {REFERRAL_OPTIONS.map((r) => <option key={r} value={r}>{r}</option>)}
                      </select>
                    </Field>
                  </div>

                  {isFree ? (
                    <button
                      onClick={() => { if (validateIntake()) setStep("success"); }}
                      className="btn-terracotta"
                      style={{ justifyContent: "center", fontSize: "1rem", padding: "1rem", backgroundColor: "#7A8C6E" }}
                    >
                      Confirm Consultation Request →
                    </button>
                  ) : (
                    <button
                      onClick={() => { if (validateIntake()) setStep("checkout"); }}
                      className="btn-terracotta"
                      style={{ justifyContent: "center", fontSize: "1rem", padding: "1rem" }}
                    >
                      Continue to Checkout →
                    </button>
                  )}

                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "color-mix(in srgb, var(--color-cocoa) 40%, transparent)", textAlign: "center", margin: 0, lineHeight: 1.6 }}>
                    Your information is private and will never be shared outside of your care.
                  </p>
                </div>
              </>
            )}

            {/* ── STEP: CHECKOUT ── */}
            {step === "checkout" && selected && (
              <>
                <button
                  onClick={() => setStep("intake")}
                  style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "color-mix(in srgb, var(--color-cocoa) 55%, transparent)", display: "flex", alignItems: "center", gap: "6px", marginBottom: "1.25rem", padding: 0 }}
                >
                  ← Back to Intake
                </button>

                <div style={{ backgroundColor: "var(--color-cocoa)", borderRadius: "0.75rem", padding: "1rem 1.5rem", marginBottom: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", color: "white" }}>{selected.name}</span>
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontWeight: 300, color: "#F5D98C" }}>{selected.priceDisplay}</span>
                </div>

                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", color: "var(--color-cocoa)", marginBottom: "0.375rem", marginTop: 0 }}>
                  Complete Your Booking
                </h2>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "color-mix(in srgb, var(--color-cocoa) 60%, transparent)", marginBottom: "1.5rem", marginTop: 0, lineHeight: 1.7 }}>
                  Review your order and pay securely through PayPal.
                </p>

                <div style={{ backgroundColor: "color-mix(in srgb, var(--color-cream) 70%, white)", borderRadius: "0.75rem", padding: "1.25rem 1.5rem", marginBottom: "1.5rem" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", color: "var(--color-cocoa)", marginBottom: "0.875rem", marginTop: 0 }}>Order Summary</p>
                  {[
                    [selected.name, selected.priceDisplay],
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
                    <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 300, color: "var(--color-terracotta)" }}>{selected.priceDisplay}</span>
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

            {/* ── STEP: SUCCESS ── */}
            {step === "success" && (
              <div style={{ padding: "2.5rem 0", textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🌸</div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", color: "var(--color-cocoa)", marginBottom: "0.5rem", marginTop: 0 }}>
                  {isFree ? "Request Received!" : "Booking Confirmed!"}
                </h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "color-mix(in srgb, var(--color-cocoa) 65%, transparent)", lineHeight: 1.7 }}>
                  {isFree
                    ? "Thank you for reaching out! Jazzlyn will be in touch within 1–2 business days to schedule your free consultation call."
                    : "Thank you for choosing Mothering Melanin! Once your PayPal payment is confirmed, Jazzlyn will reach out within 1–2 business days to schedule your first prenatal meeting."}
                </p>
              </div>
            )}
          </div>

          {/* ════ SIDEBAR — unchanged ════ */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div className="card" style={{ padding: "1.75rem" }}>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.125rem", color: "var(--color-cocoa)", marginBottom: "0.75rem", marginTop: 0 }}>Prefer to schedule directly?</h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "color-mix(in srgb, var(--color-cocoa) 65%, transparent)", lineHeight: 1.7, marginBottom: "1.25rem", marginTop: 0 }}>
                Use Calendly to book at a time that works for you.
              </p>
              {/* ⬇️ REPLACE with your actual Calendly link */}
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ justifyContent: "center" }}>
                Open Calendly →
              </a>
            </div>

            <div className="card" style={{ padding: "1.75rem" }}>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.125rem", color: "var(--color-cocoa)", marginBottom: "0.75rem", marginTop: 0 }}>Service Area</h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "color-mix(in srgb, var(--color-cocoa) 65%, transparent)", lineHeight: 1.7, margin: 0 }}>
                Hillsborough, Pinellas, Pasco, Polk, and Manatee counties. Virtual support available nationwide.
              </p>
            </div>

            <div className="card" style={{ padding: "1.75rem" }}>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.125rem", color: "var(--color-cocoa)", marginBottom: "0.75rem", marginTop: 0 }}>Connect</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {[
                  { label: "Instagram →", href: "https://instagram.com/motheringmelanin" },
                  { label: "TikTok →", href: "https://tiktok.com/motheringmelanin" },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "var(--color-terracotta)", textDecoration: "none" }}>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}