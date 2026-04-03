import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-24 flex items-center text-center bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <div className="mb-6 px-4 py-1 border border-gray-300 text-sm font-semibold text-gray-700 bg-white shadow-sm inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>Data Analyst • Software Developer • UI/UX Designer</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Aditya Chauhan
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
            Data Analyst, Software Developer & UI/UX Designer crafting thoughtful, intuitive digital experiences with a focus on simplicity, clarity, and rigorous data logic.
          </p>

          <Link
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white font-semibold flex items-center gap-2 hover:bg-blue-700 transition"
          >
            View My Work <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
