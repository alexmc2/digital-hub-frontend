import Link from 'next/link';
import HeaderLogo from '@/components/ui/header-logo';

export default function Header() {
  return (
    <header className="sticky top-0 w-full bg-slate-900 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <HeaderLogo />

          {/* Desktop navigation */}
          <nav className="flex grow ">
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
                  Data Science
                </Link>
              </li>
              <li>
                <Link href="/data-science" className="nav-link">
                  Latest News
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm font-medium text-slate-400 hover:text-slate-200 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  href="/signin"
                >
                  Sign in
                </Link>
              </li>
              <li className="ml-3">
                <Link
                  className="text-sm font-medium text-slate-400 hover:text-slate-200 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  href="/join"
                >
                  Join
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
