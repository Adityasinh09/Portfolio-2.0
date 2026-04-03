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
    .sort((a,b) => {
       if (!a.date || !b.date) return 0;
       return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return (
    <div className="relative pb-16 min-h-screen">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-display">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            A selection of projects demonstrating data analytics and full-stack development.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        
        {featured && (
          <div className="w-full">
            <h3 className="text-lg font-bold tracking-tight text-zinc-100 sm:text-xl font-display mb-6">
              Featured Academic Publication
            </h3>
            <article className="relative w-full p-6 md:p-12 border border-zinc-700/50 rounded-2xl bg-gradient-to-tr from-zinc-900/50 to-zinc-800/20 hover:border-zinc-500 duration-500 group overflow-hidden">
               <Link href={`/projects/${featured.slug}`} className="absolute inset-0 z-0" />
               <div className="z-10 relative pointer-events-none max-w-3xl">
                 <h2 className="text-3xl md:text-5xl font-bold text-zinc-100 group-hover:text-white font-display mb-6">
                    {featured.title}
                 </h2>
                 <p className="leading-8 text-lg duration-150 text-zinc-400 group-hover:text-zinc-300">
                   {featured.description}
                 </p>
               </div>
               <div className="flex items-center gap-4 mt-8 z-10 relative pointer-events-auto">
                 {featured.repository && (
                   <Link href={`https://github.com/${featured.repository}`} target="_blank" className="text-zinc-500 hover:text-zinc-200 transition flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-full border border-zinc-800">
                     <Github className="w-5 h-5" /> Source
                   </Link>
                 )}
                 {featured.url && (
                   <Link href={featured.url} target="_blank" className="text-zinc-500 hover:text-zinc-200 transition flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-full border border-zinc-800">
                     <ExternalLink className="w-5 h-5" /> Live Demo
                   </Link>
                 )}
               </div>
            </article>
          </div>
        )}

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
           {sorted.map((project) => (
             <article key={project.slug} className="p-4 md:p-8 flex flex-col h-[250px] justify-between border border-zinc-800 rounded-2xl bg-zinc-900/30 hover:bg-zinc-800/50 duration-200 group relative overflow-hidden">
               <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-0" />
               <div className="z-10 relative pointer-events-none">
                 <h2 className="text-2xl font-bold text-zinc-100 group-hover:text-white font-display">
                    {project.title}
                 </h2>
                 <p className="mt-4 leading-6 duration-150 text-zinc-400 group-hover:text-zinc-300 line-clamp-3">
                   {project.description}
                 </p>
               </div>
               <div className="flex items-center gap-4 mt-4 z-10 relative pointer-events-auto">
                 {project.repository && (
                   <Link href={`https://github.com/${project.repository}`} target="_blank" className="text-zinc-500 hover:text-zinc-200 transition flex items-center gap-1 text-sm bg-zinc-900/80 px-3 py-1 rounded-full border border-zinc-800">
                     <Github className="w-4 h-4" /> Source
                   </Link>
                 )}
                 {project.url && (
                   <Link href={project.url} target="_blank" className="text-zinc-500 hover:text-zinc-200 transition flex items-center gap-1 text-sm bg-zinc-900/80 px-3 py-1 rounded-full border border-zinc-800">
                     <ExternalLink className="w-4 h-4" /> Live Demo
                   </Link>
                 )}
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 z-0 pointer-events-none"></div>
             </article>
           ))}
        </div>
      </div>
    </div>
  );
}
