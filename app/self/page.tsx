"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"


export default function Home() {
  const [revealOthers, setRevealOthers] = useState(false)

  return (
    <div className="w-screen h-screen bg-[#121212] flex items-center justify-center p-8 font-[Montserrat] bg-gradient-to-br from-[#121212] to-[#1e1e24]">
      <div className="w-[900px] h-[600px] bg-[#1a1a1a]/90 grid grid-cols-4 grid-rows-3 gap-4 p-4 rounded-3xl text-gray-200 shadow-2xl backdrop-blur-sm border border-gray-800/30">
        
        {/* Contact Me */}
        <motion.div
          className="col-span-2 row-span-1 bg-gradient-to-br from-[#2a2a2a] to-[#232323] rounded-2xl p-5 flex flex-col justify-center shadow-md border border-gray-700/20"
          initial={{ opacity: 0, scale: 0.2, y: "200%", x: "50%" }}
          animate={revealOthers ? { opacity: 1, scale: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <h2 className="font-[Cinzel] text-2xl font-semibold mb-3 text-[#c8b6ff]">Contact Me</h2>
          <p className="text-gray-300 font-light tracking-wide text-base">Email: yourname@example.com</p>
          <p className="text-gray-300 font-light tracking-wide text-base">Phone: +123 456 7890</p>
        </motion.div>
        {/* Social Handles */}
        <motion.div
          className="col-span-1 row-span-1 bg-gradient-to-br from-[#2a2a2a] to-[#232323] rounded-2xl p-5 flex flex-col justify-center shadow-md border border-gray-700/20"
          initial={{ opacity: 0, scale: 0.2, y: "200%", x: "-50%" }}
          animate={revealOthers ? { opacity: 1, scale: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.1 }}
        >
          <h2 className="font-[Cinzel] text-xl font-semibold mb-2 text-[#c8b6ff]">Handles</h2>
          <ul className="space-y-1.5 text-gray-300 font-light tracking-wide text-base">
            <li>GitHub: @yourhandle</li>
            <li>LinkedIn: /in/yourname</li>
            <li>X/Twitter: @yourhandle</li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          className="col-span-1 row-span-1 bg-gradient-to-br from-[#2a2a2a] to-[#232323] rounded-2xl p-5 flex flex-col justify-center shadow-md border border-gray-700/20"
          initial={{ opacity: 0, scale: 0.2, y: "200%", x: "-150%" }}
          animate={revealOthers ? { opacity: 1, scale: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
        >
          <h2 className="font-[Cinzel] text-xl font-semibold mb-2 text-[#c8b6ff]">Skills</h2>
          <p className="text-gray-300 font-light tracking-wide leading-relaxed text-base">
            React, Next.js, Node.js, AWS, Docker
          </p>
        </motion.div>

        {/* Projects */}
        <motion.div
          className="col-span-1 row-span-1 bg-gradient-to-br from-[#2a2a2a] to-[#232323] rounded-2xl p-5 flex flex-col justify-center shadow-md border border-gray-700/20"
          initial={{ opacity: 0 }}
          animate={revealOthers ? { opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
        >
          <h2 className="font-[Cinzel] text-xl font-semibold mb-2 text-[#c8b6ff]">Projects</h2>
          <ul className="text-base list-disc list-inside text-gray-300 font-light tracking-wide space-y-1">
            <li>Cloud Drive</li>
            <li>SkillSwap</li>
            <li>Resume AI</li>
          </ul>
          <Link
            href="/projects"
            className="mt-4 inline-block font-[Petit Formal Script] text-lg text-[#bdb2ff] hover:text-[#c8b6ff] transition-colors duration-300 border-b border-[#bdb2ff]/30 hover:border-[#c8b6ff]/60 pb-0.5"
          >
            View All Projects
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div
          className="col-span-1 row-span-2 bg-gradient-to-br from-[#2a2a2a] to-[#232323] rounded-2xl overflow-hidden z-1 relative shadow-lg border border-gray-700/20"
          initial={{ x: "40%", y: "-30%", opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{
            opacity: { duration: 2, ease: "easeInOut" },
            x: { duration: 1.5, delay: 1.5, ease: "easeOut" },
            y: { duration: 1.5, delay: 1.5, ease: "easeOut" },
          }}
          onAnimationComplete={() => setRevealOthers(true)}
        >
          <img src="download.png" className="w-full h-full object-cover scale-125" alt="Hero" />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
            <h1 className="font-[Playfair Display] text-2xl font-semibold tracking-wide">Your Name</h1>
            <p className="text-base font-[Montserrat] font-light tracking-wider opacity-90">
              Full-Stack Dev | Cloud Enthusiast
            </p>
          </div>
        </motion.div>

        {/* About Me */}
        <motion.div
          className="col-span-2 row-span-2 bg-gradient-to-br from-[#2a2a2a] to-[#232323] rounded-2xl p-7 flex flex-col justify-center shadow-md border border-gray-700/20"
          initial={{ opacity: 0 }}
          animate={revealOthers ? { opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="font-[Playfair Display] text-2xl font-semibold mb-4 text-[#c8b6ff]">About Me</h2>
          <p className="text-gray-300 font-light tracking-wide leading-relaxed text-base">
            I'm a passionate software developer blending beautiful frontends with scalable cloud infrastructure. I love
            bringing ideas to life using code and coffee.
          </p>
          <div className="mt-5 h-px w-1/3 bg-gradient-to-r from-[#c8b6ff]/30 to-transparent"></div>
          <p className="mt-5 text-gray-300 font-light tracking-wide leading-relaxed text-base">
            With over 5 years of experience, I specialize in creating elegant solutions to complex problems.
          </p>
        </motion.div>

        {/* Quote / Fun Fact */}
        <motion.div
          className="col-span-1 row-span-1 bg-gradient-to-br from-[#2a2a2a] to-[#232323] rounded-2xl p-5 flex flex-col justify-center text-center shadow-md border border-gray-700/20"
          initial={{ opacity: 0, scale: 0.2, x: "100%" }}
          animate={revealOthers ? { opacity: 1, scale: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.1 }}
        >
          <blockquote className="italic font-[Petit Formal Script] text-xl text-[#c8b6ff]">
            "Design is intelligence made visible."
          </blockquote>
          <div className="mt-3 h-px w-1/2 mx-auto bg-gradient-to-r from-transparent via-[#c8b6ff]/30 to-transparent"></div>
        </motion.div>
      </div>
    </div>
  )
}
