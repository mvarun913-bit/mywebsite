import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Varun Munigala — Portfolio",
  description: "Developer. Traveler. Explorer of the world.",
  icons: {
    icon: "/favicon.svg",
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