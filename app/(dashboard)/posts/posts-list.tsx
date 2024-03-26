import Link from 'next/link';
import Image from 'next/image';

import { getAllPosts } from '@/utils/api/api';

export default async function PostsList() {
  const response = await getAllPosts();
  const posts = response.data;

  return (
    <div className="mb-12">
      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-slate-50 border border-slate-200 rounded dark:bg-slate-800 dark:border-slate-700 overflow-hidden"
          >
            <Link href={`/posts/${post.id}`}>
              <Image
                src={post?.image}
                width={450}
                height={250}
                alt={post.title}
              />
              <div className="p-4">
                <h2 className="dark:text-slate-200 text-black font-semibold hover:text-white transition duration-150 ease-in-out text-xl mb-2">
                  {post.title}
                </h2>
                <div className="flex items-center justify-between text-md text-slate-600">
                  <span className="font-medium text-sky-400 hover:text-sky-400 transition duration-150 ease-in-out">
                    {post.user.name}
                  </span>
                  <span className="text-slate-500">{post.date}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Show more button */}
      <div className="text-right">
        <button className="btn-sm py-1.5 h-8 text-sky-400 border dark:border-slate-800 border-slate-200 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20 hover:bg-slate-800">
          Show More <span className="tracking-normal ml-1">-&gt;</span>
        </button>
      </div>
    </div>
  );
}
