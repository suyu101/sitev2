import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AmuletNav from "../components/AmuletNav";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suyesha Saha",
  description: "A digital footprint.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 text-neutral-200 selection:bg-emerald-500 selection:text-neutral-950 min-h-screen relative overflow-x-hidden`}
      >
        <div
          className="fixed inset-0 opacity-[0.02] pointer-events-none z-0"
          style={{
            backgroundImage:
              'url("https://www.transparenttextures.com/patterns/stardust.png")',
          }}
        ></div>

        <main className="relative z-10 pb-32">{children}</main>

        <AmuletNav />
      </body>
    </html>
  );
}
