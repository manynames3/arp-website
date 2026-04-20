import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  weight: ["200", "300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Aiden Rhaa Photography | Premium Gwinnett County GA Wedding Photographer",
  description: "High-end, elegant wedding photography for modern couples in Gwinnett County, GA and Atlanta. Understated, premium, and documentary style wedding photos.",
  keywords: "Gwinnett County GA wedding photographer, Atlanta wedding photography, luxury wedding photographer GA, high-end wedding photographer, Aiden Rhaa Photography, documentary wedding photographer Georgia",
  openGraph: {
    title: "Aiden Rhaa Photography | Premium Gwinnett County GA Wedding Photographer",
    description: "High-end, elegant wedding photography for modern couples in Gwinnett County, GA and Atlanta.",
    url: "https://aidenrhaa.com",
    siteName: "Aiden Rhaa Photography",
    images: [
      {
        url: "https://aidenrhaa.com/wp-content/uploads/2017/11/boston-wedding-photographer-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Aiden Rhaa Photography - Luxury Wedding Photographer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${cormorant.variable} ${montserrat.variable}`}>
      <body className="antialiased bg-[#FAF9F6] text-[#2C2C2C] font-sans selection:bg-[#2C2C2C] selection:text-white flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
