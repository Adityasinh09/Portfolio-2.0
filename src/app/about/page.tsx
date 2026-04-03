import React from "react";
import { Navigation } from "@/components/Navigation";

const skills = [
  "Python", "SQL", "Machine Learning", "Pandas", "Scikit-Learn",
  "React", "Next.js", "TypeScript", "Tailwind CSS",
  "Figma", "UI/UX Design", "Wireframing"
];

const experience = [
  {
    title: "UX/UI Designer Intern",
    company: "Hrive Way Outsourcing Inc",
    location: "Casper, WY",
    date: "8 months",
    bullets: [
      "Led the collaborative design of accessible and responsive web applications using Figma, Adobe XD, and design systems.",
      "Created marketing visuals, software interface mockups, and digital content for multiple platforms.",
      "Applied troubleshooting strategies during QA to ensure clean functionality across devices.",
      "Used AI tools like ChatGPT to support writing, user flow generation, and technical documentation drafting.",
      "Participated in Agile development, contributing to legal compliance checks and quality audits.",
    ],
  },
  {
    title: "Web and Graphic Designer",
    company: "Oasis Hospital Solution",
    location: "Gujarat, IN",
    date: "3 months",
    bullets: [
      "Designed and launched the hospital's website, improving UX and integrating visual hierarchy and branding best practices.",
      "Designed email marketing templates, social media assets, and digital visuals using Illustrator, Canva, and Photoshop.",
      "Provided hardware/software support and ensured compatibility with both Windows and macOS platforms.",
      "Engaged in cross-functional collaboration to solve problems and resolve content-based conflicts.",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="relative pb-16 min-h-screen">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-16 max-w-7xl lg:px-8 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0 border-l border-zinc-800 pl-8 ml-4">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-display">
            Experience
          </h2>
          <div className="mt-10 space-y-12">
            {experience.map((job, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[41px] top-2 w-3 h-3 rounded-full bg-zinc-700 ring-4 ring-zinc-900" />
                <h3 className="text-xl font-bold text-zinc-200 font-display">{job.title}</h3>
                <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-500 mt-1 mb-4">
                  <span className="font-medium text-zinc-300">{job.company}</span>
                  <span>&bull;</span>
                  <span>{job.location}</span>
                  <span>&bull;</span>
                  <span>{job.date}</span>
                </div>
                <ul className="space-y-2">
                  {job.bullets.map((point, i) => (
                    <li key={i} className="flex gap-3 leading-relaxed text-zinc-400">
                      <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-zinc-600" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <div className="max-w-4xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-display">
            Core Competencies
          </h2>
          <p className="mt-4 text-zinc-400 mb-8 max-w-2xl">
            A diverse toolkit bridging quantitative data analytics and aesthetic front-end engineering.
          </p>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span 
                key={skill} 
                className="px-4 py-2 text-sm font-medium border rounded-full text-zinc-300 bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800 hover:text-white transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
