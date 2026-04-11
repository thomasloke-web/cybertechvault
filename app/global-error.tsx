"use client"

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#080C10" }}>
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "24px" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "#ef4444", marginBottom: 24 }}>Critical Error</p>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: "#F0FDF4", marginBottom: 12 }}>Something went seriously wrong</h1>
          <p style={{ fontSize: 16, color: "#94A3B8", maxWidth: 480, lineHeight: 1.7, marginBottom: 32 }}>
            This error has been automatically reported.
            {error.digest && <span style={{ display: "block", fontSize: 12, marginTop: 8 }}>ID: {error.digest}</span>}
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <button onClick={reset} style={{ padding: "12px 32px", background: "#00FF88", color: "black", border: "none", borderRadius: 100, fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer" }}>Try Again</button>
            <a href="/" style={{ padding: "12px 32px", color: "#00FF88", border: "1px solid rgba(0,255,136,0.3)", borderRadius: 100, fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none" }}>Go Home</a>
          </div>
        </div>
      </body>
    </html>
  )
}
