import Footer from "@components/sections/Footer";
import MainNav from "@fleetwood/components/nav/MainNav";
import Content from "@fleetwood/components/sections/Content";
import { ChildContent } from "@fleetwood/types/ReactChildren";
import type { Metadata } from "next";

type LayoutProps = ChildContent 

export const metadata: Metadata = {
  title: "Fleetwood | Resume",
};

export default function ResumeLayout({children}: LayoutProps) {
  return (
    <div className="relative flex flex-col max-h-full max-w-5xl px-8 mx-auto overflow-hidden z-10">
      <MainNav className="flex-shrink-0 sticky top-0" />
      <Content>{children}</Content>
      <Footer className="flex-shrink-0 sticky bottom-0" />
    </div>
  );
}
