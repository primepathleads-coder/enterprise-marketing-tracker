"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

export function KineticNav() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const ctx = gsap.context(() => {
      const navWrap = containerRef.current!.querySelector(".nav-overlay-wrapper");
      const menu = containerRef.current!.querySelector(".menu-content");
      const overlay = containerRef.current!.querySelector(".overlay-bg");
      const bgPanels = containerRef.current!.querySelectorAll(".backdrop-layer");
      const menuLinks = containerRef.current!.querySelectorAll(".nav-link");
      
      const menuButtonTexts = containerRef.current!.querySelectorAll(".menu-text-swap p");
      const menuButtonIcon = containerRef.current!.querySelector(".menu-icon");

      const tl = gsap.timeline();
      
      if (isMenuOpen) {
          tl.set(navWrap, { display: "block" })
            .set(menu, { xPercent: 0 }, "<")
            .fromTo(menuButtonTexts, { yPercent: 0 }, { yPercent: -100, stagger: 0.2, duration: 0.6, ease: "power3.inOut" })
            .fromTo(menuButtonIcon, { rotate: 0 }, { rotate: 315, duration: 0.6, ease: "power3.inOut" }, "<")
            
            .fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4 }, "<")
            .fromTo(bgPanels, { xPercent: 101 }, { xPercent: 0, stagger: 0.1, duration: 0.7, ease: "power4.inOut" }, "<")
            .fromTo(menuLinks, { yPercent: 140, rotate: 5, opacity: 0 }, { yPercent: 0, rotate: 0, opacity: 1, stagger: 0.05, duration: 0.6, ease: "back.out(1.2)" }, "<+=0.4");
      } else {
          tl.to(overlay, { autoAlpha: 0, duration: 0.4 })
            .to(menu, { xPercent: 120, duration: 0.7, ease: "power4.inOut" }, "<")
            .to(menuButtonTexts, { yPercent: 0, duration: 0.6, ease: "power3.inOut" }, "<")
            .to(menuButtonIcon, { rotate: 0, duration: 0.6, ease: "power3.inOut" }, "<")
            .set(navWrap, { display: "none" });
      }
    }, containerRef);
    
    return () => ctx.revert();
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape" && isMenuOpen) {
            setIsMenuOpen(false);
        }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const links = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Process", href: "/how-we-work" },
    { name: "Work", href: "/case-studies" },
  ];

  return (
    <div ref={containerRef} className="relative z-50">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-50 bg-transparent pointer-events-none">
        <div className="container flex h-32 items-center justify-between">
          <Link href="/" className="flex items-center h-full pb-2 hover:opacity-80 transition-opacity pointer-events-auto" onClick={closeMenu}>
            <div className="relative w-[240px] sm:w-[320px] md:w-[380px] h-[85px] md:h-[105px]">
              <Image src="/logo.png" alt="United Tech LLC" fill className="object-contain object-left" priority />
            </div>
          </Link>
          
          <div className="flex items-center gap-8 pointer-events-auto">
            <Link href="/start-a-project" className="hidden md:flex font-mono tracking-widest uppercase text-xs text-[#a1a1aa] hover:text-[#c5a059] transition-colors">
              Initiate Project
            </Link>
            
            <button 
              onClick={toggleMenu} 
              className="flex items-center gap-4 text-[#f5f5f7] hover:text-[#c5a059] transition-colors group outline-none"
            >
              <div className="menu-text-swap h-4 overflow-hidden font-mono tracking-widest uppercase text-xs font-bold flex flex-col justify-start">
                <p className="leading-4 h-4 m-0">Menu</p>
                <p className="leading-4 h-4 m-0 text-[#c5a059]">Close</p>
              </div>
              <div className="menu-icon flex items-center justify-center w-6 h-6 border border-white/20 group-hover:border-[#c5a059] transition-colors bg-[#08080c]">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                   <rect x="7" y="0" width="2" height="16" />
                   <rect x="0" y="7" width="16" height="2" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <div className="nav-overlay-wrapper fixed inset-0 z-40 hidden pt-24">
        <div className="overlay-bg absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer" onClick={closeMenu} />
        
        <div className="menu-content absolute right-0 top-0 h-full w-full md:w-[600px] overflow-hidden bg-[#0d0d11] border-l border-white/10">
          <div className="relative z-10 flex flex-col h-full p-8 md:p-16 overflow-y-auto">
            <ul className="flex flex-col gap-4 mt-8">
              {links.map((link, i) => (
                <li key={i} className="overflow-hidden">
                  <Link 
                    href={link.href} 
                    onClick={closeMenu}
                    className="nav-link block font-serif text-4xl md:text-5xl text-[#f5f5f7] hover:text-[#c5a059] transition-colors origin-left"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col gap-4">
              <span className="font-mono text-[#c5a059] tracking-widest text-xs uppercase">Headquarters</span>
              <p className="text-[#a1a1aa] font-mono tracking-widest text-xs uppercase">
                Los Angeles, CA
              </p>
              <a href="mailto:support@unitedtechllc.us" className="text-[#f5f5f7] hover:text-[#c5a059] transition-colors font-mono tracking-widest text-xs uppercase mt-2">
                support@unitedtechllc.us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
