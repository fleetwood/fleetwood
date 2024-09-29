import "./globals.css";
import MainNav from "@/components/nav/MainNav";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ChildContent } from "@/types/ReactChildren";
import { twMerge } from "tailwind-merge";
import ParallaxBg from "@/components/ParallaxBg";
import ContentSection from "@/components/sections/Content";
import Footer from "@/components/sections/Footer";
const inter = Inter({ subsets: ["latin"] });

type LayoutProps = ChildContent

export const metadata: Metadata = {
  title: "Fleetwood",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={twMerge(inter.className, 'h-screen overflow-hidden')}>
          <div className="relative h-full w-full">
            <ParallaxBg className="absolute inset-0 z-0" />
            <div className="relative flex flex-col h-full w-full z-10">
              <div className="flex-grow flex justify-center">
                <div role="content" className="relative flex flex-col h-full w-full max-w-5xl px-4 sm:px-6 lg:px-8 z-10">
                  <MainNav className="flex-shrink-0 sticky top-0 bg-base-100 z-20" />
                  <ContentSection>{children}</ContentSection>
                  <Footer className="flex-shrink-0 bg-base-100 z-20" />
                </div>
              </div>
            </div>
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
