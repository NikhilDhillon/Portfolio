import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-nikhil-dhillons-projects.vercel.app"),
  title: "Nikhil Dhillon - Software Developer",
  description:
    "Software developer and University of Victoria Computer Science Honours student building native systems, full-stack products, and data-driven tools.",
  keywords: [
    "Software Developer",
    "Full-Stack Developer",
    "C++ Developer",
    "C# Developer",
    "MFC",
    ".NET",
    "React",
    "React Native",
    "Next.js",
    "TypeScript",
    "FastAPI",
    "PostgreSQL",
    "Supabase",
    "Nikhil Dhillon",
  ],
  authors: [{ name: "Nikhil Dhillon" }],
  creator: "Nikhil Dhillon",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nikhil Dhillon - Software Developer Portfolio",
    description:
      "Explore my work across native systems, full-stack products, mobile applications, and data-driven tools.",
    url: "/",
    siteName: "Nikhil Dhillon - Portfolio",
    images: [
      {
        url: "/Home.jpg",
        width: 1200,
        height: 630,
        alt: "Nikhil Dhillon - Software Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil Dhillon - Software Developer",
    description:
      "Explore my work across native systems, full-stack products, mobile applications, and data-driven tools.",
    images: ["/Home.jpg"],
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#E7E8E4" },
    { media: "(prefers-color-scheme: dark)", color: "#141517" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${plexMono.variable} font-sans`}>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
