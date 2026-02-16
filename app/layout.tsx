import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./page.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mahnoor Ahmed | Full Stack Developer",
    template: "%s | Mahnoor Ahmed",
  },
  description:
    "Mahnoor Ahmed is a Full Stack Developer specializing in Next.js, React, and modern web applications. Explore projects, skills, and experience.",
  keywords: [
    "Mahnoor Ahmed",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Mahnoor Ahmed" }],
  creator: "Mahnoor Ahmed",

  openGraph: {
    title: "Mahnoor Ahmed | Full Stack Developer",
    description:
      "Full Stack Developer building scalable and modern web applications with Next.js and React.",
    url: "https://mahnoorahmed.vercel.app",
    siteName: "Mahnoor Ahmed Portfolio",
    images: [
      {
        url: "/og-image.png", // Put this image in your public folder
        width: 1200,
        height: 630,
        alt: "Mahnoor Ahmed Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mahnoor Ahmed | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, and scalable web applications.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
    <html >
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
