export default function SignalDivider() {
  return (
    <div className="sig-divider reveal" aria-hidden="true">
      <svg viewBox="0 0 1200 24" preserveAspectRatio="none">
        <defs>
          <linearGradient
            id="sigdg"
            x1="0"
            y1="0"
            x2="1200"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#42EAFF" />
            <stop offset="0.5" stopColor="#4272FF" />
            <stop offset="1" stopColor="#FF7E42" />
          </linearGradient>
        </defs>
        <path
          d="M0 12 H520 l9 -8 7 16 7 -20 7 24 7 -12 H1200"
          fill="none"
          stroke="url(#sigdg)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
