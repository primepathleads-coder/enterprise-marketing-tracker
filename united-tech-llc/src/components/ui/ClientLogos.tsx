import React from "react";

export function ClientLogos() {
  const clients = [
    { name: "Meta Ads Platform", logo: "/customer/meta.png", metric: "4,500+ Active Campaigns" },
    { name: "Google Ads Network", logo: "/customer/google-ads.png", metric: "145% Avg Ad ROI" },
    { name: "TikTok Ads Performance", logo: "/customer/tiktok-ads.png", metric: "48% Peak CVR" },
    { name: "Sedo Domain Network", logo: "/customer/sedo.png", metric: "$75K+ Disbursed" },
  ];

  return (
    <section className="py-16 border-b border-white/10 bg-[#0d0d11]">
      <div className="container max-w-7xl mx-auto px-6">
        <p className="font-mono text-xs text-[#c5a059] tracking-widest uppercase text-center mb-10">
          TRUSTED CLIENT PLATFORMS & VERIFIED PERFORMANCE NETWORKS
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          {clients.map((client, idx) => (
            <div 
              key={idx}
              className="flex flex-col items-center justify-center p-6 border border-white/10 bg-[#08080c] hover:border-[#c5a059]/50 transition-all group"
            >
              <div className="w-full h-14 bg-white/95 px-6 py-3 border border-white/20 flex items-center justify-center mb-4 shadow-sm group-hover:shadow-[#c5a059]/20 transition-all duration-300">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-10 max-w-full object-contain"
                />
              </div>
              <span className="font-mono text-xs text-[#c5a059] tracking-widest uppercase text-center font-bold">
                {client.metric}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
