// {
//   /*
// Note: This code includes an example of how to fetch data from an external JSON file that is hosted at https://raw.githubusercontent.com/cruip/cruip-dummy/main/beyond bytes-posts.json. To facilitate this, we've included a lib directory in the root which contains a function that can fetch the JSON content. Additionally, we've defined the Post types in the types.d.ts file located in the root.
// */
// }

// import getAllPosts from '@/lib/getAllPosts';
// import type { Metadata } from 'next';
// import { notFound } from 'next/navigation';
// import Image from 'next/image';
// import Sidebar from '@/components/sidebar';
// import Comments from './comments';
// import PostImage from '@/public/images/post-image.jpg';

// export async function generateStaticParams() {
//   const postsData: Promise<Post[]> = getAllPosts();
//   const posts = await postsData;

//   return posts.map((post) => ({
//     id: post.id.toString(),
//   }));
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: { id: number };
// }): Promise<Metadata> {
//   const postsData: Promise<Post[]> = getAllPosts();
//   const posts = await postsData;
//   const post = posts.find((post) => post.id === Number(params.id));

//   if (!post) {
//     return {
//       title: 'Post Not Found',
//     };
//   }

//   return {
//     title: post.title,
//     description: 'Page description',
//   };
// }

// export default async function SinglePost({
//   params,
// }: {
//   params: { id: number };
// }) {
//   const postsData: Promise<Post[]> = getAllPosts();
//   const posts = await postsData;
//   const post = posts.find((post) => post.id === Number(params.id));

//   if (!post) {
//     notFound();
//   }

//   return (
//     <section>
//       <div className="max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="pt-28 md:pt-36">
//           <div className="md:flex md:justify-between md:divide-x md:divide-slate-800">
//             {/* Page content*/}
//             <div className="md:grow pt-6 pb-12 md:pb-20">
//               <div className="md:pr-6 lg:pr-20">
//                 <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
//                   {/* Upvotes button */}
//                   <div className="shrink-0">
//                     <button className="sticky top-6 flex flex-col items-center text-center w-14 h-14 px-1 py-3 rounded border dark:border-slate-800 border-slate-200 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20 hover:bg-slate-800 transition duration-150 ease-in-out">
//                       <svg
//                         className="inline-flex fill-sky-400 mb-1"
//                         width="11"
//                         height="7"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path d="M1.664 6.747.336 5.253 5.5.662l5.164 4.591-1.328 1.494L5.5 3.338z" />
//                       </svg>
//                       <span className="text-xs font-medium text-sky-400">
//                         {post.votes}
//                       </span>
//                     </button>
//                   </div>

//                   {/* Content */}
//                   <div>
//                     <article className="mb-10">
//                       {/* Post header */}
//                       <header className="mb-6">
//                         <h1 className="h2 font-aspekta text-slate-200 mb-4">
//                           {post.title}
//                         </h1>
//                         <div className="flex items-center">
//                           <img
//                             className="rounded-full mr-2"
//                             src={post.authorImage}
//                             width="20"
//                             height="20"
//                             alt={post.author}
//                           />
//                           <div className="text-sm text-slate-600">
//                             <a
//                               className="font-medium text-sky-400 hover:text-sky-400 transition duration-150 ease-in-out"
//                               href="#0"
//                             >
//                               {post.author}
//                             </a>{' '}
//                             ·{' '}
//                             <span className="text-slate-500">{post.date}</span>{' '}
//                             ·{' '}
//                             <span className="text-slate-500">
//                               {post.comments} Comment
//                               {post.comments === 1 ? '' : 's'}
//                             </span>
//                           </div>
//                         </div>
//                       </header>

//                       {/* Post content */}
//                       <div className="text-slate-400 space-y-6">
//                         <p>
//                           SaaS adoption is snowballing. A recent Harvey Nash
//                           survey revealed that SaaS was voted the most important
//                           technology in helping achieve business goals.
//                         </p>
//                         <p className="italic pl-3 border-l-2 border-slate-600">
//                           Metrics research found that organizations with more
//                           than 1,000 employees use over 150 SaaS applications 🙌
//                         </p>
//                         <p>
//                           Products within the SaaS industry serve an immense
//                           number of functions. While some are intended to cater
//                           to the specific needs of a particular group of users,
//                           others help a hugely diverse client base, providing
//                           solutions to a broader market. This critical
//                           distinction has resulted in two key SaaS models:{' '}
//                           <a
//                             className="font-medium text-sky-400 hover:text-sky-400 transition duration-150 ease-in-out"
//                             href="#0"
//                           >
//                             vertical and horizontal
//                           </a>
//                           .
//                         </p>
//                         <Image
//                           src={PostImage}
//                           width="624"
//                           height="352"
//                           alt="Post image"
//                         />
//                         <p>
//                           If you're thinking of becoming part of the SaaS
//                           industry, you'll need to clearly understand these{' '}
//                           <strong className="font-medium text-slate-200">
//                             two different models and determine which one is
//                             right for your business
//                           </strong>
//                           . Simply put - the better your understanding of these
//                           services, the higher your chances of success are.
//                         </p>
//                         <h2 className="text-xl font-bold text-slate-200">
//                           The 7 Key Differences Between Vertical and Horizontal
//                           SaaS
//                         </h2>
//                         <h3 className="text-lg font-bold text-slate-200">
//                           Scope of Industries and Market Size
//                         </h3>
//                         <p>
//                           The vertical SaaS business model is an end-to-end
//                           solution designed for the needs of a specific sector.
//                           These solutions' software features are specially
//                           designed to streamline particular industry operations.
//                           On the other hand, horizontal SaaS solutions are less
//                           industry-personalized and more problem-oriented. Their
//                           increased applicability across several industries sets
//                           them apart from horizontal SaaS.
//                         </p>
//                         <h3 className="text-lg font-bold text-slate-200">
//                           Customer Acquisition and Retention Approaches
//                         </h3>
//                         <p>
//                           In the vertical SaaS model, acquiring customers takes
//                           less time and effort than in horizontal SaaS. As you
//                           can imagine, if only a few businesses offer solutions
//                           to a niche problem, customers will likely choose a
//                           business and stick with it. Make sure you have a look
//                           over our SaaS customer acquisition guide, as it might
//                           come in handy.
//                         </p>
//                       </div>
//                     </article>

//                     {/* Comment form */}
//                     <form className="mb-4">
//                       <div className="w-full mb-5">
//                         <label className="sr-only" htmlFor="comment">
//                           Comment
//                         </label>
//                         <textarea
//                           id="comment"
//                           rows={4}
//                           className="form-textarea w-full placeholder:italic"
//                           placeholder="Say something nice to IndieMark\u2026"
//                         />
//                       </div>
//                       <div className="text-right">
//                         <button
//                           className="btn-sm py-1.5 text-white bg-sky-400 hover:bg-sky-600"
//                           type="submit"
//                         >
//                           Post Comment
//                         </button>
//                       </div>
//                     </form>

//                     {/* Comments list */}
//                     <Comments />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <Sidebar />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';

const page = () => {
  return <div>page</div>;
};

export default page;
