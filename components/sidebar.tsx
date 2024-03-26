import Link from 'next/link';
import Image from 'next/image';

import { getAllPosts } from '@/utils/api/api';


export default async function Sidebar() {
  // Since we're in a server component, we can use top-level await.
  const response = await getAllPosts();
  const posts = response.data;

  return (
    <aside className="md:w-64 lg:w-80 md:shrink-0 pt-6 pb-12 md:pb-20">
      <div className="md:pl-6 lg:pl-10">
        {/* Sidebar content */}
        <div className="space-y-6">
          {/* Search form */}
          <form>
            <div className="flex flex-wrap">
              <div className="w-full">
                <label className="block text-sm sr-only" htmlFor="search">
                  Search
                </label>
                <div className="relative flex items-center">
                  <input
                    id="search"
                    type="search"
                    className="form-input py-1 w-full pl-10 rounded-full"
                  />
                  <div className="absolute inset-0 right-auto flex items-center justify-center">
                    <svg
                      className="w-4 h-4 shrink-0 mx-3"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="fill-slate-600"
                        d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm8.707 12.293a.999.999 0 11-1.414 1.414L11.9 13.314a8.019 8.019 0 001.414-1.414l2.393 2.393z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </form>

          {/* Popular Posts */}

          <div>
            <div className="text-md uppercase text-slate-700 dark:text-slate-200 font-semibold mb-4">
              Popular Posts
            </div>
            {/* Posts list */}
            <div className="space-y-2">
              {posts.map((post) => (
                <Link key={post.id} href={`/posts/${post.id}`}>
                  <div className="flex items-center space-x-4  py-2 ">
                    <Image
                      src={post.image} // Use a default image if `post.image` is not available
                      width={80} // Adjust the size as needed
                      height={50} // Adjust the size as needed
                      alt={post.title}
                    />
                    <div>
                      <h5 className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-slate-400 ">
                        {post.title}
                      </h5>
                      <p className="text-xs text-sky-500">{post.user.name}</p>
                      <div className="text-xs text-slate-700 dark:text-slate-200 ">
                        {new Date(post.created_at).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="">
            <div className="relative p-5 bg-gradient-to-tr dark:from-slate-800/20 dark:via-slate-800/50 dark:to-slate-800/20 from-slate-100 via-slate-200/50 to-slate-200/20">
              <div
                className="absolute inset-0 -m-px pointer-events-none -z-10 before:absolute before:inset-0 before:bg-gradient-to-t before:from-slate-700 before:to-slate-800 after:absolute after:inset-0 after:bg-slate-900 after:m-px"
                aria-hidden="true"
              />
              <div className="font-semibold text-center  bg-slate-50 border border-slate-200 rounded dark:bg-slate-800 dark:border-slate-700 dark:from-sky-500 dark:via-sky-300 dark:to-sky-500 from-sky-500 via-sky-500 to-sky-500  mb-3">
                Get the best of Beyond Bytes, directly in your inbox.
              </div>
              {/* Form */}
              <div className="w-full">
                <label className="block text-sm sr-only" htmlFor="newsletter">
                  Email
                </label>
                <form className="relative flex items-center max-w-xs mx-auto">
                  <input
                    id="newsletter"
                    type="email"
                    className="form-input py-1.5 w-full pr-10 rounded-full"
                    placeholder="Your email"
                  />
                  <button
                    type="submit"
                    className="absolute inset-0 left-auto"
                    aria-label="Subscribe"
                  >
                    <svg
                      className="w-3 h-3 fill-current text-sky-400 mx-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </button>
                </form>
                {/* Success message */}
                {/* <p className="mt-2 text-slate-200 text-center text-xs">Thanks for subscribing!</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
