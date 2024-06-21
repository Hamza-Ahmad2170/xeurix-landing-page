import "./globals.css";
import "react-toastify/dist/ReactToastify.min.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";
import { Zoom } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xeurix",
  description: "Xeurix - Elevate Hiring with 3D Job Simulations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <NavBar />
        {children}
        <Footer />
        <ToastContainer
          position="top-center"
          closeButton={false}
          hideProgressBar={false}
          draggable={false}
          theme="light"
          transition={Zoom}
          toastClassName={`max-w-max m-auto min-h-max py-0 px-2 text-base`}
        />
      </body>
    </html>
  );
}
