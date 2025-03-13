import "./globals.css";

import type { Metadata } from "next";
import {Poppins} from "next/font/google";

import { Toaster } from "@/components/ui/sonner";

import { CartProvider } from "./[slug]/menu/context/cart";



const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  
});

export const metadata: Metadata = {
  title: "FSW DONALDS",
  description: "I am loving it 1%",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        
        <CartProvider>{children}</CartProvider>

        <Toaster/>
      </body>
    </html>
  );
}
