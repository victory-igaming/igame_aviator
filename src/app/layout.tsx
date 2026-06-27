import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: " Aviator IndNo1 Indian Mobile Game",
  description: "Mobile gaming landing page for Aviator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-0 min-h-screen overflow-x-clip bg-[#1d1a1d]">
        {children}
      </body>
    </html>
  );
}