import "./globals.css";

export const metadata = {
  title: "Accredian Enterprise — Upskill Your Workforce at Scale",
  description:
    "Partner with IITs, IIMs, and global universities to upskill your enterprise teams with curated programs, live mentorship, and real-time analytics that deliver measurable ROI.",
  openGraph: {
    title: "Accredian Enterprise",
    description: "India's most trusted enterprise learning platform.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
