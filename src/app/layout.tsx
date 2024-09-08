
import "./globals.css";
import { ChildContent } from "@fleetwood/types/ReactChildren";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import ParallaxBg from "@fleetwood/components/ParallaxBg";
import { ThemeProvider } from "@fleetwood/components/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

type LayoutProps = ChildContent

export const metadata: Metadata = {
  title: "Fleetwood",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={twMerge(inter.className)}>
        <div className="relative h-screen w-screen overflow-hidden">
          <ParallaxBg className="absolute inset-0 z-0" />
          {children}
        </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
