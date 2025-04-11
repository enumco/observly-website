import Link from 'next/link'

export default function Header({ nav = true }: {
  nav?: boolean
}) {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link className="flex items-center space-x-2" href="/" aria-label="Observly">
              <svg width="300" height="100" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="gradientText" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#818cf8" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
                <text x="0" y="70" fontFamily="Segoe UI, sans-serif" fontSize="36" fontWeight="600" fill="url(#gradientText)">
                  Observly.
                </text>
              </svg>
            </Link>
          </div>
          {/* Desktop navigation */}
          {nav &&
            <nav className="flex grow">
              {/* Desktop sign in links */}
              <ul className="flex grow justify-end flex-wrap items-center">
                <li>
                  <Link className="font-medium text-slate-500 hover:text-slate-300 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" href="/signin">Sign in</Link>
                </li>
                <li className="ml-3">
                  <Link className="btn-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-xs group" href="/signup">
                    Get Started <span className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </Link>
                </li>
              </ul>
            </nav>
          }
        </div>
      </div>
    </header>
  )
}
