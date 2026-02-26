import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: {
    default: "Mothering Melanin | Culturally Competent Doula Support",
    template: "%s | Mothering Melanin",
  },
  description:
    "Trauma-informed, culturally competent doula support for Black birthing people and families in Tampa Bay — Hillsborough, Pinellas, Pasco & beyond.",
  keywords: [
    "doula",
    "Black doula",
    "Tampa doula",
    "birth support",
    "culturally competent",
    "trauma-informed",
    "Hillsborough doula",
    "Pinellas doula",
    "Pasco doula",
    "birth doula Tampa Bay",
  ],
  metadataBase: new URL("https://www.motheringmelanin.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.motheringmelanin.com",
    siteName: "Mothering Melanin",
    title: "Mothering Melanin | Culturally Competent Doula Support",
    description:
      "Trauma-informed, culturally competent doula support for Black birthing people and families in Tampa Bay.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mothering Melanin | Culturally Competent Doula Support",
    description:
      "Trauma-informed, culturally competent doula support for Black birthing people and families in Tampa Bay.",
  },
  robots: { index: true, follow: true },
};
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
return (
  <html lang="en" className={`${dmSans.variable} ${cormorant.variable}`}>
    <body>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </body>
  </html>
) };
