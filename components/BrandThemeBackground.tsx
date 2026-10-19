export default function BrandThemeBackground({
  variant = "hero",
}: {
  variant?: "hero" | "rcs" | "section";
}) {
  if (variant === "rcs") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Deep Black base */}
        <div className="absolute inset-0 bg-[#050505]"></div>

        {/* Ambient Cobalt Glow */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#0757C8]/25 blur-[140px]"></div>
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#0757C8]/20 blur-[140px]"></div>

        {/* Reference Image: Sweeping Curved Wave Ribbon & Electric Glow Flare */}
        <svg
          className="absolute inset-0 w-full h-full object-cover opacity-85"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="rcs-wave-grad-1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#050505" stopOpacity="0" />
              <stop offset="35%" stopColor="#0757C8" stopOpacity="0.35" />
              <stop offset="70%" stopColor="#0c6bf0" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#050505" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="rcs-wave-grad-2" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#050505" stopOpacity="0" />
              <stop offset="45%" stopColor="#0757C8" stopOpacity="0.25" />
              <stop offset="80%" stopColor="#38bdf8" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#050505" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="rcs-flare-line" x1="0%" y1="80%" x2="100%" y2="20%">
              <stop offset="0%" stopColor="#0757C8" stopOpacity="0" />
              <stop offset="40%" stopColor="#38bdf8" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#0757C8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#050505" stopOpacity="0" />
            </linearGradient>

            <filter id="rcs-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Geometric elements: Angled translucent sheets from brand style guide */}
          <path
            d="M-100 800 L450 150 L650 150 L100 800 Z"
            fill="url(#rcs-wave-grad-1)"
            opacity="0.3"
          />
          <path
            d="M150 900 L850 100 L1050 100 L350 900 Z"
            fill="url(#rcs-wave-grad-1)"
            opacity="0.2"
          />

          {/* Flowing ribbon waves from brand style guide */}
          <path
            d="M-200 700 C 150 650, 450 400, 850 320 C 1200 250, 1400 150, 1650 50 L 1650 900 L -200 900 Z"
            fill="url(#rcs-wave-grad-1)"
          />
          <path
            d="M-150 850 C 250 800, 600 500, 950 420 C 1250 350, 1450 220, 1650 150 L 1650 900 L -150 900 Z"
            fill="url(#rcs-wave-grad-2)"
          />

          {/* Sharp glowing electric blue flare line slicing across */}
          <path
            d="M-150 840 C 250 790, 600 495, 950 415 C 1250 345, 1450 215, 1650 145"
            stroke="url(#rcs-flare-line)"
            strokeWidth="3.5"
            filter="url(#rcs-glow)"
          />
          <path
            d="M-150 840 C 250 790, 600 495, 950 415 C 1250 345, 1450 215, 1650 145"
            stroke="#ffffff"
            strokeWidth="1"
            opacity="0.7"
          />
        </svg>

        {/* Subtle dot/mesh grid overlay */}
        <div className="absolute inset-0 automex-mesh-lines opacity-15"></div>
      </div>
    );
  }

  // Hero variant (default)
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Deep Black base */}
      <div className="absolute inset-0 bg-[#050505]"></div>

      {/* Ambient Cobalt Glows */}
      <div className="absolute -top-32 right-1/4 w-[700px] h-[700px] rounded-full bg-[#0757C8]/28 blur-[160px]"></div>
      <div className="absolute top-1/3 -left-32 w-[550px] h-[550px] rounded-full bg-[#0757C8]/20 blur-[150px]"></div>

      {/* Reference Image: Sweeping Curved Wave Ribbon & Electric Glow Flare */}
      <svg
        className="absolute inset-0 w-full h-full object-cover opacity-90"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="hero-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#050505" stopOpacity="0" />
            <stop offset="30%" stopColor="#0757C8" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#0c6bf0" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#050505" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="hero-wave-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#050505" stopOpacity="0" />
            <stop offset="40%" stopColor="#0757C8" stopOpacity="0.3" />
            <stop offset="85%" stopColor="#38bdf8" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#050505" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="hero-flare-line" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0757C8" stopOpacity="0" />
            <stop offset="35%" stopColor="#0757C8" stopOpacity="0.8" />
            <stop offset="65%" stopColor="#38bdf8" stopOpacity="1" />
            <stop offset="85%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#050505" stopOpacity="0" />
          </linearGradient>

          <filter id="hero-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Geometric elements: Angled translucent sheets from brand style guide */}
        <path
          d="M300 -100 L950 750 L1150 750 L500 -100 Z"
          fill="url(#hero-wave-grad-1)"
          opacity="0.25"
        />
        <path
          d="M600 -100 L1250 750 L1450 750 L800 -100 Z"
          fill="url(#hero-wave-grad-1)"
          opacity="0.15"
        />

        {/* Primary flowing ribbon waves from reference image */}
        <path
          d="M-150 550 C 200 480, 500 280, 850 180 C 1150 90, 1400 120, 1650 20 L 1650 900 L -150 900 Z"
          fill="url(#hero-wave-grad-1)"
        />
        <path
          d="M-100 700 C 300 620, 650 390, 1000 280 C 1280 190, 1480 170, 1650 100 L 1650 900 L -100 900 Z"
          fill="url(#hero-wave-grad-2)"
        />

        {/* Sharp glowing electric blue flare line slicing across */}
        <path
          d="M-100 690 C 300 610, 650 380, 1000 270 C 1280 180, 1480 160, 1650 90"
          stroke="url(#hero-flare-line)"
          strokeWidth="3.5"
          filter="url(#hero-glow)"
        />
        <path
          d="M-100 690 C 300 610, 650 380, 1000 270 C 1280 180, 1480 160, 1650 90"
          stroke="#ffffff"
          strokeWidth="1.2"
          opacity="0.8"
        />
      </svg>

      {/* Subtle dot/mesh grid overlay */}
      <div className="absolute inset-0 automex-mesh-lines opacity-15"></div>
    </div>
  );
}
