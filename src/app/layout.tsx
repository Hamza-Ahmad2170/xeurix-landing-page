import "./globals.css";
import "aos/dist/aos.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import NavBar from "@/components/navbar/NavBar";
import MobileNav from "@/components/navbar/MobileNav";

const manrope = Manrope({ subsets: ["latin"] });
const arial = localFont({
  src: "../fonts/arial.ttf",
  variable: "--font-arial",
});

export const metadata: Metadata = {
  title: " Xeurix - AI-Powered 3D Job Simulations for Better Hiring Decisions",
  description:
    "Revolutionize your hiring with Xeurix's recruiting platform. Boost job fit, streamline hiring, and enhance employee retention with AI-driven job simulations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className + " " + arial.variable} `}>
        <NavBar />
        <MobileNav />
        {children}
      </body>
    </html>
  );
}
