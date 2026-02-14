import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header"
import Footer from "@/components/Footer"

import { ClerkProvider } from '@clerk/nextjs'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Eshop Gabosky",
    template: "%s | Eshop Gabosky",
  },
  description: "Tienda virtual de prueba de Gabosky",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="es">
        <body
          className="font-poppins antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100"
          >
          <Header />
            {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
