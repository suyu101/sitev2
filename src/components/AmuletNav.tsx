"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function AmuletNav() {
  const pathname = usePathname();

  const links = [
    { name: "TL;DR", path: "/" },
    { name: "Character Study", path: "/about" },
    { name: "Side Quests", path: "/projects" },
    { name: "Ping Me", path: "/contact" },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <nav className="bg-neutral-900/60 backdrop-blur-md border border-neutral-800 p-2 rounded-full flex space-x-2 shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)]">
        {links.map((link) => {
          const isActive = pathname === link.path;
          return (
            <Link
              key={link.name}
              href={link.path}
              className="relative px-6 py-3 rounded-full text-sm font-mono transition-colors"
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-emerald-500/10 border border-emerald-500/30 rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                />
              )}
              <span
                className={`relative z-10 ${isActive ? "text-emerald-400" : "text-neutral-400 hover:text-neutral-200"}`}
              >
                {link.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
