import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function SalesService() {
  return (
    <div className="flex flex-col">
      <section className="relative min-h-[70vh] flex flex-col md:flex-row border-b border-white/10">
        <div className="flex-1 p-8 md:p-16 lg:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10 bg-[#08080c]/90 z-10">
          <span className="font-mono text-[#c5a059] tracking-widest text-xs uppercase mb-6 block">Service 02</span>
          <h1 className="font-serif text-5xl md:text-6xl text-[#f5f5f7] leading-[1.05] mb-8">
            Sales Operations
          </h1>
          <p className="text-[#a1a1aa] text-lg max-w-2xl">
            We help you bring in more customers and close more deals. Our trained sales teams will handle everything from finding new leads to managing your pipeline.
          </p>
        </div>
        <div className="flex-1 relative min-h-[40vh] md:min-h-0 bg-[#0d0d11]">
          <Image
            src="/images/sales-hero.png"
            alt="Sales Executive Office"
            fill
            className="object-cover opacity-80"
          />
        </div>
      </section>
      
      <section className="p-8 md:p-16 lg:p-24 bg-[#0d0d11] min-h-[50vh]">
         <h2 className="font-serif text-3xl text-[#f5f5f7] mb-12">What We Do For You</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-[#a1a1aa] uppercase tracking-widest text-sm">
            <div className="p-8 border border-white/10 hover:border-[#c5a059] transition-colors bg-[#08080c]">Lead Generation</div>
            <div className="p-8 border border-white/10 hover:border-[#c5a059] transition-colors bg-[#08080c]">Calling & Qualifying Leads</div>
            <div className="p-8 border border-white/10 hover:border-[#c5a059] transition-colors bg-[#08080c]">CRM Setup & Management</div>
            <div className="p-8 border border-white/10 hover:border-[#c5a059] transition-colors bg-[#08080c]">Closing Sales</div>
         </div>
      </section>
    </div>
  );
}
