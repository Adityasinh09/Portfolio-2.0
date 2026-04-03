"use client";
import { Github, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";

const socials = [
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/adityasinhc/",
    label: "LinkedIn",
    handle: "adityasinhc",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:adityasinh072001@gmail.com",
    label: "Email",
    handle: "adityasinh072001",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/Adityasinh09",
    label: "Github",
    handle: "Adityasinh09",
  },
];

export default function Example() {
  return (
    <div className=" pb-16 min-h-screen">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
          {socials.map((s) => (
            <Link
              href={s.href}
              target="_blank"
              className="p-4 flex flex-col items-center gap-4 duration-700 md:p-16 ring-1 ring-zinc-800/50 bg-zinc-900/10 hover:bg-zinc-800 hover:ring-zinc-600 rounded-2xl group"
              key={s.label}
            >
              <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                {s.icon}
              </span>
              <div className="z-10 flex flex-col items-center">
                <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                  {s.handle}
                </span>
                <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  {s.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
