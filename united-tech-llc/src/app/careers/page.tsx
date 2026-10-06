import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CareersPage() {
  const jobs = [
    { title: "Senior Sales Executive", location: "Los Angeles, CA / Remote", type: "Full-Time" },
    { title: "Digital Marketing Strategist", location: "Remote", type: "Full-Time" },
    { title: "Customer Success Manager", location: "Los Angeles, CA", type: "Full-Time" },
    { title: "Full Stack Developer", location: "Remote", type: "Full-Time" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#08080c]">
      <section className="p-8 md:p-16 lg:p-24 border-b border-white/10">
        <div className="max-w-4xl mx-auto w-full">
          <span className="font-mono text-[#c5a059] tracking-widest text-xs uppercase mb-6 block">Join Us</span>
          <h1 className="font-serif text-5xl md:text-6xl text-[#f5f5f7] leading-[1.05] mb-8">
            Careers at United Tech LLC
          </h1>
          <p className="text-[#a1a1aa] text-lg max-w-2xl mb-12">
            We are always looking for ambitious, talented, and driven individuals to join our growing team. If you are passionate about helping businesses scale, we want to hear from you.
          </p>
        </div>
      </section>

      <section className="p-8 md:p-16 lg:p-24 bg-[#0d0d11] flex-grow">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="font-serif text-3xl text-[#f5f5f7] mb-12">Open Positions</h2>
          
          <div className="flex flex-col gap-6">
            {jobs.map((job, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-8 border border-white/10 bg-[#08080c] hover:border-[#c5a059] transition-colors group">
                <div>
                  <h3 className="text-[#f5f5f7] text-xl font-serif mb-2">{job.title}</h3>
                  <p className="text-[#a1a1aa] font-mono text-xs uppercase tracking-widest">{job.location} • {job.type}</p>
                </div>
                <Button asChild className="mt-6 md:mt-0 bg-transparent border border-white/20 text-[#f5f5f7] hover:bg-[#c5a059] hover:text-[#08080c] hover:border-[#c5a059] transition-colors rounded-none font-mono tracking-widest text-xs uppercase h-12 px-8 w-fit">
                  <a href="mailto:careers@unitedtechllc.us?subject=Application:%20{job.title}">Apply Now</a>
                </Button>
              </div>
            ))}
          </div>
          
          <div className="mt-16 p-8 border border-white/10 bg-[#08080c] text-center">
            <h3 className="text-[#f5f5f7] text-xl font-serif mb-4">Don't see a perfect fit?</h3>
            <p className="text-[#a1a1aa] mb-6">Send us your resume anyway. We are growing fast and always looking for top talent.</p>
            <a href="mailto:careers@unitedtechllc.us" className="text-[#c5a059] font-mono text-xs uppercase tracking-widest hover:text-[#f5f5f7] transition-colors">careers@unitedtechllc.us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
