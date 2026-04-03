"use client";
import { ArrowLeft, Github, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Project } from "contentlayer/generated";

type Props = {
  project: Project;
};

export const Header: React.FC<Props> = ({ project }) => {
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
    <header className="relative isolate overflow-hidden bg-black pt-16">
      {/* Sticky nav */}
      <div className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
        isIntersecting ? "bg-zinc-900/0 border-transparent" : "bg-black/50 border-zinc-800"
      }`}>
        <div className="container flex items-center justify-between p-6 mx-auto">
          <Link href="/projects" className="duration-200 text-zinc-300 hover:text-zinc-100 flex items-center gap-2 text-sm">
            <ArrowLeft className="w-4 h-4" /> All Projects
          </Link>
          <div className="flex items-center gap-6 text-sm text-zinc-400">
            {project.repository && (
              <Link href={`https://github.com/${project.repository}`} target="_blank" className="flex items-center gap-1 hover:text-zinc-100 transition">
                <Github className="w-4 h-4" /> Source
              </Link>
            )}
            {project.url && (
              <Link href={project.url} target="_blank" className="flex items-center gap-1 hover:text-zinc-100 transition">
                <LinkIcon className="w-4 h-4" /> Live
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-6 lg:px-8 py-24 sm:py-32 max-w-4xl">
        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs font-medium tracking-widest uppercase text-zinc-500 border border-zinc-800 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-display leading-tight">
          {project.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-400 max-w-2xl">
          {project.description}
        </p>

        {/* Hero image */}
        {project.image && (
          <div className="mt-12 relative w-full aspect-video rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        )}

        {/* Additional images gallery */}
        {project.images && project.images.length > 1 && (
          <div className="mt-6">
            <p className="text-xs tracking-widest uppercase text-zinc-600 mb-4">Gallery</p>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin">
              {project.images.slice(1).map((src, i) => (
                <div
                  key={i}
                  className="relative shrink-0 w-72 h-48 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-colors duration-200"
                >
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${i + 2}`}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
