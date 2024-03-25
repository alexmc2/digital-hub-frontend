'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { useAuth } from '@/hooks/auth';

const ProfilePage = () => {

  const { user, logout } = useAuth({
    middleware: 'auth',
    redirectIfAuthenticated: false,
  });

  if (!user) {
    // If there is no user, we might want to show a loading spinner or check for authentication
    return <div>Loading...</div>;
  }


  return (
    <div>
      <h1>Profile Page</h1>
      <p>This is the profile page for {user.name}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default ProfilePage;
