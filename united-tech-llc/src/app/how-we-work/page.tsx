import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HowWeWork() {
  const steps = [
    { num: "01", title: "Discover", desc: "We start by learning exactly how your business runs today and what your big goals are." },
    { num: "02", title: "Design", desc: "We create a custom plan showing exactly how our teams will help you get there." },
    { num: "03", title: "Deploy", desc: "We launch your new team and technology, making sure everything runs smoothly from day one." },
    { num: "04", title: "Optimize", desc: "We constantly check the data to make things faster, cheaper, and better for you." },
    { num: "05", title: "Scale", desc: "When you are ready to grow, we add more people and resources instantly." }
  ];

  return (
    <div className="flex flex-col">
      <section className="p-8 md:p-16 lg:p-24 border-b border-white/10 bg-[#08080c]">
        <div className="max-w-4xl">
          <span className="font-mono text-[#c5a059] tracking-widest text-xs uppercase mb-6 block">Our Process</span>
          <h1 className="font-serif text-5xl md:text-6xl text-[#f5f5f7] leading-[1.05] mb-8">
            How We Work With You
          </h1>
          <p className="text-[#a1a1aa] text-lg max-w-2xl">
            We don't just hand you a generic solution. We build and manage a custom system made specifically for your company's needs.
          </p>
        </div>
      </section>

      <section className="bg-[#0d0d11]">
        {steps.map((step, index) => (
          <div key={step.num} className="flex flex-col md:flex-row border-b border-white/10 group hover:bg-white/[0.02] transition-colors">
            <div className="p-8 md:p-16 md:w-1/3 border-b md:border-b-0 md:border-r border-white/10 flex items-center">
              <span className="font-mono text-[#c5a059] text-4xl mr-6">{step.num}</span>
              <h2 className="font-serif text-3xl text-[#f5f5f7]">{step.title}</h2>
            </div>
            <div className="p-8 md:p-16 md:w-2/3 flex items-center">
              <p className="text-[#a1a1aa] text-lg leading-relaxed max-w-2xl">{step.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="p-16 lg:p-24 bg-[#08080c] flex justify-center text-center">
        <div>
          <h2 className="font-serif text-3xl text-[#f5f5f7] mb-8">Ready to initiate?</h2>
          <Button size="lg" asChild className="bg-[#f5f5f7] text-[#08080c] hover:bg-[#c5a059] hover:text-[#08080c] transition-colors rounded-none h-14 px-8 font-mono tracking-widest uppercase text-xs">
            <Link href="/start-a-project">Start a Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
