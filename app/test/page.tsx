"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"

export default function Home() {
  const [revealOthers, setRevealOthers] = useState(false)

  return (
    <div className="w-screen h-screen bg-[#2D2C2A] flex items-center justify-center p-8 font-sans relative">
      <div className="w-[1100px] h-[700px] bg-[#1E1D1B] grid grid-cols-4 grid-rows-3 gap-4 p-4 rounded-2xl text-[#4F4B44] border border-[#514D47]/30 relative z-10">

        {/* Contact Me */}
        <motion.div
          className="col-span-2 row-span-1 bg-[#E4DCCA] rounded-2xl p-6 flex flex-col justify-center border border-[#3F3D3B]/20"
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          animate={revealOthers ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-[#3A3630] font-serif tracking-tight">Let’s Chat</h2>
          <p className="text-base font-light leading-6 text-[#3A3630] font-sans">
            I’m always up for new ideas, collaborations, or just a friendly coffee break. Drop me a line!
          </p>
          <p className="mt-3 text-base font-light leading-6 text-[#3A3630] font-sans">
            Email: garv@example.com
          </p>
        </motion.div>

        {/* Social Handles */}
        <motion.div
          className="col-span-1 row-span-1 bg-[#353330] rounded-2xl p-6 flex flex-col justify-center border border-[#5C5850]/20 text-[#DFD6C0]"
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          animate={revealOthers ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
        >
          <h2 className="text-xl font-semibold mb-3 font-serif">Stay Connected</h2>
          <ul className="space-y-1 text-base font-light font-sans">
            <li>GitHub: @garvdev</li>
            <li>LinkedIn: linkedin.com/in/garvdev</li>
            <li>Twitter: @garv_codes</li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          className="col-span-1 row-span-1 bg-[#D8CFBA] rounded-2xl p-6 flex flex-col justify-center border border-[#5C5850]/20 relative"
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          animate={revealOthers ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold mb-3 text-[#3A3630] font-serif tracking-tight">What I Do</h2>
          <p className="text-base font-light leading-relaxed text-[#3A3630] font-sans">
            Crafting interactive web experiences using Next.js, styling with Tailwind CSS, and deploying to AWS.
          </p>
        </motion.div>

        {/* Projects */}
        <motion.div
          className="col-span-1 row-span-1 bg-[#D0C8B3] rounded-2xl p-5 flex flex-col justify-between border border-[#5C5850]/20 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={revealOthers ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <h2 className="text-xl font-semibold mb-2 text-[#3A3630] font-serif tracking-tight relative z-10">Highlights</h2>
          <ul className="text-base list-disc list-inside font-light text-[#3A3630] font-sans space-y-1 relative z-10">
            <li>SkillSwap: peer learning platform</li>
            <li>CloudDrive: secure file storage</li>
          </ul>
          <Link href="/projects" className="relative z-10 mt-4 inline-block text-sm font-medium underline font-sans">
            See All Projects
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
          <img src="/download.png" className="w-full h-full object-cover scale-105" alt="Profile" />
          <div className="absolute bottom-0 left-0 right-0 p-5 bg-[#1E1D1B]/80 text-[#E4DCCA] z-20">
            <h1 className="text-xl font-semibold font-serif">Garv Thakral</h1>
            <p className="text-sm font-sans">Developer & Cloud Enthusiast</p>
          </div>
        </motion.div>

        {/* About Me */}
        <motion.div
          className="col-span-2 row-span-2 bg-[#E4DCCA] rounded-2xl p-8 flex flex-col justify-center border border-[#5C5850]/20 relative"
          initial={{ opacity: 0 }}
          animate={revealOthers ? { opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-[#3A3630] font-serif relative z-10">About Me</h2>
          <p className="text-base font-light leading-7 text-[#3A3630] font-sans relative z-10">
            Hey, I'm Garv. I blend design and development to deliver polished web applications. My journey began experimenting with code in college, and today I deploy apps that serve thousands daily.
          </p>
          <hr className="my-6 border-[#5C5850]/20 relative z-10" />
          <p className="text-base font-light leading-7 text-[#3A3630] font-sans relative z-10">
            When I’m not coding, I’m exploring new tech trends or catching up on sci-fi novels with a cup of coffee. Always curious, always learning.
          </p>
        </motion.div>

        {/* Quote / Fun Fact */}
        <motion.div
          className="col-span-1 row-span-1 bg-[#D8CFBA] rounded-2xl p-6 flex flex-col justify-center text-center border border-[#5C5850]/20 relative"
          initial={{ opacity: 0, scale: 0.95, x: 50 }}
          animate={revealOthers ? { opacity: 1, scale: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <blockquote className="italic text-lg text-[#3A3630] font-serif leading-7 relative z-10">
            "Code is a craft—I treat every line as a brushstroke."
          </blockquote>
        </motion.div>
      </div>
    </div>
  )
}
