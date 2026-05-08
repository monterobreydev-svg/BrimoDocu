"use client";
import { useState, useRef, useTransition } from "react";
import { saveBusinessProfile } from "@/app/actions/settings";

interface ProfileData {
  companyName:     string | null;
  businessAddress: string | null;
  tin:             string | null;
  email:           string | null;
  contactNumber:   string | null;
  logoData:        string | null;
  brandColor:      string;
  taxType:         string;
  customTaxRate:   number | null;
  defaultNote:     string | null;
}

const taxOptions = [
  { value: "VAT_12",  label: "12% VAT (Philippines)" },
  { value: "EXEMPT",  label: "0% Tax Exempt"          },
  { value: "CUSTOM",  label: "Custom rate"             },
];

const input: React.CSSProperties = {
  width:        "100%",
  padding:      "8px 11px",
  borderRadius: 7,
  border:       "1px solid #E2E8F0",
  fontSize:     13,
  color:        "#0F172A",
  background:   "#fff",
  outline:      "none",
  boxSizing:    "border-box",
};

function Field({ label, optional, children }: { label: string; optional?: boolean; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <label style={{ fontSize: 11.5, fontWeight: 600, color: "#334155" }}>
        {label}
        {optional && <span style={{ fontWeight: 400, color: "#94A3B8", marginLeft: 4 }}>(optional)</span>}
      </label>
      {children}
    </div>
  );
}

function SectionCard({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <section style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 10, overflow: "hidden" }}>
      <div style={{ padding: "13px 18px", borderBottom: "1px solid #F1F5F9" }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: "#0F172A" }}>{title}</div>
        <div style={{ fontSize: 11.5, color: "#94A3B8", marginTop: 2 }}>{subtitle}</div>
      </div>
      <div style={{ padding: 18 }}>{children}</div>
    </section>
  );
}

export function SettingsForm({ profile, businessName }: { profile: ProfileData | null; businessName?: string | null }) {
  const [companyName,     setCompanyName]     = useState(profile?.companyName ?? businessName ?? "");
  const [businessAddress, setBusinessAddress] = useState(profile?.businessAddress ?? "");
  const [tin,             setTin]             = useState(profile?.tin             ?? "");
  const [email,           setEmail]           = useState(profile?.email           ?? "");
  const [contactNumber,   setContactNumber]   = useState(profile?.contactNumber   ?? "");
  const [logoData,        setLogoData]        = useState(profile?.logoData        ?? "");
  const [brandColor,      setBrandColor]      = useState(profile?.brandColor      ?? "#1D4ED8");
  const [taxType,         setTaxType]         = useState(profile?.taxType         ?? "VAT_12");
  const [customTaxRate,   setCustomTaxRate]   = useState(profile?.customTaxRate?.toString() ?? "");
  const [defaultNote,     setDefaultNote]     = useState(profile?.defaultNote     ?? "");
  const [saved,  setSaved]  = useState(false);
  const [isPending, startTransition] = useTransition();
  const fileRef  = useRef<HTMLInputElement>(null);
  const colorRef = useRef<HTMLInputElement>(null);

  function handleLogoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setLogoData(reader.result as string);
    reader.readAsDataURL(file);
  }

  function handleSave() {
    startTransition(async () => {
      await saveBusinessProfile({
        companyName, businessAddress, tin, email, contactNumber,
        logoData:     logoData || undefined,
        brandColor,   taxType,
        customTaxRate: taxType === "CUSTOM" ? (parseFloat(customTaxRate) || 0) : undefined,
        defaultNote,
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    });
  }

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>

      {/* ── Company Identity ──────────────────────────────────── */}
      <SectionCard
        title="Company Identity"
        subtitle="Basic information that appears on your generated documents"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <Field label="Company Name">
            <input
              style={input}
              value={companyName}
              onChange={e => setCompanyName(e.target.value)}
              placeholder="e.g. Acme Corporation"
            />
          </Field>

          <Field label="Business Address">
            <textarea
              style={{ ...input, resize: "vertical", minHeight: 72 }}
              value={businessAddress}
              onChange={e => setBusinessAddress(e.target.value)}
              placeholder="Unit / Floor, Building, Street, City, Province, ZIP"
            />
          </Field>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <Field label="Company TIN">
              <input
                style={input}
                value={tin}
                onChange={e => setTin(e.target.value)}
                placeholder="000-000-000-000"
              />
            </Field>
            <Field label="Business Email">
              <input
                style={input}
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="billing@yourcompany.com"
              />
            </Field>
          </div>

          <Field label="Contact Number" optional>
            <input
              style={input}
              value={contactNumber}
              onChange={e => setContactNumber(e.target.value)}
              placeholder="+63 9XX XXX XXXX"
            />
          </Field>
        </div>
      </SectionCard>

      {/* ── Brand ─────────────────────────────────────────────── */}
      <SectionCard
        title="Brand"
        subtitle="Logo and accent color used across generated documents"
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, alignItems: "start" }}>

          {/* Logo upload */}
          <Field label="Company Logo">
            <>
              {logoData ? (
                <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                  <div style={{ width: "100%", height: 100, border: "1px solid #E2E8F0", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: "#F8FAFC", overflow: "hidden" }}>
                    <img src={logoData} alt="Logo preview" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                  </div>
                  <div style={{ display: "flex", gap: 7 }}>
                    <button
                      type="button"
                      onClick={() => fileRef.current?.click()}
                      style={{ flex: 1, padding: "6px 10px", borderRadius: 6, border: "1px solid #E2E8F0", background: "#fff", fontSize: 12, color: "#334155", cursor: "pointer" }}
                    >
                      Replace
                    </button>
                    <button
                      type="button"
                      onClick={() => { setLogoData(""); if (fileRef.current) fileRef.current.value = ""; }}
                      style={{ padding: "6px 10px", borderRadius: 6, border: "1px solid #FECACA", background: "#FFF1F2", fontSize: 12, color: "#DC2626", cursor: "pointer" }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  className="hover:border-[#93C5FD] hover:bg-[#EFF6FF] hover:text-[#1D4ED8] transition-colors"
                  style={{ width: "100%", height: 100, border: "1.5px dashed #CBD5E1", borderRadius: 8, background: "#F8FAFC", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6, cursor: "pointer", color: "#94A3B8" }}
                >
                  <svg style={{ width: 22, height: 22 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span style={{ fontSize: 12 }}>Click to upload</span>
                  <span style={{ fontSize: 11 }}>PNG, JPG, SVG — up to 2 MB</span>
                </button>
              )}
              <input
                ref={fileRef}
                type="file"
                accept="image/png,image/jpeg,image/svg+xml"
                style={{ display: "none" }}
                onChange={handleLogoChange}
              />
            </>
          </Field>

          {/* Brand color */}
          <Field label="Brand Color">
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {/* Color preview / picker trigger */}
              <div
                style={{ width: "100%", height: 100, borderRadius: 8, border: "1px solid #E2E8F0", background: brandColor, cursor: "pointer", position: "relative", overflow: "hidden" }}
                onClick={() => colorRef.current?.click()}
              >
                <input
                  ref={colorRef}
                  type="color"
                  value={brandColor}
                  onChange={e => setBrandColor(e.target.value)}
                  style={{ opacity: 0, position: "absolute", inset: 0, width: "100%", height: "100%", cursor: "pointer", border: "none", padding: 0 }}
                />
                <div style={{ position: "absolute", bottom: 8, right: 9, background: "rgba(0,0,0,0.25)", borderRadius: 5, padding: "2px 8px", fontSize: 11, color: "#fff", backdropFilter: "blur(4px)", letterSpacing: ".04em" }}>
                  Click to pick
                </div>
              </div>
              {/* Hex input */}
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 28, height: 28, borderRadius: 6, background: brandColor, border: "1px solid #E2E8F0", flexShrink: 0 }} />
                <input
                  style={{ ...input, flex: 1 }}
                  value={brandColor}
                  onChange={e => {
                    const v = e.target.value;
                    if (/^#[0-9A-Fa-f]{0,6}$/.test(v)) setBrandColor(v);
                  }}
                  maxLength={7}
                  placeholder="#1D4ED8"
                />
              </div>
            </div>
          </Field>

        </div>
      </SectionCard>

      {/* ── Document Defaults ─────────────────────────────────── */}
      <SectionCard
        title="Document Defaults"
        subtitle="Pre-filled values applied when creating new documents"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

          <Field label="Default Tax Rate">
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {/* Dropdown */}
              <div style={{ position: "relative" }}>
                <select
                  style={{ ...input, appearance: "none", WebkitAppearance: "none", paddingRight: 34, cursor: "pointer" }}
                  value={taxType}
                  onChange={e => setTaxType(e.target.value)}
                >
                  {taxOptions.map(o => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
                <svg
                  style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, color: "#94A3B8", pointerEvents: "none" }}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Custom rate input */}
              {taxType === "CUSTOM" && (
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <input
                    style={{ ...input, flex: 1 }}
                    type="number"
                    min="0"
                    max="100"
                    step="0.01"
                    value={customTaxRate}
                    onChange={e => setCustomTaxRate(e.target.value)}
                    placeholder="e.g. 5"
                  />
                  <span style={{ fontSize: 13, color: "#64748B", flexShrink: 0, fontWeight: 500 }}>%</span>
                </div>
              )}

              {/* Tax pill preview */}
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: taxType === "EXEMPT" ? "#059669" : "#1D4ED8" }} />
                <span style={{ fontSize: 11.5, color: "#64748B" }}>
                  {taxType === "VAT_12"  && "12% VAT will be applied to taxable amounts"}
                  {taxType === "EXEMPT"  && "Documents will be marked as tax exempt"}
                  {taxType === "CUSTOM"  && `${customTaxRate || "0"}% custom tax rate will be applied`}
                </span>
              </div>
            </div>
          </Field>

          <Field label="Default Note / Footer Text" optional>
            <textarea
              style={{ ...input, resize: "vertical", minHeight: 90 }}
              value={defaultNote}
              onChange={e => setDefaultNote(e.target.value)}
              placeholder="e.g. Thank you for your business! Payment is due within 30 days of invoice date."
            />
          </Field>
        </div>
      </SectionCard>

      {/* ── Save bar ──────────────────────────────────────────── */}
      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 12, paddingBottom: 10 }}>
        {saved && (
          <span style={{ fontSize: 12.5, color: "#059669", display: "flex", alignItems: "center", gap: 5 }}>
            <svg style={{ width: 14, height: 14 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            Saved successfully
          </span>
        )}
        <button
          type="button"
          onClick={handleSave}
          disabled={isPending}
          className="hover:bg-[#1E40AF] active:scale-[.98] transition-all"
          style={{
            background:    "#1D4ED8",
            color:         "#fff",
            padding:       "8px 20px",
            borderRadius:  7,
            fontSize:      13,
            fontWeight:    500,
            border:        "none",
            cursor:        isPending ? "not-allowed" : "pointer",
            opacity:       isPending ? 0.7 : 1,
          }}
        >
          {isPending ? "Saving…" : "Save settings"}
        </button>
      </div>

    </div>
  );
}
