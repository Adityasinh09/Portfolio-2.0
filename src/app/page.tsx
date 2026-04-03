import Link from "next/link";
import React from "react";
import { Particles } from "@/components/Particles";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Résumé", href: "/resume" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in absolute top-0">
        <ul className="flex items-center justify-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs tracking-[0.2em] uppercase duration-500 text-zinc-500 hover:text-zinc-200 font-medium"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={150}
      />
      <h1 className="z-10 font-display text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text font-black tracking-tighter italic">
        aditya
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in absolute bottom-0 max-w-2xl px-6">
        <h2 className="text-xs tracking-[0.25em] uppercase text-zinc-500 leading-relaxed font-sans font-medium">
          Data Analyst &nbsp;&middot;&nbsp; UI/UX Designer &nbsp;&middot;&nbsp; Software Developer
        </h2>
      </div>
    </div>
  );
}
