export const metadata = {
  title: 'Home - Beyond Bytes',
  description: 'Page description',
};
import Hero from '@/components/hero';
import PostsList from './posts-list';
import Boxes from '@/components/boxes';
import Sidebar from '@/components/sidebar';

export default function Home() {
  return (
    <>
      <Hero />

      {/* Page content */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 dark:bg-slate-900 bg-white text-black dark:text-slate-200">
          <div className="md:flex md:justify-between md:divide-x dark:md:divide-slate-800 ">
            {/* Main content */}
            <div className="md:grow pt-6 pb-12 md:pb-20">
              <div className="md:pr-6 lg:pr-10">
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
