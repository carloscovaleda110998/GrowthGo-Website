import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GrowthGo — Scale Your Real Estate Business Smarter",
  description:
    "Marketing, business development and operational support designed specifically for Realtors and Loan Officers. More visibility. More referrals. More closings.",
  keywords: [
    "real estate marketing agency",
    "mortgage marketing support",
    "realtor lead generation",
    "loan officer assistant",
    "real estate business development",
    "realtor social media management",
    "mortgage lead follow-up",
    "GrowthGo",
  ],
  authors: [{ name: "GrowthGo" }],
  icons: {
    icon: "/growthgo-logo.png",
  },
  openGraph: {
    title: "GrowthGo — Scale Your Real Estate Business Smarter",
    description:
      "Marketing, business development and operational support designed specifically for Realtors and Loan Officers.",
    siteName: "GrowthGo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowthGo — Scale Your Real Estate Business Smarter",
    description:
      "Marketing, business development and operational support designed specifically for Realtors and Loan Officers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
