import { ImageResponse } from "next/og";

export const alt = "Daystarsprint — Leave a mark they can’t unsee.";
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
          background: "#F4EFE6",
          color: "#141210",
          padding: "64px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 22,
              height: 22,
              background: "#C43222",
            }}
          />
          <div style={{ display: "flex", fontSize: 28, letterSpacing: 4 }}>DAYSTARSPRINT</div>
        </div>
        <div style={{ display: "flex", fontSize: 78, lineHeight: 0.95, maxWidth: 980 }}>
          Leave a mark they can’t unsee.
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#5C554C" }}>
          Seen clearly. Remembered after.
        </div>
      </div>
    ),
    size,
  );
}
