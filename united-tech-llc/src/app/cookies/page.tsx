export default function CookiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#08080c] p-8 md:p-16 lg:p-24">
      <div className="max-w-4xl mx-auto w-full">
        <span className="font-mono text-[#c5a059] tracking-widest text-xs uppercase mb-6 block">Legal</span>
        <h1 className="font-serif text-5xl md:text-6xl text-[#f5f5f7] leading-[1.05] mb-12">
          Cookie Policy
        </h1>
        
        <div className="text-[#a1a1aa] space-y-6 leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-[#f5f5f7] font-serif text-2xl mt-12 mb-4">What Are Cookies</h2>
          <p>
            As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies.
          </p>

          <h2 className="text-[#f5f5f7] font-serif text-2xl mt-12 mb-4">How We Use Cookies</h2>
          <p>
            We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.
          </p>

          <h2 className="text-[#f5f5f7] font-serif text-2xl mt-12 mb-4">The Cookies We Set</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Site preferences cookies:</strong> In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it.</li>
            <li><strong>Third Party Cookies:</strong> In some special cases we also use cookies provided by trusted third parties. This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
