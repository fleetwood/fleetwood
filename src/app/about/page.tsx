import Hero from "@/components/sections/hero/Hero";
import { } from "next/font/local";

export const metadata = {
  title: "Fleetwood | About",
}

export default function AboutPage() {

  return (
    <>
      <Hero title="About Me" h2>
        <div className="h-screen">
          This is some long content
        </div>
      </Hero>
    </>
  );
}
