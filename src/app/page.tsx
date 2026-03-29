"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Home() {
  const identities = useMemo(
    () => [
      { text: "an avid internet user.", color: "text-emerald-400" },
      { text: "a full stack developer.", color: "text-blue-400" },
      { text: "a dark mode lover.", color: "text-fuchsia-400" },
      { text: "an AI/ML enthusiast.", color: "text-amber-400" },
      { text: "a daily div centerer.", color: "text-violet-400" },
      { text: "a professional sleeper.", color: "text-rose-400" },
    ],
    [],
  );

  const [text, setText] = useState("");
  const [currentColor, setCurrentColor] = useState(identities[0].color);

  useEffect(() => {
    let isMounted = true;

    const runTypingSequence = async () => {
      let index = 0;

      while (isMounted) {
        const currentIdentity = identities[index % identities.length];
        const fullText = currentIdentity.text;

        setCurrentColor(currentIdentity.color);

        for (let i = 0; i <= fullText.length; i++) {
          if (!isMounted) return;
          setText(fullText.substring(0, i));
          await sleep(50 + Math.random() * 30);
        }

        await sleep(2000);

        for (let i = fullText.length; i >= 0; i--) {
          if (!isMounted) return;
          setText(fullText.substring(0, i));
          await sleep(30);
        }

        await sleep(500);
        index++;
      }
    };

    runTypingSequence();

    return () => {
      isMounted = false;
    };
  }, [identities]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center w-full z-10 pointer-events-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-5xl mx-auto px-6 text-center space-y-8 mt-[-5vh]"
      >
        <p className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-12">
          [ Proceed with Curiosity ]
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] flex flex-col items-center">
          <span>I'm Suyesha,</span>

          <span className="flex items-center justify-center mt-4 md:mt-6 h-[1.2em] w-full">
            <span
              className={`${currentColor} italic transition-colors duration-200`}
            >
              {text}
            </span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
              className={`inline-block w-1 h-[0.9em] ml-2 translate-y-[0.05em] bg-current ${currentColor}`}
            />
          </span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto font-light leading-relaxed pt-12">
          I've always been an avid web surfer. The internet is something which
          brings me great delight. I want to use technology to create impactful
          and joyful experiences for others.
          <span className="block mt-4 text-neutral-800 text-base md:text-lg opacity-30 transition-all duration-300 hover:opacity-100 hover:text-neutral-600 cursor-default">
            I also want money.
          </span>
        </p>
      </motion.div>
    </div>
  );
}
