import { GraduationCap, Code2, LineChart } from "lucide-react";
import Image from "next/image";

export function About() {
  const highlights = [
    {
      title: "Master's in Computer Science",
      description: "Rigorous academic foundation with a 3.9 GPA.",
      icon: <GraduationCap className="mb-4 w-8 h-8 text-blue-600" />,
    },
    {
      title: "UI/UX & Web Development",
      description: "Experienced in designing user-focused digital solutions with Figma & Adobe XD.",
      icon: <Code2 className="mb-4 w-8 h-8 text-blue-600" />,
    },
    {
      title: "Data Analytics & AI Focus",
      description: "Dedicated to building impactful, strategic, and data-driven applications.",
      icon: <LineChart className="mb-4 w-8 h-8 text-blue-600" />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        
        <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
        
        <div className="text-lg text-gray-700 leading-relaxed mb-12 space-y-6">
          <p>
            My journey began in the creative realm of <span className="font-semibold">digital design and web programming</span>, where I spent years crafting intuitive user interfaces and full-stack applications. 
          </p>
          <p>
            During my Master’s in Computer Science (graduating with a <span className="font-semibold">3.9 GPA</span>), I discovered the profound power of data. Driven by a desire to understand the <em>"why"</em> behind user behavior, I transitioned into <span className="font-semibold">Data Analytics and Artificial Intelligence</span>.
          </p>
          <p className="p-4 bg-gray-50 border-l-4 border-blue-600">
            Today, I combine my creative UI/UX background with rigorous quantitative skills in <span className="font-semibold text-gray-900">Python and SQL</span> to uncover insights and directly build the data-driven systems that solve complex real-world problems.
          </p>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-4">Core Competencies</h3>
        <div className="flex flex-wrap gap-2 mb-16">
          {["Python", "SQL", "Machine Learning", "Pandas & Numpy", "React", "TypeScript", "Tailwind CSS", "Figma", "UI/UX Design"].map(skill => (
            <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded">
              {skill}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, i) => (
            <div key={i} className="p-6 border border-gray-200 bg-gray-50 text-center">
              <div className="flex justify-center">{item.icon}</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
