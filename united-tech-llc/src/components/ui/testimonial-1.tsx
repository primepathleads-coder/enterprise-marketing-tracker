"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { ArrowDown, ArrowUp } from "lucide-react";
import Image from "next/image";

export default function Testimonial1() {
  interface StatItem {
    percentage: string;
    logo: string;
    label: string;
    name: string;
    isIncrease: boolean;
  }

  const stats: StatItem[] = [
    {
      percentage: "230%",
      label: "Campaign ROAS",
      name: "Meta",
      isIncrease: true,
      logo: "/customer/meta.png",
    },
    {
      percentage: "145%",
      label: "Ad Spend ROI",
      name: "Google Ads",
      isIncrease: true,
      logo: "/customer/google-ads.png",
    },
    {
      percentage: "48%",
      label: "Conversion Rate",
      name: "TikTok Ads",
      isIncrease: true,
      logo: "/customer/tiktok-ads.png",
    },
    {
      percentage: "320%",
      label: "Engagement Lift",
      name: "Pinterest",
      isIncrease: true,
      logo: "/customer/pinterest.png",
    },
  ];

  return (
    <div className="bg-[#08080c] w-full border-t border-b border-white/10 py-24 px-4 md:px-8 lg:px-16 relative">
      <div className="max-w-6xl mx-auto">
        {/* Community Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#c5a059]/10 text-[#c5a059] border border-[#c5a059]/30 px-5 py-1.5 rounded-full text-xs uppercase tracking-widest font-mono">
            Client Ecosystem & Performance
          </div>
        </div>

        {/* Main Heading with Unique Avatar Hover Tooltips */}
        <div className="text-center max-w-screen-xl mx-auto relative text-[#f5f5f7]">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif leading-tight">
            We make it seamless for{" "}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="inline-block mx-2 align-middle relative cursor-pointer">
                    <div className="relative overflow-hidden sm:w-16 w-12 h-12 origin-center transition-all duration-300 md:hover:w-36 rounded-full border-2 border-[#c5a059]">
                      <Image
                        src="/images/avatar-exec-female.jpg"
                        alt="Enterprise Managing Partner"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  className="max-w-xs bg-[#0d0d11] text-[#f5f5f7] p-4 rounded-none border border-[#c5a059]/50 shadow-2xl z-50"
                >
                  <p className="mb-2 text-sm italic">
                    "United Tech LLC scaled our customer support and campaign execution across global markets without friction."
                  </p>
                  <p className="font-mono text-xs text-[#c5a059] uppercase tracking-widest">Managing Director, Client Partner</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            leading brands
          </h2>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif leading-tight mt-2">
            and their{" "}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="inline-block mx-2 align-middle cursor-pointer">
                    <div className="relative overflow-hidden sm:w-16 w-14 h-14 origin-center transition-all duration-300 lg:hover:w-36 md:hover:w-24 rounded-full border-2 border-[#c5a059]">
                      <Image
                        src="/images/avatar-exec-male.jpg"
                        alt="Head of Growth"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  className="max-w-xs bg-[#0d0d11] text-[#f5f5f7] p-4 rounded-none border border-[#c5a059]/50 shadow-2xl z-50"
                >
                  <p className="mb-2 text-sm italic">
                    "Managing 4,500+ ad campaigns with over 230% ROAS gave us unprecedented profit margins."
                  </p>
                  <p className="font-mono text-xs text-[#c5a059] uppercase tracking-widest">VP of Growth Marketing</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            growth teams to scale revenue &
          </h2>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif text-[#c5a059] leading-tight mt-2">
            maximize profit margins.
          </h2>
        </div>

        {/* Client Performance Hover Cards */}
        <div className="sm:flex grid grid-cols-2 gap-6 bg-[#0d0d11] mt-16 w-full mx-auto px-6 py-8 border rounded-none border-white/10">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="flex-1 flex gap-4 pl-4 md:pl-6 relative"
            >
              {index !== 0 && (
                <div className="w-0.5 h-16 border-r border-dashed border-white/20 absolute left-0" />
              )}
              <div className="w-full h-20 group relative flex flex-col items-center justify-center">
                {/* Clean Logo Container without White Box */}
                <div className="w-full h-12 px-4 py-2 flex items-center justify-center transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-6">
                  <img
                    src={stat.logo}
                    alt={stat.name}
                    className="max-h-8 max-w-full object-contain opacity-80"
                  />
                </div>

                {/* Hover Metric Reveal */}
                <div className="absolute left-0 top-6 opacity-0 flex flex-col items-center justify-center w-full group-hover:top-1 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none">
                  <div className="flex items-center justify-center gap-2 relative">
                    {stat.isIncrease ? (
                      <ArrowUp className="md:w-5 md:h-5 w-4 h-4 text-[#c5a059]" />
                    ) : (
                      <ArrowDown className="md:w-5 md:h-5 w-4 h-4 text-[#a1a1aa]" />
                    )}
                    <span className="md:text-3xl text-xl font-serif font-bold text-[#f5f5f7]">
                      {stat.percentage}
                    </span>
                  </div>
                  <p className="text-[#c5a059] font-mono md:text-xs text-[10px] text-center uppercase tracking-widest mt-1">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
