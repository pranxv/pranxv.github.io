import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Intro from "./components/Intro";
import { IntroProvider } from "./components/IntroContext";

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
      <body className="min-h-full flex flex-col">
        <IntroProvider>
          <Intro />
          {children}
        </IntroProvider>
      </body>
    </html>
  );
}
