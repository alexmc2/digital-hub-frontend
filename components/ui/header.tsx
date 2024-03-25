'use client';

import Link from 'next/link';
import HeaderLogo from '@/components/ui/header-logo';
import MobileMenu from './mobile-menu';
import ThemeToggle from './theme-toggle';
import { useAuthContext } from '@/app/context';

import React from 'react';

export default function Header() {
  const { user, logout, isLoading } = useAuthContext();

  return (
    <header className="sticky top-0 w-full dark:bg-slate-900 bg-white text-black dark:text-slate-200 z-50 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <HeaderLogo />
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center nav-list">
              <li>
                <Link
                  href="/futurism"
                  className="nav-link hover:text-slate-400 whitespace-nowrap transition duration-150 ease-in-out"
                >
                  Futurism
                </Link>
              </li>
              <li>
                <Link
                  href="/ai"
                  className="nav-link hover:text-slate-400 whitespace-nowrap transition duration-150 ease-in-out"
                >
                  AI
                </Link>
              </li>
              <li>
                <Link
                  href="/cybersecurity"
                  className="nav-link hover:text-slate-400 whitespace-nowrap transition duration-150 ease-in-out"
                >
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link
                  href="/data-science"
                  className="nav-link hover:text-slate-400 whitespace-nowrap transition duration-150 ease-in-out"
                >
                  Tech
                </Link>
              </li>
              <li>
                <Link
                  href="/data-science"
                  className="nav-link hover:text-slate-400 whitespace-nowrap transition duration-150 ease-in-out"
                >
                  Latest News
                </Link>
              </li>
            </ul>
          </nav>
          {/* Desktop sign in links */}
          <ThemeToggle />
          {!isLoading ? (
            !user ? (
              // Unauthenticated state UI
              <ul className="flex-1 flex justify-end items-center ml-6">
                <li>
                  <Link
                    className="font-medium text-md text-slate-600 dark:text-slate-400 hover:text-white whitespace-nowrap transition duration-150 ease-in-out"
                    href="/login"
                  >
                    Sign in
                  </Link>
                </li>
                <li className="mx-6">
                  <Link
                    className="font-medium text-md text-slate-600 dark:text-slate-400 hover:text-white whitespace-nowrap transition duration-150 ease-in-out"
                    href="/register"
                  >
                    Sign up
                  </Link>
                </li>
              </ul>
            ) : (
              // Authenticated state UI
              <ul className="flex-1 flex justify-end items-center ml-6">
                <li>
                  <Link
                    className="font-medium text-md text-slate-600 dark:text-slate-400 hover:text-white whitespace-nowrap transition duration-150 ease-in-out mr-6"
                    href={`/profile/${user.id}`}
                  >
                    {user?.name}
                  </Link>
                </li>
                <button
                  onClick={logout}
                  className="btn-sm py-1.5 text-white bg-sky-400 hover:bg-sky-600"
                >
                  Logout
                </button>
              </ul>
            )
          ) : (
            // Loading state UI
            <div className="ml-6 animate-pulse">
              <div className="h-8 w-24 "></div>
            </div>
          )}

          {/* Mobile navigation */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
