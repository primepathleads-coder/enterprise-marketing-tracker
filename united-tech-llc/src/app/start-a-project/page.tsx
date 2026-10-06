export default function StartProject() {
  return (
    <div className="flex flex-col">
      <section className="relative min-h-[60vh] flex flex-col md:flex-row border-b border-white/10">
        <div className="flex-1 p-8 md:p-16 lg:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10 bg-[#08080c]/90 z-10">
          <span className="font-mono text-[#c5a059] tracking-widest text-xs uppercase mb-6 block">Initiate Project</span>
          <h1 className="font-serif text-5xl md:text-6xl text-[#f5f5f7] leading-[1.05] mb-8">
            Let's Talk.
          </h1>
          <p className="text-[#a1a1aa] text-lg max-w-2xl mb-8">
            Ready to upgrade your operations and scale your revenue? Reach out to our team at our Los Angeles headquarters. We are available for strategic consultations and project planning.
          </p>
          <div className="flex flex-col gap-4 font-mono tracking-widest text-xs uppercase text-[#a1a1aa]">
            <p><strong className="text-[#c5a059]">Address:</strong> 744 S Figueroa St, Los Angeles, CA 90017</p>
            <p><strong className="text-[#c5a059]">Email:</strong> support@unitedtechllc.us</p>
          </div>
        </div>
        <div className="flex-1 relative min-h-[40vh] md:min-h-0 bg-[#0d0d11]">
          {/* Google Map */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203584424!2d-118.26252952316183!3d34.04859061775176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b5d1a499f5%3A0x6b772421dfbfa993!2s744%20S%20Figueroa%20St%2C%20Los%20Angeles%2C%20CA%2090017%2C%20USA!5e0!3m2!1sen!2s!4v1715000000000!5m2!1sen!2s" 
            className="absolute inset-0 w-full h-full border-0 grayscale invert opacity-70 contrast-125" 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section className="p-8 md:p-16 lg:p-24 bg-[#0d0d11]">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl text-[#f5f5f7] mb-8">Send Us a Message</h2>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs uppercase tracking-widest text-[#a1a1aa]">Name</label>
              <input type="text" className="bg-[#08080c] border border-white/10 p-4 text-[#f5f5f7] focus:border-[#c5a059] outline-none transition-colors" placeholder="John Doe" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs uppercase tracking-widest text-[#a1a1aa]">Email</label>
              <input type="email" className="bg-[#08080c] border border-white/10 p-4 text-[#f5f5f7] focus:border-[#c5a059] outline-none transition-colors" placeholder="john@company.com" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs uppercase tracking-widest text-[#a1a1aa]">Message</label>
              <textarea className="bg-[#08080c] border border-white/10 p-4 text-[#f5f5f7] focus:border-[#c5a059] outline-none transition-colors min-h-[150px]" placeholder="Tell us about your project..."></textarea>
            </div>
            <button type="button" className="bg-[#f5f5f7] text-[#08080c] hover:bg-[#c5a059] transition-colors font-mono tracking-widest text-xs uppercase py-4 mt-4 cursor-pointer">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
