export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#08080c] p-8 md:p-16 lg:p-24">
      <div className="max-w-4xl mx-auto w-full">
        <span className="font-mono text-[#c5a059] tracking-widest text-xs uppercase mb-6 block">Legal</span>
        <h1 className="font-serif text-5xl md:text-6xl text-[#f5f5f7] leading-[1.05] mb-12">
          Privacy Policy
        </h1>
        
        <div className="text-[#a1a1aa] space-y-6 leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-[#f5f5f7] font-serif text-2xl mt-12 mb-4">1. Information We Collect</h2>
          <p>
            We collect information from you when you visit our site, register on our site, place an order, subscribe to our newsletter, respond to a survey or fill out a form. We may collect your name, email address, mailing address, phone number or credit card information.
          </p>

          <h2 className="text-[#f5f5f7] font-serif text-2xl mt-12 mb-4">2. How We Use Your Information</h2>
          <p>
            Any of the information we collect from you may be used in one of the following ways:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To personalize your experience</li>
            <li>To improve our website</li>
            <li>To improve customer service</li>
            <li>To process transactions</li>
            <li>To send periodic emails</li>
          </ul>

          <h2 className="text-[#f5f5f7] font-serif text-2xl mt-12 mb-4">3. How We Protect Your Information</h2>
          <p>
            We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.
          </p>

          <h2 className="text-[#f5f5f7] font-serif text-2xl mt-12 mb-4">4. Do We Disclose Any Information to Outside Parties?</h2>
          <p>
            We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
          </p>
        </div>
      </div>
    </div>
  );
}
