"use client";
import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ResumePage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Top bar */}
      <div className="fixed inset-x-0 top-0 z-50 bg-black/80 backdrop-blur border-b border-zinc-800">
        <div className="container flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>

          <div className="flex items-center gap-2">
            <span className="text-sm font-display italic text-zinc-300">
              Aditya Sinh &mdash; Résumé
            </span>
          </div>

          <a
            href="/resume.pdf"
            download="Aditya_Sinh_Resume.pdf"
            className="flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white hover:border-zinc-500 transition-all duration-200"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="flex-1 pt-[73px] flex flex-col">
        {/* Loading shimmer */}
        {!loaded && (
          <div className="absolute inset-0 pt-[73px] flex items-center justify-center bg-black">
            <div className="flex flex-col items-center gap-4">
              <div className="w-8 h-8 border-2 border-zinc-700 border-t-zinc-300 rounded-full animate-spin" />
              <p className="text-sm text-zinc-500 tracking-widest uppercase">Loading résumé…</p>
            </div>
          </div>
        )}

        <iframe
          src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
          className={`w-full flex-1 transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{ height: "calc(100vh - 73px)" }}
          onLoad={() => setLoaded(true)}
          title="Aditya Sinh Resume"
        />
      </div>
    </div>
  );
}
