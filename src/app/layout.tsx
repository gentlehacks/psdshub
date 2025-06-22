"use client";
import {motion, AnimatePresence} from "framer-motion";
import {usePathname} from "next/navigation"
import { Analytics } from "@vercel/analytics/next"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const variants = {
  hidden: {opacity: 0, x: -200, y: 0},
  enter: {opacity: 1, x: 0, y: 0},
  exit: {opacity: 0, x: 0, y: -100},
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname()

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnimatePresence>
          <motion.main 
            key={pathname}
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{type: 'linear'}}
          >
            {children}
            <Analytics />
        </motion.main>
      </AnimatePresence>
      </body>
    </html>
  );
}
