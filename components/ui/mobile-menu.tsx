'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="md:hidden flex items-center ml-4">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-slate-300 hover:text-white transition duration-150 ease-in-out"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="2" width="20" height="2" rx="1" />
          <rect y="9" width="20" height="2" rx="1" />
          <rect y="16" width="20" height="2" rx="1" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute top-full z-20 left-0 w-full px-0 overflow-hidden transition-all duration-300 ease-in-out"
        style={
          mobileNavOpen
            ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0.8 }
        }
      >
        <ul className=" [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] rounded-lg px-4 py-1.5">
          <li>
            <Link
              className="flex font-medium text-md text-slate-300 hover:text-white py-1.5 nav-link"
              href="/futurism"
            >
              Futurism
            </Link>
          </li>
          <li>
            <Link
              className="flex font-medium text-md text-slate-300 hover:text-white py-1.5 nav-link"
              href="/integrations"
            >
              AI
            </Link>
          </li>
          <li>
            <Link
              className="flex font-medium text-md text-slate-300 hover:text-white py-1.5 nav-link"
              href="/pricing"
            >
              Cybersecurity
            </Link>
          </li>
          <li>
            <Link
              className="flex font-medium text-md text-slate-300 hover:text-white py-1.5 nav-link"
              href="/customers"
            >
              Tech
            </Link>
          </li>
          <li>
            <Link
              className="flex font-medium text-md text-slate-300 hover:text-white py-1.5 nav-link"
              href="/changelog"
            >
              Latest news
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
