import { ImageResponse } from "next/og";

export const alt = "Tinatries — Make your brand impossible to ignore.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F3F1EB",
          color: "#101616",
          padding: "64px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 18, height: 42, background: "#101616" }} />
          <div style={{ width: 18, height: 42, background: "#0C4E49" }} />
          <div style={{ width: 18, height: 42, background: "#101616", opacity: 0.28 }} />
          <div style={{ display: "flex", fontSize: 32, marginLeft: 12 }}>Tinatries</div>
        </div>
        <div style={{ display: "flex", fontSize: 72, lineHeight: 0.95, maxWidth: 980 }}>
          Make your brand impossible to ignore.
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#5C6B67" }}>
          Digital marketing and creative strategy
        </div>
      </div>
    ),
    size,
  );
}
