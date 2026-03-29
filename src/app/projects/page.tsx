"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function SideQuests() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const projects = [
    {
      id: "asl",
      year: "2026",
      index: "01",
      title: "ASL Recognition",
      tech: ["Python", "TensorFlow", "MediaPipe", "OpenCV"],
      description:
        "Vision-based sign language translation system, bridging gesture and digital text.",
      hoverColor: "#10b981",
      links: {
        source: "https://github.com/yourusername/asl-project",
        live: "https://asl-demo.vercel.app",
      },
    },
    {
      id: "auction",
      year: "2026",
      index: "02",
      title: "Live Auction Hub",
      tech: ["Next.js", "Supabase", "Node.js", "Tailwind"],
      description:
        "High-concurrency bidding platform focused on low-latency synchronization.",
      hoverColor: "#f59e0b",
      links: {
        source: "https://github.com/suyu101/auction",
        live: "https://auction-demo.vercel.app",
      },
    },
    {
      id: "sentimentanalysis",
      year: "2025",
      index: "03",
      title: "Doppelganger",
      tech: ["Scikit-Learn", "Python", "Pandas", "PyTorch"],
      description:
        "Applies sentiment analysis to identify which fictional character most commonalities are shared with.",
      hoverColor: "#f43f5e",
      links: {
        source: "https://github.com/suyu101/doppelganger2.0",
        live: "https://aiops-demo.vercel.app",
      },
    },
    {
      id: "nand",
      year: "2026",
      index: "04",
      title: "Nand2Tetris",
      tech: ["HDL", "Assembly", "Virtual Machine", "Java"],
      description:
        "Construction of a complete computer system starting from elementary logic gates.",
      hoverColor: "#0ea5e9",
      links: {
        source: "https://github.com/yourusername/nand2tetris",
        live: "#",
      },
    },
    {
      id: "csma",
      year: "2025",
      index: "05",
      title: "MAC Protocols Simulator",
      tech: ["Python", "NumPy", "Matplotlib", "Pandas"],
      description:
        "Simulation and Visualisation of Media Access Control protocols for shared channel efficiency.",
      hoverColor: "#8b5cf6",
      links: {
        source: "https://github.com/suyu101/csmacdsim",
        live: "https://basic-mac-protocol-simulator.streamlit.app/",
      },
    },
    {
      id: "therealme",
      year: "2026",
      index: "06",
      title: "a learning experience",
      tech: ["HTML", "CSS", "JavaScript"],
      description:
        "My initial ventures into the world of web development. Not so aesthetically appealing.",
      hoverColor: "#ff4500",
      links: {
        source: "https://github.com/suyu101/imdone",
        live: "https://suyu101.github.io/imdone/",
      },
    },
    {
      id: "me",
      year: "2026",
      index: "07",
      title: "this website ;)",
      tech: ["Next.js", "TailwindCSS", "TypeScript"],
      description:
        "A representation of myself on the internet. A digital footprint I actually want to leave.",
      hoverColor: "#a3e635",
      links: {
        source: "https://github.com/suyu101/sitev2",
        live: "https://suyeshaiscool.vercel.app/",
      },
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-24 py-32 font-serif selection:bg-white selection:text-black">
      <header className="mb-40 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-baseline border-b border-white/10 pb-10">
        <h1 className="text-[12vw] md:text-[8vw] font-bold tracking-tighter leading-none uppercase italic">
          Archives
        </h1>
        <div className="text-[10px] font-sans uppercase tracking-[0.4em] font-medium opacity-30 mt-6 md:mt-0">
          SELECTED_WORKS / 2024—2026
        </div>
      </header>

      <main className="max-w-7xl mx-auto space-y-32">
        {projects.map((project) => {
          const isHovered = hoveredId === project.id;

          return (
            <motion.section
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/5 pb-20 relative"
            >
              <div className="md:col-span-2 pt-4">
                <div
                  style={{ color: isHovered ? project.hoverColor : "inherit" }}
                  className={`text-[10px] font-sans font-black uppercase tracking-[0.3em] transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-30"}`}
                >
                  {project.index} // {project.year}
                </div>
              </div>

              <div className="md:col-span-6">
                <h2
                  style={{ color: isHovered ? project.hoverColor : "#ffffff" }}
                  className="text-5xl md:text-7xl font-medium tracking-tight transition-all duration-300 group-hover:pl-4 italic"
                >
                  {project.title}
                </h2>
                <div
                  style={{ color: isHovered ? project.hoverColor : "#404040" }}
                  className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-sans uppercase tracking-widest transition-colors duration-300"
                >
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col justify-between pt-4">
                <p
                  style={{ color: isHovered ? project.hoverColor : "#737373" }}
                  className="text-sm md:text-lg leading-relaxed transition-colors duration-300 italic opacity-80"
                >
                  {project.description}
                </p>

                <div className="mt-12 flex items-center gap-10 font-sans">
                  <a
                    href={project.links.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: isHovered ? project.hoverColor : "#ffffff",
                    }}
                    className="text-[10px] font-black uppercase tracking-[0.3em] transition-colors duration-300 hover:opacity-70"
                  >
                    SOURCE_CODE
                  </a>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: isHovered ? project.hoverColor : "#ffffff",
                    }}
                    className="text-[10px] font-black uppercase tracking-[0.3em] transition-colors duration-300 hover:opacity-70"
                  >
                    LIVE_GUI
                  </a>
                </div>
              </div>

              <motion.div
                className="absolute bottom-0 left-0 h-px"
                style={{ backgroundColor: project.hoverColor }}
                initial={{ width: 0 }}
                animate={{ width: isHovered ? "100%" : "0%" }}
                transition={{ duration: 0.4 }}
              />
            </motion.section>
          );
        })}
      </main>

      <footer className="mt-20 max-w-7xl mx-auto border-t border-white/10 pt-10 flex justify-between items-center text-[10px] font-sans uppercase tracking-[0.5em] opacity-30">
        <span>Suyesha // Archives</span>
        <button
          onClick={scrollToTop}
          className="hover:text-white transition-colors cursor-pointer outline-none"
        >
          Back to Top ↑
        </button>
      </footer>
    </div>
  );
}
