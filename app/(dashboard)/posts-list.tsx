{
  /*
Note: This code includes an example of how to fetch data from an external JSON file that is hosted at https://raw.githubusercontent.com/cruip/cruip-dummy/main/beyond bytes-posts.json. To facilitate this, we've included a lib directory in the root which contains a function that can fetch the JSON content. Additionally, we've defined the Post types in the types.d.ts file located in the root.
*/
}

import Link from 'next/link';
import Image from 'next/image';

import getAllPosts from '@/lib/getAllPosts';

export default async function PostsList() {
  const postsData: Promise<Post[]> = getAllPosts();
  const posts = await postsData;

  return (
    <div>
      {/* Content header */}
      <div className="border-b dark:border-slate-800 border-slate-200 pb-6 mb-10">
        <div className="text-center md:text-left md:flex justify-between items-center">
          {/* Right: Button */}
          <div className="mb-4 md:mb-0 md:order-1 md:ml-6">
            <button className="btn-sm py-1.5 text-white bg-sky-400 hover:bg-sky-600">
              Create Post
            </button>
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
              <a
                className="text-slate-500 hover:text-slate-200 transition duration-150 ease-in-out"
                href="#0"
              >
                <span>Newest</span>
              </a>
            </li>
            <li className="px-3 py-1">
              <a
                className="text-slate-500 hover:text-slate-200 transition duration-150 ease-in-out"
                href="#0"
              >
                <span>Following</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Posts */}
      <div className="mb-12">
        {/* List container */}
        <div className="flex flex-col space-y-6 mb-8">
          {posts.map((post) => {
            return (
              <div
                key={post.id}
                // className="[&:nth-child(-n+4)]:-order-1  dark:bg-gradient-to-tr dark:from-slate-800/20 dark:via-slate-800/50 dark:to-slate-800/20 bg-gradient-to-t from-slate-50 to-white"
                className="bg-slate-50 border border-slate-200 rounded dark:bg-slate-800 dark:border-slate-700"
              >
                <div className="relative p-3">
                  <div
                    className="absolute inset-0 -m-px pointer-events-none -z-10 before:absolute before:inset-0 before:bg-gradient-to-t before:from-slate-700 before:to-slate-800 after:absolute after:inset-0 after:bg-slate-900 after:m-px"
                    aria-hidden="true"
                  />
                  <div className="sm:flex items-center space-y-3 sm:space-y-0 sm:space-x-5">
                    <div className="shrink-0">
                      <Image
                        src="/images/image.jpg" // Correct path, assuming the image is in the public/images directory
                        alt="background"
                        width={200}
                        height={200}
                      />

                      {/* <span className="grow text-center text-xs font-medium text-sky-400">
                        {post.votes}
                      </span> */}
                    </div>
                    <div className="grow lg:flex items-center justify-between space-y-5 lg:space-x-6 lg:space-y-0">
                      <div>
                        <div className="mb-2">
                          <h2>
                            <Link
                              className="dark:text-slate-200 text-black font-semibold hover:text-white transition duration-150 ease-in-out text-xl"
                              href={`/posts/${post.id}`}
                            >
                              {post.title}
                            </Link>
                          </h2>
                        </div>
                        <div className="flex items-center">
                          <img
                            className="rounded-full mr-2"
                            src={post.authorImage}
                            width="16"
                            height="16"
                            alt={post.author}
                          />
                          <div className="text-xs text-slate-600">
                            <a
                              className="font-medium text-sky-400 hover:text-sky-400 transition duration-150 ease-in-out"
                              href="#0"
                            >
                              {post.author}
                            </a>{' '}
                            ·{' '}
                            <span className="text-slate-500">{post.date}</span>{' '}
                            ·{' '}
                            <span className="text-slate-500">
                              {post.comments} Comment
                              {post.comments === 1 ? '' : 's'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
