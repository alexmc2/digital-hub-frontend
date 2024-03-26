'use client';
import { useState } from 'react';
import axios from '@/lib/axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Autosave, useAutosave } from 'react-autosave';

const CreatePostPage = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const [errors, setErrors] = useState({
    title: '',
    body: '',
    image: '',
    topic: '',
  });

  const [topic, setTopic] = useState('');
  const topics = ['Futurism', 'AI', 'Tech', 'Cybersecurity', 'Latest News'];

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setImage(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({ title: '', body: '', image: '', topic: '' });
    const formData = new FormData();
    formData.append('title', title);
    formData.append('body', body);
    if (image) {
      formData.append('image', image);
    }
    formData.append('topic', topic);
    try {
      const response = await axios.post('/api/create-post', formData);
      const postId = response.data.data.id; // Extract the postId from the response data
      router.push(`/posts/${postId}`); // Redirect to the post page using the postId
    } catch (error: any) {
      setErrors(error.response?.data.errors || {});
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="p-6 m-4 bg-white rounded shadow-md w-full max-w-3xl dark:bg-slate-800 dark:border-slate-700">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="post-title"
              className="block text-sm font-medium text-gray-700 dark:text-slate-400 pb-2"
            >
              Title
            </label>
            <input
              id="post-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Enter Post Title"
              className="input input-bordered w-full bg-white text-black dark:bg-slate-700 dark:text-white text-base"
              required
            />
            {errors.title && (
              <p className="text-sm text-red-500 dark:text-red-400">
                {errors.title}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="post-body"
              className="block text-sm font-medium text-gray-700 dark:text-slate-400 pb-2"
            >
              Body
            </label>
            <textarea
              id="post-body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Enter Post Content"
              className="textarea textarea-bordered w-full h-72 bg-white text-black dark:bg-slate-700 dark:text-white text-base"
              required
            />
            {errors.body && (
              <p className="text-sm text-red-500 dark:text-red-400">
                {errors.body}
              </p>
            )}
          </div>
          <div className="w-full">
            <label
              htmlFor="post-topic"
              className="block text-sm font-medium text-gray-700 dark:text-slate-400 pb-2"
            >
              Topic
            </label>
            <select
              id="post-topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="input input-bordered w-full bg-white text-black dark:bg-slate-700 dark:text-white text-base"
            >
              <option value="">Select a topic</option>
              {topics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
            {errors.topic && (
              <p className="text-sm text-red-500 dark:text-red-400">
                {errors.topic}
              </p>
            )}
          </div>
          <div className="flex gap-4">
            <div className="w-full">
              <label
                htmlFor="post-image"
                className="block text-sm  text-gray-700 dark:text-slate-400 pb-2"
              >
                Image
              </label>
              <label
                htmlFor="post-image-input"
                className="btn btn-primary w-full text-md bg-blue-500 hover:bg-blue-600 text-white dark:bg-sky-400 dark:hover:bg-sky-500 cursor-pointer"
              >
                <span className="text-lg ">
                  {image ? image.name : 'Upload Image'}
                </span>
              </label>
              <input
                id="post-image-input"
                type="file"
                onChange={handleImageChange}
                className="hidden"
              />
              {errors.image && (
                <p className="text-md text-red-500 dark:text-red-400">
                  {errors.image}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full text-lg  bg-blue-500 hover:bg-blue-600 text-white dark:bg-sky-400 dark:hover:bg-sky-500"
          >
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePostPage;
