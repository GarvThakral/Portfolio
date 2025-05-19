"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"

export default function Home() {
  const [reveal, setReveal] = useState(false)

  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center p-8 font-serif">
      <div className="w-[900px] h-[600px] bg-[#2C2A26] grid grid-cols-4 grid-rows-3 gap-4 p-4 rounded-2xl text-[#3F3D3B] border border-[#6F6A65]/30">

        {/* Contact Me */}
        <motion.div
          className="col-span-2 row-span-1 bg-[#E7DDC6] rounded-2xl p-5 flex flex-col justify-center border border-[#3F3D3B]/20"
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          animate={reveal ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-semibold mb-3">Get in Touch</h2>
          <p className="text-base font-light">Email: niharikajoshi09@gmail.com</p>
          <p className="text-base font-light">Phone: +91&nbsp;98765&nbsp;43210</p>
        </motion.div>

        {/* Social Handles */}
        <motion.div
          className="col-span-1 row-span-1 bg-[#E7DDC6] rounded-2xl p-5 flex flex-col justify-center border border-[#3F3D3B]/20"
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          animate={reveal ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
        >
          <h2 className="text-xl font-semibold mb-2">Connect</h2>
          <ul className="space-y-1 text-base font-light">
            <li>LinkedIn: in/niharika-joshi09/</li>
            <li>Twitter: @econ_writer</li>
            <li>Instagram: @_niharikaajoshii_</li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          className="col-span-1 row-span-1 bg-[#E7DDC6] rounded-2xl p-5 flex flex-col justify-center border border-[#3F3D3B]/20"
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          animate={reveal ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold mb-2">Expertise</h2>
          <p className="text-base font-light">
            Content Strategy · UX Writing · Editorial Design · Economic Analysis · Storytelling
          </p>
        </motion.div>

        {/* Projects */}
        <motion.div
          className="col-span-1 row-span-1 bg-[#E7DDC6] rounded-2xl p-5 flex flex-col justify-center border border-[#3F3D3B]/20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={reveal ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <h2 className="text-xl font-semibold mb-2">Portfolio</h2>
          <ul className="text-base list-disc list-inside font-light space-y-1">
            <li>Cj Dijitals</li>
            <li>Annual Report Design — Hope NGO</li>
          </ul>
          <Link href="/portfolio" className="mt-3 inline-block text-sm underline font-medium">
            View All
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div
          className="col-span-1 row-span-2 bg-[#E7DDC6] rounded-2xl overflow-hidden relative border border-[#3F3D3B]/20"
          initial={{ x: 50, y: -50, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          onAnimationComplete={() => setReveal(true)}
        >
          <img src="download.jpeg" className="w-full h-full object-cover scale-110" alt="Author" />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#2C2A26]/70 text-[#E7DDC6]">
            <h1 className="text-xl font-semibold">Niharika Joshi</h1>
            <p className="text-sm font-light">Content Writer · Designer · Econ Grad</p>
          </div>
        </motion.div>

        {/* About Me */}
        <motion.div
          className="col-span-2 row-span-2 bg-[#E7DDC6] rounded-2xl p-7 flex flex-col justify-center border border-[#3F3D3B]/20"
          initial={{ opacity: 0 }}
          animate={reveal ? { opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-base font-light leading-relaxed">
            I’m Niharika, an economics graduate turned content writer and designer. I craft engaging narratives and intuitive layouts that bridge data&nbsp;and&nbsp;design.
          </p>
          <hr className="my-4 border-[#3F3D3B]/20" />
          <p className="text-base font-light leading-relaxed">
            An avid reader of {`“`}capital flows to cultural stories{`”`}, I bring clarity to complex concepts—one paragraph and pixel at a time.
          </p>
        </motion.div>

        {/* Quote / Fun Fact */}
        <motion.div
          className="col-span-1 row-span-1 bg-[#E7DDC6] rounded-2xl p-5 flex flex-col justify-center text-center border border-[#3F3D3B]/20"
          initial={{ opacity: 0, scale: 0.95, x: 50 }}
          animate={reveal ? { opacity: 1, scale: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <blockquote className="italic text-lg">
            "Words are the architecture of ideas."
          </blockquote>
        </motion.div>
      </div>
    </div>
  )
}
