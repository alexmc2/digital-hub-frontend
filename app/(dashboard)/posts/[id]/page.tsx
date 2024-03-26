import { getAllPosts, viewSinglePost } from '@/utils/api/api';
import Image from 'next/image';


export async function generateStaticParams() {
  const response = await getAllPosts();
  const posts = response.data;
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function SinglePost({
  params,
}: {
  params: { id: string };
}) {
  const response = await viewSinglePost(params.id);
  const post = response.data;

  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-12">
          <div className="flex justify-center">
            <div className="max-w-screen-xl">
              <article className="mb-10">
                <header className="mb-6 text-center">
                  <div className="text-lg text-slate-600">
                    <div className="font-medium text-slate-400 dark:text-slate-400 transition duration-150 ease-in-out my-6">
                      {post.topic}
                    </div>
                  </div>
                  <h1 className="h2 font-aspekta text-slate-700 dark:text-slate-200 my-6">
                    {post.title}
                  </h1>
                  <div className="flex items-center text-center justify-center space-x-2">
                    {/* <img
                      src={post.user.avatar}
                      alt="User Avatar"
                      width="40"
                      height="40"
                      className="rounded-full"
                    /> */}
                    <div className="text-lg text-slate-600 justify-center my-4">
                      <a
                        className="font-medium text-sky-500 hover:text-sky-400 transition duration-150 ease-in-out "
                        href="#0"
                      >
                        By {post.user.name}
                      </a>
                      <div className="text-slate-400">
                        {new Date(post.created_at).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </header>
                {post.image && (
                  <div className="mb-8">
                    <Image
                      src={post.image}
                      width={624}
                      height={352}
                      alt="Post image"
                      className="mx-auto"
                    />
                  </div>
                )}
                <div className="text-slate-400 space-y-6">
                  <p>{post.body}</p>
                </div>
              </article>
              {/* Add comment form and comments list */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
