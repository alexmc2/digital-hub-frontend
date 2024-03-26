// Post Management
// Fetch All Posts
// Create a New Post
// Delete a Post
// Update a Post
// View a Single Post
// User and Profile Management
// View User Profile
// Create a Follow Relationship
// Remove a Follow Relationship
// Manage User Avatar
// Authentication and Account Management
// User Registration
// User Login
// User Logout
// Forgot Password
// Reset Password
// Email Verification
// Additional Functionality
// Fetch Posts by Newest
// Fetch Popular Posts
// Fetch Posts by Topic
// Search Functionality

import axios from '@/lib/axios';

// getAllPosts function that fetches posts from the API

export const getAllPosts = async () => {
  try {
    const response = await axios.get('/api');

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return []; // Return an empty array or a default value
  }
};

export const getPopularPosts = async () => {
  try {
    const response = await axios.get('/api/popular');
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const getNewestPosts = async () => {
  try {
    const response = await axios.get('/api/newest');
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const getPostsByTopic = async (topicName: any) => {
  try {
    const response = await axios.get(`/api/topic/${topicName}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export async function createPost(postData: any) {
  try {
    const response = await axios.post('/api/create-post', postData);
    console.log('Create Post:', response.data);
    return response.data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function deletePost(postId) {
  try {
    const response = await axios.delete(`/api/delete-post/${postId}`);
    console.log('Delete Post:', response.data);
    return response.data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function updatePost(postId, postData) {
  try {
    const response = await axios.put(`/api/post/${postId}`, postData);
    console.log('Update Post:', response.data);
    return response.data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function viewSinglePost(postId) {
  try {
    const response = await axios.get(`/api/post/${postId}`);
    console.log('View Single Post:', response.data);
    return response.data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function searchPosts(term) {
  try {
    const response = await axios.get(`/api//search/${term}`);
    console.log('Search:', response.data);
    return response.data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function viewProfile(userId) {
  try {
    const response = await axios.get(`/api/profile/${userId}`);
    console.log('View Profile:', response.data);
    return response.data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function viewFollowers(userId) {
  try {
    const response = await axios.get(`/api/profile/${userId}`);
    console.log('View Profile:', response.data);
    return response.data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
export async function viewFollowing(userId) {
  try {
    const response = await axios.get(`/api/profile/${userId}`);
    console.log('View Profile:', response.data);
    return response.data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function createFollow(userId) {
  try {
    const response = await axios.post(`/api/create-follow/${userId}`);
    console.log('Follow User:', response.data);
    return response.data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function removeFollow(userId) {
  try {
    const response = await axios.post(`/api/remove-follow/${userId}`);
    console.log('Unfollow User:', response.data);
    return response.data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function manageAvatar(formData) {
  try {
    const response = await axios.post('/api/manage-avatar', formData);
    console.log('Manage Avatar:', response.data);
    return response.data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
