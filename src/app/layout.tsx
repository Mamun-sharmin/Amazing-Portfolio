import type { Metadata } from "next";

//FONT IMPORT
import {Inter, Calistoga} from 'next/font/google'
import "./globals.css";
import { twMerge } from "tailwind-merge";

//FONT CUSTOMIZATION
const inter= Inter({ 
  subsets: ['latin'],
   variable: '--font-sans'
  });
const calistoga= Calistoga ({
   subsets: ['latin'],
    variable: '--font-serif', 
    weight:["400"],
  })

  // TITLE AND DESCRIPTION
export const metadata: Metadata = {
  title: "Fahriar Ahmed",
  description: "We develop various types of Ecommerce website, Mobile app and Portfolio. You are most welcome with me and my team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge("bg-gray-900 text-white antialiased")}>{children}</body>
    </html>
  );
}
