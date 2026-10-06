"use client";

import { useState } from 'react';
import { FaLinkedinIn, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  intro: string;
  emails: string[];
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

const DEFAULT_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Moiz Rehman',
    role: 'Technical & Affiliate Lead',
    image: '/images/team/moiz-rehman.png',
    intro: 'The mastermind behind our technical infrastructure and affiliate operations. Moiz architects scalable systems that drive compounding revenue.',
    emails: ['moizrehman@unitedtechllc.us', 'affiliates@unitedtechllc.us'],
    social: { linkedin: '#', github: '#' },
  },
  {
    id: '2',
    name: 'Moiz Khan',
    role: 'Business Strategy & Operations',
    image: '/images/team/moiz-khan.png',
    intro: 'A relentless force in business development and strategy, Moiz Khan spearheads our operational expansion with surgical precision.',
    emails: ['abdulmoizkhan@unitedtechllc.us'],
    social: { linkedin: '#' },
  },
  {
    id: '3',
    name: 'Aizaz',
    role: 'Lead Creative',
    image: '/images/team/aizaz.png',
    intro: 'Our lead creative and product visionary. Aizaz transforms complex challenges into elegant, high-converting digital experiences.',
    emails: ['aizaz@unitedtechllc.us'],
    social: { linkedin: '#' },
  },
  {
    id: '4',
    name: 'Ahsan',
    role: 'Sales & Partner Acquisition',
    image: '/images/team/ahsan.png',
    intro: 'Driving aggressive sales and partner acquisition. Ahsan ensures every client engagement maximizes ROI and market penetration.',
    emails: ['Ahsan@unitedtechllc.us'],
    social: { linkedin: '#' },
  },
  {
    id: '5',
    name: 'Omar',
    role: 'Marketing Engineering',
    image: '/images/team/omar.png',
    intro: 'The tactical engine of our marketing division. Omar engineers growth campaigns that consistently crush acquisition targets.',
    emails: ['Omar@unitedtechllc.us'],
    social: { linkedin: '#' },
  },
];

interface TeamShowcaseProps {
  members?: TeamMember[];
}

export default function TeamShowcase({ members = DEFAULT_MEMBERS }: TeamShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const col1 = members.filter((_, i) => i % 3 === 0);
  const col2 = members.filter((_, i) => i % 3 === 1);
  const col3 = members.filter((_, i) => i % 3 === 2);

  return (
    <>
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10 lg:gap-14 select-none w-full max-w-5xl mx-auto py-8 px-4 md:px-6">
        {/* Left: photo grid */}
        <div className="flex gap-2 md:gap-3 flex-shrink-0 overflow-x-auto pb-1 md:pb-0">
          {/* Column 1 */}
          <div className="flex flex-col gap-2 md:gap-3">
            {col1.map((member) => (
              <PhotoCard
                key={member.id}
                member={member}
                className="w-[110px] h-[120px] sm:w-[130px] sm:h-[140px] md:w-[155px] md:h-[165px]"
                hoveredId={hoveredId}
                onHover={setHoveredId}
                onClick={() => setSelectedMember(member)}
              />
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-2 md:gap-3 mt-[48px] sm:mt-[56px] md:mt-[68px]">
            {col2.map((member) => (
              <PhotoCard
                key={member.id}
                member={member}
                className="w-[122px] h-[132px] sm:w-[145px] sm:h-[155px] md:w-[172px] md:h-[182px]"
                hoveredId={hoveredId}
                onHover={setHoveredId}
                onClick={() => setSelectedMember(member)}
              />
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-2 md:gap-3 mt-[22px] sm:mt-[26px] md:mt-[32px]">
            {col3.map((member) => (
              <PhotoCard
                key={member.id}
                member={member}
                className="w-[115px] h-[125px] sm:w-[136px] sm:h-[146px] md:w-[162px] md:h-[172px]"
                hoveredId={hoveredId}
                onHover={setHoveredId}
                onClick={() => setSelectedMember(member)}
              />
            ))}
          </div>
        </div>

        {/* Right: member name list */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-col gap-4 md:gap-5 pt-0 md:pt-2 flex-1 w-full justify-center">
          {members.map((member) => (
            <MemberRow
              key={member.id}
              member={member}
              hoveredId={hoveredId}
              onHover={setHoveredId}
              onClick={() => setSelectedMember(member)}
            />
          ))}
        </div>
      </div>

      {/* Modal / Card Expansion for Selected Member */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0d0d11] border border-white/10 max-w-2xl w-full p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              >
                ✕
              </button>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0 border-2 border-[#c5a059] overflow-hidden rounded-full">
                  <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-script text-5xl md:text-6xl text-[#f5f5f7] mb-2 leading-none">
                    {selectedMember.name}
                  </h3>
                  <p className="font-mono text-[#c5a059] text-xs tracking-widest uppercase mb-6">
                    {selectedMember.role}
                  </p>
                  
                  <p className="text-[#a1a1aa] font-bold text-lg leading-relaxed mb-8">
                    {selectedMember.intro}
                  </p>
                  
                  <div className="flex flex-col gap-3 mb-8">
                    {selectedMember.emails.map((email, idx) => (
                      <a key={idx} href={`mailto:${email}`} className="flex items-center gap-3 text-sm text-[#f5f5f7] hover:text-[#c5a059] transition-colors font-mono">
                        <FaEnvelope className="text-[#c5a059]" />
                        {email}
                      </a>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    {selectedMember.social?.linkedin && (
                      <a href={selectedMember.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 hover:border-[#c5a059] hover:bg-[#c5a059]/10 text-white transition-all rounded-full">
                        <FaLinkedinIn size={18} />
                      </a>
                    )}
                    {selectedMember.social?.github && (
                      <a href={selectedMember.social.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 hover:border-[#c5a059] hover:bg-[#c5a059]/10 text-white transition-all rounded-full">
                        <FaGithub size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function PhotoCard({
  member,
  className,
  hoveredId,
  onHover,
  onClick,
}: {
  member: TeamMember;
  className: string;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
  onClick: () => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        'overflow-hidden cursor-pointer flex-shrink-0 transition-opacity duration-400 border border-white/5',
        className,
        isDimmed ? 'opacity-40' : 'opacity-100',
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
      onClick={onClick}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-[filter] duration-500"
        style={{
          filter: isActive ? 'grayscale(0) brightness(1)' : 'grayscale(1) brightness(0.77)',
        }}
      />
    </div>
  );
}

function MemberRow({
  member,
  hoveredId,
  onHover,
  onClick,
}: {
  member: TeamMember;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
  onClick: () => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        'cursor-pointer transition-opacity duration-300',
        isDimmed ? 'opacity-40' : 'opacity-100',
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
      onClick={onClick}
    >
      <div className="flex items-center gap-2.5">
        <span
          className={cn(
            'w-4 h-3 rounded-[5px] flex-shrink-0 transition-all duration-300',
            isActive ? 'bg-[#c5a059] w-6' : 'bg-white/20',
          )}
        />
        <span
          className={cn(
            'text-xl md:text-3xl lg:text-4xl leading-none transition-colors duration-300 font-script',
            isActive ? 'text-[#f5f5f7]' : 'text-white/60',
          )}
        >
          {member.name}
        </span>
      </div>
      <p className="mt-1.5 pl-[34px] text-[10px] md:text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#c5a059]">
        {member.role}
      </p>
    </div>
  );
}
