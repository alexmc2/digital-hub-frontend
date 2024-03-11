import Link from 'next/link';
import HeaderLogo from '@/components/ui/header-logo';
import MobileMenu from './mobile-menu';

export default function Header() {
  return (
    <header className="sticky top-0 w-full bg-slate-900 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <HeaderLogo />

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center nav-list">
              <li>
                <Link href="/futurism" className="nav-link">
                  Futurism
                </Link>
              </li>
              <li>
                <Link href="/ai" className="nav-link">
                  AI
                </Link>
              </li>
              <li>
                <Link href="/cybersecurity" className="nav-link">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/data-science" className="nav-link">
                  Tech
                </Link>
              </li>
              <li>
                <Link href="/data-science" className="nav-link">
                  Latest News
                </Link>
              </li>
            </ul>
          </nav>
          {/* Desktop sign in links */}
          <ul className="flex-1 flex justify-end items-center ml-6">
            <li>
              <Link
                className="font-medium text-md text-slate-400 hover:text-white whitespace-nowrap transition duration-150 ease-in-out"
                href="/signin"
              >
                Sign in
              </Link>
            </li>
            <li className="ml-6">
              <Link
                className="font-medium text-md text-slate-400 hover:text-white whitespace-nowrap transition duration-150 ease-in-out"
                href="/signup"
              >
                <span className="relative inline-flex items-center">
                  Sign up{' '}
                </span>
              </Link>
            </li>
          </ul>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
