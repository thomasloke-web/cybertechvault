import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "CyberTechVault"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#080C10",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, #00FF88, #A855F7)" }} />
        <div style={{ fontSize: 72, fontWeight: 700, color: "#F0FDF4", letterSpacing: "-2px", lineHeight: 1, marginBottom: 16 }}>
          CyberTech<span style={{ color: "#00FF88" }}>Vault</span>
        </div>
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#00FF88", marginBottom: 28, boxShadow: "0 0 20px #00FF8860" }} />
        <div style={{ fontSize: 22, fontWeight: 400, color: "#94A3B8", letterSpacing: "0.12em", textTransform: "uppercase" as const }}>
          Secure Everything
        </div>
        <div style={{ position: "absolute", bottom: 40, right: 60, opacity: 0.6, fontSize: 18, color: "#F0FDF4" }}>
          <span style={{ fontWeight: 300 }}>Norwegian</span>
          <span style={{ fontWeight: 700, color: "#FB923C" }}>Spark</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
