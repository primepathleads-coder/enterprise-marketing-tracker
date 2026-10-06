import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0d0d11] pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
          <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
            <Link href="/" className="text-[#f5f5f7] hover:text-[#c5a059] transition-colors">
              <div className="relative w-[260px] sm:w-[300px] h-[85px]">
                <Image src="/logo.png" alt="United Tech LLC" fill className="object-contain object-left" />
              </div>
            </Link>
            <p className="text-xs font-mono tracking-widest text-[#a1a1aa] uppercase mt-4 leading-relaxed">
              United Tech LLC<br />
              744 S Figueroa St<br />
              Los Angeles, CA 90017<br />
              United States
            </p>
            <a href="mailto:support@unitedtechllc.us" className="text-sm font-mono tracking-widest uppercase hover:text-[#c5a059] text-[#f5f5f7] transition-colors mt-2">
              support@unitedtechllc.us
            </a>
          </div>
          
          <div>
            <h4 className="font-serif text-2xl text-[#f5f5f7] mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-xs font-mono tracking-widest uppercase text-[#a1a1aa]">
              <li><Link href="/about" className="hover:text-[#c5a059] transition-colors">About Us</Link></li>
              <li><Link href="/about/leadership" className="hover:text-[#c5a059] transition-colors">Leadership</Link></li>
              <li><Link href="/careers" className="hover:text-[#c5a059] transition-colors">Careers</Link></li>
              <li><Link href="/start-a-project" className="hover:text-[#c5a059] transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-2xl text-[#f5f5f7] mb-6">Divisions</h4>
            <ul className="flex flex-col gap-4 text-xs font-mono tracking-widest uppercase text-[#a1a1aa]">
              <li><Link href="/services/business-process-outsourcing" className="hover:text-[#c5a059] transition-colors">BPO</Link></li>
              <li><Link href="/services/sales" className="hover:text-[#c5a059] transition-colors">Sales Operations</Link></li>
              <li><Link href="/services/marketing" className="hover:text-[#c5a059] transition-colors">Marketing</Link></li>
              <li><Link href="/services/technology" className="hover:text-[#c5a059] transition-colors">Technology</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-2xl text-[#f5f5f7] mb-6">Resources</h4>
            <ul className="flex flex-col gap-4 text-xs font-mono tracking-widest uppercase text-[#a1a1aa]">
              <li><Link href="/industries" className="hover:text-[#c5a059] transition-colors">Industries</Link></li>
              <li><Link href="/how-we-work" className="hover:text-[#c5a059] transition-colors">Protocol</Link></li>
              <li><Link href="/case-studies" className="hover:text-[#c5a059] transition-colors">Case Studies</Link></li>
              <li><Link href="/insights" className="hover:text-[#c5a059] transition-colors">Insights</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center font-mono tracking-widest uppercase text-[10px] text-[#a1a1aa] gap-4">
          <p>© {new Date().getFullYear()} United Tech LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#c5a059] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#c5a059] transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-[#c5a059] transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
