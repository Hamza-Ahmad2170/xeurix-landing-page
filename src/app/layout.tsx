import "./globals.css";
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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className + " " + arial.variable}>
        <NavBar />
        <MobileNav />
        <main className="font-arial">{children}</main>
      </body>
    </html>
  );
}
