import "./globals.css";

export const metadata = {
  title: "Accredian Enterprise",
  description:
    "Next-Gen Expertise For Your Enterprise. Cultivate high-performance teams through expert learning.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
