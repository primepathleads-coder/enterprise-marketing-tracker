import Image from "next/image";
import PaperImage from "@/components/ui/paper-image";
import TeamShowcase from "@/components/ui/team-showcase";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col md:flex-row border-b border-white/10">
        <div className="flex-1 p-8 md:p-16 lg:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10 relative z-10 bg-[#08080c]/90">
          <span className="font-mono text-[#c5a059] tracking-widest text-xs uppercase mb-6 block">Who We Are</span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#f5f5f7] leading-[1.05] mb-8">
            Your Dedicated Growth Partner.
          </h1>
          <p className="text-[#a1a1aa] text-lg max-w-xl">
            United Tech LLC is an elite digital agency and business partner located in Los Angeles. We help companies grow by providing top-tier teams for customer support, sales, marketing, and web development. We don't just give advice; we roll up our sleeves and do the work for you.
          </p>
        </div>
        <div className="flex-1 relative min-h-[40vh] md:min-h-0">
          <Image
            src="/images/about-hero.png"
            alt="Executive Boardroom"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-8 md:px-16 lg:px-24 border-b border-white/10 max-w-5xl mx-auto">
        <span className="font-mono text-[#c5a059] tracking-widest text-xs uppercase mb-6 block">What We Believe</span>
        <h2 className="font-serif text-3xl md:text-4xl text-[#f5f5f7] leading-relaxed mb-8">
          We become a true extension of your company. We learn your business inside and out, and we set up systems designed to increase your revenue and run your daily operations flawlessly.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div>
            <h3 className="font-mono text-[#c5a059] text-xs tracking-widest uppercase mb-4">01. Getting It Right</h3>
            <p className="text-[#a1a1aa] leading-relaxed">
              We track and measure everything we do. We believe in using hard data to make decisions so you can clearly see the value we are bringing to your business.
            </p>
          </div>
          <div>
            <h3 className="font-mono text-[#c5a059] text-xs tracking-widest uppercase mb-4">02. Growing With You</h3>
            <p className="text-[#a1a1aa] leading-relaxed">
              Whether you need two customer service reps or a team of fifty salespeople, our systems are built to grow instantly as your business expands.
            </p>
          </div>
        </div>
      </section>

      {/* History and Vision */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-[#0d0d11]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           <div>
             <h2 className="font-serif text-3xl md:text-5xl text-[#f5f5f7] mb-8">Built on Results.</h2>
             <p className="text-[#a1a1aa] leading-relaxed mb-6 text-lg">
               United Tech LLC was founded on a simple premise: businesses are tired of dealing with multiple uncoordinated vendors. They want a single, powerful partner that can handle the entire operational pipeline.
             </p>
             <p className="text-[#a1a1aa] leading-relaxed text-lg">
               From our headquarters in Los Angeles, California, we oversee a global network of talent. We bring together elite web developers, aggressive sales development representatives, and meticulous customer support agents under one unified management structure. Our goal is to make scaling your business as simple as flipping a switch.
             </p>
           </div>
           <div className="relative h-[400px] border border-white/10">
             <Image
                src="/images/about-results.jpg"
                alt="Global Operations"
                fill
                className="object-cover grayscale opacity-70"
             />
           </div>
        </div>
      </section>

      {/* CEO Leadership Section */}
      <section className="py-24 px-8 md:px-16 lg:px-24 border-b border-white/10 bg-[#08080c]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          
          {/* PaperImage Component for CEO */}
          <div className="w-full max-w-[340px] md:max-w-none md:w-1/2 flex justify-center">
            <div className="relative w-full aspect-[3/4] max-w-[400px]">
              <PaperImage 
                image="/images/tariq-khan.png" 
                mode="Lift" 
                cardWidth={340} 
                cardHeight={440} 
                sheen={40} 
                depth={50} 
              />
            </div>
          </div>
          
          {/* CEO Details */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <span className="font-mono text-[#c5a059] tracking-widest text-xs uppercase mb-4 block">
              Leadership
            </span>
            <h2 
              className="text-6xl md:text-7xl lg:text-8xl text-[#f5f5f7] leading-none mb-2 font-script"
            >
              Esq. Tariq Khan
            </h2>
            <p className="font-mono text-sm tracking-widest uppercase text-[#a1a1aa] mb-8">
              Chief Executive Officer & Attorney at Law, USA
            </p>
            <div className="h-px w-24 bg-[#c5a059]/50 mb-8" />
            <p className="text-[#a1a1aa] leading-relaxed text-lg mb-6">
              As an accomplished Attorney at Law in the United States, Esq. Tariq Khan brings a rare blend of sharp legal strategy and aggressive business acumen to United Tech LLC. His leadership is defined by an uncompromising commitment to excellence and a relentless drive to protect and scale the assets of our partners.
            </p>
            <p className="text-[#a1a1aa] leading-relaxed text-lg">
              Under his guidance, United Tech LLC has evolved beyond a traditional agency into a formidable growth engine. His vision ensures that every operational pipeline we build is not only highly profitable but structurally sound and compliant on a global scale.
            </p>
          </div>

        </div>
      </section>

      {/* Executive Board Section */}
      <section className="py-24 px-8 md:px-16 lg:px-24 border-b border-white/10 bg-[#0d0d11]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="font-mono text-[#c5a059] tracking-widest text-xs uppercase mb-4 block">
              Executive Board
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl text-[#f5f5f7] leading-none mb-6 font-serif">
              The Strategic Vanguard
            </h2>
            <div className="h-px w-24 bg-[#c5a059]/50 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Dr. Azhar Munir */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-full aspect-[4/5] max-w-[380px] mb-8 overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-transparent to-transparent z-10 opacity-60" />
                <Image
                  src="/images/executives/azhar.jpg"
                  alt="Dr. Azhar Munir"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
              <h3 className="text-4xl md:text-5xl text-[#f5f5f7] mb-2 font-script group-hover:text-[#c5a059] transition-colors duration-500">
                Dr. Azhar Munir
              </h3>
              <p className="font-mono text-xs tracking-widest uppercase text-[#c5a059] mb-6">
                CTO & Board Member
              </p>
              <p className="text-[#a1a1aa] leading-relaxed max-w-sm">
                Spearheading technological innovation and scalable architecture. Dr. Munir ensures our operational capabilities remain at the bleeding edge of global tech standards.
              </p>
            </div>

            {/* Attorney Hamid Iqbal Khan */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-full aspect-[4/5] max-w-[380px] mb-8 overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-transparent to-transparent z-10 opacity-60" />
                <Image
                  src="/images/executives/hamid.jpg"
                  alt="Attorney Hamid Iqbal Khan"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
              <h3 className="text-4xl md:text-5xl text-[#f5f5f7] mb-2 font-script group-hover:text-[#c5a059] transition-colors duration-500">
                Attorney Hamid Iqbal Khan
              </h3>
              <p className="font-mono text-xs tracking-widest uppercase text-[#c5a059] mb-6">
                Legal Advisor & Board Member
              </p>
              <p className="text-[#a1a1aa] leading-relaxed max-w-sm">
                Providing unparalleled legal counsel and strategic oversight. His expertise fortifies our corporate structure and ensures impenetrable compliance across all jurisdictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Showcase Section */}
      <section className="py-24 border-b border-white/10 bg-[#0d0d11]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <span className="font-mono text-[#c5a059] tracking-widest text-xs uppercase mb-6 block text-center">
            Our Elite Team
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#f5f5f7] mb-16 text-center">
            The Experts Behind the Growth
          </h2>
          <TeamShowcase />
        </div>
      </section>
    </div>
  );
}
