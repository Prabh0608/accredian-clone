import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Accredian Enterprise",
  description:
    "Next-Gen Expertise For Your Enterprise. Cultivate high-performance teams through expert learning.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
