import Colors from "@components/ui/Colors";
import MainNav from "@fleetwood/components/nav/MainNav";
import RoleHero from "@fleetwood/components/sections/RoleHero";
import { RoleProp } from "@fleetwood/types/RoleProp";
import { } from "next/font/local";

export const metadata = {
  title: "Fleetwood | Hi!",
};

const roles:RoleProp[] = [
  {
    role: "leader",
    description: "From the time I was a wee Fleetwood, I’ve always been drawn to leadership roles. I build strong teams, help them define their objectives, and then empower them to deliver. I’m passionate about creating a sincere, supportive environment where individuals can grow and excel. When you're happy is when you do your best work. Full stop.",  
    img: { src: "/img/me-1.png", alt: "fleetwood headshot", width: 360, height: 360 },
  },
  {
    role: "engineer",
    description: "I'm enamored with the concept of transforming complex problems into elegant solutions. Engineering is a creative process; it's all about bringing abstract ideas to life, and code is the medium. For me it's not just my profession; it's a way to exercise my creativity and bask in its fruition.",  
    img: { src: "/img/me-0.png", alt: "fleetwood smiling", width: 360, height: 360 },
  },
  {
    role: "optimist",
    description: "Stress is stressful. I am Zen about execution; build a plan, start fast, adapt fast. Confidence builds optimism, and that comes much easier when you begin with a solid, adaptable plan.",
    img: { src: "/img/me-4.png", alt: "fleetwood against a splash of color", width: 360, height: 360 },
  },
  {
    role: "solver",
    description: "Life would be boring without challenges! I get jazzed by a new set of problems to overcome or a new opportunity to improve or innovate.", 
    img: { src: "/img/me-2.png", alt: "fleetwood looking pensive", width: 360, height: 360 },
  },
  {
    role: "creator",
    description: "Is there any greater celebration of being alive than seeing something you dreamed up in your mind crafted into being?",
    img: { src: "/img/me-5.png", alt: "image of hands", width: 360, height: 360 },
  },
  {
    role: "ally",
    description: "Sonder makes me somber. I love people. I'm fascinated by other languages, cultures, art and cuisine. I love learning about history from old people and revolution from young people, and the music and Zeitgiest of both. I champion identity: the definition and the actualization of the Self, by the Self. That's the stuff.",
    img: { src: "/img/me-3.png", alt: "fleetwood being all friendly", width: 360, height: 360 },
  },
];

export default function Home() {
  return (
    <div className="relative flex flex-col max-h-full max-w-5xl px-8 mx-auto overflow-hidden z-10">
      <MainNav className="flex-shrink-0 sticky top-0" />
      <main className="flex-grow overflow-y-auto my-2 relative">
        <RoleHero items={roles} />
        <Colors />
      </main>
    </div>
  );
}
