import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Nikhil Dhillon - Full Stack Developer",
  description:
    "Welcome to my portfolio! I am a passionate Full Stack developer creating modern, responsive, and user-friendly applications. Specializing in frontend technologies and interactive user interfaces, I build engaging experiences that make an impact.",
  keywords: [
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Responsive Design",
    "UI/UX",
    "Web Accessibility",
    "Performance Optimization",
    "Modern Full Stack Development",
    "Progressive Full Stack Apps",
    "Nikhil Dhillon",
  ],
  authors: [{ name: "Nikhil Dhillon" }],
  creator: "Nikhil Dhillon",
  openGraph: {
    title: "Nikhil Dhillon - Full Stack Developer Portfolio",
    description:
      "Passionate full stack developer crafting modern and engaging digital experiences. Explore my projects and Full Stack development expertise.",
    url: "https://your-domain.com",
    siteName: "Nikhil Dhillon - Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nikhil Dhillon - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil Dhillon - Full Stack Developer",
    description:
      "Passionate Full Stack developer crafting modern and engaging digital experiences. Explore my projects and Full Stack development expertise.",
    creator: "@yourusername",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
