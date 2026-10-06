import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ClientMarquee } from "@/components/ui/ClientMarquee";
import Testimonial1 from "@/components/ui/testimonial-1";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: "CS-01",
      category: "Media Buying & Paid Acquisition",
      title: "Scaling 4,500+ Meta Ad Campaigns to 230%+ ROAS & $118K+ Revenue",
      desc: "Architected a high-volume paid media strategy across Facebook and Meta ad networks, managing over 4,521 targeted campaigns with granular bidding and conversion rate optimization reaching up to 48.18% CVR.",
      metrics: [
        { label: "Active Campaigns", value: "4,521+" },
        { label: "Max ROAS Achieved", value: "230.13%" },
        { label: "Tracked Revenue", value: "$118,670" },
        { label: "Peak Conversion Rate", value: "48.18%" },
      ],
      image: "/images/case-studies/cs_ads_proof.png",
      altImage: "/images/case-studies/cs_ads_proof.png",
    },
    {
      id: "CS-02",
      category: "Affiliate Marketing & Payout Operations",
      title: "$75,000+ Disbursed in Verified Partner Payouts via Tipalti & ACH",
      desc: "Built a fully automated affiliate management and payout delivery system processing recurring monthly payouts up to $23,028 per cycle with 100% financial accuracy and instant receipt auditing.",
      metrics: [
        { label: "Single Cycle Peak Payout", value: "$23,028.03" },
        { label: "Total Verified Disbursed", value: "$75,000+" },
        { label: "Payment Protocol", value: "Tipalti & ACH" },
        { label: "Payout Accuracy", value: "100%" },
      ],
      image: "/images/case-studies/cs_payouts_proof.png",
    },
    {
      id: "CS-03",
      category: "Business Process Outsourcing (BPO)",
      title: "24/7 Turnkey Helpdesk & Operations Scaling for Enterprise SaaS",
      desc: "Deployed a dedicated, fully managed BPO team handling multi-channel customer support, technical helpdesk, and daily back-office processing under strict SLA guarantees.",
      metrics: [
        { label: "Operational Uptime", value: "24/7/365" },
        { label: "SLA Compliance", value: "99.9%" },
        { label: "Customer Satisfaction", value: "4.9 / 5" },
        { label: "First Response Time", value: "< 15 Mins" },
      ],
      image: "/images/case-studies/cs_bpo_proof.png",
    },
    {
      id: "CS-04",
      category: "Technology & Web Architecture",
      title: "High-Performance Next.js Engineering Delivering 3.4x Conversion Lift",
      desc: "Rebuilt legacy web infrastructure into a ultra-fast, security-hardened Next.js platform optimized for seamless user experience, sub-second load times, and high mobile conversion.",
      metrics: [
        { label: "Page Speed Acceleration", value: "300%" },
        { label: "Largest Contentful Paint", value: "0.4s" },
        { label: "Conversion Lift", value: "3.4x" },
        { label: "Security Uptime", value: "100%" },
      ],
      image: "/images/case-studies/cs_tech_proof.png",
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Header */}
      <section className="relative p-8 md:p-16 lg:p-24 border-b border-white/10 bg-[#08080c] min-h-[50vh] flex flex-col justify-center">
        <div className="max-w-4xl relative z-10">
          <span className="font-mono text-[#c5a059] tracking-widest text-xs uppercase mb-6 block">Empirical Proof & Results</span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#f5f5f7] leading-[1.05] mb-8">
            Case Studies
          </h1>
          <p className="text-[#a1a1aa] text-lg max-w-2xl leading-relaxed">
            Real data, verified dashboards, and measurable growth. Explore how United Tech LLC builds, executes, and scales high-performance operations for enterprise brands.
          </p>
        </div>
      </section>

      {/* Trusted Client Platforms Marquee Bar */}
      <ClientMarquee />

      {/* Case Studies Detailed List */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#08080c]">
        <div className="max-w-7xl mx-auto flex flex-col gap-24">
          {caseStudies.map((cs, idx) => (
            <div 
              key={cs.id}
              className="flex flex-col lg:flex-row border border-white/10 bg-[#0d0d11] overflow-hidden group hover:border-[#c5a059]/40 transition-all duration-300"
            >
              {/* Proof Image Banner */}
              <div className="lg:w-1/2 relative min-h-[350px] lg:min-h-[480px] bg-[#08080c] border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden">
                <Image 
                  src={cs.image} 
                  alt={cs.title} 
                  fill 
                  className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d11] via-transparent to-transparent opacity-70" />
                <span className="absolute top-6 left-6 font-mono text-xs tracking-widest text-[#c5a059] bg-[#08080c]/90 px-4 py-1.5 border border-[#c5a059]/40">
                  {cs.id} • VERIFIED PROOF
                </span>
              </div>

              {/* Case Study Content & Metrics */}
              <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-[#c5a059] tracking-widest uppercase mb-3 block">
                    {cs.category}
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl text-[#f5f5f7] mb-6 leading-tight group-hover:text-[#c5a059] transition-colors">
                    {cs.title}
                  </h2>
                  <p className="text-[#a1a1aa] leading-relaxed mb-8 text-sm md:text-base">
                    {cs.desc}
                  </p>

                  {/* Key Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8 pt-6 border-t border-white/10">
                    {cs.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="flex flex-col p-4 border border-white/10 bg-[#08080c]">
                        <span className="font-serif text-2xl text-[#c5a059] mb-1 font-bold">{m.value}</span>
                        <span className="font-mono text-[11px] text-[#a1a1aa] tracking-widest uppercase">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant="outline" asChild className="rounded-none border-white/20 text-[#f5f5f7] hover:bg-[#c5a059] hover:text-[#08080c] hover:border-[#c5a059] transition-colors font-mono tracking-widest uppercase text-xs h-12 px-6 w-fit">
                  <Link href="/start-a-project">Partner With Us →</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Client Testimonial & Performance Section */}
      <Testimonial1 />

      {/* Call to Action */}
      <section className="p-12 md:p-20 bg-[#0d0d11] border-t border-white/10 text-center flex flex-col items-center justify-center">
        <span className="font-mono text-xs text-[#c5a059] tracking-widest uppercase mb-4">Ready for Proven Growth?</span>
        <h2 className="font-serif text-3xl md:text-5xl text-[#f5f5f7] mb-8 max-w-3xl">
          Let’s Build Your Next Success Story Together.
        </h2>
        <Button asChild className="bg-[#f5f5f7] text-[#08080c] hover:bg-[#c5a059] hover:text-[#08080c] transition-colors rounded-none h-14 px-10 font-mono tracking-widest uppercase text-xs">
          <Link href="/start-a-project">Schedule Strategic Audit</Link>
        </Button>
      </section>
    </div>
  );
}
