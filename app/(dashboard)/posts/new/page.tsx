'use client';

import { useState } from 'react';
import axios from '@/lib/axios';
import { useRouter } from 'next/navigation';

const CreatePostPage = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [topic, setTopic] = useState('');
  const [errors, setErrors] = useState({
    title: '',
    body: '',
    image: '',
    topic: '',
  });

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
      await axios.post('/api/create-post', formData);
      router.push('/'); // or wherever you want to redirect after post creation
    } catch (error: any) {
      setErrors(error.response?.data.errors || {});
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="p-6 m-4 bg-white rounded shadow-md w-full max-w-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="post-title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              id="post-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Post title"
              className="input input-bordered w-full"
              required
            />
            {errors.title && (
              <p className="text-sm text-red-500">{errors.title}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="post-body"
              className="block text-sm font-medium text-gray-700"
            >
              Body
            </label>
            <textarea
              id="post-body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Post content"
              className="textarea textarea-bordered w-full"
              required
            />
            {errors.body && (
              <p className="text-sm text-red-500">{errors.body}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="post-image"
              className="block text-sm font-medium text-gray-700"
            >
              Image
            </label>
            <input
              id="post-image"
              type="file"
              onChange={handleImageChange}
              className="input input-bordered w-full"
            />
            {errors.image && (
              <p className="text-sm text-red-500">{errors.image}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="post-topic"
              className="block text-sm font-medium text-gray-700"
            >
              Topic
            </label>
            <input
              id="post-topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              type="text"
              placeholder="Post topic"
              className="input input-bordered w-full"
            />
            {errors.topic && (
              <p className="text-sm text-red-500">{errors.topic}</p>
            )}
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePostPage;
