"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"

const testimonials = [
  {
    quote: "They didn't just take over our customer support; they weaponized it into a retention engine. Utterly relentless execution.",
    author: "Elena Rostova",
    role: "VP of Operations",
    company: "SaaS Enterprise",
  },
  {
    quote: "Scaled our paid acquisition from $10k to $250k monthly spend while crushing our target CPA. Absolute marketing beasts.",
    author: "Marcus Webb",
    role: "Chief Marketing Officer",
    company: "Global E-Commerce",
  },
  {
    quote: "Their engineering squad rebuilt our legacy architecture into a blazing-fast Next.js platform in weeks. Unmatched technical firepower.",
    author: "David Chen",
    role: "Chief Technology Officer",
    company: "FinTech Innovators",
  },
  {
    quote: "We handed them our entire outbound sales operation. They 5x'd our pipeline in 90 days. Brutally effective sales strategies.",
    author: "Sarah Jenkins",
    role: "Director of Sales",
    company: "B2B Software Inc.",
  }
]

export function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Mouse position for magnetic effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 200 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  // Transform for parallax on the large number
  const numberX = useTransform(x, [-200, 200], [-20, 20])
  const numberY = useTransform(y, [-200, 200], [-10, 10])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (rect) {
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      mouseX.set(e.clientX - centerX)
      mouseY.set(e.clientY - centerY)
    }
  }

  const goNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length)
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const timer = setInterval(goNext, 8000)
    return () => clearInterval(timer)
  }, [])

  const current = testimonials[activeIndex]

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#08080c] overflow-hidden border-b border-white/10">
      <div ref={containerRef} className="relative w-full max-w-6xl py-16 md:py-24 px-6 md:px-8" onMouseMove={handleMouseMove}>
        {/* Oversized index number - positioned to bleed off left edge */}
        <motion.div
          className="absolute -left-12 top-1/2 -translate-y-1/2 text-[30rem] font-bold text-white/[0.02] select-none pointer-events-none leading-none tracking-tighter"
          style={{ x: numberX, y: numberY }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="block font-serif"
            >
              {String(activeIndex + 1).padStart(2, "0")}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Main content - asymmetric layout */}
        <div className="relative flex flex-col md:flex-row">
          {/* Left column - vertical text */}
          <div className="hidden md:flex flex-col items-center justify-center pr-16 border-r border-white/10">
            <motion.span
              className="text-xs font-mono text-[#c5a059] tracking-widest uppercase"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Client Verification
            </motion.span>

            {/* Vertical progress line */}
            <div className="relative h-32 w-px bg-white/10 mt-8">
              <motion.div
                className="absolute top-0 left-0 w-full bg-[#c5a059] origin-top"
                animate={{
                  height: `${((activeIndex + 1) / testimonials.length) * 100}%`,
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>

          {/* Center - main content */}
          <div className="flex-1 md:pl-16 py-12 relative z-10">
            {/* Company badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="mb-8"
              >
                <span className="inline-flex items-center gap-2 text-xs font-mono text-[#a1a1aa] border border-white/10 bg-white/5 rounded-none px-4 py-1.5 uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                  {current.company}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Quote with character reveal */}
            <div className="relative mb-16 min-h-[200px] md:min-h-[160px]">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={activeIndex}
                  className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#f5f5f7] leading-[1.15] tracking-tight"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {current.quote.split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      className="inline-block mr-[0.3em]"
                      variants={{
                        hidden: { opacity: 0, y: 20, rotateX: 90 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          rotateX: 0,
                          transition: {
                            duration: 0.5,
                            delay: i * 0.04,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        },
                        exit: {
                          opacity: 0,
                          y: -10,
                          transition: { duration: 0.2, delay: i * 0.01 },
                        },
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Author row */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex items-center gap-4"
                >
                  {/* Animated line before name */}
                  <motion.div
                    className="w-12 h-px bg-[#c5a059]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{ originX: 0 }}
                  />
                  <div>
                    <p className="text-xl font-serif text-[#f5f5f7] mb-1">{current.author}</p>
                    <p className="text-xs font-mono uppercase tracking-widest text-[#c5a059]">{current.role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center gap-4">
                <motion.button
                  onClick={goPrev}
                  className="group relative w-14 h-14 rounded-full border border-white/10 flex items-center justify-center overflow-hidden bg-transparent hover:border-[#c5a059]/50 transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-[#c5a059]"
                    initial={{ x: "-100%" }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ x: 0 }}
                  />
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="relative z-10 text-[#a1a1aa] group-hover:text-[#08080c] transition-colors"
                  >
                    <path
                      d="M10 12L6 8L10 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.button>

                <motion.button
                  onClick={goNext}
                  className="group relative w-14 h-14 rounded-full border border-white/10 flex items-center justify-center overflow-hidden bg-transparent hover:border-[#c5a059]/50 transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-[#c5a059]"
                    initial={{ x: "100%" }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ x: 0 }}
                  />
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="relative z-10 text-[#a1a1aa] group-hover:text-[#08080c] transition-colors"
                  >
                    <path
                      d="M6 4L10 8L6 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom ticker - subtle repeating company names */}
        <div className="absolute -bottom-16 left-0 right-0 overflow-hidden opacity-[0.03] pointer-events-none">
          <motion.div
            className="flex whitespace-nowrap text-8xl font-serif tracking-tight text-white"
            animate={{ x: [0, -1500] }}
            transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="mx-8">
                {testimonials.map((t) => t.company).join(" • ")} •
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
