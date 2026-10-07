import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="flex flex-col">
      <section className="relative min-h-[80vh] flex flex-col md:flex-row border-b border-white/10">
        
        {/* Left: Info */}
        <div className="flex-1 p-8 md:p-16 lg:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
          <span className="font-mono text-[#c5a059] tracking-widest text-xs uppercase mb-6 block">Contact Us</span>
          <h1 className="font-serif text-5xl md:text-6xl text-[#f5f5f7] leading-[1.05] mb-12">
            Get in touch.
          </h1>
          
          <div className="space-y-12">
            <div>
              <h3 className="font-mono text-[#c5a059] text-xs tracking-widest uppercase mb-4">Headquarters</h3>
              <p className="text-[#f5f5f7] text-lg">
                United Tech LLC<br />
                744 S Figueroa St<br />
                Los Angeles, CA 90017<br />
                United States
              </p>
            </div>
            
            <div>
              <h3 className="font-mono text-[#c5a059] text-xs tracking-widest uppercase mb-4">Direct Communication</h3>
              <a href="mailto:support@unitedtechllc.us" className="text-[#f5f5f7] text-lg hover:text-[#c5a059] transition-colors block mb-2">
                support@unitedtechllc.us
              </a>
              <a href="tel:+10000000000" className="text-[#f5f5f7] text-lg hover:text-[#c5a059] transition-colors">
                +1 562 442 9924
              </a>
            </div>
          </div>
        </div>

        {/* Right: Map Placeholder / Quick Form */}
        <div className="w-full md:w-[50%] bg-[#0d0d11] p-8 md:p-16 flex flex-col justify-center">
           <h3 className="font-serif text-2xl text-[#f5f5f7] mb-8">Send an Inquiry</h3>
           <form className="space-y-6">
              <div>
                <label className="font-mono text-[#a1a1aa] text-xs tracking-widest uppercase block mb-2">Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/20 focus:border-[#c5a059] outline-none py-2 text-[#f5f5f7] font-sans transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="font-mono text-[#a1a1aa] text-xs tracking-widest uppercase block mb-2">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-white/20 focus:border-[#c5a059] outline-none py-2 text-[#f5f5f7] font-sans transition-colors" placeholder="john@company.com" />
              </div>
              <div>
                <label className="font-mono text-[#a1a1aa] text-xs tracking-widest uppercase block mb-2">Message</label>
                <textarea className="w-full bg-transparent border-b border-white/20 focus:border-[#c5a059] outline-none py-2 text-[#f5f5f7] font-sans transition-colors resize-none h-24" placeholder="How can we help?" />
              </div>
              <Button type="button" className="w-full bg-[#f5f5f7] text-[#08080c] hover:bg-[#c5a059] hover:text-[#08080c] rounded-none h-14 font-mono tracking-widest uppercase text-xs">
                Submit Inquiry
              </Button>
           </form>
        </div>
      </section>
    </div>
  );
}
