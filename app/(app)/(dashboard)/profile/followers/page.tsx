'use client';

import Hero from '@/components/hero';
import PostsList from '@/app/(app)/posts/posts-list';
import Boxes from '@/components/boxes';
import Sidebar from '@/components/sidebar';
import Link from 'next/link';
import { useAuthContext } from '@/app/context';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Home from '@/app/(app)/(dashboard)/page';

export default function Followers() {

  return (
    <>
      <Home />

      {/* Page content */}
      <section>
       
      </section>
    </>
  );
}
