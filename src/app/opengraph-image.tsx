import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const runtime = "edge";

export const alt = `${profile.name} — ${profile.title}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: profile.colors.background,
        padding: "80px",
      }}
    >
      <div
        style={{
          width: "120px",
          height: "8px",
          backgroundColor: profile.colors.accent,
          borderRadius: "4px",
          marginBottom: "40px",
        }}
      />
      <div
        style={{
          fontSize: "84px",
          fontWeight: 700,
          color: profile.colors.text,
          lineHeight: 1.1,
        }}
      >
        {profile.name}
      </div>
      <div
        style={{
          fontSize: "48px",
          fontWeight: 500,
          color: profile.colors.accent,
          marginTop: "16px",
        }}
      >
        {profile.title}
      </div>
      <div
        style={{
          fontSize: "32px",
          color: "#C1BBBB",
          marginTop: "48px",
        }}
      >
        {profile.siteUrl.replace("https://", "")}
      </div>
    </div>,
    {
      ...size,
    },
  );
}
