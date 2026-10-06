export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#08080c] p-8 md:p-16 lg:p-24">
      <div className="max-w-4xl mx-auto w-full">
        <span className="font-mono text-[#c5a059] tracking-widest text-xs uppercase mb-6 block">Legal</span>
        <h1 className="font-serif text-5xl md:text-6xl text-[#f5f5f7] leading-[1.05] mb-12">
          Terms & Conditions
        </h1>
        
        <div className="text-[#a1a1aa] space-y-6 leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-[#f5f5f7] font-serif text-2xl mt-12 mb-4">1. Agreement to Terms</h2>
          <p>
            By accessing our website and using our services, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not use our services.
          </p>

          <h2 className="text-[#f5f5f7] font-serif text-2xl mt-12 mb-4">2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise stated, United Tech LLC owns the intellectual property rights for all material on the website. All intellectual property rights are reserved. You may view and/or print pages from the website for your own personal use subject to restrictions set in these terms and conditions.
          </p>

          <h2 className="text-[#f5f5f7] font-serif text-2xl mt-12 mb-4">3. Restrictions</h2>
          <p>You are specifically restricted from all of the following:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>publishing any Website material in any other media;</li>
            <li>selling, sublicensing and/or otherwise commercializing any Website material;</li>
            <li>publicly performing and/or showing any Website material;</li>
            <li>using this Website in any way that is or may be damaging to this Website;</li>
            <li>using this Website in any way that impacts user access to this Website.</li>
          </ul>

          <h2 className="text-[#f5f5f7] font-serif text-2xl mt-12 mb-4">4. Limitation of liability</h2>
          <p>
            In no event shall United Tech LLC, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website.
          </p>
        </div>
      </div>
    </div>
  );
}
