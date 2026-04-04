import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "@/components/Navigation";
import { Github, ExternalLink } from "lucide-react";

export const revalidate = 60;

export default async function ProjectsPage() {
  const featured = allProjects.find((p) => p.slug === "6g-smart-city");

  const sorted = allProjects
    .filter((p) => p.slug !== "6g-smart-city")
    .sort((a, b) => {
      if (!a.date || !b.date) return 0;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return (
    <div className="relative pb-16 min-h-screen">
      <Navigation />
      <div className="px-4 sm:px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">

        {/* Page header */}
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-display">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            A selection of projects demonstrating data analytics, design, and software development.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        {/* Featured research */}
        {featured && (
          <div className="w-full">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-zinc-500 mb-6">
              Featured Academic Publication
            </h3>
            <article className="relative w-full p-6 md:p-10 border border-zinc-700/50 rounded-2xl bg-gradient-to-tr from-zinc-900/50 to-zinc-800/20 hover:border-zinc-500 duration-500 group overflow-hidden">
              <Link href={`/projects/${featured.slug}`} className="absolute inset-0 z-0" />
              <div className="z-10 relative pointer-events-none max-w-3xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-100 group-hover:text-white font-display mb-4 leading-tight">
                  {featured.title}
                </h2>
                <p className="leading-7 text-base md:text-lg text-zinc-400 group-hover:text-zinc-300">
                  {featured.description}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 mt-6 z-10 relative pointer-events-auto">
                {featured.repository && (
                  <Link href={`https://github.com/${featured.repository}`} target="_blank" className="text-zinc-400 hover:text-zinc-100 transition flex items-center gap-2 text-sm bg-zinc-900 px-4 py-2 rounded-full border border-zinc-700 hover:border-zinc-500">
                    <Github className="w-4 h-4" /> Source
                  </Link>
                )}
                {featured.url && (
                  <Link href={featured.url} target="_blank" className="text-zinc-400 hover:text-zinc-100 transition flex items-center gap-2 text-sm bg-zinc-900 px-4 py-2 rounded-full border border-zinc-700 hover:border-zinc-500">
                    <ExternalLink className="w-4 h-4" /> Read Paper
                  </Link>
                )}
              </div>
            </article>
          </div>
        )}

        {/* Project grid — auto height, buttons always visible */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {sorted.map((project) => (
            <article
              key={project.slug}
              className="flex flex-col p-5 md:p-7 border border-zinc-800 rounded-2xl bg-zinc-900/30 hover:bg-zinc-800/40 duration-200 group relative overflow-hidden"
            >
              <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-0" />

              {/* Text content — grows to fill */}
              <div className="z-10 relative pointer-events-none flex-1">
                <h2 className="text-lg sm:text-xl font-bold text-zinc-100 group-hover:text-white font-display leading-snug">
                  {project.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400 group-hover:text-zinc-300 line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Buttons — always visible at bottom */}
              <div className="flex flex-wrap items-center gap-2 mt-5 z-10 relative pointer-events-auto">
                {project.repository && (
                  <Link
                    href={`https://github.com/${project.repository}`}
                    target="_blank"
                    className="text-zinc-500 hover:text-zinc-100 transition flex items-center gap-1.5 text-xs font-medium bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800 hover:border-zinc-600"
                  >
                    <Github className="w-3.5 h-3.5" /> Source
                  </Link>
                )}
                {project.url && (
                  <Link
                    href={project.url}
                    target="_blank"
                    className="text-zinc-500 hover:text-zinc-100 transition flex items-center gap-1.5 text-xs font-medium bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800 hover:border-zinc-600"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                  </Link>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-0 pointer-events-none" />
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
