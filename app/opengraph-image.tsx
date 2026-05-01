import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "OMEGA — One System for Property Care";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FBFAF7",
          display: "flex",
          flexDirection: "column",
          padding: 80,
          fontFamily: "sans-serif",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(60% 50% at 80% 20%, rgba(243,107,33,0.18), transparent 70%), radial-gradient(40% 40% at 20% 90%, rgba(243,107,33,0.08), transparent 70%)"
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#5F5A55",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            fontWeight: 500
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              background: "#F36B21",
              borderRadius: 999
            }}
          />
          OMEGA · UAE Property
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
            color: "#161616",
            fontSize: 96,
            lineHeight: 1.02,
            fontWeight: 300,
            letterSpacing: -2
          }}
        >
          <span>One System for</span>
          <span>
            Property Care.{" "}
            <span style={{ color: "#5F5A55", fontStyle: "italic" }}>
              Elevated by Engineering.
            </span>
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 56,
            color: "#5F5A55",
            fontSize: 22
          }}
        >
          <span>Care · Repair · Renovation · Engineering · UAE</span>
          <span
            style={{
              color: "#F36B21",
              fontWeight: 600
            }}
          >
            omegacfm.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
