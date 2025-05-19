"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Cloud Drive",
      description: "A secure storage app with end-to-end encryption and intuitive file organisation.",
      technologies: ["React", "Node.js", "AWS S3", "Encryption"],
      link: "#",
    },
    {
      id: 2,
      title: "SkillSwap",
      description: "Connect with peers to exchange skills and grow together.",
      technologies: ["Next.js", "MongoDB", "WebRTC", "Tailwind CSS"],
      link: "#",
    },
    {
      id: 3,
      title: "Resume AI",
      description: "Smart resume builder that tailors content for recruiters.",
      technologies: ["React", "Python", "NLP", "OpenAI"],
      link: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-[#2D2C2A] font-sans text-[#3A3630] p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-[#D4AF37] hover:text-[#E4DCCA] transition">
            <ArrowLeft size={20} />
            <span className="font-serif text-lg">Back to Home</span>
          </Link>
          <h1 className="font-serif text-3xl">Projects</h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="bg-[#E4DCCA] rounded-2xl border border-[#5C5850]/40 overflow-hidden"
            >
              <div className="p-6">
                <h2 className="font-serif text-2xl mb-2 text-[#D4AF37]">{proj.title}</h2>
                <p className="text-base mb-4">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#2D2C2A] text-[#E4DCCA] px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={proj.link}
                  className="font-serif text-sm text-[#D4AF37] hover:text-[#E4DCCA] underline"
                >
                  View Project
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Quote */}
        <div className="mt-12 text-center">
          <hr className="border-[#5C5850]/40 mb-6" />
          <p className="italic font-serif text-lg text-[#D4AF37]">
            "Every project tells a story."
          </p>
        </div>
      </div>
    </div>
  )
}