"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function PingMe() {
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [windowSize, setWindowSize] = useState({ width: 1000, height: 800 });

  const [escapeCount, setEscapeCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    if (escapeCount >= 5) return;

    const btnCenterX = windowSize.width - 100 + btnPos.x;
    const btnCenterY = windowSize.height - 100 + btnPos.y;

    const distance = Math.sqrt(
      Math.pow(e.clientX - btnCenterX, 2) + Math.pow(e.clientY - btnCenterY, 2),
    );

    if (distance < 75) {
      const newX = -(Math.random() * (windowSize.width - 200));
      const newY = -(Math.random() * (windowSize.height - 200));
      setBtnPos({ x: newX, y: newY });

      setEscapeCount((prev) => prev + 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetEmail = "suyesha666@gmail.com";

    const finalSubject =
      formData.subject || `ping from ${formData.name || "someone"}`;
    const subject = encodeURIComponent(finalSubject);
    const body = encodeURIComponent(
      `who: ${formData.name}\nreturn: ${formData.email}\n\nmessage:\n${formData.message}`,
    );

    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  };

  const getButtonText = () => {
    switch (escapeCount) {
      case 0:
        return "send.";
      case 1:
        return "nope.";
      case 2:
        return "too slow.";
      case 3:
        return "missed.";
      case 4:
        return "almost.";
      default:
        return "fine, send it.";
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="fixed inset-0 bg-black text-white font-sans selection:bg-white selection:text-black overflow-hidden flex items-center justify-center"
    >
      <div className="absolute top-10 left-10 text-[10px] text-neutral-600 tracking-widest font-light">
        ping.
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl px-6 flex flex-col gap-10 md:gap-14 z-10"
      >
        <div className="relative group">
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-transparent text-2xl md:text-4xl font-light text-neutral-300 placeholder:text-neutral-800 border-b border-neutral-900 focus:border-white focus:text-white transition-colors duration-500 pb-3 outline-none"
            placeholder="who are you?"
          />
        </div>

        <div className="relative group">
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full bg-transparent text-2xl md:text-4xl font-light text-neutral-300 placeholder:text-neutral-800 border-b border-neutral-900 focus:border-white focus:text-white transition-colors duration-500 pb-3 outline-none"
            placeholder="where can i reach you?"
          />
        </div>

        <div className="relative group">
          <input
            type="text"
            required
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            className="w-full bg-transparent text-2xl md:text-4xl font-light text-neutral-300 placeholder:text-neutral-800 border-b border-neutral-900 focus:border-white focus:text-white transition-colors duration-500 pb-3 outline-none"
            placeholder="what is this about?"
          />
        </div>

        <div className="relative group flex flex-col">
          <textarea
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full bg-transparent text-2xl md:text-4xl font-light text-neutral-300 placeholder:text-neutral-800 border-b border-neutral-900 focus:border-white focus:text-white transition-colors duration-500 pb-3 outline-none resize-none min-h-25"
            placeholder="what's on your mind?"
            rows={1}
          />
        </div>

        <motion.button
          type="submit"
          animate={{ x: btnPos.x, y: btnPos.y }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`absolute bottom-10 right-10 text-sm font-light transition-colors outline-none tracking-widest px-6 py-2 ${
            escapeCount >= 5
              ? "text-white"
              : "text-neutral-600 hover:text-neutral-400"
          }`}
        >
          {getButtonText()}
        </motion.button>
      </form>

      <div className="absolute bottom-10 left-10 flex gap-6 text-[10px] text-neutral-600 tracking-widest font-light">
        <a
          href="https://linkedin.com/in/suyesha-saha"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          linkedin.
        </a>
        <a
          href="https://github.com/suyu101"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          github.
        </a>
      </div>
    </div>
  );
}
