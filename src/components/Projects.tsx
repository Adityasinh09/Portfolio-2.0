import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Selected Projects</h2>
          <p className="text-lg text-gray-600">
            A selection of multi-disciplinary work demonstrating data analytics, full-stack development, UI/UX design, and academic research.
          </p>
        </div>

        {/* Horizontal Slider Track */}
        <div className="w-full flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="shrink-0 w-[85vw] sm:w-[400px] snap-center bg-white border border-gray-200 overflow-hidden"
            >
              <div className={`h-48 bg-gray-100 flex items-center justify-center p-4`}>
                {project.image && !Array.isArray(project.image) ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-gray-400">Project Media</span>
                )}
              </div>

              <div className="p-6 flex flex-col h-[250px]">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-6 flex-grow">{project.description}</p>
                
                <div className="flex items-center gap-4 mt-auto">
                  {project.demo !== "#" && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      className="text-sm font-semibold text-blue-600 hover:text-blue-800"
                    >
                      View Link
                    </Link>
                  )}
                  {project.github !== "#" && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      <Github className="w-4 h-4" /> Source Code
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
