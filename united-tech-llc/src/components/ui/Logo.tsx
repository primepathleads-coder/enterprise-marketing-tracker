export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 200 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`h-8 w-auto ${className}`}
    >
      <text 
        x="0" 
        y="28" 
        fontFamily="Playfair Display, serif" 
        fontSize="24" 
        fontWeight="600" 
        fill="currentColor"
        letterSpacing="0.1em"
      >
        UNITED TECH
      </text>
      <rect x="0" y="34" width="200" height="1" fill="#c5a059" />
    </svg>
  );
}
