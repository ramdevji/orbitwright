import { ImageResponse } from "next/og";

export const alt = "OrbitWright — We build, launch & maintain your product";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0e14",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* glow */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 480,
            height: 480,
            borderRadius: 9999,
            background: "#ff6b4a",
            opacity: 0.35,
            filter: "blur(40px)",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 9999,
              background: "#ff6b4a",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 34, fontWeight: 700, color: "white", letterSpacing: -1 }}>
            OrbitWright
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 82, fontWeight: 800, color: "white", lineHeight: 1.02, letterSpacing: -3 }}>
            From idea to orbit.
          </div>
          <div style={{ fontSize: 34, color: "#aab4c5", marginTop: 24, maxWidth: 900 }}>
            One senior team — design, development, DevOps &amp; AI. Built, launched, and maintained.
          </div>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          {["Design", "Development", "DevOps", "AI"].map((t, i) => (
            <div
              key={t}
              style={{
                display: "flex",
                fontSize: 24,
                color: "#0b0e14",
                background: ["#9b8cff", "#4fd1c5", "#d7f75b", "#ff6b4a"][i],
                padding: "10px 22px",
                borderRadius: 9999,
                fontWeight: 600,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
