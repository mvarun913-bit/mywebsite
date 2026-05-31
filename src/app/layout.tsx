import type { Metadata } from "next";
import "./globals.css";

const description = "Sitecore Developer specializing in XM Cloud, headless CMS, and enterprise digital experience platforms.";

export const metadata: Metadata = {
  title: "Varun Munigala — Sitecore Developer",
  description,
  metadataBase: new URL("https://varunmunigala.com"),
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Varun Munigala — Sitecore Developer",
    description,
    url: "https://varunmunigala.com",
    siteName: "Varun Munigala",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Varun Munigala — Sitecore Developer",
    description,
  },
  alternates: {
    canonical: "https://varunmunigala.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
