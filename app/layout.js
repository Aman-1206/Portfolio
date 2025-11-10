import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HashCleaner from "@/components/HashCleaner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aman | Software Engineer & Web Developer Portfolio",
  description: "Aman — a passionate Computer Science student and aspiring Software Engineer. Explore my portfolio showcasing web development, coding projects, and creative design work.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/public/favicon.ico" sizes="64x64" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      </head>
      <body
        className="min-h-screen bg-[radial-gradient(circle_at_center,_#000000_0%,_#050505_40%,_#000_100%)]
 bg-fixed"  
 >   
        <HashCleaner />
        {children}
      </body>
    </html>
  );
}
