const icons = {
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 8 4-8 4-8-4 8-4Z" />
      <path d="m4 12 8 4 8-4M4 17l8 4 8-4" />
    </>
  ),
  spark: (
    <>
      <path d="m12 3-1.2 5.2L6 10l4.8 1.8L12 17l1.2-5.2L18 10l-4.8-1.8L12 3Z" />
      <path d="m18.5 16-.6 2.2-1.9.8 1.9.8.6 2.2.6-2.2L21 19l-1.9-.8-.6-2.2Z" />
    </>
  ),
  screen: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </>
  ),
  atom: (
    <>
      <circle cx="12" cy="12" r="1.5" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)" />
    </>
  ),
  meter: (
    <>
      <path d="M5 18a8 8 0 1 1 14 0" />
      <path d="m12 14 4-5" />
      <path d="M8 18h8" />
    </>
  ),
  formula: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7 8h4M7 12h2M7 16h4M15 8l3 8M18 8l-3 8" />
    </>
  ),
  circuit: (
    <>
      <circle cx="5" cy="12" r="2" />
      <circle cx="19" cy="7" r="2" />
      <circle cx="19" cy="17" r="2" />
      <path d="M7 12h4a3 3 0 0 0 3-3 2 2 0 0 1 2-2h1M7 12h4a3 3 0 0 1 3 3 2 2 0 0 0 2 2h1" />
    </>
  ),
  book: (
    <>
      <path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H12v18H7.5A3.5 3.5 0 0 0 4 23V5.5Z" />
      <path d="M20 5.5A3.5 3.5 0 0 0 16.5 2H12v18h4.5A3.5 3.5 0 0 1 20 23V5.5Z" />
    </>
  ),
  link: (
    <>
      <path d="m9.5 14.5 5-5" />
      <path d="M7 17H5a4 4 0 0 1 0-8h4M17 7h2a4 4 0 0 1 0 8h-4" />
    </>
  ),
  calculator: (
    <>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M8 6h8M8 11h1M12 11h1M16 11h1M8 15h1M12 15h1M16 15h1M8 19h1M12 19h5" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16.5 8" />
    </>
  ),
  arrow: <path d="M5 12h14M14 7l5 5-5 5" />,
  bolt: <path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z" />,
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
}

function Icon({ name, size = 24, className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    >
      {icons[name] ?? icons.bolt}
    </svg>
  )
}

export default Icon
