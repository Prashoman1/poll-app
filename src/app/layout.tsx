import "../styles/globals.css";
import { Metadata, Viewport } from "next";

import { ToastContainer, Zoom } from "react-toastify";
import { siteConfig } from "../config/site";

import React from "react";
import { Providers } from "../lib/providers";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
      // className={clsx(
      //   "min-h-screen bg-background font-sans antialiased",
      //   fontSans.variable
      // )}
      >
        
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Zoom}
          />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
