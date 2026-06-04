import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Intro from "./components/Intro";
import { IntroProvider } from "./components/IntroContext";
import LocalTime from "./components/LocalTime";
import Nav from "./components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kushal Pranav Kumar",
  description:
    "Software engineer in Bengaluru. Backend, GraphQL, identity systems.",
  openGraph: {
    title: "Kushal Pranav Kumar",
    description:
      "Software engineer in Bengaluru. Backend, GraphQL, identity systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* suppressHydrationWarning: browser extensions (Grammarly, LastPass,
          dark-reader, etc.) inject attributes on <body> before React hydrates,
          which would otherwise log a hydration mismatch. Scoped to this one
          element — real mismatches in our own tree still surface. */}
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <IntroProvider>
          <Intro />
          {/* Nav on the left (desktop) or top (mobile); pages render to its right. */}
          <div className="flex flex-col sm:flex-row">
            <Nav />
            <div className="flex-1 min-w-0">{children}</div>
          </div>
          {/* Site-wide clock — single instance, lives across route changes. */}
          <footer className="relative z-[1] mx-auto w-full px-4 pb-6 sm:w-[800px] sm:px-8 text-dark">
            <LocalTime />
          </footer>
        </IntroProvider>
      </body>
    </html>
  );
}
