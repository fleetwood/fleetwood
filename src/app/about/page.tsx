import Hero from "@components/sections/Hero";
import Colors from "@components/ui/Colors";
import Content from "@components/sections/Content";
import { } from "next/font/local";
import MainNav from "@fleetwood/components/nav/MainNav";
import Footer from "@fleetwood/components/sections/Footer";

export const metadata = {
  title: "Fleetwood | About",
}

export default function AboutPage() {

  return (

    <div className="relative flex flex-col h-full max-w-5xl px-8 mx-auto overflow-hidden z-10">
      <MainNav className="flex-shrink-0 sticky top-0" />
      <main className="flex-grow overflow-y-auto my-2">
          <Hero title="About Me">
            Stuff goes here
          </Hero>
          <Colors />
      </main>
      <Footer className="flex-shrink-0 sticky bottom-0" />
    </div>
  );
}
