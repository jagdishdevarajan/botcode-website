import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BotCode - Agentic AI for Healthcare",
  description: "BotCode combines clinical expertise, AI, and scalable infrastructure to deliver smarter care pathways.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/BotCodeFavIcon.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
