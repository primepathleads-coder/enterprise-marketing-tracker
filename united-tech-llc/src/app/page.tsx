import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { LayeredText } from "@/components/ui/layered-text";
import { SonarGrid } from "@/components/ui/sonar-grid";
import { ClientMarquee } from "@/components/ui/ClientMarquee";
import { Testimonial } from "@/components/ui/design-testimonial";
import { RevealText } from "@/components/ui/reveal-text";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col md:flex-row border-b border-white/10 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/home-hero.jpg" 
            alt="United Tech Operations" 
            fill 
            className="object-cover opacity-20 grayscale" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08080c] via-[#08080c]/80 to-transparent"></div>
        </div>
        
        {/* Left Column: Headline */}
        <div className="flex-1 p-6 pt-28 md:p-16 lg:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10 relative z-10">
          <h1 className="mb-6 md:mb-8 relative z-10 w-full max-w-full md:max-w-[90%] mt-8 md:mt-0">
            <RevealText 
              text="We Don't Just Consult. We Execute and Grow Your Business." 
              fontSize="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl"
            />
          </h1>
          <p className="text-[#a1a1aa] text-base md:text-lg max-w-xl mb-8 md:mb-12">
            You have big goals. We provide the elite teams and technology to make them happen. From handling your customer support and boosting sales to running powerful marketing campaigns, we take care of the heavy lifting so you can focus on leading your company.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="bg-[#f5f5f7] text-[#08080c] hover:bg-[#c5a059] hover:text-[#08080c] transition-colors rounded-none h-12 md:h-14 px-6 md:px-8 font-mono tracking-widest uppercase text-[10px] md:text-xs">
              <Link href="/start-a-project">Work With Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-none border-white/20 text-[#f5f5f7] hover:bg-white/5 h-12 md:h-14 px-6 md:px-8 font-mono tracking-widest uppercase text-[10px] md:text-xs backdrop-blur-sm bg-black/20">
              <Link href="/services">See What We Do ↓</Link>
            </Button>
          </div>
        </div>

        {/* Right Column: Numbered Divisions */}
        <div className="w-full md:w-[45%] lg:w-[40%] flex flex-col justify-center bg-[#0d0d11]">
          <div className="flex flex-col w-full h-full justify-center">
            
            <Link href="/services/business-process-outsourcing" className="group flex items-center justify-between p-6 md:p-12 border-b border-white/10 hover:bg-white/[0.03] transition-colors relative z-20 cursor-pointer">
              <div>
                <span className="block font-mono text-[#c5a059] text-[10px] md:text-xs tracking-widest mb-1 md:mb-2">01</span>
                <h2 className="font-serif text-xl md:text-3xl text-[#f5f5f7] group-hover:text-[#c5a059] transition-colors">Business Process Outsourcing</h2>
              </div>
              <span className="font-mono text-[#a1a1aa] group-hover:text-[#c5a059] transition-colors text-lg md:text-xl">→</span>
            </Link>

            <Link href="/services/sales" className="group flex items-center justify-between p-6 md:p-12 border-b border-white/10 hover:bg-white/[0.03] transition-colors relative z-20 cursor-pointer">
              <div>
                <span className="block font-mono text-[#c5a059] text-[10px] md:text-xs tracking-widest mb-1 md:mb-2">02</span>
                <h2 className="font-serif text-xl md:text-3xl text-[#f5f5f7] group-hover:text-[#c5a059] transition-colors">Sales Operations</h2>
              </div>
              <span className="font-mono text-[#a1a1aa] group-hover:text-[#c5a059] transition-colors text-lg md:text-xl">→</span>
            </Link>

            <Link href="/services/marketing" className="group flex items-center justify-between p-6 md:p-12 border-b border-white/10 hover:bg-white/[0.03] transition-colors relative z-20 cursor-pointer">
              <div>
                <span className="block font-mono text-[#c5a059] text-[10px] md:text-xs tracking-widest mb-1 md:mb-2">03</span>
                <h2 className="font-serif text-xl md:text-3xl text-[#f5f5f7] group-hover:text-[#c5a059] transition-colors">Digital Marketing</h2>
              </div>
              <span className="font-mono text-[#a1a1aa] group-hover:text-[#c5a059] transition-colors text-lg md:text-xl">→</span>
            </Link>

            <Link href="/services/technology" className="group flex items-center justify-between p-6 md:p-12 border-b border-white/10 hover:bg-white/[0.03] transition-colors relative z-20 cursor-pointer">
              <div>
                <span className="block font-mono text-[#c5a059] text-[10px] md:text-xs tracking-widest mb-1 md:mb-2">04</span>
                <h2 className="font-serif text-xl md:text-3xl text-[#f5f5f7] group-hover:text-[#c5a059] transition-colors">Technology & Web</h2>
              </div>
              <span className="font-mono text-[#a1a1aa] group-hover:text-[#c5a059] transition-colors text-lg md:text-xl">→</span>
            </Link>

          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10">
        <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/10 flex items-center justify-center text-center">
          <p className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-[#a1a1aa]">
            <span className="text-[#c5a059] block mb-1 md:mb-2 text-base md:text-lg">4+</span> Years Combined Expertise
          </p>
        </div>
        <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/10 flex items-center justify-center text-center">
          <p className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-[#a1a1aa]">
            <span className="text-[#c5a059] block mb-1 md:mb-2 text-base md:text-lg">24/7</span> Global Delivery Architecture
          </p>
        </div>
        <div className="p-6 md:p-8 flex items-center justify-center text-center">
          <p className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-[#a1a1aa]">
            <span className="text-[#c5a059] block mb-1 md:mb-2 text-base md:text-lg">99.9%</span> Operational SLA Compliance
          </p>
        </div>
      </section>

      {/* Client Platforms & Performance Partners Showcase */}
      <ClientMarquee />

      {/* New Testimonial Section */}
      <Testimonial />

      {/* Advantage Section with Card Images */}
      <section className="py-16 md:py-24 px-6 md:px-16 lg:px-24 border-b border-white/10 max-w-7xl mx-auto w-full">
        <span className="font-mono text-[#c5a059] tracking-widest text-[10px] md:text-xs uppercase mb-4 md:mb-6 block text-center">Why Choose Us</span>
        <h2 className="font-serif text-2xl md:text-5xl text-[#f5f5f7] leading-relaxed mb-10 md:mb-16 text-center">
          The United Tech Advantage
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="flex flex-row md:flex-col border border-white/10 bg-[#0d0d11] p-4 md:p-8 group hover:border-[#c5a059]/50 transition-colors gap-4 md:gap-0 items-center md:items-start">
             <div className="relative w-1/3 md:w-full h-24 md:h-48 shrink-0 md:mb-8 overflow-hidden border border-white/10">
               <Image src="/images/adv-leadership.jpg" alt="U.S. Leadership" fill className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" />
               <div className="absolute top-2 left-2 md:top-4 md:left-4 w-6 h-6 md:w-10 md:h-10 bg-[#08080c] border border-[#c5a059] flex items-center justify-center text-[#c5a059] font-serif text-xs md:text-lg">1</div>
             </div>
             <div>
               <h3 className="text-lg md:text-2xl font-serif text-[#f5f5f7] mb-2 md:mb-4 leading-tight">U.S. Based Leadership</h3>
               <p className="text-[#a1a1aa] leading-relaxed text-[11px] md:text-sm">
                 Our headquarters in Los Angeles ensures you have dedicated, native-English speaking project managers and strategists. You get the benefits of offshore scaling with onshore quality control and communication.
               </p>
             </div>
          </div>

          <div className="flex flex-row md:flex-col border border-white/10 bg-[#0d0d11] p-4 md:p-8 group hover:border-[#c5a059]/50 transition-colors gap-4 md:gap-0 items-center md:items-start">
             <div className="relative w-1/3 md:w-full h-24 md:h-48 shrink-0 md:mb-8 overflow-hidden border border-white/10">
               <Image src="/images/adv-turnkey.jpg" alt="Turnkey Operations" fill className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" />
               <div className="absolute top-2 left-2 md:top-4 md:left-4 w-6 h-6 md:w-10 md:h-10 bg-[#08080c] border border-[#c5a059] flex items-center justify-center text-[#c5a059] font-serif text-xs md:text-lg">2</div>
             </div>
             <div>
               <h3 className="text-lg md:text-2xl font-serif text-[#f5f5f7] mb-2 md:mb-4 leading-tight">Turnkey Operations</h3>
               <p className="text-[#a1a1aa] leading-relaxed text-[11px] md:text-sm">
                 We don't just give you temporary workers. We build fully managed departments complete with training, quality assurance, management, and technology infrastructure ready to go from day one.
               </p>
             </div>
          </div>

          <div className="flex flex-row md:flex-col border border-white/10 bg-[#0d0d11] p-4 md:p-8 group hover:border-[#c5a059]/50 transition-colors gap-4 md:gap-0 items-center md:items-start">
             <div className="relative w-1/3 md:w-full h-24 md:h-48 shrink-0 md:mb-8 overflow-hidden border border-white/10">
               <Image src="/images/adv-datadriven.jpg" alt="Data-Driven Growth" fill className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" />
               <div className="absolute top-2 left-2 md:top-4 md:left-4 w-6 h-6 md:w-10 md:h-10 bg-[#08080c] border border-[#c5a059] flex items-center justify-center text-[#c5a059] font-serif text-xs md:text-lg">3</div>
             </div>
             <div>
               <h3 className="text-lg md:text-2xl font-serif text-[#f5f5f7] mb-2 md:mb-4 leading-tight">Data-Driven Growth</h3>
               <p className="text-[#a1a1aa] leading-relaxed text-[11px] md:text-sm">
                 Everything we do is tracked, measured, and reported. Whether it's your marketing ROI, your sales pipeline, or your customer support response times, you will always know exactly how your business is performing.
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* Dynamic Interactive Text with SonarGrid */}
      <SonarGrid
        color="#c5a059"
        className="w-full flex items-center justify-center min-h-[300px] md:min-h-[500px] border-b border-white/10 overflow-hidden"
      >
        <LayeredText className="z-10 relative scale-75 md:scale-100" />
      </SonarGrid>
    </div>
  );
}
