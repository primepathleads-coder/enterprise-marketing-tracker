import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Industries() {
  const industries = [
    "Financial Services",
    "Healthcare & Telehealth",
    "E-Commerce & Retail",
    "SaaS & Technology",
    "Real Estate & PropTech",
    "Logistics & Supply Chain"
  ];

  return (
    <div className="flex flex-col">
      <section className="p-8 md:p-16 lg:p-24 border-b border-white/10 bg-[#08080c]">
        <div className="max-w-4xl">
          <span className="font-mono text-[#c5a059] tracking-widest text-xs uppercase mb-6 block">Who We Help</span>
          <h1 className="font-serif text-5xl md:text-6xl text-[#f5f5f7] leading-[1.05] mb-8">
            Industries We Serve
          </h1>
          <p className="text-[#a1a1aa] text-lg max-w-2xl">
            Our systems and teams are built to handle the unique challenges of fast-growing and highly regulated businesses.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[#0d0d11]">
        {industries.map((ind, index) => (
          <div key={ind} className="p-12 border-b border-white/10 lg:border-r hover:bg-white/[0.02] transition-colors flex flex-col justify-between min-h-[250px]">
             <h3 className="font-serif text-2xl text-[#f5f5f7]">{ind}</h3>
             <Button variant="ghost" className="self-start px-0 text-[#a1a1aa] hover:text-[#c5a059] hover:bg-transparent font-mono tracking-widest text-xs uppercase mt-8">
               Learn More →
             </Button>
          </div>
        ))}
      </section>
    </div>
  );
}
