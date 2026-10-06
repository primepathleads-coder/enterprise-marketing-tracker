import Link from "next/link";
import Image from "next/image";

export default function TechnologyService() {
  return (
    <div className="flex flex-col">
      <section className="relative min-h-[70vh] flex flex-col md:flex-row border-b border-white/10">
        <div className="flex-1 p-8 md:p-16 lg:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10 bg-[#08080c]/90 z-10">
          <span className="font-mono text-[#c5a059] tracking-widest text-xs uppercase mb-6 block">Service 04</span>
          <h1 className="font-serif text-5xl md:text-6xl text-[#f5f5f7] leading-[1.05] mb-8">
            Technology & Web
          </h1>
          <p className="text-[#a1a1aa] text-lg max-w-2xl">
            We build fast, secure, and beautiful websites and applications. We make sure your online presence works perfectly and makes it easy for customers to buy from you.
          </p>
        </div>
        <div className="flex-1 relative min-h-[40vh] md:min-h-0 bg-[#0d0d11]">
          <Image
            src="/images/tech-hero.jpg"
            alt="Technology Architecture"
            fill
            className="object-cover opacity-80"
          />
        </div>
      </section>
      
      <section className="p-8 md:p-16 lg:p-24 bg-[#0d0d11] min-h-[50vh]">
         <h2 className="font-serif text-3xl text-[#f5f5f7] mb-12">What We Do For You</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-[#a1a1aa] uppercase tracking-widest text-sm">
            <div className="p-8 border border-white/10 hover:border-[#c5a059] transition-colors bg-[#08080c]">Custom Websites</div>
            <div className="p-8 border border-white/10 hover:border-[#c5a059] transition-colors bg-[#08080c]">Online Stores</div>
            <div className="p-8 border border-white/10 hover:border-[#c5a059] transition-colors bg-[#08080c]">Software Applications</div>
            <div className="p-8 border border-white/10 hover:border-[#c5a059] transition-colors bg-[#08080c]">Website Redesign</div>
         </div>
      </section>
    </div>
  );
}
