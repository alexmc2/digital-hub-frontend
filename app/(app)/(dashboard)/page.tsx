'use client';

import Hero from '@/components/hero';
import PostsList from '@/app/(app)/posts/posts-list';
import Boxes from '@/components/boxes';
import Sidebar from '@/components/sidebar';
import Link from 'next/link';
import { useAuthContext } from '@/app/context';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function Home() {
  const pathname = usePathname();
  const { user } = useAuthContext();
  return (
    <>
      <Hero />

      {/* Page content */}
      <section>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 dark:bg-slate-900 bg-white text-black dark:text-slate-200">
          <div className="md:flex md:justify-between md:divide-x dark:md:divide-slate-800 ">
            {/* Main content */}

            <div className="md:grow pt-6 pb-12 md:pb-20">
              <div className="md:pr-6 lg:pr-10">
                <div className="border-b dark:border-slate-800 border-slate-200 pb-4 mb-10">
                  <div className="text-center md:text-left md:flex justify-between items-center">
                    {user ? (
                      <>
                        <div className="mb-4 md:mb-0 md:order-1 md:ml-6">
                          <Link href="/posts/new/">
                            <button className="btn-sm py-1.5 text-white bg-sky-400 hover:bg-sky-600">
                              Create Post
                            </button>
                          </Link>
                        </div>

                        <ul className="grow inline-flex flex-wrap text-lg -mx-3 -my-1">
                          <li className="px-3 py-1">
                            <Link
                              className={clsx(
                                'text-slate-500 hover:text-slate-200 transition duration-150 ease-in-out',
                                {
                                  'text-sky-400': pathname === '/',
                                }
                              )}
                              href="/"
                            >
                              <span>Latest Posts</span>
                            </Link>
                          </li>
                          <li className="px-3 py-1">
                            <Link
                              className={clsx(
                                'text-slate-500 hover:text-slate-200 transition duration-150 ease-in-out',
                                {
                                  'text-sky-400': pathname === '/profile/followers',
                                }
                              )}
                              href="/profile/followers"
                            >
                              <span>Followers</span>
                            </Link>
                          </li>
                          <li className="px-3 py-1">
                            <Link
                              className={clsx(
                                'text-slate-500 hover:text-slate-200 transition duration-150 ease-in-out',
                                {
                                  'text-sky-400': pathname === '/following',
                                }
                              )}
                              href="/following"
                            >
                              <span>Following</span>
                            </Link>
                          </li>
                        </ul>
                      </>
                    ) : (
                      <>
                        {/* Content for not logged-in users */}
                        <ul className="grow inline-flex flex-wrap text-lg -mx-3 -my-1">
                          <li className="px-3 py-1">
                            <Link
                              className={clsx(
                                'text-slate-500 hover:text-slate-200 transition duration-150 ease-in-out',
                                {
                                  'text-sky-400': pathname === '/',
                                }
                              )}
                              href="/"
                            >
                              <span>Latest Posts</span>
                            </Link>
                          </li>
                        </ul>
                      </>
                    )}
                  </div>
                </div>

                <PostsList />

                <Boxes />
              </div>
            </div>

            <Sidebar />
          </div>
        </div>
      </section>
    </>
  );
}
