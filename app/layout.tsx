import './globals.css';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chuck Norris Coin ($CHUCK)",
  description: "The only coin that can un-rug itself.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
