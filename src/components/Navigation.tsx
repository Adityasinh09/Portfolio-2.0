"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const Navigation: React.FC = () => {
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    setIntersecting(window.scrollY < 50);
    const handleScroll = () => {
      setIntersecting(window.scrollY < 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
        isIntersecting
          ? "bg-zinc-900/0 border-transparent"
          : "bg-zinc-900/50  border-zinc-800 "
      }`}
    >
      <div className="container flex items-center justify-between p-6 mx-auto">
        <Link
          href="/"
          className="duration-200 text-zinc-300 hover:text-zinc-100"
        >
          <ArrowLeft className="w-6 h-6 " />
        </Link>
        <div className="flex justify-between gap-8 items-center">
          <Link
            href="/about"
            className="duration-200 text-zinc-400 hover:text-zinc-100"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="duration-200 text-zinc-400 hover:text-zinc-100"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="duration-200 text-zinc-400 hover:text-zinc-100"
          >
            Contact
          </Link>
          <Link
            href="/resume"
            className="duration-200 text-xs tracking-widest uppercase px-4 py-1.5 rounded-full border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-500 hover:text-white transition-all"
          >
            Résumé
          </Link>
        </div>
      </div>
    </header>
  );
};
