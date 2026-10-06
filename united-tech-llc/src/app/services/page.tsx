import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Services() {
  const services = [
    {
      id: "01",
      title: "Business Process Outsourcing (BPO)",
      desc: "Get a dedicated team to handle your customer support, technical helpdesk, and daily tasks so your core team can focus on big picture goals.",
      href: "/services/business-process-outsourcing",
      image: "/images/card-bpo.jpg",
    },
    {
      id: "02",
      title: "Sales Operations",
      desc: "Drive more revenue with our trained sales reps, lead generation teams, and smart pipeline management strategies.",
      href: "/services/sales",
      image: "/images/card-sales.jpg",
    },
    {
      id: "03",
      title: "Digital Marketing",
      desc: "Reach the right audience and get a higher return on your ad spend through our complete digital marketing and social media services.",
      href: "/services/marketing",
      image: "/images/card-marketing.jpg",
    },
    {
      id: "04",
      title: "Technology & Web",
      desc: "We build fast, secure, and beautiful websites and apps that make it easy for your customers to do business with you.",
      href: "/services/technology",
      image: "/images/card-technology.jpg",
    },
    {
      id: "05",
      title: "Affiliate Marketing",
      desc: "We set up and manage partner programs that pay other people to bring you new customers and sales.",
      href: "/services/affiliate-marketing",
      image: "/images/card-affiliate.jpg",
    },
    {
      id: "06",
      title: "Brand Strategy",
      desc: "Make sure your company looks and sounds professional everywhere so customers trust you instantly.",
      href: "/services/branding",
      image: "/images/card-branding.jpg",
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex border-b border-white/10">
        <div className="flex-1 p-8 md:p-16 lg:p-24 flex flex-col justify-center relative z-10 bg-[#08080c]/80 backdrop-blur-sm">
          <span className="font-mono text-[#c5a059] tracking-widest text-xs uppercase mb-6 block">What We Do</span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#f5f5f7] leading-[1.05] mb-8 max-w-4xl">
            Everything You Need to Run and Grow Your Business.
          </h1>
        </div>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-hero.png"
            alt="Technical Architecture"
            fill
            className="object-cover opacity-30"
          />
        </div>
      </section>

      {/* Grid with Card Images */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-white/10 bg-[#08080c]">
        {services.map((service, index) => (
          <div 
            key={service.id} 
            className={`flex flex-col justify-between p-8 md:p-10 border-b border-white/10 ${index % 3 !== 2 ? 'lg:border-r' : ''} ${(index % 2 === 0) ? 'md:border-r' : ''} hover:bg-white/[0.03] transition-all group`}
          >
            <div>
              {/* Card Image Banner */}
              <div className="relative w-full h-52 mb-8 overflow-hidden border border-white/10 bg-[#0d0d11]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 left-4 font-mono text-[#c5a059] text-xs tracking-widest bg-[#08080c]/80 px-3 py-1 border border-[#c5a059]/30">
                  {service.id}
                </span>
              </div>

              <h3 className="font-serif text-2xl text-[#f5f5f7] mb-4 group-hover:text-[#c5a059] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#a1a1aa] leading-relaxed mb-8 text-sm">
                {service.desc}
              </p>
            </div>

            <Button variant="ghost" asChild className="rounded-none border-b border-white/20 text-[#f5f5f7] hover:text-[#c5a059] hover:bg-transparent px-0 font-mono tracking-widest uppercase text-xs h-auto py-2 w-fit">
              <Link href={service.href}>VIEW DETAILS →</Link>
            </Button>
          </div>
        ))}
      </section>
    </div>
  );
}
