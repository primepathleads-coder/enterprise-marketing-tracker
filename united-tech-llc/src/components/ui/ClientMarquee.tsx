"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function ClientMarquee() {
  const clients = [
    { name: "Meta", logo: "/customer/meta.png" },
    { name: "Google Ads", logo: "/customer/google-ads.png" },
    { name: "TikTok Ads", logo: "/customer/tiktok-ads.png" },
    { name: "Pinterest", logo: "/customer/pinterest.png" },
    { name: "Kreative", logo: "/customer/kreative.png" },
    { name: "Techwhales", logo: "/customer/techwhales.png" },
    { name: "Mountain", logo: "/customer/mountain.png" },
  ];

  // Duplicate clients array to create a seamless infinite loop
  const marqueeItems = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="py-16 border-b border-white/10 bg-[#08080c] overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 mb-10">
        <p className="font-mono text-xs text-[#c5a059] tracking-widest uppercase text-center">
          TRUSTED CLIENT PLATFORMS & VERIFIED PERFORMANCE NETWORKS
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left/Right Fade Gradients for a smooth entry/exit effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#08080c] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#08080c] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex whitespace-nowrap items-center space-x-16 px-8"
          animate={{ x: [0, -1035] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          {marqueeItems.map((client, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            >
              {/* Ensure logos render nicely over dark bg */}
              <div className="relative h-10 md:h-14 w-28 md:w-40 flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
