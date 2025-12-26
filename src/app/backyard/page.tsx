import fs from "fs";
import path from "path";

export const metadata = {
  title: "Backyard (Private) • The Pain System",
  robots: { index: false, follow: false },
};

export default function BackyardPage() {
  const filePath = path.join(process.cwd(), "BACKYARD_INDEX.md");
  const content = fs.existsSync(filePath)
    ? fs.readFileSync(filePath, "utf8")
    : "BACKYARD_INDEX.md not found at repo root.";

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <div style={{ padding: 12, border: "1px solid #ddd", marginBottom: 16 }}>
        <strong>PRIVATE — BACKYARD</strong>
        <div style={{ fontSize: 14, opacity: 0.8 }}>
          Internal use only. Not linked publicly. Search engines: noindex.
        </div>
      </div>

      <h1>Backyard Index</h1>
      <pre style={{ whiteSpace: "pre-wrap", lineHeight: 1.4 }}>
        {content}
      </pre>
    </main>
  );
}
