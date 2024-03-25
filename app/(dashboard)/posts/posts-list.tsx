

import Link from 'next/link';
import Image from 'next/image';

import { getAllPosts } from '@/utils/api/api';

// export default async function PostsList() {
//   const postsData: Promise<Post[]> = getAllPosts();
//   const posts = await postsData;

export default async function PostsList() {
  const response = await getAllPosts(); 
  const posts = response.data; 



  return (
    <div>
      {/* Content header */}
      <div className="border-b dark:border-slate-800 border-slate-200 pb-6 mb-10">
        <div className="text-center md:text-left md:flex justify-between items-center">
          {/* Right: Button */}
          <div className="mb-4 md:mb-0 md:order-1 md:ml-6">
            <Link href="/posts/new/">
              <button className="btn-sm py-1.5 text-white bg-sky-400 hover:bg-sky-600">
                Create Post
              </button>
            </Link>
          </div>

          {/* Left: Links */}
          <ul className="grow inline-flex flex-wrap text-sm font-medium -mx-3 -my-1">
            <li className="px-3 py-1">
              <a
                className="text-sky-400 relative transition duration-150 ease-in-out"
                href="#0"
              >
                <span>Popular</span>
              </a>
            </li>
            <li className="px-3 py-1">
              <Link
                className="text-slate-500 hover:text-slate-200 transition duration-150 ease-in-out"
                href="#0"
              >
                <span>Newest</span>
              </Link>
            </li>
            <li className="px-3 py-1">
              <Link
                className="text-slate-500 hover:text-slate-200 transition duration-150 ease-in-out"
                href="#0"
              >
                <span>Following</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Posts list */}
      <div className="mb-12">
        <div className="flex flex-col space-y-6 mb-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-slate-50 border border-slate-200 rounded dark:bg-slate-800 dark:border-slate-700"
            >
              <div className="relative p-3">
                <div className="sm:flex items-center space-y-3 sm:space-y-0 sm:space-x-5">
                  <div className="shrink-0"></div>
                  <div className="grow lg:flex items-center justify-between space-y-5 lg:space-x-6 lg:space-y-0">
                    <div>
                      <div className="mb-2">
                        <h2 className="dark:text-slate-200 text-black font-semibold hover:text-white transition duration-150 ease-in-out text-xl">
                          <Link href={`/posts/${post.id}`}>
                            <div>{post.title}</div>
                          </Link>
                        </h2>
                      </div>
                      <div className="flex items-center">
                        <Image
                          className=""
                          src={post?.image}
                          width="150"
                          height="150"
                          alt={post.user.name}
                        />
                        <div className="text-md text-slate-600">
                          <a
                            className="font-medium text-sky-400 hover:text-sky-400 transition duration-150 ease-in-out"
                            href="#0"
                          >
                            {post.user.name}
                          </a>
                          <span className="text-slate-500">{post.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show more */}
        <div className="text-right">
          <button className="btn-sm py-1.5 h-8 text-sky-400 border dark:border-slate-800 border-slate-200 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20 hover:bg-slate-800">
            Show More <span className="tracking-normal ml-1">-&gt;</span>
          </button>
        </div>
      </div>
    </div>
  );
}
