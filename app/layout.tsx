import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, IBM_Plex_Sans, Lora, Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const IBMPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mw = Merriweather({
  variable: "--font-mw",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Imran Hossen | Portfolio",
  description: "Developer & Designer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${IBMPlexSans.variable} ${lora.variable} ${inter.variable} ${mw.variable} antialiased bg-white text-gray-900 min-h-screen font-sans`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
