import "./globals.css";
import type { Metadata } from "next";
import { ToasterProvider } from "@/providers/toast-provider";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Gualbertos 2",
  description: "Comida deliciosa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=supreme@1&f[]=clash-display@1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="no-scrollbar">
        {" "}
        <ToasterProvider />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
