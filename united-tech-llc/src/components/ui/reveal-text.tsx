"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface RevealTextProps {
  text?: string;
  textColor?: string;
  overlayColor?: string;
  fontSize?: string;
  letterDelay?: number;
  overlayDelay?: number;
  overlayDuration?: number;
  springDuration?: number;
  letterImages?: string[];
  className?: string;
}

export function RevealText({
  text = "STUNNING",
  textColor = "text-[#f5f5f7]",
  overlayColor = "text-[#c5a059]",
  fontSize = "text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
  letterDelay = 0.04,
  overlayDelay = 0.02,
  overlayDuration = 0.4,
  springDuration = 600,
  className = "",
  letterImages = [
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1531297172864-45d0614f8111?q=80&w=600&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=600&auto=format&fit=crop", 
  ]
}: RevealTextProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showOverlay, setShowOverlay] = useState(false);
  
  useEffect(() => {
    const lastLetterDelay = (text.length - 1) * letterDelay;
    const totalDelay = (lastLetterDelay * 1000) + springDuration;
    
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, totalDelay);
    
    return () => clearTimeout(timer);
  }, [text.length, letterDelay, springDuration]);

  // Split by words first to keep words together when wrapping
  const words = text.split(" ");
  let globalLetterIndex = 0;

  return (
    <div className={`relative flex flex-wrap ${className}`}>
      {words.map((word, wordIndex) => (
        <div key={wordIndex} className="flex whitespace-nowrap mr-[0.3em] mb-4">
          {word.split("").map((letter) => {
            const index = globalLetterIndex++;
            return (
              <motion.span
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`${fontSize} font-serif tracking-tight cursor-pointer relative overflow-hidden inline-flex`}
                initial={{ 
                  scale: 0.8,
                  opacity: 0,
                  y: 20
                }}
                animate={{ 
                  scale: 1,
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  delay: index * letterDelay,
                  type: "spring",
                  damping: 12,
                  stiffness: 200,
                  mass: 0.8,
                }}
              >
                {/* Base text layer */}
                <motion.span 
                  className={`relative ${textColor}`}
                  animate={{ 
                    opacity: hoveredIndex === index ? 0 : 1 
                  }}
                  transition={{ duration: 0.1 }}
                >
                  {letter}
                </motion.span>
                
                {/* Image text layer with background panning */}
                <motion.span
                  className="absolute inset-0 text-transparent bg-clip-text bg-cover bg-no-repeat pointer-events-none"
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    backgroundPosition: hoveredIndex === index ? "10% center" : "0% center"
                  }}
                  transition={{ 
                    opacity: { duration: 0.1 },
                    backgroundPosition: { 
                      duration: 3,
                      ease: "easeInOut"
                    }
                  }}
                  style={{
                    backgroundImage: `url('${letterImages[index % letterImages.length]}')`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {letter}
                </motion.span>
                
                {/* Overlay text layer that sweeps across each letter */}
                {showOverlay && (
                  <motion.span
                    className={`absolute inset-0 ${overlayColor} pointer-events-none`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ 
                      opacity: [0, 1, 1, 0],
                      x: [ -10, 0, 0, 10 ]
                    }}
                    transition={{
                      delay: index * overlayDelay,
                      duration: overlayDuration,
                      times: [0, 0.2, 0.8, 1],
                      ease: "easeInOut"
                    }}
                  >
                    {letter}
                  </motion.span>
                )}
              </motion.span>
            );
          })}
        </div>
      ))}
    </div>
  );
}
