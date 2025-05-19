"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"

export default function Home() {
  const [revealOthers, setRevealOthers] = useState(false)

  return (
    <div className="w-screen h-screen bg-[#2D2C2A] flex items-center justify-center p-8 font-sans relative">
      <div className="absolute inset-0 w-full h-full opacity-30"></div>
      <div className="w-[900px] h-[600px] bg-[#1E1D1B] grid grid-cols-4 grid-rows-3 gap-4 p-4 rounded-2xl text-[#4F4B44] border border-[#514D47]/30 relative z-10">

        {/* Contact Me */}
        <motion.div
          className="col-span-2 row-span-1 bg-[#E4DCCA] rounded-2xl p-6 flex flex-col justify-center border border-[#5C5850]/20 relative"
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          animate={revealOthers ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="absolute inset-0  w-full h-full rounded-2xl opacity-10" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
          }}></div>
          <h2 className="text-2xl font-bold mb-4 text-[#3A3630] font-serif tracking-tight">Contact Me</h2>
          <p className="text-base font-light leading-6 text-[#3A3630] font-sans">Email: arushi@example.com</p>
          <p className="text-base font-light leading-6 text-[#3A3630] font-sans">Phone: +91 1234567890</p>
        </motion.div>

        {/* Education */}
        <motion.div
          className="col-span-1 row-span-1 bg-[#353330] rounded-2xl p-6 flex flex-col justify-center border border-[#5C5850]/20 text-[#DFD6C0] "
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          animate={revealOthers ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
        >
          <h2 className="text-xl font-bold mb-3 text-[#DFD6C0] font-serif tracking-tight">Education</h2>
          <ul className="space-y-2 text-base font-light leading-6 font-sans">
            <li>Pearl Academy, Delhi - PG Diploma in Interior Design (2023-2025)</li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          className="col-span-1 row-span-1 bg-[#D8CFBA] rounded-2xl p-6 flex flex-col justify-center border border-[#5C5850]/20 relative"
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          animate={revealOthers ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="absolute inset-0 w-full h-full rounded-2xl opacity-10" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
          }}></div>
          <h2 className="text-xl font-bold mb-3 text-[#3A3630] font-serif tracking-tight relative z-10">Skills</h2>
          <ul className="text-base font-light leading-6 text-[#3A3630] font-sans relative z-10 list-disc list-inside">
            <li>AutoCAD</li>
            <li>Adobe Creative Suite</li>
            <li>SketchUp</li>
            <li>3DS Max</li>
          </ul>
        </motion.div>

        {/* Experience */}
        <motion.div
          className="col-span-1 row-span-1 bg-[#D0C8B3] rounded-2xl p-5 flex flex-col justify-center border border-[#5C5850]/20 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={revealOthers ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <div
            className="absolute inset-0 w-full h-full rounded-2xl opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              background: "linear-gradient(135deg, rgba(200, 180, 150, 0.5), rgba(80, 70, 60, 0.3))",
            }}
          ></div>
          <motion.div
            className="relative overflow-y-scroll no-scrollbar z-10 bg-[#E4DCCA]/30 backdrop-blur-sm rounded-xl p-4 mx-2 shadow-lg"
            whileHover={{ rotateX: 5, rotateY: 5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h2 className="text-xl font-bold text-[#3A3630] font-serif tracking-tight mb-2">Experience</h2>
            <p className="text-sm font-light leading-5 text-[#3A3630] font-sans">
              Managed high-profile clients at Zeno Group and led campaigns like the Levi's x Deepika Padukone Collection Launch.
            </p>
          </motion.div>
          <Link href="/projects" className="relative z-10 mt-4 mx-auto">
            <motion.button
              className="px-4 py-2 bg-[#3A3630] text-[#E4DCCA] text-sm font-medium rounded-full shadow-md hover:bg-[#5C5850] transition-colors"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="View portfolio"
            >
              View Portfolio
            </motion.button>
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div
          className="col-span-1 row-span-2 bg-[#4A4741] rounded-2xl overflow-hidden relative border border-[#5C5850]/20"
          initial={{ x: 50, y: -50, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          onAnimationComplete={() => setRevealOthers(true)}
        >
          <div className="absolute inset-0 w-full h-full opacity-20" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
          }}></div>
          <img src="/downloa.png" className="w-full h-full object-cover scale-120 relative z-10" alt="Arushi Thakral" />
          <div className="absolute bottom-0 left-0 right-0 p-5 bg-[#1E1D1B]/80 text-[#E4DCCA] z-20">
            <h1 className="text-xl font-bold text-[#E4DCCA] font-serif tracking-tight">Arushi Thakral</h1>
            <p className="text-sm font-light leading-5 text-[#E4DCCA] font-sans">Interior Designer | Stylist</p>
          </div>
        </motion.div>

        {/* About Me */}
        <motion.div
          className="col-span-2 row-span-2 bg-[#E4DCCA] rounded-2xl p-8 flex flex-col justify-center border border-[#5C5850]/20 relative"
          initial={{ opacity: 0 }}
          animate={revealOthers ? { opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <div className="absolute inset-0 w-full h-full rounded-2xl opacity-10" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
          }}></div>
          <h2 className="text-2xl font-bold mb-5 text-[#3A3630] font-serif tracking-tight relative z-10">About Me</h2>
          <p className="text-base font-light leading-7 text-[#3A3630] font-sans relative z-10">
            As a designer and a person, I'm driven by curiosity and a need for constant reinvention. I enjoy brainstorming fresh concepts and exploring bold, playful interpretations.
          </p>
          <p className="text-base font-light leading-7 text-[#3A3630] font-sans relative z-10 mt-4">
            I gravitate toward modern aesthetics, reimagining tradition in contemporary ways. I'm drawn to free-flowing ideas and spaces that don't confine - always seeking design that feels dynamic, unbound, and full of character.
          </p>
        </motion.div>

        {/* Quote */}
        <motion.div
          className="col-span-1 row-span-1 bg-[#D8CFBA] rounded-2xl p-6 flex flex-col justify-center text-center border border-[#5C5850]/20 relative"
          initial={{ opacity: 0, scale: 0.95, x: 50 }}
          animate={revealOthers ? { opacity: 1, scale: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <div className="absolute inset-0 w-full h-full rounded-2xl opacity-10" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
          }}></div>
          <blockquote className="italic text-lg text-[#3A3630] font-serif leading-7 relative z-10">
            "Design is intelligence made visible." — Alina Wheeler
          </blockquote>
        </motion.div>
      </div>
    </div>
  )
}