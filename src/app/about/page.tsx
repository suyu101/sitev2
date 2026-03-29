"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OSWindow = ({
  id,
  title,
  children,
  defaultPos,
  activeWindow,
  setActiveWindow,
  onClose,
  width = "w-80 md:w-96",
  constraintsRef,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  defaultPos: { x: number; y: number };
  activeWindow: string;
  setActiveWindow: (id: string) => void;
  onClose?: () => void;
  width?: string;
  constraintsRef: React.RefObject<HTMLDivElement>;
}) => {
  const isActive = activeWindow === id;

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragConstraints={constraintsRef}
      initial={defaultPos}
      onMouseDown={() => setActiveWindow(id)}
      className={`absolute flex flex-col bg-neutral-900 border border-neutral-700 shadow-2xl overflow-hidden ${width} ${isActive ? "z-40 ring-1 ring-emerald-500/50" : "z-30 opacity-95"}`}
      style={{ minHeight: "200px" }}
    >
      <div
        className={`px-3 py-2 flex justify-between items-center cursor-grab active:cursor-grabbing border-b border-neutral-700 ${isActive ? "bg-neutral-800" : "bg-neutral-900"}`}
      >
        <span className="text-neutral-300 font-mono text-xs font-bold tracking-widest">
          {title}
        </span>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-neutral-600"></div>
          <div className="w-3 h-3 rounded-full bg-neutral-600"></div>
          <button
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors"
          ></button>
        </div>
      </div>
      <div className="p-4 grow overflow-y-auto max-h-[65vh] custom-scrollbar bg-neutral-950/50">
        {children}
      </div>
    </motion.div>
  );
};

export default function MainCharacter() {
  const [activeWindow, setActiveWindow] = useState("lore");
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [time, setTime] = useState("");
  const screenRef = useRef<HTMLDivElement>(
    null,
  ) as React.RefObject<HTMLDivElement>;

  useEffect(() => {
    const updateTime = () =>
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    "Python",
    "C++",
    "C",
    "Java",
    "JavaScript",
    "HTML",
    "CSS",
    "PostgreSQL",
    "Tailwind",
    "Figma",
    "Git",
    "React",
    "Next.js",
    "Supabase",
    "Node.js",
    "Express.js",
    "REST APIs",
    "TF-IDF",
    "TensorFlow",
    "OpenCV",
    "MediaPipe",
  ];

  return (
    <div className="fixed inset-0 w-full h-full font-sans overflow-hidden bg-neutral-950 selection:bg-emerald-500/30">
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(circle at center, #262626 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div
        ref={screenRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      <motion.div
        drag
        dragConstraints={screenRef}
        dragMomentum={false}
        initial={{ x: 1400, y: 300 }}
        onDoubleClick={() => {
          setIsResumeOpen(true);
          setActiveWindow("resume_viewer");
        }}
        onClick={() => {
          setIsResumeOpen(true);
          setActiveWindow("resume_viewer");
        }}
        className="absolute z-10 group flex flex-col items-center w-24 cursor-pointer p-2 rounded hover:bg-white/5 transition-colors"
      >
        <div className="w-12 h-16 bg-neutral-100 rounded-sm border-2 border-neutral-300 flex flex-col items-center justify-center relative mb-2 shadow-lg group-hover:scale-105 transition-transform">
          <div className="absolute top-0 right-0 w-4 h-4 bg-neutral-300 border-b-2 border-l-2 border-neutral-100 rounded-bl-sm"></div>
          <span className="text-red-600 font-black font-mono text-[10px] mt-4">
            PDF
          </span>
        </div>
        <span className="text-neutral-200 font-mono text-[10px] text-center bg-neutral-900/80 px-2 py-0.5 rounded border border-neutral-700">
          resume.pdf
        </span>
      </motion.div>

      <OSWindow
        id="lore"
        title="lore.txt - Textpad"
        defaultPos={{ x: 100, y: 80 }}
        activeWindow={activeWindow}
        setActiveWindow={setActiveWindow}
        constraintsRef={screenRef}
      >
        <div className="font-mono text-sm text-neutral-300 space-y-4">
          <p>
            {">"} I've always loved the internet. Hence, I'm learning everything
            I can to contribute to its evolution. I aspire to build innovative,
            functional websites which bring people joy and solve their problems.
          </p>
          <p>
            {">"} Another area which has intrigued me greatly is AI. I'm
            fascinated by the potential it has to automate our lives and enhance
            the time we can spend doing things which actually matter.
          </p>
          <p className="text-emerald-500 opacity-50">EOF</p>
        </div>
      </OSWindow>

      <OSWindow
        id="skills"
        title="C:\Users\Suyesha\Skills"
        defaultPos={{ x: 300, y: 350 }}
        activeWindow={activeWindow}
        setActiveWindow={setActiveWindow}
        constraintsRef={screenRef}
        width="w-[90%] md:w-[500px]"
      >
        {/* The Fix: h-80 (fixed height) + overflow-y-auto (scroll) */}
        <div className="h-80 overflow-y-auto pr-2 custom-scrollbar">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 pb-4">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="flex flex-col items-center p-2 rounded hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/20 transition-all group"
              >
                <svg
                  className="w-8 h-8 text-emerald-500 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
                <span className="text-neutral-400 font-mono text-[10px] mt-1 text-center leading-tight">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </OSWindow>

      <AnimatePresence>
        {isResumeOpen && (
          <OSWindow
            id="resume_viewer"
            title="PDF Viewer - resume.pdf"
            defaultPos={{ x: 400, y: 50 }}
            activeWindow={activeWindow}
            setActiveWindow={setActiveWindow}
            constraintsRef={screenRef}
            onClose={() => setIsResumeOpen(false)}
            width="w-[90%] md:w-[600px]"
          >
            <div className="flex flex-col items-center space-y-6">
              <div className="w-full bg-neutral-800 p-4 rounded border border-neutral-700 text-center">
                <p className="text-neutral-400 font-mono text-xs mb-4 uppercase tracking-tighter">
                  Preview Mode Active
                </p>
                <div className="aspect-[1/1.4] w-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-600 italic text-sm">
                  <iframe
                    src="/My_Resume.pdf"
                    className="w-full h-full rounded"
                    title="Resume Preview"
                  />
                </div>
              </div>

              <a
                href="/resume.pdf"
                download="Suyesha_Resume.pdf"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-sm font-mono text-center shadow-lg transition-all active:scale-95"
              >
                EXECUTE DOWNLOAD_PAYLOAD
              </a>
            </div>
          </OSWindow>
        )}
      </AnimatePresence>

      <OSWindow
        id="terminal"
        title="system_log.exe"
        defaultPos={{ x: 650, y: 120 }}
        activeWindow={activeWindow}
        setActiveWindow={setActiveWindow}
        constraintsRef={screenRef}
        width="w-[95%] md:w-[600px]"
      >
        <div className="overflow-hidden font-mono text-[10px] text-emerald-500/90 bg-black/40 p-5 rounded-lg border border-emerald-500/10 shadow-inner">
          <div className="flex justify-between items-center opacity-30 text-[8px] mb-4 border-b border-emerald-500/10 pb-1 uppercase tracking-widest">
            <p>SUYESHA_OS v2.0.26 // KERNEL_LOADED</p>
            <p>LVL_02 // YR_2</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <p className="text-white font-black text-[10px] uppercase tracking-tighter">
                  [ACTIVE_PROCESS]
                </p>
              </div>

              <div className="pl-1 space-y-3">
                <h4 className="text-emerald-400 text-sm font-black leading-none uppercase tracking-tight">
                  VIT Chennai
                </h4>

                <div className="bg-emerald-500/10 border border-emerald-500/30 p-2 rounded-sm flex justify-between items-center shadow-[0_0_10px_-5px_rgba(16,185,129,0.3)]">
                  <span className="text-emerald-500/70 font-bold text-[9px] uppercase">
                    CGPA
                  </span>
                  <span className="text-white text-lg font-black tracking-tighter leading-none">
                    9.62
                  </span>
                </div>

                <div className="pt-1">
                  <p className="text-[8px] text-neutral-600 font-black mb-1.5 uppercase tracking-widest">
                    Modules_Loaded:
                  </p>
                  <div className="grid grid-cols-3 gap-1">
                    {["DSA", "OS", "CN", "TOC", "CAO", "DAA", "OOPs"].map(
                      (mod) => (
                        <div
                          key={mod}
                          className="bg-emerald-500/5 border border-emerald-500/20 py-0.5 rounded text-center text-[8px] text-emerald-400 font-bold"
                        >
                          {mod}
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 border-l border-emerald-500/10 pl-5">
              <p className="text-neutral-500 font-black uppercase tracking-tighter text-[9px]">
                [ARCHIVED_LOGS]
              </p>

              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between items-end text-[8px]">
                    <p className="text-neutral-400 font-bold uppercase">
                      DPS RK Puram (12th)
                    </p>
                    <p className="text-emerald-600 font-bold">92.4%</p>
                  </div>
                  <div className="h-1 w-full bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "92.4%" }}
                      transition={{ duration: 1.5 }}
                      className="h-full bg-emerald-600/40"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between items-end text-[8px]">
                    <p className="text-neutral-400 font-bold uppercase">
                      DPS RK Puram (10th)
                    </p>
                    <p className="text-emerald-400 font-bold">98.2%</p>
                  </div>
                  <div className="h-1 w-full bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "98.2%" }}
                      transition={{ duration: 1.5, delay: 0.2 }}
                      className="h-full bg-emerald-400/50 shadow-[0_0_5px_#10b981]"
                    />
                  </div>
                </div>

                <div className="bg-neutral-900/50 p-2 border border-neutral-800 rounded">
                  <p className="text-[8px] text-neutral-600 italic leading-tight">
                    Major: PCM + CS // SUCCESS
                  </p>
                  <p className="text-[8px] text-emerald-900/60 font-bold mt-1 uppercase tracking-widest text-center border-t border-neutral-800 pt-1">
                    Node Status: Verified
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-emerald-500/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <p className="text-emerald-500 font-black text-xs animate-pulse">
                {">"}_
              </p>
            </div>
          </div>
        </div>
      </OSWindow>

      <div className="fixed bottom-0 left-0 w-full h-10 bg-neutral-900 border-t border-neutral-800 flex items-center justify-between px-4 z-50">
        <div className="flex gap-2 h-full py-1">
          {["lore", "skills", "terminal"].map((id) => (
            <div
              key={id}
              onClick={() => setActiveWindow(id)}
              className={`px-4 flex items-center font-mono text-[10px] border border-neutral-700 rounded-sm cursor-pointer transition-all ${activeWindow === id ? "bg-neutral-800 text-emerald-400 ring-1 ring-emerald-500/30 shadow-inner" : "bg-neutral-900 text-neutral-500 hover:bg-neutral-800"}`}
            >
              {id === "lore"
                ? "lore.txt"
                : id === "skills"
                  ? "C:\\Skills"
                  : "system_log.exe"}
            </div>
          ))}
          {isResumeOpen && (
            <div
              onClick={() => setActiveWindow("resume_viewer")}
              className={`px-4 flex items-center font-mono text-[10px] border border-neutral-700 rounded-sm cursor-pointer ${activeWindow === "resume_viewer" ? "bg-neutral-800 text-red-400 ring-1 ring-red-500/30 shadow-inner" : "bg-neutral-900 text-neutral-500 hover:bg-neutral-800"}`}
            >
              resume.pdf
            </div>
          )}
        </div>
        <div className="font-mono text-[10px] text-neutral-400 bg-neutral-950 px-3 py-1 border border-neutral-800 rounded-sm shadow-inner hidden sm:block">
          {time || "00:00"}
        </div>
      </div>
    </div>
  );
}
